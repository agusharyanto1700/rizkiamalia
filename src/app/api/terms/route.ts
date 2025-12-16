import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const termsConditions = {
      title: "Syarat dan Ketentuan RIZKI AMALIA",
      lastUpdated: "2024",
      sections: [
        {
          heading: "Ketentuan Penggunaan",
          content: [
            "Usia minimum 18 tahun untuk melakukan pembelian",
            "Informasi yang diberikan harus akurat dan valid",
            "Bertanggung jawab atas keamanan akun pribadi",
            "Tidak menggunakan layanan untuk tujuan ilegal",
            "Menghormati hak kekayaan intelektual"
          ]
        },
        {
          heading: "Kebijakan Pembelian",
          content: [
            "Harga dapat berubah sewaktu-waktu",
            "Ketersediaan produk tergantung stok",
            "Pembayaran harus dilakukan sesuai metode yang tersedia",
            "Pengembalian produk sesuai kebijakan masing-masing",
            "Batasi pembelian obat-obatan tertentu"
          ]
        },
        {
          heading: "Pengiriman dan Pengembalian",
          content: [
            "Pengiriman ke wilayah yang terjangkau",
            "Biaya pengiriman ditanggung pembeli",
            "Pengembalian dalam kondisi asli",
            "Garansi produk sesuai ketentuan produsen"
          ]
        },
        {
          heading: "Batasan Tanggung Jawab",
          content: [
            "Tidak bertanggung jawab atas kerugian langsung atau tidak langsung",
            "Tidak menjamin ketersediaan semua produk",
            "Hak untuk menolak pesanan yang mencurigakan",
            "Perubahan syarat dan ketentuan tanpa pemberitahuan sebelumnya"
          ]
        }
      ]
    };

    return NextResponse.json({ 
      success: true, 
      data: termsConditions 
    });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch terms and conditions' 
    }, { status: 500 });
  }
}