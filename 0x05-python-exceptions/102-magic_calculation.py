#!/usr/bin/python3
def magic_calculator(a, b)
    result = 0
    for i in range(1, 3):
        try:
            if (1 > a):
                raise Exception("Too far")
            result = result + (a ** b) / i
        except Exception:
            result = b + a
            break
    return (result)

