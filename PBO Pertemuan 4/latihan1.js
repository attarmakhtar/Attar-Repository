//Class1 Bendera
class bendera {
    constructor (nama) {
        this.nama = nama
    }
    warnaDanbentuk(){
        console.log(`Bendera ${this.nama} memiliki warna dan bentuk`)
    }
}   

class indonesia extends bendera {
    warnaDanbentuk() {
        console.log(`Bendera ${this.nama} memiliki warna merah dan putih. bentuknya garis horizontal` )
    }
}

class jerman extends bendera {
    warnaDanbentuk() {
        console.log(`Bendera ${this.nama} memiliki warna hitam, merah, dan kuning. bentuknya bentuknya garis horizontal`)
    }
}

let Bendera = [new indonesia('indonesia'), new jerman('jerman')]
Bendera.forEach(bendera => bendera.warnaDanbentuk())


//Class2 Pemabayaran
class pembayaran {
    constructor (tipe) {
        this.tipe = tipe
    }
    bentukpembayaran(){
        console.log(`Pembayaran menggunakan ${this.tipe}`)
    }
}   

class kredit extends pembayaran {
    bentukpembayaran() {
        console.log(`Pembayaran menggunakan ${this.tipe} untuk Alfamart` )
    }
}

class debit extends pembayaran {
    bentukpembayaran() {
        console.log(`Pembayaran menggunakan ${this.tipe} untuk Warung`)
    }
}

let Pembayaran = [new kredit('kredit'), new debit('debit')]
Pembayaran.forEach(pembayaran => pembayaran.bentukpembayaran())


//Class3 BangunDatar
class bangundatar {
    constructor (bangun) {
        this.bangun = bangun
    }
    jumlahsisi(){
        console.log(`Bangun datar ${this.bangun}`)
    }
}   

class lingkaran extends bangundatar {
    jumlahsisi() {
        console.log(`bangun datar ${this.bangun} memiliki 1 sisi`)
    }
}

class trapesium extends bangundatar {
    jumlahsisi() {
        console.log(`bangun datar ${this.bangun} memiliki 4 sisi`)
    }
}

let BangunDatar = [new lingkaran('lingkaran'), new trapesium('trapesium')]
BangunDatar.forEach(bangundatar => bangundatar.jumlahsisi())


//class4 musik
class musik {
    constructor (genre) {
        this.genre = genre
    }
    genremsuik(){
        console.log(`Musik ini bergenre ${this.genre}`)
    }
}   

class jazz extends musik {
    genremsuik() {
        console.log(`Musik ini bergenre ${this.genre} dan memiliki durasi 3 menit`)
    }
}

class pop extends musik {
    genremsuik() {
        console.log(`Musik ini bergenre ${this.genre} dan memiliki durasi 4 menit`)
    }
}

let Musik = [new jazz('jazz'), new pop('pop')]
Musik.forEach(musik => musik.genremsuik())