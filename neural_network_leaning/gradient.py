import numpy as np
import matplotlib.pylab as plt

def numerical_gradient(f, x):
    h = 1e-4 # 0.0001
    grad = np.zeros_like(x)

    for idx in range(x.size):
        tmp_val = x[idx]
        x[idx] = tmp_val + h
        fxh1 = f(x) # f(x+h)

        x[idx] = tmp_val - h
        fxh2 = f(x) # f(x-h)
        grad[idx] = (fxh1 - fxh2) / (2*h)

        x[idx] = tmp_val # 値を元に戻す

    return grad


def gradient_descent(f, init_x, lr=0.01, step_num=100):
    x = init_x

    for i in range(step_num):
        grad = numerical_gradient(f, x)
        x -= lr * grad
    return x


def function_2(x):
    return x[0]**2 + x[1]**2


print(gradient_descent(function_2, np.array([-3.0, 4.0]), lr=0.1, step_num=100))
print(gradient_descent(function_2, np.array([-3.0, 4.0]), lr=10, step_num=100))
print(gradient_descent(function_2, np.array([-3.0, 4.0]), lr=1e-10, step_num=100))
