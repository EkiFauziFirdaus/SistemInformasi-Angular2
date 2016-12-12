import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let produk = [
      { kodeProduk: 'HP001', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S', negaraPemroduksi: 'Korea', gambar: './GambarProduk/samsung/GalaxyS.jpg', stok: 100},
      { kodeProduk: 'HP002', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S2', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S2', negaraPemroduksi: 'Korea', gambar: './GambarProduk/samsung/GalaxyS2.jpg', stok: 100},
      { kodeProduk: 'HP003', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S3', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S3', negaraPemroduksi: 'Korea', gambar: './GambarProduk/samsung/GalaxyS3.jpg', stok: 100},
      { kodeProduk: 'HP004', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S4', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S4', negaraPemroduksi: 'Korea', gambar: './GambarProduk/samsung/GalaxyS4.jpg', stok: 100},
      { kodeProduk: 'HP005', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S5', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S5', negaraPemroduksi: 'Korea', gambar: './GambarProduk/samsung/GalaxyS5.jpg', stok: 100},
      { kodeProduk: 'HP006', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S6', material: 'Besi', deskripsiProduk: 'Handphone Samsung Galaxy S6', negaraPemroduksi: 'Korea', gambar: './GambarProduk/samsung/GalaxyS6.jpg', stok: 100},
      { kodeProduk: 'HP007', kodeMerk: 'HPSONY', namaProduk: 'Sony Xperia Z', material: 'Besi', deskripsiProduk: 'Handphone Sony Xperia Z', negaraPemroduksi: 'Jepang', gambar: './GambarProduk/sony/XperiaZ.jpg', stok: 100},
      { kodeProduk: 'HP008', kodeMerk: 'HPSONY', namaProduk: 'Sony Xperia Z1', material: 'Besi', deskripsiProduk: 'Handphone Sony Xperia Z1', negaraPemroduksi: 'Jepang', gambar: './GambarProduk/sony/XperiaZ1.jpg', stok: 100}
    ];
    return {produk};
  }
}
