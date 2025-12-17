'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Lock, Cookie, UserCheck, Database, ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600">
              CV VICTORIA PAPUA - Perlindungan Data Pribadi Anda
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
                  Kami sangat memperhatikan privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan 
                  bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika 
                  menggunakan layanan perdagangan eceran kami.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <Database className="h-6 w-6 mr-3" />
                  Pengumpulan Data
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Informasi yang Kami Kumpulkan:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Data Identitas Pribadi:</strong> Nama lengkap, alamat, nomor telepon, email</li>
                      <li><strong>Informasi Kontak:</strong> Nomor telepon, alamat email, alamat pengiriman</li>
                      <li><strong>Informasi Bisnis:</strong> Nama perusahaan, NPWP (jika applicable), jenis usaha</li>
                      <li><strong>Informasi Transaksi:</strong> Riwayat pembelian, produk yang dipesan, metode pembayaran</li>
                      <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, waktu akses, informasi perangkat</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Cara Kami Mengumpulkan Data:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Formulir pendaftaran dan kontak online</li>
                      <li>Komunikasi langsung (telepon, email, WhatsApp)</li>
                      <li>Transaksi perdagangan dan pembelian</li>
                      <li>Kunjungan ke lokasi fisik kami</li>
                      <li>Analytics dan cookies website</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <Eye className="h-6 w-6 mr-3" />
                  Penggunaan Data
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami menggunakan data pribadi Anda untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Memproses dan menyelesaikan transaksi perdagangan</li>
                  <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                  <li>Mengirimkan informasi produk dan penawaran khusus</li>
                  <li>Meningkatkan kualitas produk dan layanan kami</li>
                  <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                  <li>Mencegah kecurangan dan aktivitas ilegal</li>
                  <li>Menganalisis tren dan preferensi pelanggan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <Lock className="h-6 w-6 mr-3" />
                  Perlindungan Data
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <span className="font-bold text-emerald-700">CV VICTORIA PAPUA</span> berkomitmen untuk melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Enkripsi Data:</strong> Menggunakan teknologi enkripsi standar industri</li>
                  <li><strong>Akses Terbatas:</strong> Hanya personel berwenang yang dapat mengakses data</li>
                  <li><strong>Keamanan Fisik:</strong> Perlindungan dokumen fisik di lokasi aman</li>
                  <li><strong>Monitoring Keamanan:</strong> Sistem pemantauan 24/7 untuk mendeteksi ancaman</li>
                  <li><strong>Update Reguler:</strong> Pembaruan keamanan sistem secara berkala</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <Cookie className="h-6 w-6 mr-3" />
                  Kebijakan Cookie
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file kecil 
                  yang disimpan di browser Anda. Kami menggunakan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookies Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                  <li><strong>Cookies Fungsional:</strong> Mengingat preferensi Anda</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <UserCheck className="h-6 w-6 mr-3" />
                  Hak Anda sebagai Pengguna
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sebagai pemilik data, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Mengakses Data:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Mengoreksi Data:</strong> Memperbaiki data yang tidak akurat</li>
                  <li><strong>Menghapus Data:</strong> Meminta penghapusan data pribadi (dengan batasan)</li>
                  <li><strong>Membatasi Pemrosesan:</strong> Membatasi cara kami menggunakan data Anda</li>
                  <li><strong>Menarik Persetujuan:</strong> Menarik persetujuan yang telah diberikan</li>
                  <li><strong>Transfer Data:</strong> Meminta transfer data ke pihak ketiga</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-br from-emerald-50 to-amber-50 border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800 mb-4">Hubungi Kami</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin melaksanakan hak Anda, 
                  silakan hubungi kami:
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
                    <p className="text-gray-700">privacy@victoriapapua.co.id</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800">Pembaruan Kebijakan</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan 
                  dalam praktik bisnis kami atau perubahan peraturan yang berlaku. Setiap perubahan akan 
                  diberitahukan melalui website kami atau komunikasi langsung.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg">
                  <p className="text-amber-800">
                    <strong>Penting:</strong> Penggunaan terus menerus layanan kami setelah perubahan 
                    kebijakan merupakan persetujuan Anda terhadap kebijakan yang diperbarui.
                  </p>
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