#!/usr/bin/python3
"""
Module: 1-my_list
resources: MyList class
"""


class Mylist(list):
    """
    MyList is a class that inherites the list object.
    It is used to create lists and contains a method
    used to sort lists caled print_sorted
    """
    def print_sorted(self):
        print(sorted(self))
