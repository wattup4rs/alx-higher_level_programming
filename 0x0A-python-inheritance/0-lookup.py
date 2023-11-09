#!/usr/bin/python3
"""

module: lookup function
"""


def lookup(obj):
    """
    Args:
        obj(object): The object to inspect.

    Return:
        List: A list of attribute and method names.
    """
    return dir(obj)
