#include <stdio.h>

int main() {
     int i  = 1;

     // while...
     // while (i <= 5) {
     //      printf("Perulangan %d\n" , i);
     //      i++;
     // }

     // do while
     // int j = 4;
     // do {
     //      printf("Perulangan ke %d\n" , j);
     //      j--;
     // } while(j <  3);

     // for loop...
     // for(int x = 1; x <= 5 ; x++) {
     //      printf("Perulangan ke %d\n" , x);
     // }

     // for(int i = 5; i >= 1; i--) {
     //      for(int n = 1; n <= i; n++) {
     //           printf("*");
     //      }
     //      printf("\n");
     // }

     int n;
     int z;
     printf("Masukkan n :");
     scanf("%d" , &n);
     printf("Masukkan z :");
     scanf("%d" , &z);
     for(int i = 1; i <= n ; i++) {
          for(int x = 1; x <= n - i; x++) {
               printf(" ");
          }
          for(int j = 1; j <= (z * i - 1); j++) {
               printf("*");
          }
          printf("\n");
     }

     // int n;
     // printf("Masukkan nilai n : ");
     // scanf("%d" , &n);
     // for(int i = 1; i <= n; i++) {
     //      printf("Perulangan ke-%d\n" , i);
     // }
}