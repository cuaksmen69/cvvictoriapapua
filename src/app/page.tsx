'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Package, Users, TrendingUp, ChevronRight, Menu, X, Shield, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const slides = [
    {
      title: "Solusi Perdagangan Terpercaya",
      subtitle: "Melayani kebutuhan ritel dengan profesionalisme dan integritas",
      image: "/api/placeholder/1920/1080"
    },
    {
      title: "Dari Papua Untuk Indonesia",
      subtitle: "Membawa produk berkualitas dari timur ke seluruh nusantara",
      image: "/api/placeholder/1920/1080"
    },
    {
      title: "Partner Bisnis Anda",
      subtitle: "Bergabunglah dengan jaringan perdagangan terkemuka",
      image: "/api/placeholder/1920/1080"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(result.error || 'Terjadi kesalahan. Silakan coba lagi.');
      }
    } catch (error) {
      setSubmitMessage('Terjadi kesalahan server. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VP</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                VICTORIA PAPUA
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Kontak</a>
              <Link href="/privacy" className="text-gray-700 hover:text-emerald-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-emerald-600 transition-colors">Terms</Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700">Beranda</a>
              <a href="#about" className="block py-2 text-gray-700">Tentang</a>
              <a href="#services" className="block py-2 text-gray-700">Layanan</a>
              <a href="#contact" className="block py-2 text-gray-700">Kontak</a>
              <Link href="/privacy" className="block py-2 text-gray-700">Privacy</Link>
              <Link href="/terms" className="block py-2 text-gray-700">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-amber-600/10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/logo.png" 
                alt="CV VICTORIA PAPUA Logo" 
                className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-2xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent leading-tight">
              CV VICTORIA PAPUA
            </h1>
            
            <div className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">
              PERDAGANGAN ECERAN
            </div>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Mitra terpercaya dalam perdagangan eceran yang melayani dengan integritas, 
              profesionalisme, dan komitmen terhadap kepuasan pelanggan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hubungi Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Package className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="font-bold text-emerald-800 mb-2">Produk Berkualitas</h3>
                <p className="text-gray-600 text-sm">Menyediakan produk terbaik untuk kebutuhan ritel Anda</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-bold text-amber-800 mb-2">Pelayanan Prima</h3>
                <p className="text-gray-600 text-sm">Dedikasi penuh untuk kepuasan pelanggan</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="font-bold text-emerald-800 mb-2">Berkembang Pesat</h3>
                <p className="text-gray-600 text-sm">Terus tumbuh dan berinovasi dalam industri perdagangan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                Tentang CV VICTORIA PAPUA
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-800 mb-3">Mitra Perdagangan Terpercaya</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-bold text-emerald-700 text-xl">CV VICTORIA PAPUA</span> adalah perusahaan perdagangan eceran yang berkomitmen untuk menyediakan produk berkualitas tinggi dan layanan terbaik bagi pelanggan di Papua dan sekitarnya.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-emerald-800 mb-2">Visi Kami</h4>
                    <p className="text-gray-600">
                      Menjadi mitra perdagangan pilihan utama yang terpercaya, profesional, dan berintegritas tinggi dalam melayani kebutuhan masyarakat.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-emerald-800 mb-2">Misi Kami</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        Menyediakan produk berkualitas dengan harga kompetitif
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        Memberikan pelayanan prima yang memenuhi kepuasan pelanggan
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        Mendukung pertumbuhan ekonomi lokal melalui perdagangan yang adil
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-6 w-6 text-emerald-600 mr-3" />
                      <h4 className="font-bold text-gray-800">Lokasi Strategis</h4>
                    </div>
                    <p className="text-gray-600">
                      Sauyas, Kec. Supiori Timur, Kab. Supiori, Provinsi Papua
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <Phone className="h-6 w-6 text-emerald-600 mr-3" />
                      <h4 className="font-bold text-gray-800">Hubungi Kami</h4>
                    </div>
                    <p className="text-gray-600">0823-8246-6239</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-600 to-amber-600 rounded-xl p-6 text-white">
                    <h4 className="font-bold text-xl mb-2">Kode Pos</h4>
                    <p className="text-3xl font-bold">98161</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi perdagangan eceran yang komprehensif untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Perdagangan Eceran</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menyediakan berbagai produk kebutuhan sehari-hari dengan kualitas terjamin dan harga yang kompetitif untuk memenuhi kebutuhan masyarakat lokal.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Konsultasi Bisnis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Memberikan konsultasi dan bimbingan untuk mitra bisnis dalam mengembangkan usaha perdagangan yang berkelanjutan dan menguntungkan.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pengembangan Pasar</h3>
                <p className="text-gray-600 leading-relaxed">
                  Membantu mengembangkan jaringan distribusi dan memperluas jangkauan pasar untuk produk-produk lokal berkualitas tinggi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                Hubungi Kami
              </h2>
              <p className="text-xl text-gray-600">
                Siap melayani kebutuhan perdagangan Anda
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-emerald-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Telepon</h3>
                      <p className="text-emerald-600 font-semibold">0823-8246-6239</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-amber-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Alamat</h3>
                      <p className="text-gray-600">
                        SAUYAS, Desa/Kelurahan Sauyas<br />
                        Kec. Supiori Timur, Kab. Supiori<br />
                        Provinsi Papua, 98161
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-emerald-600">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@victoriapapua.co.id</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <Card className="p-8 bg-gradient-to-br from-emerald-50 to-amber-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Tulis pesan Anda..."
                      required
                    ></textarea>
                  </div>
                  
                  {submitMessage && (
                    <div className={`p-4 rounded-lg ${submitMessage.includes('berhasil') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                      {submitMessage}
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">VP</span>
                </div>
                <span className="font-bold text-xl">VICTORIA PAPUA</span>
              </div>
              <p className="text-emerald-100">
                Mitra terpercaya dalam perdagangan eceran yang berkomitmen pada kualitas dan kepuasan pelanggan.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Layanan Cepat</h4>
              <ul className="space-y-2 text-emerald-100">
                <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Layanan</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Informasi</h4>
              <ul className="space-y-2 text-emerald-100">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  0823-8246-6239
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Sauyas, Supiori Timur
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-100">
            <p>&copy; 2024 CV VICTORIA PAPUA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}