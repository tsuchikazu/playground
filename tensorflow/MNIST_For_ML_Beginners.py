import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data

mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)
print(mnist)
print(mnist.train)

# 入力は28px * 28px = 784
x = tf.placeholder(tf.float32, [None, 784])
W = tf.Variable(tf.zeros([784, 10]))
b = tf.Variable(tf.zeros([10]))

# y = x * W + b
y = tf.nn.softmax(tf.matmul(x, W) + b)

y_ = tf.placeholder(tf.float32, [None, 10])

# reduce_mean は平均
# reduce_sum は sum
# reduction_indices はどの階数?か
# 2乗和誤差の兄弟
cross_entropy = tf.reduce_mean(-tf.reduce_sum(y_ * tf.log(y), reduction_indices=[1]))
# 勾配降下法で誤差が少なくなるようにする
train_step = tf.train.GradientDescentOptimizer(0.5).minimize(cross_entropy)

# iPython とかで便利なsession
sess = tf.InteractiveSession()
# 最初に初期化はしないといけない
tf.global_variables_initializer().run()

for i in range(1000):
    batch_xs, batch_ys = mnist.train.next_batch(100)

    if i == 1:
        # 1枚の画像 28px * 28px = 784
        print(batch_xs[0])
        print()

        # [ 0.  0.  0.  0.  0.  1.  0.  0.  0.  0.]
        # bitのflgを立てる感じで、正解の数字indexが1にする
        print(batch_ys[0])
    sess.run(train_step, feed_dict={x: batch_xs, y_: batch_ys})

# argmax はもっとも大きいvalueのindex取得。つまり、認識した数字
# y は学習した結果、認識した数字。y_は正解
# tf.equal は True/False
correct_prediction = tf.equal(tf.argmax(y, 1), tf.argmax(y_, 1))
# True/Falseを1/0にcastして平均を求める
accuracy = tf.reduce_mean(tf.cast(correct_prediction, tf.float32))

# 92%ぐらい
print(sess.run(accuracy, feed_dict={x: mnist.test.images, y_: mnist.test.labels}))
