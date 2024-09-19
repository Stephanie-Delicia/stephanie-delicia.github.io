import imageio
import numpy as np

def concatenate_imgs(file_array):
    final_img = None
    for i, file in enumerate(file_array):
        img = imageio.imread(file)
        if i == 0:
            final_img = img
        else: # concat
            h1,w1 = final_img.shape[:2]
            h2,w2 = img.shape[:2]
            max_h = np.max([h1, h2])
            total_w = w1 + w2
            new_img = np.zeros([max_h, total_w, 4])
            new_img[:h1,:w1] = final_img
            new_img[:h2, w1:w1 + w2] = img
            final_img = new_img
    return final_img

images = ["petersen1.png", "petersen2.png", "petersen3.png", "petersen4.png", "petersen5.png",
          "petersen6.png", "petersen7.png", "petersen8.png", "petersen9.png", "petersen10.png",
          "petersen11.png"]

output = concatenate_imgs(images)
imageio.imwrite('myfile.png', output)

