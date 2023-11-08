@!/usr/bin/python3

"""
module: 3-to_json_string
resources: to-json_string() function
"""
import json


def to_json_string(my_obj):
"""
This function serializes python objects to 
JSON representation of an object(string)
"""
    Args:
        my_obj: object

    Raises:
        Exception: when the object can't be encoded
    """

    obj = json.dumps(my_obj)
    return obj
