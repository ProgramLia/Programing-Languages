#include <stdio.h>

int main()
{
     int a;
     int b;
     int pick;
     int result;

     // OPTIONS...
     printf("Menu :\n 1.Penjumlahan \n 2.Pengurangan \n 3.Perkalian \n 4.Pembagian");
     // PICK...
     printf("\nPilih : ");
     scanf("%d", &pick);
     if (pick < 5 && pick > 0) {
          printf("Masukkan nilai pertama :");
          scanf("%d", &a);
          printf("Masukkan nilai kedua : ");
          scanf("%d", &b);

     // RULES...
     switch (pick)
     {
     case 1:
          /* code */
          result = a + b;
          printf("Hasil penjumlahan %d", result);
          break;
     case 2:
          /* code */
          result = a - b;
          printf("Hasil pengurangan %d", result);
          break;
     case 3:
          /* code */
          result = a * b;
          printf("Hasil perkalian %d", result);
          break;
     case 4:
          /* code */
          result = a / b;
          printf("Hasil pembagian %d", result);
          break;
     default:
          printf("Opsi tidak ada");
          break;
     }
     } else {
          printf("Opsi tidak ada");
     }

     return 0;
}