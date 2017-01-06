import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {

    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => {

        let listProduk = [
          { kodeProduk: 'HP001', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS.jpg', stok: 100},
          { kodeProduk: 'HP002', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S2', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S2', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS2.jpg', stok: 100},
          { kodeProduk: 'HP003', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S3', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S3', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS3.jpg', stok: 100},
          { kodeProduk: 'HP004', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S4', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S4', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS4.jpg', stok: 100},
          { kodeProduk: 'HP005', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S5', material: 'Plastik', deskripsiProduk: 'Handphone Samsung Galaxy S5', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS5.jpg', stok: 100},
          { kodeProduk: 'HP006', kodeMerk: 'HPSAMSUNG', namaProduk: 'Samsung Galaxy S6', material: 'Besi', deskripsiProduk: 'Handphone Samsung Galaxy S6', negaraPemroduksi: 'Korea', gambar: '../app/assets/img/produk/samsung/GalaxyS6.jpg', stok: 100},
          { kodeProduk: 'HP007', kodeMerk: 'HPSONY', namaProduk: 'Sony Xperia Z', material: 'Besi', deskripsiProduk: 'Handphone Sony Xperia Z', negaraPemroduksi: 'Jepang', gambar: '../app/assets/img/produk/sony/XperiaZ.jpg', stok: 100},
          { kodeProduk: 'HP008', kodeMerk: 'HPSONY', namaProduk: 'Sony Xperia Z1', material: 'Besi', deskripsiProduk: 'Handphone Sony Xperia Z1', negaraPemroduksi: 'Jepang', gambar: '../app/assets/img/produk/sony/XperiaZ1.jpg', stok: 100}
        ];

        let listMerek = [
          { kodeMerk: 'HPSAMSUNG', namaMerk: 'Samsung'},
          { kodeMerk: 'HPSONY', namaMerk: 'Sony'}
        ];

        let listPelanggan = [
          { email: 'cendzpm@gmail.com', namaLengkap: 'M Husain Fadhlullah', tanggalLahir: '1996-03-21', nomorHP: '085162184291', kataSandi: 'password' },
          { email: 'cendzpm@gmail.com1', namaLengkap: 'M Husain Fadhlullah', tanggalLahir: '1996-03-21', nomorHP: '085162184291', kataSandi: 'password' }
        ];


        backend.connections.subscribe((connection: MockConnection) => {

            setTimeout(() => {

                // get list produk
                if (connection.request.url.endsWith('/api/produk') && connection.request.method === RequestMethod.Get) {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: listProduk })));
                }

                //get produk berdasarkan kode produk
                if (connection.request.url.match(/\/api\/produk\/\w+$/) && connection.request.method === RequestMethod.Get) {
                  let urlParts = connection.request.url.split('/');
                  let kodeProduk = urlParts[urlParts.length - 1];
                  let matchedProduk = listProduk.filter(produk => { return produk.kodeProduk === kodeProduk; });
                  let produk = matchedProduk.length ? matchedProduk[0] : null;
                  connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: produk })));
                }

                //get list merek
                if (connection.request.url.endsWith('/api/merek') && connection.request.method === RequestMethod.Get) {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: listMerek })));
                }

                //get pelanggan berdasarkan email
                if (connection.request.url.match(/\/api\/pelanggan\/.+$/) && connection.request.method === RequestMethod.Get) {
                  let urlParts = connection.request.url.split('/');
                  let email = urlParts[urlParts.length - 1];
                  let matchedPelanggan = listPelanggan.filter(pelanggan => { return pelanggan.email === email; });
                  let pelanggan = matchedPelanggan.length ? matchedPelanggan[0] : null;
                  connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: pelanggan })));
                }

            }, 500);

        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
};
