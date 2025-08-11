#include <stdio.h>

int main() {
     // case 1...
     int usia = 20;
     float tinggi = 170.0;
     char huruf = 'A';
     char namaUstadz[] = "Ustadz Amin";

     // case 2...
     int x = 10;
     int y = 5;
     float j = 5.5;

     // result case 1...
     printf("Huruf saya : %c \n" , huruf);
     printf("Nama Ustadz saya : %s \n" , namaUstadz);
     printf("Usia saya : %d \n" , usia);
     printf("Tinggi saya : %.1f cm \n" , tinggi);

     // result case 2...(oprator aritmatika)
     printf("Penjumlahan : %d", x + y );
     printf("\nPenjumlahan dengan float: %.1f", x + y + j);
     printf("\nPengurangan 1 : %d" , x - y);
     printf("\nPengurangan 2 : %d" , y - x);
     printf("\nPengurangan 3 : %.1f" , j - y);
     printf("\nPengurangan 4 : %d" , x % y);
     printf("\nPengurangan 5 : %d" , x * y);
     printf("\nPengurangan 6 : %d" , x / y);

     // case 3...(oprator logika)
     

     return 0;
}