import numpy as np
import matplotlib.pylab as plt

def step_function(x):
    y = x > 0
    return y.astype(np.int)

def sigmoid(x):
    return 1/(1+np.exp(-x))

def relu(x):
    return np.maximum(0, x)

#
x = np.arange(-5, 5, 0.1)
print(x)
y = step_function(x)
print(y)

plt.plot(x, y)
plt.ylim(-0.1, 1.1)
plt.show()

#
print(x)
y = sigmoid(x)
print(y)
plt.plot(x, y)
plt.ylim(-0.1, 1.1)
plt.show()

print(x)
y = relu(x)
print(y)
plt.plot(x, y)
plt.ylim(-0.1, 5)
plt.show()

