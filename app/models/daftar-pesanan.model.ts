import { ProdukPesanan } from './produk-pesanan.model';

export class DaftarPesanan {
  kode_pesanan : string;
  barangpesanan : ProdukPesanan[];
  waktu_pesanan : string;
  email : string;
  kode_pembayaran : string;
}
