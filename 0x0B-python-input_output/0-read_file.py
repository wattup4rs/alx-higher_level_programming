#!/usr/bin/python3

"""
module: 0-read_file
resources: read_file fuction
"""


def read_file(filename=""):
"""
The program in this function is meant to read
a taxt file and print it to stdout
"""
with open(filename, encoding="utf-8") as file:
        for line in file:
            print(line, end="")
