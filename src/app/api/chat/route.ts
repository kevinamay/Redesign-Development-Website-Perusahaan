import { NextResponse } from "next/server";

// Comprehensive Corporate Knowledge Base for CV. Asia Plastik
const SYSTEM_PROMPT = `
Anda adalah "AsiaBot", asisten AI resmi dari CV. ASIA PLASTIK (asiaplastik.com).
Tugas Anda adalah melayani dan menjawab pertanyaan calon pelanggan, mitra industri, dan pengunjung website dengan ramah, profesional, cerdas, solutif, dan berwawasan luas.

KARAKTER & SIKAP:
- Anda adalah AI sungguhan yang cerdas, fleksibel, dan ramah.
- Jika pengguna menanyakan hal umum atau percakapan santai (misal: rekomendasi makanan, sapaan, lelucon, atau pertanyaan sehari-hari), jawablah dengan natural, ramah, dan manusiawi, lalu hubungkan kembali secara cerdas dan menyenangkan ke dunia manufaktur atau kemasan plastik jika memungkinkan.
- Jika pengguna menanyakan seputar industri atau perusahaan, berikan data teknis yang akurat sesuai informasi resmi CV. Asia Plastik berikut:

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
`;

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

// Built-in intelligent fallback response engine if no Gemini API key is configured
function generateIntelligentFallback(query: string): string {
  const q = query.toLowerCase().trim();

  // 1. Casual / Food / Makanan (Menjawab pertanyaan seperti "enaknya makan apa ya")
  if (
    q.includes("makan") ||
    q.includes("kuliner") ||
    q.includes("laper") ||
    q.includes("lapar") ||
    q.includes("menu") ||
    q.includes("masak") ||
    q.includes("kenyang")
  ) {
    return (
      "Haha, pertanyaan yang asyik! Kalau Anda sedang lapar di sekitar Surabaya (lokasi pabrik kami di Jawa Timur), ini 3 rekomendasi kuliner mantap:\n\n" +
      "1. 🍲 **Rawon Kalkulator / Rawon Setan**: Kuah hitam kluwek khas Jawa Timur dengan potongan daging sapi empuk.\n" +
      "2. 🍗 **Bebek Sinjay / Bebek Palupi**: Bebek goreng renyah berbumbu serundeng gurih dan sambal pencit pedas segar.\n" +
      "3. 🍢 **Tahu Campur / Tahu Tek**: Perpaduan tahu telur dengan saus petis lezat.\n\n" +
      "Nah, kalau bisnis kuliner Anda butuh botol kemasan saus, toples food-grade, atau wadah penyimpanan higienis bersertifikasi, **CV. Asia Plastik** siap menyediakannya! 😉\n\n" +
      "Ada yang bisa saya bantu seputar kemasan produk Anda?"
    );
  }

  // 2. Greetings / Sapaan
  if (
    q === "halo" ||
    q === "hai" ||
    q === "hi" ||
    q === "p" ||
    q === "tes" ||
    q === "test" ||
    q.includes("pagi") ||
    q.includes("siang") ||
    q.includes("sore") ||
    q.includes("malam") ||
    q.startsWith("halo") ||
    q.startsWith("hai")
  ) {
    return (
      "Halo! Selamat datang di **CV. Asia Plastik**. Senang bisa menyapa Anda.\n\n" +
      "Saya adalah **AsiaBot**, asisten AI resmi yang siap membantu Anda menjawab seputar produk kemasan, mesin blow moulding 500L, cetakan kustom, atau sertifikasi ISO 9001:2015.\n\n" +
      "Ada kebutuhan kemasan atau pertanyaan tertentu yang bisa saya bantu?"
    );
  }

  // 3. Siapa Kamu / Identitas / AI sungguhan
  if (
    q.includes("siapa kamu") ||
    q.includes("kamu siapa") ||
    q.includes("tentang kamu") ||
    q.includes("siapa anda") ||
    q.includes("bot apa") ||
    q.includes("beneran ai") ||
    q.includes("ai beneran") ||
    q.includes("asli ai")
  ) {
    return (
      "Saya adalah **AsiaBot**, asisten AI cerdas resmi dari **CV. Asia Plastik**!\n\n" +
      "Saya didukung oleh integrasi generative AI (Google Gemini) serta basis pengetahuan industri manufaktur plastik sejak 1985. Saya siap membantu Anda mengenai:\n" +
      "• Pembuatan produk plastik (Injection & Blow Moulding)\n" +
      "• Spesifikasi mesin Blow Moulding 500 Liter & Injeksi Presisi\n" +
      "• Pembuatan cetakan / mold kustom sesuai sampel Anda\n" +
      "• Sertifikasi mutu ISO 9001:2015\n" +
      "• Konsultasi langsung ke tim Sales via WhatsApp (082244109503)"
    );
  }

  // 4. Humor / Santai / Random
  if (
    q.includes("lucu") ||
    q.includes("cerita") ||
    q.includes("joke") ||
    q.includes("bisa apa") ||
    q.includes("lagi apa") ||
    q.includes("hobi")
  ) {
    return (
      "Sebagai AI manufaktur plastik, saya ahli dalam urusan polimer, resin HDPE, dan cetakan presisi. Tapi saya juga senang diajak ngobrol santai!\n\n" +
      "Tahukah Anda? Wadah plastik modern pertama kali diproduksi secara komersial pada tahun 1940-an. Sekarang di CV. Asia Plastik, kami bahkan sudah bisa memproduksi wadah hingga kapasitas 500 liter dalam satu siklus mesin dengan toleransi mikro!\n\n" +
      "Ada kebutuhan wadah atau kemasan yang sedang Anda rencanakan untuk bisnis Anda?"
    );
  }

  // 5. Material / Resin Plastik (HDPE, PP, PET, LDPE, ABS)
  if (
    q.includes("hdpe") ||
    q.includes("pp") ||
    q.includes("pet") ||
    q.includes("ldpe") ||
    q.includes("resin") ||
    q.includes("bahan") ||
    q.includes("material") ||
    q.includes("plastik apa")
  ) {
    return (
      "CV. Asia Plastik menggunakan berbagai jenis resin polimer bermutu tinggi sesuai fungsi aplikasi produk:\n\n" +
      "• **HDPE (High-Density Polyethylene)**: Kaku, kuat, tahan benturan, tahan bahan kimia keras, dan bersertifikasi *food-grade*. Sangat cocok untuk jerigen industri, drum, dan tangki mesin 500L.\n" +
      "• **PP (Polypropylene)**: Memiliki titik leleh tinggi (~160°C), fleksibilitas engsel luar biasa, tahan lelah mekanis. Ideal untuk krat lipat (*Solid Foldable Industrial Basket*) dan tutup botol presisi.\n" +
      "• **PET & LDPE**: Pilihan bening untuk botol minuman atau fleksibel untuk wadah lentur.\n" +
      "• **Resin Daur Ulang (Eco-Friendly)**: Opsi ramah lingkungan untuk produk logistik dan pergudangan.\n\n" +
      "Butuh rekomendasi bahan plastik terbaik untuk produk spesifik Anda? Tim teknis kami siap memandu via WhatsApp [082244109503](https://wa.me/6282244109503)."
    );
  }

  // 6. Daur Ulang / Ramah Lingkungan / Sustainability
  if (
    q.includes("daur ulang") ||
    q.includes("recycle") ||
    q.includes("lingkungan") ||
    q.includes("eco") ||
    q.includes("sampah")
  ) {
    return (
      "CV. Asia Plastik berkomitmen kuat terhadap manufaktur berkelanjutan (*sustainable manufacturing*):\n\n" +
      "• **100% Recyclable**: Semua produk berbahan resin HDPE dan PP kami dapat didaur ulang sepenuhnya.\n" +
      "• **Program Daur Ulang Mandiri**: Kami mengolah kembali sisa potongan produksi (*runner/flashing*) menggunakan mesin granulator modern tanpa mengurangi integritas struktural produk akhir.\n" +
      "• **Opsi Resin PCR/Daur Ulang**: Tersedia bagi pelanggan industri logistik yang memprioritaskan efisiensi biaya dan standar ESG ramah lingkungan."
    );
  }

  // 7. WhatsApp / Kontak / Pemesanan / Harga / MOQ
  if (
    q.includes("kontak") ||
    q.includes("wa") ||
    q.includes("whatsapp") ||
    q.includes("nomor") ||
    q.includes("telepon") ||
    q.includes("hubungi") ||
    q.includes("pesan") ||
    q.includes("order") ||
    q.includes("beli") ||
    q.includes("harga") ||
    q.includes("biaya") ||
    q.includes("berapa") ||
    q.includes("moq") ||
    q.includes("minimal")
  ) {
    return (
      "Untuk konsultasi langsung, pemesanan, atau permintaan penawaran harga resmi (quotation), Anda dapat langsung menghubungi Admin Sales CV. Asia Plastik melalui:\n\n" +
      "• **WhatsApp Sales**: [082244109503](https://wa.me/6282244109503?text=Halo%2C%20Saya%20ingin%20berkonsultasi%20mengenai%20produk%20CV%20Asia%20Plastik)\n" +
      "• **Telepon Kantor**: +6231 8433078\n" +
      "• **Email**: marketing@asiaplastik.com\n" +
      "• **Jam Kerja**: Senin - Sabtu, 08.00 - 17.00 WIB\n\n" +
      "Tim representatif kami siap memberikan kalkulasi harga kompetitif dan informasi MOQ terbaik sesuai volume pesanan Anda!"
    );
  }

  // 8. Sertifikat ISO / Mutu
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

  // 9. Mesin 500 Liter / Kapasitas / Teknologi
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

  // 10. Produk Unggulan / Krat Lipat / Botol / Jerigen
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

  // 11. Cetakan Kustom / Custom Mold
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

  // 12. Alamat / Lokasi Pabrik / Distribusi Ekspor
  if (
    q.includes("alamat") ||
    q.includes("lokasi") ||
    q.includes("pabrik") ||
    q.includes("dimana") ||
    q.includes("surabaya") ||
    q.includes("ekspor") ||
    q.includes("distribusi")
  ) {
    return (
      "Fasilitas produksi dan kantor pusat CV. Asia Plastik berlokasi di **Kawasan Industri & Pergudangan, Surabaya, Jawa Timur, Indonesia**.\n\n" +
      "Jangkauan distribusi kami meliputi:\n" +
      "• Distribusi nasional ke seluruh pulau dan kota di Indonesia.\n" +
      "• Ekspor global ke lebih dari 20 negara di Asia Pasifik, Australia, Timur Tengah, Eropa, dan Amerika Utara."
    );
  }

  // Default Open Conversational Fallback
  return (
    `Pertanyaan menarik tentang "${query}"!\n\n` +
    "Sebagai asisten AI resmi dari **CV. Asia Plastik**, saya siap membantu menjawab seputar manufaktur plastik modern — mulai dari botol & jerigen industri, krat lipat multifungsi, teknologi mesin blow moulding 500L, hingga pembuatan cetakan khusus (*custom mold*).\n\n" +
    "Apakah ada kebutuhan kemasan atau spesifikasi produk yang ingin Anda konsultasikan bersama kami?"
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
      const models = [
        "gemini-1.5-flash",
        "gemini-1.5-flash-latest",
        "gemini-2.0-flash",
        "gemini-1.5-pro",
      ];

      // Format conversation turns properly for Gemini API:
      // 1. Filter out empty messages
      // 2. Discard starting 'assistant/model' turn because Gemini requires contents to start with 'user'
      // 3. Merge consecutive identical roles to prevent 400 Bad Request
      const filtered = messages.filter((m: Message) => m.content && m.content.trim() !== "");
      const geminiContents: { role: "user" | "model"; parts: { text: string }[] }[] = [];

      for (const msg of filtered.slice(-10)) {
        const role: "user" | "model" = msg.role === "assistant" ? "model" : "user";
        if (geminiContents.length === 0 && role === "model") {
          continue; // Skip leading model message
        }

        if (geminiContents.length > 0 && geminiContents[geminiContents.length - 1].role === role) {
          geminiContents[geminiContents.length - 1].parts[0].text += `\n${msg.content}`;
        } else {
          geminiContents.push({
            role,
            parts: [{ text: msg.content }],
          });
        }
      }

      // If after filtering we have no user turn, provide the last user message
      if (geminiContents.length === 0) {
        geminiContents.push({
          role: "user",
          parts: [{ text: lastUserMessage }],
        });
      }

      for (const model of models) {
        try {
          const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

          const geminiRes = await fetch(geminiEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system_instruction: {
                parts: [{ text: SYSTEM_PROMPT }],
              },
              contents: geminiContents,
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1000,
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
                source: `gemini-${model}`,
              });
            }
          } else {
            const errBody = await geminiRes.text();
            console.warn(`Gemini API ${model} responded with ${geminiRes.status}:`, errBody);
          }
        } catch (err) {
          console.warn(`Failed calling ${model}, trying next:`, err);
        }
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
