// ── Generate clouds ──
const cloudBg = document.getElementById('cloudsBg');
const cloudShapes = [
  `<svg width="120" height="50" viewBox="0 0 120 50" fill="none"><ellipse cx="60" cy="38" rx="55" ry="18" fill="white"/><ellipse cx="40" cy="30" rx="28" ry="22" fill="white"/><ellipse cx="75" cy="28" rx="25" ry="20" fill="white"/><ellipse cx="58" cy="20" rx="20" ry="18" fill="white"/></svg>`,
  `<svg width="90" height="38" viewBox="0 0 90 38" fill="none"><ellipse cx="45" cy="30" rx="40" ry="14" fill="white"/><ellipse cx="30" cy="23" rx="22" ry="17" fill="white"/><ellipse cx="58" cy="22" rx="19" ry="16" fill="white"/><ellipse cx="44" cy="15" rx="15" ry="14" fill="white"/></svg>`,
  `<svg width="150" height="55" viewBox="0 0 150 55" fill="none"><ellipse cx="75" cy="44" rx="68" ry="18" fill="white"/><ellipse cx="48" cy="34" rx="34" ry="26" fill="white"/><ellipse cx="95" cy="32" rx="30" ry="24" fill="white"/><ellipse cx="72" cy="22" rx="24" ry="20" fill="white"/></svg>`,
];

for (let i = 0; i < 7; i++) {
  const div = document.createElement('div');
  div.className = 'cloud';
  const top = Math.random() * 75;
  const dur = 28 + Math.random() * 30;
  const delay = -Math.random() * dur;
  const scale = 0.6 + Math.random() * 0.8;
  div.style.cssText = `top:${top}%;left:-220px;transform:scale(${scale});animation-duration:${dur}s;animation-delay:${delay}s;`;
  div.innerHTML = cloudShapes[i % cloudShapes.length];
  cloudBg.appendChild(div);
}

