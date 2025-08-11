#include <stdio.h>
#include <string.h>

     // int data[5];
     // for(int i = 1; i <= 5  ; i++) {
     //      printf("Masukkan data : ");
     //      scanf("%d" , &data[i]);
     // }

     // for(int i = 1; i <= 5; i++) {
     //      printf("Ini data ke %d - %d\n", i+1 , data[i]);
     // }

     // 

int main() {
    int value[10], max, min;

    // Input nilai dan simpan
    for (int i = 0; i < 10; i++) {
        printf("Masukkan nilai ke-%d: ", i + 1);
        scanf("%d", &value[i]);
    }

    // Inisialisasi max dan min dari elemen pertama
    max = value[0];
    min = value[0];

    // Cari nilai maksimum dan minimum
    for (int i = 1; i < 10; i++) {
        if (value[i] > max) max = value[i];
        if (value[i] < min) min = value[i];
    }

    printf("Nilai maksimum: %d\n", max);
    printf("Nilai minimum: %d\n", min); 

    return 0;
}
