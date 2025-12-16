'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Shield, Heart, Package, Users } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                RIZKI AMALIA
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => setActiveSection('home')} className="text-gray-700 hover:text-emerald-600 transition">Beranda</button>
              <button onClick={() => setActiveSection('about')} className="text-gray-700 hover:text-emerald-600 transition">Tentang</button>
              <button onClick={() => setActiveSection('privacy')} className="text-gray-700 hover:text-emerald-600 transition">Privacy</button>
              <button onClick={() => setActiveSection('terms')} className="text-gray-700 hover:text-emerald-600 transition">Terms</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="relative py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  RIZKI AMALIA
                  <span className="block text-3xl text-emerald-600 mt-2">
                    Perdagangan Eceran Barang & Obat
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Terpercaya menyediakan berbagai kebutuhan barang dan obat-obatan berkualitas 
                  dengan pelayanan terbaik untuk kesehatan Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Hubungi Kami
                  </Button>
                  <Button size="lg" variant="outline">
                    Lihat Lokasi
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl transform rotate-3"></div>
                <Card className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">100% Aman</h3>
                      <p className="text-sm text-gray-600">Produk terjamin</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Package className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Lengkap</h3>
                      <p className="text-sm text-gray-600">Semua kebutuhan</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Buka</h3>
                      <p className="text-sm text-gray-600">Setiap hari</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Profesional</h3>
                      <p className="text-sm text-gray-600">Pelayanan terbaik</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang RIZKI AMALIA</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Informasi Perusahaan</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                        <div>
                          <p className="font-medium">Alamat</p>
                          <p className="text-gray-600">
                            Jl. Jati Rejo/Jl. Irian Barat, Desa/Kelurahan Sampali, 
                            Kec. Percut Sei Tuan, Kab. Deli Serdang, Provinsi Sumatera Utara
                          </p>
                          <p className="text-gray-600">Kode Pos: 20371</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-emerald-600" />
                        <div>
                          <p className="font-medium">Telepon</p>
                          <p className="text-gray-600">0877-2988-7781</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-emerald-600" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">info@rizkiamalia.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Tentang Bisnis Kami</h3>
                    <p className="text-gray-600 mb-4">
                      RIZKI AMALIA adalah usaha perdagangan eceran yang berfokus pada penyediaan 
                      barang dan obat-obatan berkualitas. Kami berkomitmen untuk memberikan pelayanan 
                      terbaik kepada pelanggan dengan produk-produk yang aman dan terpercaya.
                    </p>
                    <p className="text-gray-600">
                      Dengan pengalaman dalam industri perdagangan, kami memahami kebutuhan pelanggan 
                      akan produk yang berkualitas dengan harga yang kompetitif. Kepercayaan dan 
                      kepuasan pelanggan adalah prioritas utama kami.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Privacy Section */}
      {activeSection === 'privacy' && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
                </div>
                
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Kebijakan Privasi RIZKI AMALIA</h3>
                  <p className="text-gray-600 mb-4">
                    Di RIZKI AMALIA, kami sangat memperhatikan privasi dan keamanan data pelanggan kami. 
                    Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan 
                    melindungi informasi pribadi Anda.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Informasi yang Kami Kumpulkan</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Nama dan informasi kontak</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                    <li>Riwayat pembelian</li>
                    <li>Informasi penggunaan website</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Penggunaan Informasi</h4>
                  <p className="text-gray-600">
                    Kami menggunakan informasi yang dikumpulkan untuk memproses pesanan, 
                    menyediakan layanan pelanggan, dan meningkatkan pengalaman berbelanja Anda.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Keamanan Data</h4>
                  <p className="text-gray-600">
                    Kami menggunakan teknologi keamanan standar industri untuk melindungi 
                    informasi pribadi Anda dari akses tidak sah.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Terms Section */}
      {activeSection === 'terms' && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
                </div>
                
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Syarat dan Ketentuan RIZKI AMALIA</h3>
                  <p className="text-gray-600 mb-4">
                    Selamat datang di RIZKI AMALIA. Dengan menggunakan layanan kami, 
                    Anda menyetujui syarat dan ketentuan berikut:
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ketentuan Penggunaan</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Usia minimum 18 tahun untuk melakukan pembelian</li>
                    <li>Informasi yang diberikan harus akurat dan valid</li>
                    <li> Bertanggung jawab atas keamanan akun pribadi</li>
                    <li>Tidak menggunakan layanan untuk tujuan ilegal</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Kebijakan Pembelian</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Harga dapat berubah sewaktu-waktu</li>
                    <li>Ketersediaan produk tergantung stok</li>
                    <li>Pembayaran harus dilakukan sesuai metode yang tersedia</li>
                    <li>Pengembalian produk sesuai kebijakan masing-masing</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Batasan Tanggung Jawab</h4>
                  <p className="text-gray-600">
                    RIZKI AMALIA tidak bertanggung jawab atas kerugian langsung atau tidak langsung 
                    yang timbul dari penggunaan layanan kami.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Hubungi RIZKI AMALIA</h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Siap melayani kebutuhan barang dan obat-obatan Anda dengan profesional dan terpercaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              0877-2988-7781
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <MapPin className="w-5 h-5 mr-2" />
              Kunjungi Lokasi
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">RIZKI AMALIA</h3>
              </div>
              <p className="text-gray-400">
                Perdagangan Eceran Barang & Obat terpercaya di Deli Serdang
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>📱 0877-2988-7781</p>
                <p>📍 Sampali, Percut Sei Tuan</p>
                <p>📧 Deli Serdang, Sumatera Utara</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Jam Operasional</h4>
              <div className="space-y-2 text-gray-400">
                <p>Senin - Sabtu: 08:00 - 21:00</p>
                <p>Minggu: 09:00 - 20:00</p>
                <p>🚚 Pengiriman tersedia</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RIZKI AMALIA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}