// ── Generate stars ──
const starBg = document.getElementById('starsBg');
const starEmojis = ['⭐','✨','🌟','💫','⭐'];
for (let i = 0; i < 18; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.textContent = starEmojis[i % starEmojis.length];
  s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*3}s;animation-duration:${2+Math.random()*2}s;font-size:${10+Math.random()*8}px;`;
  starBg.appendChild(s);
}

// ── DATA ──
const data = [
  // ── NOMINAL ──
  { name:"Binomial Test", skala:["nominal"],jenis:["nonpara"], ci:"ci-nom",cat:"cat-nom",emoji:"2️⃣",
    deskripsi:"Menguji apakah proporsi observasi pada dua kategori sesuai dengan proporsi yang dihipotesiskan. Digunakan ketika data hanya memiliki dua kemungkinan hasil (ya/tidak, sukses/gagal).",
    kapan:"Satu sampel, data nominal dengan <strong>2 kategori</strong>, ingin menguji apakah proporsi sesuai teori.",
    syarat:"Data berskala nominal, hanya ada <strong>2 kategori (dikotomi)</strong>, satu sampel.",
    contoh:"Apakah proporsi responden yang memilih 'setuju' (60%) berbeda signifikan dari proporsi yang diharapkan (50%)?" },
  { name:"Chi-square Satu Sampel", skala:["nominal"],jenis:["nonpara"], ci:"ci-nom",cat:"cat-nom",emoji:"📊",
    deskripsi:"Menguji apakah frekuensi observasi pada tiap kategori sesuai dengan frekuensi yang diharapkan berdasarkan teori. Cocok untuk lebih dari dua kategori.",
    kapan:"Satu sampel, data nominal <strong>≥2 kategori</strong>, membandingkan distribusi observasi vs teori.",
    syarat:"Frekuensi harapan tiap sel <strong>≥ 5</strong>, data nominal, satu sampel.",
    contoh:"Apakah distribusi agama mahasiswa (Islam 70%, Kristen 15%, lainnya 15%) sesuai distribusi populasi umum?" },
  { name:"Mc Nemar Test", skala:["nominal"],jenis:["nonpara"], ci:"ci-nom",cat:"cat-nom",emoji:"🔄",
    deskripsi:"Menguji perubahan proporsi pada dua pengukuran berpasangan dari subjek yang sama (sebelum–sesudah). Dirancang khusus untuk data dikotomi.",
    kapan:"Dua kelompok <strong>berpasangan</strong>, data nominal dikotomi, mengukur perubahan sebelum–sesudah intervensi.",
    syarat:"Data dikotomi (2 kategori), kelompok berpasangan, <strong>desain pre-post</strong>.",
    contoh:"Apakah ada perubahan signifikan proporsi mahasiswa 'tidak paham' → 'paham' setelah pelatihan?" },
  { name:"Fisher Exact Probability", skala:["nominal"],jenis:["nonpara"], ci:"ci-nom",cat:"cat-nom",emoji:"🎯",
    deskripsi:"Alternatif Chi-square ketika sampel kecil atau frekuensi harapan sel kurang dari 5. Menghitung probabilitas eksak dari tabel kontingensi 2×2.",
    kapan:"Dua kelompok independen, data nominal, <strong>sampel kecil (n&lt;20)</strong> atau frekuensi harapan &lt;5.",
    syarat:"Tabel 2×2, dua kelompok bebas, sampel kecil, <strong>frekuensi harapan &lt;5</strong>.",
    contoh:"Apakah ada hubungan antara jenis kelamin dan keikutsertaan organisasi pada kelompok mahasiswa baru yang kecil?" },
  { name:"Chi-square Dua Sampel", skala:["nominal"],jenis:["nonpara"], ci:"ci-nom",cat:"cat-nom",emoji:"📋",
    deskripsi:"Menguji apakah ada perbedaan distribusi frekuensi antara dua kelompok independen. Uji paling umum untuk data nominal dua kelompok bebas dengan sampel besar.",
    kapan:"Dua kelompok <strong>independen</strong>, data nominal, sampel besar, frekuensi harapan tiap sel ≥5.",
    syarat:"Dua kelompok bebas, <strong>frekuensi harapan ≥5</strong> per sel, data nominal.",
    contoh:"Apakah ada perbedaan proporsi pilihan partai politik antara kelompok laki-laki dan perempuan?" },
  { name:"Chi-square k Sampel", skala:["nominal"],jenis:["nonpara"], ci:"ci-nom",cat:"cat-nom",emoji:"📐",
    deskripsi:"Perluasan Chi-square untuk lebih dari dua kelompok. Menguji apakah ada perbedaan distribusi proporsi di antara beberapa kelompok sekaligus.",
    kapan:"<strong>Lebih dari 2 kelompok</strong>, data nominal, ingin menguji perbedaan distribusi antar semua kelompok.",
    syarat:"Lebih dari 2 kelompok, data nominal.",
    contoh:"Apakah ada perbedaan pilihan metode belajar (online/offline/hybrid) antara mahasiswa Semester 1, 3, 5, dan 7?" },
  { name:"Cochran Q Test", skala:["nominal"],jenis:["nonpara"], ci:"ci-nom",cat:"cat-nom",emoji:"🔁",
    deskripsi:"Perluasan Mc Nemar untuk lebih dari dua pengukuran berpasangan pada data dikotomi. Menguji perubahan proporsi konsisten di tiga kondisi atau lebih.",
    kapan:"<strong>Lebih dari 2</strong> pengukuran berpasangan, data dikotomi, subjek diukur berulang.",
    syarat:"Data dikotomi, >2 kondisi berpasangan, subjek yang sama diukur berulang.",
    contoh:"Apakah proporsi mahasiswa 'berhasil' mengerjakan soal berbeda signifikan pada minggu ke-1, ke-3, dan ke-5?" },
  { name:"Contingency Coefficient C", skala:["nominal"],jenis:["nonpara"], ci:"ci-nom",cat:"cat-nom",emoji:"🔗",
    deskripsi:"Mengukur kekuatan hubungan (korelasi) antara dua variabel nominal. Nilainya 0 (tidak ada) hingga mendekati 1 (sangat kuat). Diturunkan dari nilai Chi-square.",
    kapan:"Mengukur <strong>asosiasi</strong> antara dua variabel nominal, setelah Chi-square signifikan.",
    syarat:"Dua variabel nominal, tabel kontingensi, sebaiknya digunakan bersama Chi-square.",
    contoh:"Seberapa kuat hubungan antara jenis kelamin dan pilihan jurusan kuliah?" },

  // ── ORDINAL ──
  { name:"Run Test", skala:["ordinal"],jenis:["nonpara"], ci:"ci-ord",cat:"cat-ord",emoji:"🎲",
    deskripsi:"Menguji apakah urutan atau sekuens data bersifat acak atau menunjukkan pola tertentu. Digunakan untuk mendeteksi tren, siklus, atau non-randomness dalam data.",
    kapan:"Satu sampel ordinal/nominal, ingin menguji <strong>kerandoman urutan</strong> data.",
    syarat:"Satu sampel, data dikotomi atau ordinal, fokus pada urutan kemunculan nilai.",
    contoh:"Apakah urutan jawaban benar-salah mahasiswa dalam ujian bersifat acak, atau ada pola menebak?" },
  { name:"Wilcoxon Matched Pairs", skala:["ordinal"],jenis:["nonpara"], ci:"ci-ord",cat:"cat-ord",emoji:"⚖️",
    deskripsi:"Alternatif non-parametrik dari Paired t-test. Menguji perbedaan signifikan antara dua pengukuran berpasangan dengan membandingkan ranking selisih skor.",
    kapan:"Dua kelompok berpasangan, data ordinal atau <strong>interval tidak normal</strong>, desain pre-post.",
    syarat:"Dua kondisi berpasangan, data ordinal atau interval tidak normal, sampel <strong>≥6</strong>.",
    contoh:"Apakah ada perbedaan skor kepuasan mahasiswa sebelum dan sesudah perbaikan sistem akademik?" },
  { name:"Mann-Whitney U Test", skala:["ordinal"],jenis:["nonpara"], ci:"ci-ord",cat:"cat-ord",emoji:"🏆",
    deskripsi:"Alternatif non-parametrik dari Independent t-test. Membandingkan dua kelompok bebas dengan menguji apakah salah satu kelompok cenderung memiliki nilai lebih tinggi.",
    kapan:"Dua kelompok <strong>independen</strong>, data ordinal atau interval tidak normal.",
    syarat:"Dua kelompok bebas, data ordinal atau interval <strong>tidak memenuhi asumsi normalitas</strong>.",
    contoh:"Apakah ada perbedaan tingkat stres antara mahasiswa kos dan mahasiswa yang tinggal bersama orang tua?" },
  { name:"Friedman Test", skala:["ordinal"],jenis:["nonpara"], ci:"ci-ord",cat:"cat-ord",emoji:"📈",
    deskripsi:"Alternatif non-parametrik dari Repeated Measure ANOVA. Menguji perbedaan di antara lebih dari dua kondisi berpasangan berdasarkan ranking dalam setiap baris subjek.",
    kapan:"<strong>Lebih dari 2</strong> kondisi berpasangan, data ordinal atau interval tidak normal.",
    syarat:">2 kondisi berpasangan, subjek yang sama diukur berulang, data ordinal/interval tidak normal.",
    contoh:"Apakah ada perbedaan skor motivasi belajar mahasiswa pada bulan ke-1, ke-3, dan ke-6 program mentoring?" },
  { name:"Kruskal-Wallis Test", skala:["ordinal"],jenis:["nonpara"], ci:"ci-ord",cat:"cat-ord",emoji:"🏗️",
    deskripsi:"Alternatif non-parametrik dari One Way ANOVA. Membandingkan lebih dari dua kelompok bebas menggunakan ranking. Jika signifikan, perlu uji post-hoc (Mann-Whitney + koreksi Bonferroni).",
    kapan:"<strong>Lebih dari 2 kelompok independen</strong>, data ordinal atau tidak memenuhi asumsi ANOVA.",
    syarat:">2 kelompok bebas, data ordinal atau interval tidak normal, tiap kelompok <strong>n≥5</strong>.",
    contoh:"Apakah ada perbedaan tingkat kepuasan kerja antara PNS, karyawan swasta, dan wiraswasta?" },
  { name:"Spearman Rank Correlation", skala:["ordinal"],jenis:["nonpara"], ci:"ci-ord",cat:"cat-ord",emoji:"📉",
    deskripsi:"Mengukur kekuatan dan arah hubungan monotonis antara dua variabel ordinal atau interval tidak normal. Menggunakan ranking, bukan nilai asli. Koefisien −1 hingga +1.",
    kapan:"Mencari <strong>korelasi</strong> antara dua variabel ordinal, atau interval yang tidak normal.",
    syarat:"Dua variabel ordinal atau interval tidak normal, hubungan tidak harus linier (cukup <strong>monotonis</strong>).",
    contoh:"Apakah ada hubungan antara peringkat kelas dan tingkat kepuasan terhadap pembelajaran?" },

  // ── INTERVAL ──
  { name:"t-test Satu Sampel", skala:["interval"],jenis:["parametrik"], ci:"ci-int",cat:"cat-int",emoji:"📌",
    deskripsi:"Menguji apakah rata-rata satu kelompok berbeda signifikan dari nilai yang ditetapkan (nilai teoritis/standar). Uji dasar untuk data interval/rasio.",
    kapan:"Satu sampel, data interval/rasio, membandingkan rata-rata sampel dengan <strong>nilai standar tertentu</strong>.",
    syarat:"Data interval/rasio, <strong>distribusi normal</strong>, satu sampel.",
    contoh:"Apakah rata-rata IPK mahasiswa program A (3,2) berbeda signifikan dari standar IPK nasional (3,0)?" },
  { name:"Paired Sample t-test", skala:["interval"],jenis:["parametrik"], ci:"ci-int",cat:"cat-int",emoji:"🔄",
    deskripsi:"Membandingkan rata-rata dua pengukuran berpasangan dari subjek yang sama. Untuk desain pre-post atau ketika tiap data kelompok 1 berpasangan dengan kelompok 2.",
    kapan:"Dua pengukuran <strong>berpasangan</strong> (pre-post), data interval/rasio, distribusi normal.",
    syarat:"Data interval/rasio, dua kondisi berpasangan, <strong>selisih skor berdistribusi normal</strong>.",
    contoh:"Apakah ada perbedaan rata-rata skor ujian mahasiswa sebelum dan sesudah mengikuti bimbel intensif?" },
  { name:"Independent Sample t-test", skala:["interval"],jenis:["parametrik"], ci:"ci-int",cat:"cat-int",emoji:"⚔️",
    deskripsi:"Membandingkan rata-rata dua kelompok yang berbeda dan tidak saling berhubungan. Uji parametrik paling umum untuk membandingkan dua kelompok data interval/rasio.",
    kapan:"Dua kelompok <strong>bebas</strong>, data interval/rasio, distribusi normal, varians homogen.",
    syarat:"Data interval/rasio, dua kelompok independen, distribusi normal, <strong>homogenitas varians</strong> (Levene's Test).",
    contoh:"Apakah ada perbedaan rata-rata pendapatan antara lulusan S1 dan D3?" },
  { name:"Repeated Measure ANOVA", skala:["interval"],jenis:["parametrik"], ci:"ci-int",cat:"cat-int",emoji:"🔁",
    deskripsi:"Perluasan Paired t-test untuk lebih dari dua kondisi berpasangan. Menganalisis perubahan rata-rata satu kelompok subjek yang diukur berulang pada beberapa kondisi/waktu.",
    kapan:"Satu kelompok, data interval/rasio, <strong>lebih dari dua waktu/kondisi</strong> pengukuran.",
    syarat:"Data interval/rasio, >2 kondisi berpasangan, normalitas, <strong>sphericity</strong> (Mauchly's test).",
    contoh:"Apakah ada perubahan rata-rata skor kecemasan mahasiswa pada minggu ke-1, ke-4, ke-8, dan ke-12?" },
  { name:"One Way ANOVA", skala:["interval"],jenis:["parametrik"], ci:"ci-int",cat:"cat-int",emoji:"📊",
    deskripsi:"Membandingkan rata-rata lebih dari dua kelompok bebas berdasarkan satu faktor. Jika signifikan, perlu uji post-hoc (Tukey, Bonferroni, LSD) untuk tahu kelompok mana yang berbeda.",
    kapan:"<strong>Lebih dari 2 kelompok bebas</strong>, satu faktor, data interval/rasio, distribusi normal.",
    syarat:"Data interval/rasio, >2 kelompok independen, distribusi normal, <strong>homogenitas varians</strong>.",
    contoh:"Apakah ada perbedaan rata-rata produktivitas kerja antara karyawan berlatar S1, S2, dan S3?" },
  { name:"Two Way ANOVA", skala:["interval"],jenis:["parametrik"], ci:"ci-int",cat:"cat-int",emoji:"🗂️",
    deskripsi:"Menguji pengaruh dua faktor sekaligus terhadap satu variabel dependen, serta interaksi antara kedua faktor. Lebih efisien karena melihat efek kombinasi dua variabel.",
    kapan:"Lebih dari 2 kelompok, <strong>dua faktor independen</strong>, data interval/rasio, ingin lihat efek interaksi.",
    syarat:"Data interval/rasio, dua faktor independen kategoris, normalitas, <strong>homogenitas varians</strong>.",
    contoh:"Apakah nilai ujian dipengaruhi metode belajar (ceramah/diskusi) DAN jenis kelamin, serta apakah ada interaksi?" },
  { name:"Pearson Correlation", skala:["interval"],jenis:["parametrik"], ci:"ci-int",cat:"cat-int",emoji:"📐",
    deskripsi:"Mengukur kekuatan dan arah hubungan linier antara dua variabel interval/rasio. Koefisien r berkisar −1 hingga +1. r=0 berarti tidak ada hubungan linier.",
    kapan:"Mengukur <strong>korelasi</strong> antara dua variabel interval/rasio yang keduanya berdistribusi normal.",
    syarat:"Dua variabel interval/rasio, <strong>normal bivariat</strong>, hubungan linier.",
    contoh:"Apakah ada hubungan antara jumlah jam belajar per minggu dengan nilai IPK mahasiswa?" },
];

let activeFilter = 'semua';
let searchQuery  = '';
let openCards    = new Set();

function setFilter(f, btn) {
  activeFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => { b.className = 'filter-btn'; });
  btn.classList.add('act-' + f);
  openCards.clear();
  renderCards();
}

function filterCards() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase();
  openCards.clear();
  renderCards();
}

function renderCards() {
  const grid     = document.getElementById('cardsGrid');
  const filtered = data.filter(d => {
    const mf = activeFilter==='semua'
      || (activeFilter==='nominal'    && d.skala.includes('nominal'))
      || (activeFilter==='ordinal'    && d.skala.includes('ordinal'))
      || (activeFilter==='interval'   && d.skala.includes('interval'))
      || (activeFilter==='parametrik' && d.jenis.includes('parametrik'))
      || (activeFilter==='nonpara'    && d.jenis.includes('nonpara'));
    const ms = !searchQuery
      || d.name.toLowerCase().includes(searchQuery)
      || d.deskripsi.toLowerCase().includes(searchQuery)
      || d.kapan.toLowerCase().includes(searchQuery);
    return mf && ms;
  });

  document.getElementById('countNum').textContent = filtered.length;

  if (!filtered.length) {
    grid.innerHTML = `<div class="no-result"><span class="no-emoji">🔍</span>Tidak ada hasil untuk "<strong>${searchQuery}</strong>"<br>Coba kata kunci lain ya~ 🌸</div>`;
    return;
  }

  grid.innerHTML = filtered.map((d, i) => {
    const skalaTags = d.skala.map(s =>
      s==='nominal' ? '<span class="tag t-nom">🎀 Nominal</span>' :
      s==='ordinal' ? '<span class="tag t-ord">💜 Ordinal</span>' :
                     '<span class="tag t-int">💙 Interval/Rasio</span>'
    ).join('');
    const jenisTags = d.jenis.map(j =>
      j==='parametrik' ? '<span class="tag t-par">🌿 Parametrik</span>'
                       : '<span class="tag t-non">🍊 Non-Parametrik</span>'
    ).join('');
    const isOpen = openCards.has(i);
    return `
    <div class="uji-card ${d.cat} ${isOpen?'open':''}" id="card-${i}" onclick="toggleCard(${i})">
      <div class="card-header">
        <div class="card-icon ${d.ci}">${d.emoji}</div>
        <div class="card-meta">
          <div class="card-name">${d.name}</div>
          <div class="card-tags">${skalaTags}${jenisTags}</div>
        </div>
        <div class="chevron">▾</div>
      </div>
      <div class="card-body">
        <div class="card-body-inner">
          <div class="body-section sec-def">
            <div class="body-label"><span class="lbl-icon">💙</span> Pengertian</div>
            <div class="body-text">${d.deskripsi}</div>
          </div>
          <div class="body-section sec-when">
            <div class="body-label"><span class="lbl-icon">🌿</span> Kapan Digunakan</div>
            <div class="body-text">${d.kapan}</div>
          </div>
          <div class="body-section sec-req">
            <div class="body-label"><span class="lbl-icon">🎀</span> Syarat Penggunaan</div>
            <div class="body-text">${d.syarat}</div>
          </div>
          <div class="body-section sec-ex full">
            <div class="body-label"><span class="lbl-icon">🌸</span> Contoh Kasus</div>
            <div class="example-box">${d.contoh}</div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleCard(i) {
  const card = document.getElementById('card-'+i);
  if (openCards.has(i)) { openCards.delete(i); card.classList.remove('open'); }
  else                   { openCards.add(i);    card.classList.add('open');    }
}

window.addEventListener('scroll', () => {
  document.getElementById('scrollTopBtn').classList.toggle('visible', scrollY > 300);
});

renderCards();