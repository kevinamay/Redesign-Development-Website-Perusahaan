import { NextResponse } from "next/server";

// Comprehensive Corporate Knowledge Base for CV. Asia Plastik
const SYSTEM_PROMPT = `
Anda adalah "AsiaBot", asisten AI resmi dari CV. ASIA PLASTIK (asiaplastik.com).
Tugas Anda adalah melayani dan menjawab pertanyaan calon pelanggan, mitra industri, dan pengunjung website dengan ramah, profesional, jelas, dan akurat.

INFORMASI RESMI PERUSAHAAN (KNOWLEDGE BASE):
1. Profil & Sejarah:
   - Nama Perusahaan: CV. ASIA PLASTIK
   - Didirikan: Sejak tahun 1985 (berpengalaman lebih dari 35 tahun di industri plastik).
   - Lokasi: Kawasan Industri & Pergudangan, Surabaya, Jawa Timur, Indonesia.
   - Status Mutu: Bersertifikat resmi ISO 9001:2015 (sebelumnya meraih ISO 9001:2000 pada tahun 2005).

2. Bidang Spesialisasi Manufaktur:
   - Plastic Injection Molding (komponen industri presisi tinggi, tutup botol/caps, krat lipat, wadah industri).
   - Plastic Blow Moulding (botol plastik 100ml - 20L, jerigen industri tahan bocor, drum, pelampung laut).
   - Mesin Blow Moulding 500 Liter: Mesin heavy-duty berkapasitas ekstra besar hingga 500 liter single-shot, ketebalan dinding merata, toleransi presisi mikro ±0.05 mm, kontrol parison otomatis.
   - In-House Mold Making & Tooling: Menerima pembuatan cetakan kustom (custom mold design & fabrication) sesuai spesifikasi dan sampel klien.

3. Produk Unggulan:
   - Solid Foldable Industrial Basket: Krat lipat industri multifungsi berbahan Food Grade HDPE/PP berdaya tahan tinggi, menghemat ruang simpan hingga 75% saat dilipat.
   - Botol & Jerigen Plastik: Kapasitas 100ml hingga 20 Liter untuk industri F&B, cairan kimia, pelumas, kosmetik, dan pembersih.
   - Palet Plastik Blow & Wadah Logistik: Kokoh, tahan benturan, tahan cuaca ekstrem.
   - Ember, galon, pelampung jaring laut, dan wadah kebutuhan peternakan.

4. Material / Resin yang Digunakan:
   - HDPE (High-Density Polyethylene), PP (Polypropylene), LDPE, PET, ABS.
   - Pilihan food-grade aman untuk makanan & minuman, serta resin industri tahan zat kimia agresif.
   - Opsi daur ulang ramah lingkungan (sustainable eco-friendly resins).

5. Jangkauan Distribusi:
   - Pasar domestik nasional di seluruh Indonesia.
   - Ekspor global ke lebih dari 20 negara di kawasan Asia Pasifik, Australia, Timur Tengah, Eropa, dan Amerika Utara.

6. Kontak & Pemesanan:
   - WhatsApp Admin Sales: 082244109503 (+62 822-4410-9503)
   - Telepon Kantor: +6231 8433078
   - Email: marketing@asiaplastik.com
   - Jam Operasional: Senin - Sabtu: 08.00 - 17.00 WIB.

PANDUAN MENJAWAB:
- Jawablah menggunakan bahasa yang sama dengan pengguna (default: Bahasa Indonesia, atau English / Mandarin jika pengguna bertanya dalam bahasa tersebut).
- Berikan jawaban yang informatif, ringkas, terstruktur (gunakan bullet points jika perlu), dan mudah dipahami.
- Jika pengguna menanyakan harga, Minimum Order Quantity (MOQ), atau ingin meminta penawaran cetakan khusus, arahkan mereka untuk menghubungi tim sales via WhatsApp di 082244109503 agar mendapatkan kalkulasi penawaran terbaik.
- Jangan mengarang data teknis yang tidak berkaitan dengan manufaktur plastik.
`;

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

