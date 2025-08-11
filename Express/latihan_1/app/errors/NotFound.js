// melakukan extends dari class Error agar bisa membuat error custom...
class NotFound extends Error{
    // message dan pesan error akan diisi secara dinamis...
    constructor(message) {
        super(message)
        // menyediakan ststus dan message karena kadang error dari class Error belum tentu ada status dan message...
        this.status = 404;
    }
}

module.exports = NotFound;