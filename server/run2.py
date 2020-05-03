import numpy as np
from os import sys
from sklearn.utils import shuffle
from imgaug import augmenters as iaa

from sklearn.externals import joblib
model = joblib.load('model.pkl')

uploadPath = './dataset/' + sys.argv[1] # input from sahil folder
temp = np.loadtxt(uploadPath, dtype="uint8")
random_img = np.reshape(temp,(90,90,1))

rx = './dataset/' + sys.argv[2] # from database
temp = np.loadtxt(rx, dtype="uint8")
rx = temp.reshape((1, 90, 90, 1)).astype(np.float32) / 255.

seq = iaa.Sequential([
    iaa.GaussianBlur(sigma=(0, 0.5)),
    iaa.Affine(
        scale={"x": (0.9, 1.1), "y": (0.9, 1.1)},
        translate_percent={"x": (-0.1, 0.1), "y": (-0.1, 0.1)},
        rotate=(-30, 30),
        order=[0, 1],
        cval=255
    )
], random_order=True)

random_img = seq.augment_image(random_img).reshape((1, 90, 90, 1)).astype(np.float32) / 255.

pred_rx = model.predict([random_img, rx])

f = open(r"output_pred.txt", "w")
f.write(str(pred_rx[0][0] * 100))
f.close()