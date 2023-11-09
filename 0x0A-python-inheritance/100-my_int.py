#!/usr/bin/python3
"""
class MyInt that inherits frim int

"""


class MyInt(int):
    """
    My Int is a rebel. MyInt hass ==
    and != operators inverted
    """
    def __init__(self, number):
        self.number = number
    def __eq__(self, other):
        if self.number == int(other):
            return False
        else:
            return True

    def __ne__(self, other):
        if self.number != int(other):
            return False
        else:
            return True
