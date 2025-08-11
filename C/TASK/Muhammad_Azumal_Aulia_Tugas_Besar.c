#include <stdio.h>
#include <string.h>

int main() {
    char nama[50], jenis_kelamin;
    int umur, jumlah_tiket, kategori;
    int harga_per_tiket = 0;
    float total_harga, diskon = 0, total_bayar;
    int pilihan_film;
    char nama_film[30], jam_tayang[10];

    // Input data pengguna
    printf("=== Sistem Registrasi & Pemesanan Tiket Bioskop ===\n");

    printf("Masukkan Nama: ");
    fgets(nama , sizeof(nama) , stdin);
    nama[strcspn(nama , "\n")] = 0;

    printf("Masukkan Umur: ");
    scanf("%d", &umur);

    printf("Masukkan Jenis Kelamin (L/P): ");
    scanf(" %c", &jenis_kelamin);

    // Menentukan kategori umur
    if (umur < 12) {
        kategori = 1; // Anak
        harga_per_tiket = 25000;
    } else if (umur < 60) {
        kategori = 2; // Dewasa
        harga_per_tiket = 50000;
    } else {
        kategori = 3; // Lansia
        harga_per_tiket = 35000;
    }

    // Menampilkan daftar film
    printf("\n=== Daftar Film ===\n");
    printf("1. Avengers: Endgame (13.00)\n");
    printf("2. Coco (15.00)\n");
    printf("3. Interstellar (18.00)\n");
    printf("4. Joker (20.00)\n");
    printf("Pilih nomor film (1-4): ");
    scanf("%d", &pilihan_film);

    switch (pilihan_film) {
        case 1:
            strcpy(nama_film, "Avengers: Endgame");
            strcpy(jam_tayang, "13.00");
            break;
        case 2:
            strcpy(nama_film, "Coco");
            strcpy(jam_tayang, "15.00");
            break;
        case 3:
            strcpy(nama_film, "Interstellar");
            strcpy(jam_tayang, "18.00");
            break;
        case 4:
            strcpy(nama_film, "Joker");
            strcpy(jam_tayang, "20.00");
            break;
        default:
            printf("Pilihan film tidak valid.\n");
            return 0;
    }

    // Input jumlah tiket
    printf("Masukkan jumlah tiket: ");
    scanf("%d", &jumlah_tiket);

    // Hitung total harga
    total_harga = harga_per_tiket * jumlah_tiket;
    if (jumlah_tiket >= 3) {
        diskon = total_harga * 0.10;
    }
    total_bayar = total_harga - diskon;

    // Ringkasan
    printf("\n=== Ringkasan Pemesanan ===\n");
    printf("Nama            : %s\n", nama);
    printf("Umur            : %d\n", umur);
    if (kategori == 1) printf("Kategori        : Anak\n");
    else if (kategori == 2) printf("Kategori        : Dewasa\n");
    else printf("Kategori        : Lansia\n");

    printf("Jenis Kelamin   : %c\n", jenis_kelamin);
    printf("Film            : %s\n", nama_film);
    printf("Jam Tayang      : %s\n", jam_tayang);
    printf("Jumlah Tiket    : %d\n", jumlah_tiket);
    printf("Harga per Tiket : Rp%d\n", harga_per_tiket);
    printf("Total Harga     : Rp%.0f\n", total_harga);
    printf("Diskon          : Rp%.0f\n", diskon);
    printf("Total Bayar     : Rp%.0f\n", total_bayar);

    printf("\nTerima kasih telah memesan tiket!\n");

    return 0;
}
