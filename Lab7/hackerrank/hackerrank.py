# 1
# print("Hello, World!")

# 2
# n = int(input("Enter a positive integer: "))

# if n % 2 != 0:
#     print("Weird")
# elif n >= 2 and n <= 5:
#     print("Not Weird")
# elif n >= 6 and n <= 20:
#     print("Weird")
# else:
#     print("Not Weird")

# 3
# a = int(input())
# b = int(input())

# print(a + b)
# print(a - b)
# print(a * b)

# 4
# a = int(input())
# b = int(input())

# print(a // b)
# print(a / b)

# 5
# n = int(input())

# for i in range(n):
#     print(i ** 2)

# 6
# def isLeap(year):
#     if year % 4 == 0:
#         if year % 100 == 0:
#             if year % 400 == 0:
#                 return True
#             else:
#                 return False
#         else:
#             return True
#     else:
#         return False

# year = int(input())
# print(isLeap(year))

# 7
# n = int(input())

# for i in range(1, n + 1):
#     print(i, end="")

# 8
# a = int(input())
# b = int(input())
# c = int(input())
# sum = int(input())
# coordinates = []

# for x in range(a + 1):
#     for y in range(b + 1):
#         for z in range(c + 1):
#             if x + y + z != sum:
#                 coordinates.append((x, y, z))

# print(coordinates)

# 9
# n = int(input("Enter a number: "))

# scores = list(map(int, input(f"Enter {n} numbers: ").split()))[:n]
# print(f"Numbers you entered: {scores}")
# uniqueScores = list(set(scores))
# uniqueScores.sort(reverse=True)

# print(f"Second maxinum is: {uniqueScores[1]}")

# 10

list = []
n = int(input())

for _ in range(n):
    command = input().split()

    if command[0] == 'insert':
        index = int(command[1])
        element = int(command[2])
        list.insert(index, element)
    elif command[0] == 'print':
        print(list)
    elif command[0] == 'remove':
        element = int(command[1])
        list.remove(element)
    elif command[0] == 'append':
        element = int(command[1])
        list.append(element)
    elif command[0] == 'sort':
        list.sort()
    elif command[0] == 'pop':
        list.pop()
    elif command[0] == 'reverse':
        list.reverse()
