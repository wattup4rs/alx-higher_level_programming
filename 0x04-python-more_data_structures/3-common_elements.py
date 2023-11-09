#!/usr/bin/python3
def common_elements(set_1, set_2):
    common_element = set()

    for item1, item2 in zip(set_1, set_2):
        if item1 == item2:
            common_element.add(item1)

    return (common_element)
