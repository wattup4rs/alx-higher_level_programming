#!/usr/bin/python3
"""

Module contains function that prints 2 new lines after ".?:" character

"""

def text_indentation(text):
    """ Function that prints 2 new lines after ".?:" characters

    Args: 
        text: input string

    Returns:
        No returns

    Raises:
        TypeError: If text is not a string

    """

    if type(text) is not str:
        raise TypeError("text must be a string")

    s = text[:]

    for d in ".?:":
        list_text = s.split(d)
        s = ""
        for i in list_text:
            i = i.strip(" ")
            s = i + d if s is "" else s + "\n\n" + i + d

    print(s[:-3], end="")

