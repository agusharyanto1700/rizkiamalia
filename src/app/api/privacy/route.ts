import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const privacyPolicy = {
      title: "Kebijakan Privasi RIZKI AMALIA",
      lastUpdated: "2024",
      sections: [
        {
          heading: "Informasi yang Kami Kumpulkan",
          content: [
            "Nama dan informasi kontak",
            "Alamat pengiriman",
            "Informasi pembayaran",
            "Riwayat pembelian",
            "Informasi penggunaan website"
          ]
        },
        {
          heading: "Penggunaan Informasi",
          content: [
            "Kami menggunakan informasi yang dikumpulkan untuk memproses pesanan",
            "Menyediakan layanan pelanggan",
            "Meningkatkan pengalaman berbelanja Anda",
            "Mengirim informasi promosi (dengan persetujuan)"
          ]
        },
        {
          heading: "Keamanan Data",
          content: [
            "Kami menggunakan teknologi keamanan standar industri",
            "Melindungi informasi pribadi dari akses tidak sah",
            "Enkripsi data transaksi",
            "Kebijakan privasi ketat untuk karyawan"
          ]
        },
        {
          heading: "Hak Anda",
          content: [
            "Akses ke informasi pribadi Anda",
            "Perbaikan data yang tidak akurat",
            "Penghapusan akun dan data",
            "Penolakan terhadap pemasaran langsung"
          ]
        }
      ]
    };

    return NextResponse.json({ 
      success: true, 
      data: privacyPolicy 
    });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch privacy policy' 
    }, { status: 500 });
  }
}