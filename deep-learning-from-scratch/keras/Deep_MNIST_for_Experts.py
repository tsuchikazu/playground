from tensorflow.examples.tutorials.mnist import input_data

from keras.datasets import mnist
from keras.models import Sequential
from keras.layers import Dense, Activation, Convolution2D, MaxPooling2D, Dropout, Flatten
from keras.utils import np_utils

# mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)


model = Sequential()

# 5×5のフィルタで 1channel を 32channel へ
model.add(Convolution2D(nb_filter = 32, nb_row = 3, nb_col = 3, border_mode='same', input_shape=(28, 28, 1)))
model.add(Activation('relu'))
# model.add(MaxPooling2D(pool_size=(2, 2)))

# 5×5のフィルタで 32channel を 64channelへ
model.add(Convolution2D(nb_filter = 64, nb_row = 3, nb_col = 3, border_mode='same'))
model.add(Activation('relu'))
# model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Flatten())

# 1024へ
model.add(Dense(output_dim=1024))
model.add(Activation('relu'))

model.add(Dropout(0.5))

# 10の分類へ
model.add(Dense(output_dim=10))
model.add(Activation('softmax'))

# sgd = stochastic gradient descent 確率的勾配降下法
# binary_crossentropy = logloss としても知られている？
# categorical_crossentropy = マルチクラスloglossとしても知られています
model.summary()
model.compile(optimizer='sgd', loss='binary_crossentropy', metrics=['accuracy'])


img_rows, img_cols = 28, 28
(X_train, y_train), (X_test, y_test) = mnist.load_data()
X_train = X_train.reshape(X_train.shape[0], img_rows, img_cols, 1)
X_test = X_test.reshape(X_test.shape[0], img_rows, img_cols, 1)
nb_classes = 10
Y_train = np_utils.to_categorical(y_train, nb_classes)
Y_test = np_utils.to_categorical(y_test, nb_classes)

input_shape = (img_rows, img_cols, 1)

# nb_epoch 1エポックは学習において訓練データをすべて使い切ったら1エポック
model.fit(X_train, Y_train, nb_epoch=1, batch_size=100, verbose=1)

score = model.evaluate(X_test, Y_test, verbose=1)
# 誤差とaccuracyが表示される
print()
# 90%ぐらい
print(score)
