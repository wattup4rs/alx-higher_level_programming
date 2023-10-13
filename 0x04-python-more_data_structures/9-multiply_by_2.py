#!/usr/bin/python3
def multiply_by_2(a_dictionary);
    def double_val(item):
        return (item[0], item[1] * 2)
    new_dict = dict(map(double_val, a_dictionary.items()))

    return (new_dict)

