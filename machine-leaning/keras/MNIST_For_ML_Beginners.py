from tensorflow.examples.tutorials.mnist import input_data

from keras.models import Sequential
from keras.layers import Dense, Activation

mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)


model = Sequential()
# inが784 outが10
model.add(Dense(output_dim=10, input_dim=784))
model.add(Activation('softmax'))

# sgd = stochastic gradient descent 確率的勾配降下法
# binary_crossentropy = logloss としても知られている？
# categorical_crossentropy = マルチクラスloglossとしても知られています
model.compile(optimizer='sgd', loss='binary_crossentropy', metrics=['accuracy'])


for i in range(1000):
    batch_xs, batch_ys = mnist.train.next_batch(100)
    # nb_epoch 1エポックは学習において訓練データをすべて使い切ったら1エポック
    model.fit(batch_xs, batch_ys, nb_epoch=1, batch_size=100, verbose=1)

score = model.evaluate(mnist.test.images, mnist.test.labels, batch_size=1000,  verbose=1)
# 誤差とaccuracyが表示される
print()
# 90%ぐらい
print(score)
