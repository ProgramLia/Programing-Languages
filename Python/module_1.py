# Variable merupakan wadah untuk menampung data...
nama = "Muhammad Azumal Aulia"
usia = 22
tinggi = 170.0

print(f'Hallo {nama} usia kamu {usia} dan tinggi badan kamu {tinggi}')

print("==================================================================================================")
# type data di python sendiri ada beberapa type data diantaranya adalah...
# str(string) , int(integer) , float(decimal) , bool(boolean)...
a = "zumal"
b = 22
c = 170.89
d = True

print(type(a))
print(type(b))
print(type(c))
print(type(d))

print("==================================================================================================")
# Oprator dasar di python ada +(tambah) , -(kurang) , *(kali) , /(bagi) , //(pembagian bilangan bulat)...
# %(sisa bagi) **(pangkat)...
nomor_1  = 10
nomor_2 = 3

print(f"Penjumlahan : {nomor_1 + nomor_2}")
print(f"Pengurangan : {nomor_1 - nomor_2}")
print(f"Perkalian : {nomor_1 * nomor_2}")
print(f"Pembagian : {nomor_1 / nomor_2}")
print(f"Pembagian bilangan bulat : {nomor_1 // nomor_2}")
print(f"Pangkat : {nomor_1 ** nomor_2}")
print(f"Sisa Bagi : {nomor_1 % nomor_2}")

print("==================================================================================================")
# Python juga memiliki input() untuk memasukkan data yang di masukkan user...
# Ada juga int() yang bisa membuat hasil inputan jadi integer(angka)...
name = input("Masukkan nama anda : ")
age = int(input("Masukkan usia anda : "))

print(f"Hallo {name} , usia kamu {age} tahun")
print(type(name))
print(type(age))

print("==================================================================================================")
# Latihan module_1 yaitu membuat biodata , kalkulator...
# Biodata...
print("=========== Bio Data Simple Program ==========")
your_name = input("Enter your name : ")
your_age = int(input("Enter your age : "))
your_height = float(input("Enter your height : "))
your_address = input("Please fill your adress : ")

print("========== Bio Data ==========")
print(f"Name : {your_name}")
print(f"Age : {your_age}")
print(f"Height : {your_height}")
print(f"Adress : {your_address}")
print("==============================")

# kalkulator sederhana...
angka_1 = int(input("Masukkan operan 1 : "))
angka_2 = int(input("Masukkan operan 2 : "))

# untuk oprator bisa diuah sendiri...
print(f"Hasilnya adalah : {angka_1 + angka_2}")


