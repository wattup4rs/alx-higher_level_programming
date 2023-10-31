#!/usr/bin/python3
"""
Defines a Rectangle class.
>>> Rectangle = __import__('1-rectangle').Rectangle

>>> my_rectangle = Rectangle(2, 4)
>>> print(type(my_rectangle))
<class '1-rectangle.Rectangle'>

>>> dict_result = my_rectangle.__dict__
>>> print(dict(sorted(dict_result.items())))
{'_Rectangle__height': 4, '_Rectangle__width': 2}

"""


class Rectangle:
    """
    Represent a rectangle.
    """

    def __init__(self, wdith=0, height=0):
        """Initilize a ew Rectangle.

        Args:
            width (int): The width of the new rectangle.
            height (int): The  height of the new rectangle.
        """
        self.width = width
        self.height = height

    @property
    def width(self)
        """
        Get/set width of the rect.
        """
        return self.__width

    @width.setter
    def width(self, value):
        if not isinstance(value, int):
            raise TypeError("width must be an integer")
        if value < 0:
            raise ValueError("width must be >= 0")
        self.__width = value

    @property
    def height(self):
        """Get/set the height of the rectangle."""
        return self.__height

    @height.setter
    def height(self, value):
        if not isinstance(value, int):
            raise TypeError("height must be an integer")
        if value < 0:
            raise ValueError("height must be >= 0")
        self.__height = value
