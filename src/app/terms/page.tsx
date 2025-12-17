'use client';

import { Card, CardContent } from '@/components/ui/card';
import { FileText, CheckCircle, AlertCircle, ArrowLeft, Scale, Users, Package, Shield } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VP</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                VICTORIA PAPUA
              </span>
            </div>
            <Link 
              href="/"
              className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-gray-600">
              CV VICTORIA PAPUA - Perjanjian Layanan Perdagangan
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Last Updated */}
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 mb-8 rounded-r-lg">
            <p className="text-emerald-800">
              <strong>Terakhir Diperbarui:</strong> {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <FileText className="h-6 w-6 mr-3" />
                  Pendahuluan
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di <span className="font-bold text-emerald-700">CV VICTORIA PAPUA</span>. 
                  Syarat & Ketentuan ini mengatur penggunaan layanan perdagangan eceran yang kami sediakan. 
                  Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg">
                  <p className="text-amber-800">
                    <strong>Penting:</strong> Harap baca syarat dan ketentuan ini dengan cermat sebelum 
                    menggunakan layanan kami.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <Scale className="h-6 w-6 mr-3" />
                  Definisi
                </h2>
                <div className="space-y-3">
                  <div>
                    <strong className="text-emerald-700">"Perusahaan":</strong>
                    <p className="text-gray-700">CV VICTORIA PAPUA, entitas bisnis yang menyediakan layanan perdagangan eceran</p>
                  </div>
                  <div>
                    <strong className="text-emerald-700">"Pelanggan":</strong>
                    <p className="text-gray-700">Individu atau entitas bisnis yang menggunakan layanan perdagangan kami</p>
                  </div>
                  <div>
                    <strong className="text-emerald-700">"Layanan":</strong>
                    <p className="text-gray-700">Semua aktivitas perdagangan eceran yang disediakan oleh Perusahaan</p>
                  </div>
                  <div>
                    <strong className="text-emerald-700">"Produk":</strong>
                    <p className="text-gray-700">Barang dagangan yang diperjualbelikan melalui layanan kami</p>
                  </div>
                  <div>
                    <strong className="text-emerald-700">"Transaksi":</strong>
                    <p className="text-gray-700">Proses jual beli antara Pelanggan dan Perusahaan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <Package className="h-6 w-6 mr-3" />
                  Layanan Perdagangan
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <span className="font-bold text-emerald-700">CV VICTORIA PAPUA</span> menyediakan layanan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Perdagangan Eceran:</strong> Penjualan produk kepada konsumen akhir</li>
                  <li><strong>Konsultasi Bisnis:</strong> Layanan konsultasi untuk pengembangan usaha</li>
                  <li><strong>Pengembangan Pasar:</strong> Bantuan dalam memperluas jaringan distribusi</li>
                  <li><strong>Dukungan Pelanggan:</strong> Layanan purnajual dan bantuan teknis</li>
                </ul>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Ketersediaan Layanan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Layanan tersedia selama jam operasional: Senin - Sabtu, 08:00 - 17:00 WIT</li>
                    <li>Layanan dapat berubah sewaktu-waktu dengan pemberitahuan sebelumnya</li>
                    <li>Perusahaan berhak menolak layanan kepada pihak yang melanggar ketentuan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  Tanggung Jawab Pelanggan
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sebagai Pelanggan, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Memenuhi kewajiban pembayaran tepat waktu</li>
                  <li>Menggunakan layanan sesuai dengan peraturan yang berlaku</li>
                  <li>Tidak melakukan kecurangan atau aktivitas ilegal</li>
                  <li>Menjaga kerahasiaan informasi akun dan kredensial</li>
                  <li>Melaporkan masalah atau keluhan dengan cara yang sopan</li>
                  <li>Mematuhi semua syarat dan ketentuan yang berlaku</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800">Syarat Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Metode Pembayaran:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Tunai (Cash)</li>
                      <li>Transfer Bank</li>
                      <li>E-Wallet (jika tersedia)</li>
                      <li>Pembayaran cicilan (untuk pelanggan terpilih)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Ketentuan Pembayaran:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Pembayaran harus dilunasi sesuai kesepakatan</li>
                      <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan</li>
                      <li>Biaya tambahan mungkin berlaku untuk pengiriman</li>
                      <li>Pembayaran yang sudah dilakukan tidak dapat dikembalikan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Quality */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800">Kualitas Produk</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami berkomitmen untuk menyediakan produk berkualitas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Semua produk melalui proses quality control</li>
                  <li>Produk yang rusak dapat dikembalikan dalam 24 jam</li>
                  <li>Garansi produk sesuai dengan ketentuan masing-masing produk</li>
                  <li>Informasi produk disajikan secara transparan</li>
                </ul>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mt-4">
                  <p className="text-blue-800">
                    <strong>Catatan:</strong> Klaim garansi harus disertai dengan bukti pembelian yang valid.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <Shield className="h-6 w-6 mr-3" />
                  Privasi dan Keamanan Data
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Perlindungan data pribadi Anda adalah prioritas kami:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Data pribadi akan dilindungi sesuai Kebijakan Privasi kami</li>
                  <li>Kami tidak akan menjual atau membagikan data Anda kepada pihak ketiga</li>
                  <li>Data hanya digunakan untuk keperluan transaksi dan layanan pelanggan</li>
                  <li>Anda berhak mengakses dan mengoreksi data pribadi Anda</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Untuk informasi lebih lengkap, silakan lihat <span className="text-emerald-600 font-semibold">Kebijakan Privasi</span> kami.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800">Hak Kekayaan Intelektual</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Semua konten dan materi milik <span className="font-bold text-emerald-700">CV VICTORIA PAPUA</span> dilindungi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Nama perusahaan, logo, dan merek dagang adalah hak milik eksklusif</li>
                  <li>Website, konten, dan materi promosi dilindungi hak cipta</li>
                  <li>Dilarang menggandakan atau menggunakan materi tanpa izin tertulis</li>
                  <li>Pelanggaran akan ditindak sesuai hukum yang berlaku</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <AlertCircle className="h-6 w-6 mr-3" />
                  Pembatasan Tanggung Jawab
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sejauh diizinkan oleh hukum:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Perusahaan tidak bertanggung jawab atas kerugian tidak langsung</li>
                  <li>Tanggung jawab maksimal terbatas pada nilai transaksi</li>
                  <li>Kami tidak menjamin ketersediaan semua produk setiap saat</li>
                  <li>Force majeure (bencana alam, dll) membebaskan tanggung jawab kami</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800">Pengakhiran Layanan</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Perusahaan berhak menghentikan layanan jika:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Pelanggan melanggar syarat dan ketentuan</li>
                  <li>Terjadi penyalahgunaan layanan</li>
                  <li>Pelanggan terlibat aktivitas ilegal</li>
                  <li>Alasan bisnis yang sah dengan pemberitahuan sebelumnya</li>
                </ul>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800">Penyelesaian Sengketa</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sengketa akan diselesaikan melalui:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Musyawarah:</strong> Upaya damai terlebih dahulu</li>
                  <li><strong>Mediasi:</strong> Dengan bantuan pihak ketiga netral</li>
                  <li><strong>Litigasi:</strong> Pengadilan di Kabupaten Supiori, Papua</li>
                </ol>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Hukum yang berlaku adalah hukum Republik Indonesia.
                </p>
              </CardContent>
            </Card>

            {/* Agreement */}
            <Card className="p-8 bg-gradient-to-br from-emerald-50 to-amber-50 border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3" />
                  Perjanjian
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dengan menggunakan layanan <span className="font-bold text-emerald-700">CV VICTORIA PAPUA</span>, 
                  Anda menyatakan bahwa:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Anda telah membaca, memahami, dan menyetujui semua syarat dan ketentuan</li>
                  <li>Anda memiliki kapasitas hukum untuk membuat perjanjian ini</li>
                  <li>Anda akan mematuhi semua ketentuan yang berlaku</li>
                  <li>Informasi yang Anda berikan adalah benar dan akurat</li>
                </ul>
                
                <div className="bg-emerald-600 text-white p-6 rounded-lg mt-6">
                  <p className="text-center font-semibold text-lg">
                    Terima kasih telah mempercayai CV VICTORIA PAPUA sebagai mitra perdagangan Anda!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-br from-emerald-50 to-amber-50 border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 mb-4">Hubungi Kami</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Untuk pertanyaan tentang Syarat & Ketentuan, silakan hubungi:
                </p>
                <div className="bg-white rounded-lg p-6 space-y-3">
                  <div>
                    <strong className="text-emerald-700">Nama Perusahaan:</strong>
                    <p className="text-gray-700">CV VICTORIA PAPUA</p>
                  </div>
                  <div>
                    <strong className="text-emerald-700">Alamat:</strong>
                    <p className="text-gray-700">
                      SAUYAS, Desa/Kelurahan Sauyas, Kec. Supiori Timur, Kab. Supiori, Provinsi Papua, 98161
                    </p>
                  </div>
                  <div>
                    <strong className="text-emerald-700">Telepon:</strong>
                    <p className="text-gray-700">0823-8246-6239</p>
                  </div>
                  <div>
                    <strong className="text-emerald-700">Email:</strong>
                    <p className="text-gray-700">legal@victoriapapua.co.id</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">VP</span>
            </div>
            <span className="font-bold">VICTORIA PAPUA</span>
          </div>
          <p className="text-emerald-100">
            &copy; 2024 CV VICTORIA PAPUA. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}