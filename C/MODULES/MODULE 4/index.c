#include <stdio.h>

int main() {
     int nilai;

     printf("Masukkan nilai anda : ");
     scanf("%f" , &nilai);

     if(nilai >= 70) {
          printf("Kamu lulus");
     }else{
          printf("Kamu Gagal");
     }
     return 0;
}