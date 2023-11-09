#!/usr/bin/python3

"""
module: 2-append_write
resources: append_write() function
"""


def append_write(filename="", text=""):
"""
The purpose of this function is to append
some text to a specified file adnd returning the number or bytes appended
"""


    with open(filename, 'a', encoding='utf-8') as f:
        return (f.write(text))
