export interface Shutlle {
   shuttleId: number;
   namaShuttle: string;
   kotaId: Kota;
}

export interface Kota {
   kotaId: number;
   namaKota: string;
}

export interface JamKeberangkatan {
   jam: string;
   jamKeberangkatanId: number;
}


export interface Harga {
   hargaId: number;
   harga: number;
}


export interface User {
   isActive: number;
   level: string;
   nama: string;
   password: string;
   shuttleId: Shutlle;
   userId: number;
   userName: string;
}

export interface Transaction {
   asalShuttelId: Shutlle;
   harga: Harga;
   jamKeberangkatanId: JamKeberangkatan;
   namaPenumpang: string;
   nomorHP: string;
   nomorKursi: number;
   tanggal: number;
   transaksiId: number;
   tujuanShuttelId: Shutlle;
   userId: User;
}

