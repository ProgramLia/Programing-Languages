# if...
print("========== IF ==========")
data = 45
if data == 45:
     print("Data : 45")

# If... Else...
print("========== IF ELSE ==========")
value = 87
if value > 80:
     print("Lulus")
else:
     print("Gagal")

# If...Elif...Else...
print("========== IF ELIF ELSE ==========")
nilai = 67
if nilai > 89:
     print("Nilai kamu A")
elif nilai > 69:
     print("Nilai kamu B")
elif nilai > 59:
     print("Nilai kamu C")
else:
     print("Nilai kamu D")

# FOR...(Perulangan)
for i in range(5):
     print(f"Data ke-{i + 1}")

fruits = ["Mangga" , "Apel", "Jeruk", "Anggur", "Markisa"]
for i, data in enumerate(fruits, start=1):
     print(f"enumerate ke-{i} : {data}")

for i in range(len(fruits)):
     print(f"len ke-{i + 1} : {fruits[i]}")




