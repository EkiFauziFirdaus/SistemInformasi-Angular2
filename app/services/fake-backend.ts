import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {

    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => {

        let produkByKategori = [
          {
            kode_kategori: '16001',
            nama_kategori: 'Handphone',
            daftarbarang:
            [
              {
                kode_kategori: '16001',
                kode_produk:
                {
                  kode_produk: '2016125501',
                  nama_produk: 'Apple Iphone 5s',
                  hargabarang:
                  [
                    {
                      id_harga: 0,
                      waktuharga: '2017-01-12T00:00:00Z',
                      harga: 1780000,
                      kode_produk: '2016125501'
                    }
                  ],
                  diskon:
                  [
                    {
                      id_diskon: 0,
                      waktu_diskon: '2017-01-12T00:00:00Z',
                      besar_diskon: 0,
                      kode_produk: '2016125501'
                    }
                  ],
                  stok: 9,
                  gambar: '../app/assets/img/produk/apple/5s.jpg'
                }
              },
              {
                kode_kategori: '16001',
                kode_produk:
                {
                  kode_produk: '2016125502',
                  nama_produk: 'LG G4',
                  hargabarang:
                  [
                    {
                      id_harga: 0,
                      waktuharga: '2017-01-12T00:00:00Z',
                      harga: 2780000,
                      kode_produk: '2016125502'
                    }
                  ],
                  diskon:
                  [
                    {
                      id_diskon: 0,
                      waktu_diskon: '2017-01-12T00:00:00Z',
                      besar_diskon: 0,
                      kode_produk: '2016125502'
                    }
                  ],
                  stok: 10,
                  gambar: '../app/assets/img/produk/lg/g4.jpg'
                }
              },
              {
                kode_kategori: '16001',
                kode_produk:
                {
                  kode_produk: '2016125503',
                  nama_produk: 'Oppo F1',
                  hargabarang:
                  [
                    {
                      id_harga: 0,
                      waktuharga: '2017-01-12T00:00:00Z',
                      harga: 1580000,
                      kode_produk: '2016125503'
                    }
                  ],
                  diskon:
                  [
                    {
                      id_diskon: 0,
                      waktu_diskon: '2017-01-12T00:00:00Z',
                      besar_diskon: 10,
                      kode_produk: '2016125503'
                    }
                  ],
                  stok: 11,
                  gambar: '../app/assets/img/produk/oppo/f1.jpg'
                }
              }
            ]
          }
        ];

        let produkByMerek = [
          {
            kode_merek: '16001',
            nama_merek: 'Apple',
            produk:
            [
              {
                kode_produk: '2016125501',
                nama_produk: 'Apple Iphone 5s',
                hargabarang:
                [
                  {
                    id_harga: 0,
                    waktuharga: '2017-01-12T00:00:00Z',
                    harga: 1780000,
                    kode_produk: '2016125501'
                  }
                ],
                diskon:
                [
                  {
                    id_diskon: 0,
                    waktu_diskon: '2017-01-12T00:00:00Z',
                    besar_diskon: 0,
                    kode_produk: '2016125501'
                  }
                ],
                stok: 9,
                gambar: '../app/assets/img/produk/apple/5s.jpg'
              }
            ]
          },
          {
            kode_merek: '16002',
            nama_merek: 'LG',
            produk:
            [
              {
                kode_produk: '2016125502',
                nama_produk: 'LG G4',
                hargabarang:
                [
                  {
                    id_harga: 0,
                    waktuharga: '2017-01-12T00:00:00Z',
                    harga: 2780000,
                    kode_produk: '2016125502'
                  }
                ],
                diskon:
                [
                  {
                    id_diskon: 0,
                    waktu_diskon: '2017-01-12T00:00:00Z',
                    besar_diskon: 0,
                    kode_produk: '2016125502'
                  }
                ],
                stok: 10,
                gambar: '../app/assets/img/produk/lg/g4.jpg'
              }
            ]
          },
          {
            kode_merek: '16003',
            nama_merek: 'Oppo',
            produk:
            [
              {
                kode_produk: '2016125503',
                nama_produk: 'Oppo F1',
                hargabarang:
                [
                  {
                    id_harga: 0,
                    waktuharga: '2017-01-12T00:00:00Z',
                    harga: 1580000,
                    kode_produk: '2016125503'
                  }
                ],
                diskon:
                [
                  {
                    id_diskon: 0,
                    waktu_diskon: '2017-01-12T00:00:00Z',
                    besar_diskon: 10,
                    kode_produk: '2016125503'
                  }
                ],
                stok: 11,
                gambar: '../app/assets/img/produk/oppo/f1.jpg'
              }
            ]
          }
        ];

        let detailProduk = [
          {
            kode_produk: '2016125501',
            nama_produk: 'Apple Iphone 5s',
            hargabarang:
            [
              {
                id_harga: 0,
                waktuharga: '2017-01-12T00:00:00Z',
                harga: 1780000,
                kode_produk: '2016125501'
              }
            ],
            diskon:
            [
              {
                id_diskon: 0,
                waktu_diskon: '2017-01-12T00:00:00Z',
                besar_diskon: 0,
                kode_produk: '2016125501'
              }
            ],
            material: 'Besi, Kaca',
            deskripsi_produk: 'Apple iPhone 5S 16 GB ROM, 1 GB RAM dengan warna Silver ber-prosesor dual-core 1,3 GHz Cyclone-A7. Berukuran layar 4 inci, 5S memiliki kamera utama 8 MP dan 1,2 MP pada kamera depan. iPhone single SIM ini berjaringan HSDPA. iPhone 5s hadir dengan peningkatan performa yang begitu cepat, belum lagi diperkuat dengan dukungan iOS 9 sehingga kebutuhan Anda akan sebuah smartphone sempurna bisa Anda rasakan pada iPhone 5s.',
            negara_pemroduksi: 'Indonesia',
            gambar: '../app/assets/img/produk/apple/5s.jpg',
            stok: 9,
            kode_merek: '16001'
          },
          {
            kode_produk: '2016125502',
            nama_produk: 'LG G4',
            hargabarang:
            [
              {
                id_harga: 0,
                waktuharga: '2017-01-12T00:00:00Z',
                harga: 2780000,
                kode_produk: '2016125502'
              }
            ],
            diskon:
            [
              {
                id_diskon: 0,
                waktu_diskon: '2017-01-12T00:00:00Z',
                besar_diskon: 0,
                kode_produk: '2016125502'
              }
            ],
            material: 'Kulit, Plastik',
            deskripsi_produk: 'LG G4 memiliki ukuran layar 5,5 inci didukung 4G LTE dengan prosesor Hexa-core, dan sistem operasi Android v5.1 (Lollipop), dilengkapi dengan memori 3GB RAM, 32GB ROM, juga memiliki kamera utama 16MP, depan 8MP dan menggunakan DualMicro-SIM. Keinginan LG untuk menyajikan pengalaman visual yang belum pernah ada sebelumnya, melahirkan LG G4 di dalam desain tangguh dan sentuhan klasik. Dalam menciptakan LG G4, desainer LG ingin terinspirasi menggunakan hanya material yang berkualitas, seperti pola pada back cover LG G4 ini yang bukan hanya indah, juga membuatnya nyaman digenggam. ',
            negara_pemroduksi: 'Indonesia',
            gambar: '../app/assets/img/produk/lg/g4.jpg',
            stok: 10,
            kode_merek: '16002'
          },
          {
            kode_produk: '2016125503',
            nama_produk: 'Oppo F1',
            hargabarang:
            [
              {
                id_harga: 0,
                waktuharga: '2017-01-12T00:00:00Z',
                harga: 1580000,
                kode_produk: '2016125503'
              }
            ],
            diskon:
            [
              {
                id_diskon: 0,
                waktu_diskon: '2017-01-12T00:00:00Z',
                besar_diskon: 10,
                kode_produk: '2016125503'
              }
            ],
            material: 'Plastik',
            deskripsi_produk: 'Oppo F1 Plus memiliki ukuran layar 5,5 inci didukung prosessor Octa-core 2GHz, juga dilengkapi dengan memori 4GB RAM, 64GB ROM, mengusung Android v5.1 (Lollipop), memiliki kamera utama 13MP, depan 16MP dan menggunakan DualNano-SIM. Oppo F1 plus, sebuah smartphone yang dirangcang dengan kapasitas kamera depan lebih besar dibanding kamera utamanya. Menghadirkan kamera depan 16 MP, Oppo sangat memahami trend selfie yang semakin menjamur. Dengan tambahan teknologi ISOCELL, ponsel pintar ini sangat efektif untuk mengurangi gangguan antar piksel, sehingga setiap foto yang dihasilkan tampak semakin tajam dengan noise yang rendah.',
            negara_pemroduksi: 'Indonesia',
            gambar: '../app/assets/img/produk/oppo/f1.jpg',
            stok: 11,
            kode_merek: '16003'
          }
        ];

        let daftarPesanan = [
          {
            kode_pesanan:'201612230844002',
            barangpesanan:
            [
              {
                id_barang_pesanan:0,
                kode_produk:
                {
                  kode_produk:'2016125503',
                  nama_produk:'Oppo F1',
                  hargabarang:
                  [
                    {
                      latest_harga:1580000,
                      hargabarang__kode_produk:1580000,
                      latest_date:'2017-01-12T00:00:00Z'
                    }
                  ],
                  diskon:
                  [
                    {
                      latest_diskon:10,
                      latest_date:'2017-01-12T00:00:00Z',
                      diskon__kode_produk:10
                    }
                  ],
                  stok:9,
                  gambar: '../app/assets/img/produk/oppo/f1.jpg'
                },
                kuantitas:1,
                kode_pesanan:'201612230844002'
              }
            ],
            waktu_pesanan:'2016-12-27T01:44:00Z',
            email:'cendzpm@gmail.com',
            kode_pembayaran:''
          }
        ];

        let daftarKeinginan = [
          {
            id_daftar_keinginan: 0,
            kode_produk:
            {
              nama_produk: 'Oppo F1',
              hargabarang:
              [
                {
                  id_harga: 0,
                  waktuharga: '2017-01-12T00:00:00Z',
                  harga: 1580000,
                  kode_produk: '2016125503'
                }
              ],
              diskon:
              [
                {
                  id_diskon: 0,
                  waktu_diskon: '2017-01-12T00:00:00Z',
                  besar_diskon: 10,
                  kode_produk: '2016125503'
                }
              ],
              stok: 11,
              gambar: '../app/assets/img/produk/oppo/f1.jpg'
            },
            tanggal_terdaftar: '2017-01-04 10:41:00',
            email: 'cendzpm@gmail.com'
          },
          {
            id_daftar_keinginan: 0,
            kode_produk:
            {
              nama_produk: 'Oppo F1',
              hargabarang:
              [
                {
                  id_harga: 0,
                  waktuharga: '2017-01-12T00:00:00Z',
                  harga: 1580000,
                  kode_produk: '2016125503'
                }
              ],
              diskon:
              [
                {
                  id_diskon: 0,
                  waktu_diskon: '2017-01-12T00:00:00Z',
                  besar_diskon: 10,
                  kode_produk: '2016125503'
                }
              ],
              stok: 11,
              gambar: '../app/assets/img/produk/oppo/f1.jpg'
            },
            tanggal_terdaftar: '2017-01-05 10:41:00',
            email: 'cendzpm@gmail.com'
          }
        ];

        let listProduk = [
          { kode_produk: '2016125501', nama_produk: 'Apple Iphone 5s', material: 'Besi, Kaca', deskripsi_produk: 'Apple iPhone 5S 16 GB ROM, 1 GB RAM dengan warna Silver ber-prosesor dual-core 1,3 GHz Cyclone-A7. Berukuran layar 4 inci, 5S memiliki kamera utama 8 MP dan 1,2 MP pada kamera depan. iPhone single SIM ini berjaringan HSDPA. iPhone 5s hadir dengan peningkatan performa yang begitu cepat, belum lagi diperkuat dengan dukungan iOS 9 sehingga kebutuhan Anda akan sebuah smartphone sempurna bisa Anda rasakan pada iPhone 5s.', negara_pemroduksi: 'Indonesia', gambar: '../app/assets/img/produk/apple/5s.jpg', stok: 9, kode_merek: '16001'},
          { kode_produk: '2016125502', nama_produk: 'Apple Iphone 6', material: 'Besi, Kaca', deskripsi_produk: 'Apple iPhone 6 RAM 1 GB ROM 16 GB Silver dengan prosesor dual-core 1,4 GHz. Mengusung layar 4,7 inci iPhone 6 dilengkapi kamera utama beresolusi 8 MP dan 1,2 MP pada kamera depan. iPhone 6 juga memiliki sebuah slot kartu SIM dengan jaringan LTE. iPhone 6 merupakan perangkat yang sempurna untuk Anda yang mendambakan sebuah smartphone berlayar besar dengan tingkat ketipisan yang telah disesuaikan. Dengan menampilkan layar Retina Display berukuran 4,7 inchi yang memiliki kualitas gambar sangat jernih, iPhone 6 mampu memanjakan Anda disaat menonton sebuah video, bermain game dan juga menyelesaikan tugas keseharian Anda.', negara_pemroduksi: 'Indonesia', gambar: '../app/assets/img/produk/apple/6.jpg', stok: 9, kode_merek: '16001'},
          { kode_produk: '2016125504', nama_produk: 'LG G4', material: 'Kulit, Plastik', deskripsi_produk: 'LG G4 memiliki ukuran layar 5,5 inci didukung 4G LTE dengan prosesor Hexa-core, dan sistem operasi Android v5.1 (Lollipop), dilengkapi dengan memori 3GB RAM, 32GB ROM, juga memiliki kamera utama 16MP, depan 8MP dan menggunakan DualMicro-SIM. Keinginan LG untuk menyajikan pengalaman visual yang belum pernah ada sebelumnya, melahirkan LG G4 di dalam desain tangguh dan sentuhan klasik. Dalam menciptakan LG G4, desainer LG ingin terinspirasi menggunakan hanya material yang berkualitas, seperti pola pada back cover LG G4 ini yang bukan hanya indah, juga membuatnya nyaman digenggam. ', negara_pemroduksi: 'Indonesia', gambar: '../app/assets/img/produk/lg/g4.jpg', stok: 9, kode_merek: '16002'},
          { kode_produk: '2016125505', nama_produk: 'LG G5', material: 'Kulit, Plastik', deskripsi_produk: 'LG G5 SE memiliki ukuran layar 5,3 inci didukung 4G LTE dengan prosesor Octa-core 1,8GHz, dan sistem operasi Android v6.0 (Marshmallow), dilengkapi dengan memori 3GB RAM, 32GB ROM, juga memiliki kamera utama 16MP&8MP, depan 8MP dan menggunakan Micro-SIM. LG G5 SE adalah smartphone mewah dalam balutan Metal Premium yang dirancang sebagai smartphone kelas atas. Dalam layar berukuran 5,3 inci ponsel pintar ini nyaris tanpa bezel, memberikan suguhan visual yang sempurna. Layar LG G5 SE juga dilindungi oleh teknologi Gorilla Glass sehingga semakin membuat kesan elegan pada siapa saja yang menggenggam smartphone asal Negeri Gingseng ini.', negara_pemroduksi: 'Indonesia', gambar: '../app/assets/img/produk/lg/g5.jpg', stok: 9, kode_merek: '16002'},
          { kode_produk: '2016125506', nama_produk: 'Oppo F1', material: 'Plastik', deskripsi_produk: 'Oppo F1 Plus memiliki ukuran layar 5,5 inci didukung prosessor Octa-core 2GHz, juga dilengkapi dengan memori 4GB RAM, 64GB ROM, mengusung Android v5.1 (Lollipop), memiliki kamera utama 13MP, depan 16MP dan menggunakan DualNano-SIM. Oppo F1 plus, sebuah smartphone yang dirangcang dengan kapasitas kamera depan lebih besar dibanding kamera utamanya. Menghadirkan kamera depan 16 MP, Oppo sangat memahami trend selfie yang semakin menjamur. Dengan tambahan teknologi ISOCELL, ponsel pintar ini sangat efektif untuk mengurangi gangguan antar piksel, sehingga setiap foto yang dihasilkan tampak semakin tajam dengan noise yang rendah.', negara_pemroduksi: 'Indonesia', gambar: '../app/assets/img/produk/oppo/f1.jpg', stok: 9, kode_merek: '16003'},
          { kode_produk: '2016125507', nama_produk: 'Oppo F1s', material: 'Plastik', deskripsi_produk: 'Oppo F1s memiliki ukuran layar 5,5 inci yang didukung oleh jaringan 4G LTE berprosesor Octa-core 64-bit dengan 3GB RAM, 32GB ROM bersistem operasi Android 5.1 (Lollipop), Oppo F1s juga memiliki kamera utama 13MP, dan kamera depan 16MP dengan Dual Nano-SIM. Membuat Oppo F1s lebih sempurna dari pendahulunya.', negara_pemroduksi: 'Indonesia', gambar: '../app/assets/img/produk/oppo/f1s.jpg', stok: 9, kode_merek: '16003'},
          { kode_produk: '2016125508', nama_produk: 'Samsung Galaxy A7', material: 'Plastik', deskripsi_produk: 'Samsung Galaxy A7 memiliki ukuran layar 5,5 inci didukung prosessor Octa-core 1,6GHz, juga dilengkapi dengan memori 3GB RAM, 16GB ROM, mengusung Android v5.1 (Lollipop), memiliki kamera utama 13MP, depan 5MP dan menggunakan DualNano-SIM. Samsung A7 2016 Edition dirancang dengan inovasi mewah dan penuh perlindungan. Desain sisi smartphone ini terbuat dari metal frame yang mampu menjaganya dari benturan, juga akan menambah kesan cool bagi siapapun yang melihat Anda menggenggam Samsung A7 2016 Edition. Layar dan bagian belakang juga dilindungi oleh Gorilla Glass 4 sehingga Anda tak perlu takut akan goresan sedikitpun.', negara_pemroduksi: 'Indonesia', gambar: '../app/assets/img/produk/samsung/a7.jpg', stok: 9, kode_merek: '16004'},
          { kode_produk: '2016125509', nama_produk: 'Samsung Galaxy S7', material: 'Plastik', deskripsi_produk: 'Samsung Galaxy S7 Edge memiliki ukuran layar 5,5 inci didukung 4G dan prosessor Quad-core 2,3GHz, juga dilengkapi dengan memori 4GB RAM, 32GB ROM, mengusung Android 5.1 (Lollipop), memiliki kamera utama 12 MP, depan 5MP dan menggunakan Dual Nano-SIM. Samsung Galaxy S7 Edge hadir dengan kemampuan yang melebihi batasan-batasan smartphone pada umumnya. Dengan RAM 4 GB, kapasitasnya sangat besar untuk memudahkan mengakomodir aplikasi-aplikasi kesayangan Anda.', negara_pemroduksi: 'Indonesia', gambar: '../app/assets/img/produk/samsung/s7.jpg', stok: 9, kode_merek: '16004'}
        ];

        let listMerek = [
          { kode_merek: '16001', nama_merek: 'Apple'},
          { kode_merek: '16002', nama_merek: 'LG'},
          { kode_merek: '16003', nama_merek: 'Oppo'},
        ];

        let listKategori = [
          { kode_kategori: '16001', nama_kategori: 'Handphone'}
        ];

        let listPelanggan = [
          { email: 'cendzpm@gmail.com', nama_lengkap: 'M Husain Fadhlullah', tanggal_lahir: '1996-03-21', nomor_hp: '085162184291', kata_sandi: 'password' }
        ];


        backend.connections.subscribe((connection: MockConnection) => {

            setTimeout(() => {

                // get list produk
                if (connection.request.url.endsWith('/api/produk') && connection.request.method === RequestMethod.Get) {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: listProduk })));
                }

                //get produk berdasarkan kategori
                if (connection.request.url.match(/\/api\/produk\/kategori\/\d+$/) && connection.request.method === RequestMethod.Get) {
                    let urlParts = connection.request.url.split('/');
                    let kodeKategori = urlParts[urlParts.length - 1];
                    let matchedKategori = produkByKategori.filter(produk => { return produk.kode_kategori === kodeKategori; });
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: matchedKategori })));
                }

                //get produk berdasarkan merek
                if (connection.request.url.match(/\/api\/produk\/merek\/\d+$/) && connection.request.method === RequestMethod.Get) {
                    let urlParts = connection.request.url.split('/');
                    let kodeMerek = urlParts[urlParts.length - 1];
                    let matchedMerek = produkByMerek.filter(produk => { return produk.kode_merek === kodeMerek; });
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: matchedMerek })));
                }

                //get produk detail
                if (connection.request.url.match(/\/api\/produk\/kode-produk\/\d+$/) && connection.request.method === RequestMethod.Get) {
                    let urlParts = connection.request.url.split('/');
                    let kodeProduk = urlParts[urlParts.length - 1];
                    let matchedProduk = detailProduk.filter(produk => { return produk.kode_produk === kodeProduk; });
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: matchedProduk })));
                }

                //get produk berdasarkan kode produk
                if (connection.request.url.match(/\/api\/produk\/\w+$/) && connection.request.method === RequestMethod.Get) {
                  let urlParts = connection.request.url.split('/');
                  let kodeProduk = urlParts[urlParts.length - 1];
                  let matchedProduk = listProduk.filter(produk => { return produk.kode_produk === kodeProduk; });
                  let produk = matchedProduk.length ? matchedProduk[0] : null;
                  connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: produk })));
                }

                //get list merek
                if (connection.request.url.endsWith('/api/merek') && connection.request.method === RequestMethod.Get) {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: listMerek })));
                }

                //get list kategori
                if (connection.request.url.endsWith('/api/kategori') && connection.request.method === RequestMethod.Get) {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: listKategori })));
                }

                //get pelanggan berdasarkan email
                if (connection.request.url.match(/\/api\/pelanggan\/.+$/) && connection.request.method === RequestMethod.Get) {
                  let urlParts = connection.request.url.split('/');
                  let email = urlParts[urlParts.length - 1];
                  let matchedPelanggan = listPelanggan.filter(pelanggan => { return pelanggan.email === email; });
                  let pelanggan = matchedPelanggan.length ? matchedPelanggan[0] : null;
                  connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: pelanggan })));
                }

                if (connection.request.url.match(/\/api\/daftar-keinginan\/.+$/) && connection.request.method === RequestMethod.Get) {
                  let urlParts = connection.request.url.split('/');
                  let email = urlParts[urlParts.length - 1];
                  let matchedDaftarKeinginan = daftarKeinginan.filter(wishlist => { return wishlist.email === email; });
                  let list = matchedDaftarKeinginan.length ? matchedDaftarKeinginan : null;
                  connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: list })));
                }

                if (connection.request.url.match(/\/api\/daftar-pesanan\/.+$/) && connection.request.method === RequestMethod.Get) {
                  let urlParts = connection.request.url.split('/');
                  let email = urlParts[urlParts.length - 1];
                  let matchedDaftarPesanan = daftarPesanan.filter(pesanan => { return pesanan.email === email; });
                  let list = matchedDaftarPesanan.length ? matchedDaftarPesanan : null;
                  connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: list })));
                }

                //masukkan barang ke wishlist
                if (connection.request.url.match(/\/api\/daftar-keinginan\/post\/.+$/) && connection.request.method === RequestMethod.Post) {
                  let wishlist = JSON.parse(connection.request.getBody());
                  let barang = detailProduk.filter(barang => {return barang.kode_produk === wishlist.kode_produk});
                  daftarKeinginan.push(
                    {
                      id_daftar_keinginan: 0,
                      kode_produk:
                      {
                        nama_produk: barang[0].nama_produk,
                        hargabarang:
                        [
                          {
                            id_harga: barang[0].hargabarang[0].id_harga,
                            waktuharga: barang[0].hargabarang[0].waktuharga,
                            harga: barang[0].hargabarang[0].harga,
                            kode_produk: barang[0].hargabarang[0].kode_produk
                          }
                        ],
                        diskon:
                        [
                          {
                            id_diskon: barang[0].diskon[0].id_diskon,
                            waktu_diskon: barang[0].diskon[0].waktu_diskon,
                            besar_diskon: barang[0].diskon[0].besar_diskon,
                            kode_produk: barang[0].diskon[0].kode_produk
                          }
                        ],
                        stok: barang[0].stok,
                        gambar: barang[0].gambar
                      },
                      tanggal_terdaftar: wishlist.tanggal_terdaftar,
                      email: wishlist.email
                    }
                  );
                }

                if (connection.request.url.endsWith('/api/daftar-pesanan/post') && connection.request.method === RequestMethod.Post) {
                  let barangPesanan = JSON.parse(connection.request.getBody());
                  let barang = detailProduk.filter(barang => {return barang.kode_produk === barangPesanan.kode_produk});
                  daftarPesanan[0].barangpesanan.push(
                    {
                      id_barang_pesanan:0,
                      kode_produk:
                      {
                        kode_produk:barang[0].kode_produk,
                        nama_produk:barang[0].nama_produk,
                        hargabarang:
                        [
                          {
                            latest_harga:barang[0].hargabarang[0].harga,
                            hargabarang__kode_produk:barang[0].hargabarang[0].harga,
                            latest_date:barang[0].hargabarang[0].waktuharga
                          }
                        ],
                        diskon:
                        [
                          {
                            latest_diskon:barang[0].diskon[0].besar_diskon,
                            latest_date:barang[0].diskon[0].waktu_diskon,
                            diskon__kode_produk:barang[0].diskon[0].besar_diskon
                          }
                        ],
                        stok:barang[0].stok,
                        gambar: barang[0].gambar
                      },
                      kuantitas:barangPesanan.kuantitas,
                      kode_pesanan:barangPesanan.kode_pesanan
                    }
                  );
                  console.log(daftarPesanan[0]);
                }

            }, 500);

        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
};
