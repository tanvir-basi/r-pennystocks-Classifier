import csv

# read naive_bayes.csv
with open('data/naive_bayes.csv', 'r') as f:
    reader = csv.reader(f)
    naive_bayes = list(reader)


# read url.csv
with open('data/url.csv', 'r') as f:
    reader = csv.reader(f)
    urls = list(reader)


# read naive_bayes list
limit = 2
index = 0
for row in naive_bayes:
    row.append(urls[index])
    print(row)
    index += 1
    print(index, 'index')
    print(limit, 'limit')
    if index == limit:
        break

print('tan')
print(naive_bayes)