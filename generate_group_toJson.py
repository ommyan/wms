from csv import DictReader
from itertools import groupby
from pprint import pprint

with open('data.csv') as csvfile:
    r = DictReader(csvfile, skipinitialspace=True)
    data = [dict(d) for d in r]

    groups = []
    uniquekeys = []

    for k, g in groupby(data, lambda r: (r['department'], r['departmentID'])):
        groups.append({
            "group": k[0],
            "groupID": k[1],
            "user": [{k:v for k, v in d.items() if k not in ['department','departmentID']} for d in list(g)]
        })
        uniquekeys.append(k)

pprint(groups)