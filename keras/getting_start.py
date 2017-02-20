# from __future__ import print_function
from keras.models import Sequential
from keras.layers import Dense
import numpy as np


model = Sequential()
model.add(Dense(1, input_dim=1, activation='linear'))
model.compile(optimizer='sgd', loss='mse', metrics=['accuracy'])

# generate dummy data
data = [1,2,3,4]
print(data)
labels= [3,5,7,9]
print(labels)

# train the model, iterating on the data in batches
# of 32 samples
model.fit(data, labels, nb_epoch=1000, batch_size=1000, verbose=1)

score = model.evaluate(data, labels, batch_size=1,  verbose=1)
print(score)

print(model.predict([1, 2, 3, 4],  batch_size=1,  verbose=1))
