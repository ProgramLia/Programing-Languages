#include <stdio.h>
#include <string.h>

#define MAX_PRODUK 3

// Struct untuk Produk
struct Produk {
    char nama[50];
    int harga;
    int stok;
};

// Struct untuk Pembeli
struct Pembeli {
    char nama[50];
    int umur;
    char gender;
};

// Fungsi untuk input data produk
void inputProduk(struct Produk produk[], int n) {
    for (int i = 0; i < n; i++) {
        printf("\n=== Input Produk ke-%d ===\n", i + 1);
        printf("Nama produk: ");
        getchar();  // membersihkan newline
        fgets(produk[i].nama, sizeof(produk[i].nama), stdin);
        produk[i].nama[strcspn(produk[i].nama, "\n")] = 0;

        printf("Harga produk: ");
        scanf("%d", &produk[i].harga);

        printf("Stok produk: ");
        scanf("%d", &produk[i].stok);
    }
}

// Fungsi untuk menampilkan daftar produk
void tampilkanProduk(struct Produk produk[], int n) {
    printf("\n=== Daftar Produk ===\n");
    for (int i = 0; i < n; i++) {
        printf("%d. %s | Harga: Rp%d | Stok: %d\n", i + 1, produk[i].nama, produk[i].harga, produk[i].stok);
    }
}

// Fungsi untuk menghitung total dan menampilkan invoice
void cetakInvoice(struct Produk p, struct Pembeli pembeli, int jumlah) {
    int subtotal = p.harga * jumlah;
    float pajak = 0.10 * subtotal;
    float diskon = (jumlah >= 3) ? 0.05 * subtotal : 0;
    float total = subtotal + pajak - diskon;

    printf("\n===== INVOICE PEMBELIAN =====\n");
    printf("Nama Pembeli : %s\n", pembeli.nama);
    printf("Umur         : %d\n", pembeli.umur);
    printf("Jenis Kelamin: %c\n", pembeli.gender);
    printf("Produk       : %s\n", p.nama);
    printf("Jumlah Beli  : %d\n", jumlah);
    printf("Harga Satuan : Rp%d\n", p.harga);
    printf("Subtotal     : Rp%d\n", subtotal);
    printf("Pajak (10%%)   : Rp%.0f\n", pajak);
    printf("Diskon       : Rp%.0f\n", diskon);
    printf("Total Bayar  : Rp%.0f\n", total);
}

int main() {
    struct Produk daftarProduk[MAX_PRODUK];
    struct Pembeli pembeli;
    int pilihan, jumlahBeli;

    // Input produk
    inputProduk(daftarProduk, MAX_PRODUK);

    // Input data pembeli
    printf("\n=== Data Pembeli ===\n");
    printf("Nama Pembeli: ");
    getchar();
    fgets(pembeli.nama, sizeof(pembeli.nama), stdin);
    pembeli.nama[strcspn(pembeli.nama, "\n")] = 0;

    printf("Umur: ");
    scanf("%d", &pembeli.umur);

    printf("Jenis kelamin (L/P): ");
    scanf(" %c", &pembeli.gender);

    // Tampilkan dan pilih produk
    tampilkanProduk(daftarProduk, MAX_PRODUK);
    printf("\nPilih produk (1-%d): ", MAX_PRODUK);
    scanf("%d", &pilihan);

    // Validasi pilihan
    if (pilihan < 1 || pilihan > MAX_PRODUK) {
        printf("Pilihan tidak valid!\n");
        return 1;
    }

    struct Produk produkDipilih = daftarProduk[pilihan - 1];

    // Input jumlah beli
    printf("Jumlah yang ingin dibeli: ");
    scanf("%d", &jumlahBeli);

    if (jumlahBeli > produkDipilih.stok) {
        printf("Stok tidak mencukupi!\n");
        return 1;
    }

    // Cetak invoice
    cetakInvoice(produkDipilih, pembeli, jumlahBeli);

    return 0;
}
