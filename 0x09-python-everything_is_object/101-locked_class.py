#!/usr/bin/python3
"""
This is a module that contains ac class that avoids dynamically created attributes
"""

class LockedClass:
    __slots__ = ['first_name']

    def __init__(self):
        """ Init method """
        pass

