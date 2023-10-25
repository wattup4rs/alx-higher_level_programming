#!/usr/bin/python3
def safe_functions(fct, *args):
    import sys
    try:
        result = fct(*args)
        return (result)
    except Exception as e:
        print("Exception:", e, file=sys.stderr)
        return (None)

