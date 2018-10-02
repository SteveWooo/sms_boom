from PIL import Image
import pytesser
# from pytesser import pytesser
im = Image.open("./test.png")

print pytesser.image_to_string(im)