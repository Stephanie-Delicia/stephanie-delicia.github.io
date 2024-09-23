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

images = ["mini_stoof0.png", "mini_stoof1.png", "mini_stoof2.png", "mini_stoof3.png", "mini_stoof4.png", "mini_stoof5.png",
          "mini_stoof6.png", "mini_stoof7.png", "mini_stoof8.png", "mini_stoof9.png", "mini_stoof10.png"]

output = concatenate_imgs(images)
imageio.imwrite('myfile.png', output)

