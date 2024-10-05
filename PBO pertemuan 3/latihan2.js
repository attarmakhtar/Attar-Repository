class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang}m x ${this.lebar}m.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
}

// Subclass 1: KapalKargo
class KapalKargo extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasMuatan) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasMuatan = kapasitasMuatan;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini mampu membawa muatan sebesar ${this.kapasitasMuatan} ton.`;
    }

    muatBarang(jumlahTon) {
        return `Kapal ${this.nama} sedang memuat ${jumlahTon} ton barang.`;
    }
}

// Sub-subclass: KapalKontainer (Subclass dari KapalKargo)
class KapalKontainer extends KapalKargo {
    constructor(nama, jenis, panjang, lebar, kapasitasMuatan, jumlahKontainer) {
        super(nama, jenis, panjang, lebar, kapasitasMuatan);
        this.jumlahKontainer = jumlahKontainer;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat membawa hingga ${this.jumlahKontainer} kontainer.`;
    }

    muatKontainer(jumlahKontainer) {
        return `Kapal ${this.nama} sedang memuat ${jumlahKontainer} kontainer.`;
    }
}


// Subclass 2: KapalPatroli
class KapalPatroli extends Kapal {
    constructor(nama, jenis, panjang, lebar, kecepatanMaksimum) {
        super(nama, jenis, panjang, lebar);
        this.kecepatanMaksimum = kecepatanMaksimum;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat mencapai kecepatan maksimum ${this.kecepatanMaksimum} knot.`;
    }

    patroli(daerah) {
        return `Kapal ${this.nama} sedang melakukan patroli di daerah ${daerah}.`;
    }
}


const kapalferry = new KapalPenumpang("Budiono Siregar", "Ferry", 200, 100, 600);
console.log(kapalferry.infoKapal());

const kapalkargo = new KapalKargo("Sinar Laut", "Kargo", 300, 50, 10000);
console.log(kapalkargo.infoKapal());
console.log(kapalkargo.muatBarang(5000));

const kapalkontainer = new KapalKontainer("Mandala", "Kontainer", 400, 60, 20000, 1000);
console.log(kapalkontainer.infoKapal());
console.log(kapalkontainer.muatKontainer(750));

const kapalpatroli = new KapalPatroli("Samudera", "Patroli", 150, 30, 45);
console.log(kapalpatroli.infoKapal());
console.log(kapalpatroli.patroli("Perairan Natuna"));
