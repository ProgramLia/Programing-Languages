#include <stdio.h>
#include <string.h>

int main()
{
     char nama[100];
     int nim;
     float mtk, pemerograman, b_inggris, rata_rata;
     char predikat;
     char hasil[100];

     printf("Masukkan nama anda: ");
     fgets(nama, sizeof(nama), stdin);
     nama[strcspn(nama, "\n")] = 0; // hapus newline

     printf("Masukkan nim anda : ");
     scanf("%d", &nim);

     printf("Masukkan nilai matematika anda : ");
     scanf("%f", &mtk);

     printf("Masukkan nilai pemerograman anda : ");
     scanf("%f", &pemerograman);

     printf("Masukkan nilai bahasa inggris anda : ");
     scanf("%f", &b_inggris);

     rata_rata = (mtk + pemerograman + b_inggris) / 3;

     if (rata_rata < 60) {
          printf("\n_____Data Mahasiswa_____\n");
          printf("Status      : %s\n", rata_rata >= 60 ? "Anda lulus" : "Anda tidak lulus");
          printf("\n_____Nilai yang menyebabkan tidak lulus_____\n");
          if (mtk < 60) printf("Nilai Matematika : %.2f\n", mtk);
          if (pemerograman < 60) printf("Nilai Pemerograman : %.2f\n", pemerograman);
          if (b_inggris < 60) printf("Nilai Bahasa Inggris : %.2f\n", b_inggris);
     }
     else {
          if (rata_rata >= 90) predikat = 'A';
          else if (rata_rata >= 80) predikat = 'B';
          else if (rata_rata >= 70) predikat = 'C';
          else predikat = 'D';

          switch (predikat) {
          case 'A': strcpy(hasil, "Istimewa"); break;
          case 'B': strcpy(hasil, "Sangat Baik"); break;
          case 'C': strcpy(hasil, "Baik"); break;
          case 'D': strcpy(hasil, "Cukup"); break;
          default: strcpy(hasil, "Tidak diketahui"); break;
     }
          printf("\n_____Data Mahasiswa_____\n");
          printf("Nama        : %s\n", nama);
          printf("NIM         : %d\n", nim);
          printf("Rata-rata   : %.2f\n", rata_rata);
          printf("Predikat    : %c\n", predikat);
          printf("Keterangan  : %s\n", hasil);
          printf("Status      : Anda Lulus");
     }
     return 0;
}