// Built-in intelligent fallback response engine if no Gemini API key is configured
function generateIntelligentFallback(query: string): string {
  const q = query.toLowerCase();

  // 1. WhatsApp / Kontak / Pemesanan
  if (
    q.includes("kontak") ||
    q.includes("wa") ||
    q.includes("whatsapp") ||
    q.includes("nomor") ||
    q.includes("telepon") ||
    q.includes("hubungi") ||
    q.includes("pesan") ||
    q.includes("order") ||
    q.includes("beli")
  ) {
    return (
      "Untuk konsultasi langsung, pemesanan, atau permintaan penawaran harga resmi (quotation), Anda dapat langsung menghubungi Admin Sales CV. Asia Plastik melalui:\n\n" +
      "• **WhatsApp Sales**: [082244109503](https://wa.me/6282244109503?text=Halo%2C%20Saya%20ingin%20berkonsultasi%20mengenai%20produk%20CV%20Asia%20Plastik)\n" +
      "• **Telepon Hotline**: +6231 8433078\n" +
      "• **Email**: marketing@asiaplastik.com\n" +
      "• **Jam Kerja**: Senin - Sabtu, 08.00 - 17.00 WIB\n\n" +
      "Tim representatif kami siap membantu kebutuhan kemasan plastik dan cetakan kustom Anda!"
    );
  }

  // 2. Sertifikat ISO / Mutu
  if (
    q.includes("iso") ||
    q.includes("sertifikat") ||
    q.includes("mutu") ||
    q.includes("quality") ||
    q.includes("standar")
  ) {
    return (
      "CV. Asia Plastik telah tersertifikasi sistem manajemen mutu internasional **ISO 9001:2015** (yang dikembangkan dari perolehan awal ISO 9001:2000 sejak tahun 2005).\n\n" +
      "Standar mutu kami mencakup:\n" +
      "• **Inspeksi Toleransi Mikro Ketat**: Pengujian dimensi, kerapatan dinding, dan uji kebocoran.\n" +
      "• **Quality Control Terpadu**: Di setiap batch proses injection & blow molding.\n" +
      "• **Audit Berkala Konsisten**: Menjamin kepatuhan regulasi industri nasional dan ekspor global."
    );
  }

  // 3. Mesin 500 Liter / Kapasitas / Teknologi
  if (
    q.includes("500") ||
    q.includes("mesin") ||
    q.includes("kapasitas") ||
    q.includes("blow") ||
    q.includes("injection") ||
    q.includes("moulding")
  ) {
    return (
      "CV. Asia Plastik memiliki keunggulan fasilitas teknologi manufaktur mutakhir:\n\n" +
      "• **Mesin Blow Moulding 500 Liter**: Mampu memproduksi tangki dan wadah industri hingga kapasitas 500 liter dalam satu siklus tunggal (*single-shot*) dengan ketebalan dinding merata dan toleransi presisi mikro (±0.05 mm).\n" +
      "• **Lini Injection Molding Otomatis**: Dilengkapi mesin servo ramah energi untuk siklus cetak cepat berpresisi tinggi (komponen teknis, tutup botol, krat lipat industri).\n" +
      "• **In-House Tooling Unit**: Fasilitas pembuatan dan perawatan cetakan (mold) mandiri untuk menjamin ketepatan waktu produksi."
    );
  }

  // 4. Produk Unggulan / Krat Lipat / Botol / Jerigen
  if (
    q.includes("produk") ||
    q.includes("krat") ||
    q.includes("keranjang") ||
    q.includes("basket") ||
    q.includes("jerigen") ||
    q.includes("botol") ||
    q.includes("palet") ||
    q.includes("galon") ||
    q.includes("ember")
  ) {
    return (
      "Lini produk manufaktur CV. Asia Plastik meliputi:\n\n" +
      "1. **Solid Foldable Industrial Basket**: Krat industri lipat multifungsi hemat ruang penyimpanan hingga 75% saat dilipat, berbahan food-grade tahan benturan tinggi.\n" +
      "2. **Botol & Jerigen Industri**: Beragam ukuran (100ml - 20 Liter) untuk kebutuhan industri F&B, kimia, pelumas oli, dan kosmetik.\n" +
      "3. **Palet Plastik Blow & Drum**: Wadah tugas berat untuk pergudangan dan logistik.\n" +
      "4. **Kebutuhan Khusus**: Ember industri, galon cairan, pelampung jaring laut, dan perlengkapan peternakan.\n\n" +
      "Semua produk dapat disesuaikan warna, logo cetak, dan ketebalan material sesuai kebutuhan spesifik Anda."
    );
  }

  // 5. Cetakan Kustom / Custom Mold
  if (
    q.includes("custom") ||
    q.includes("kustom") ||
    q.includes("cetakan") ||
    q.includes("mold") ||
    q.includes("tooling") ||
    q.includes("desain")
  ) {
    return (
      "Ya, kami melayani **Produksi Kustom & In-House Tooling Mold Fabrication**!\n\n" +
      "• Kami dapat merancang cetakan baru berdasarkan gambar teknik (CAD/3D), sampel fisik produk, atau konsep kebutuhan Anda.\n" +
      "• Didukung mesin CNC presisi dan tim engineering berpengalaman sejak 1985.\n" +
      "• Pilihan resin fleksibel: HDPE, PP, LDPE, ABS, dan material *food-grade*.\n\n" +
      "Silakan diskusikan spesifikasi cetakan kustom Anda dengan tim sales kami di WhatsApp: [082244109503](https://wa.me/6282244109503)."
    );
  }

  // 6. Alamat / Lokasi Pabrik
  if (
    q.includes("alamat") ||
    q.includes("lokasi") ||
    q.includes("pabrik") ||
    q.includes("dimana") ||
    q.includes("surabaya")
  ) {
    return (
      "Fasilitas produksi dan kantor pusat CV. Asia Plastik berlokasi di **Kawasan Industri & Pergudangan, Surabaya, Jawa Timur, Indonesia**.\n\n" +
      "Kami melayani pengiriman logistik ke seluruh wilayah Indonesia serta ekspor ke lebih dari 20 negara di seluruh dunia."
    );
  }

  // Default General Greeting & Introduction
  return (
    "Halo! Saya adalah **AsiaBot**, asisten AI resmi dari **CV. Asia Plastik**.\n\n" +
    "Kami adalah perusahaan manufaktur kemasan dan komponen plastik presisi (*Injection & Blow Moulding*) yang beroperasi sejak tahun 1985 dan bersertifikat ISO 9001:2015.\n\n" +
    "Ada yang bisa saya bantu hari ini? Anda dapat bertanya seputar:\n" +
    "• Spesifikasi produk (Krat lipat industri, jerigen, botol plastik)\n" +
    "• Kapasitas mesin Blow Moulding 500 Liter & Injeksi\n" +
    "• Pembuatan cetakan / mold kustom\n" +
    "• Sertifikasi mutu ISO 9001:2015\n" +
    "• Kontak pemesanan & konsultasi WhatsApp Sales (082244109503)"
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages, apiKey: clientApiKey } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Pesan tidak boleh kosong" },
        { status: 400 }
      );
    }

    const lastUserMessage = messages[messages.length - 1]?.content || "";
    const apiKey =
      clientApiKey ||
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_AI_API_KEY ||
      process.env.GOOGLE_API_KEY;

    // If a valid Gemini API Key is available, invoke the official Gemini API directly
    if (apiKey) {
      try {
        // Prepare Gemini multi-turn message payload
        const contents = [
          {
            role: "user",
            parts: [{ text: SYSTEM_PROMPT }],
          },
          {
            role: "model",
            parts: [
              {
                text: "Siap, saya mengerti. Saya adalah AsiaBot, asisten AI resmi CV. Asia Plastik. Saya akan memberikan jawaban yang akurat, ramah, dan solutif seputar profil, teknologi, produk, dan pemesanan kemasan plastik CV. Asia Plastik.",
              },
            ],
          },
          ...messages.slice(-6).map((msg: Message) => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }],
          })),
        ];

        // Call Gemini 1.5 Flash (or 2.5 Flash) endpoint
        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        const geminiRes = await fetch(geminiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 800,
            },
          }),
        });

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const replyText =
            geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (replyText) {
            return NextResponse.json({
              reply: replyText,
              source: "gemini-api",
            });
          }
        } else {
          const errText = await geminiRes.text();
          console.warn("Gemini API returned error, using fallback engine:", errText);
        }
      } catch (geminiError) {
        console.warn("Error calling Gemini API, switching to fallback:", geminiError);
      }
    }

    // High-performance intelligent corporate fallback engine
    const reply = generateIntelligentFallback(lastUserMessage);
    return NextResponse.json({
      reply,
      source: "asia-plastik-knowledge-engine",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        reply:
          "Mohon maaf, terjadi gangguan sesaat. Anda dapat langsung berkonsultasi via WhatsApp ke Admin Sales kami di [082244109503](https://wa.me/6282244109503).",
      },
      { status: 200 }
    );
  }
}
