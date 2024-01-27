#!/usr/bin/python3
"""Uses the Github API to display a GitHub ID baseed on given credentials.

Usage: ./10-my_github.py <GitHUB username> <GitHub password>
"""

import sys
import requests
from requests.auth import HTTPBasicAuth


if __name__ == "__main__":
    auth = HTTPBasicAuth(sys.argv[1], sys.argv[2])
    r = requests.get("https://api.github.com/user", auth=auth)
    print(r.json().get("id"))
