import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let produk = [
      { id: 'HP001', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS.jpg', stok: 100},
      { id: 'HP002', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S2', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S2', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS2.jpg', stok: 100},
      { id: 'HP003', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S3', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S3', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS3.jpg', stok: 100},
      { id: 'HP004', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S4', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S4', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS4.jpg', stok: 100},
      { id: 'HP005', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S5', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S5', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS5.jpg', stok: 100},
      { id: 'HP006', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S6', material: 'Besi', deskripsiProduk: 'Handphone Samsung Galaxy S6', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS6.jpg', stok: 100},
      { id: 'HP007', kodeMerk: 'HPSONY', namaProduk: 'Sony Xperia Z', material: 'Besi', deskripsiProduk: 'Handphone Sony Xperia Z', negaraPemroduksi: 'Jepang', gambar: '../app/assets/img/produk/sony/XperiaZ.jpg', stok: 100},
      { id: 'HP008', kodeMerk: 'HPSONY', namaProduk: 'Sony Xperia Z1', material: 'Besi', deskripsiProduk: 'Handphone Sony Xperia Z1', negaraPemroduksi: 'Jepang', gambar: '../app/assets/img/produk/sony/XperiaZ1.jpg', stok: 100}
    ];
    let merek = [
      { kodeMerk: 'HPSAMSUNG', namaMerk: 'Samsung'},
      { kodeMerk: 'HPSONY', namaMerk: 'Sony'}
    ];
    let pelanggan = [
      { email: 'cendzpm@gmail.com', namaLengkap: 'M Husain Fadhlullah', tanggalLahir: '1996-03-21', nomorHP: '085162184291', kataSandi: 'password' },
      { email: 'cendzpm@gmail.com1', namaLengkap: 'M Husain Fadhlullah', tanggalLahir: '1996-03-21', nomorHP: '085162184291', kataSandi: 'password' }
    ];
    return {produk,merek,pelanggan};
  }
}
