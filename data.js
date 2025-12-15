// ===== DATA DESTINASI WISATA =====

const destinationsData = {
 ciputat: [
  {
    id: "tanah-tingal",
    title: "Tanah Tingal",
    image: "tanah tinggal.jpeg",
    description: "Tanah Tingal adalah wisata alam dan edukasi di Ciputat, Tangerang Selatan, dengan suasana hijau, danau, dan pepohonan rindang. Cocok untuk rekreasi keluarga, kegiatan edukatif, dan bersantai di alam terbuka.",
    rating: 4.3,
    reviewCount: 89,
    categories: ["alam", "edukasi", "keluarga"],

    // LINK VIDEO BIASA (BUKAN EMBED)
    video: "https://youtu.be/KdS5NRqwIfA",

    // VIDEO ID untuk thumbnail
    videoId: "KdS5NRqwIfA",

   map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.317217331874!2d106.7181439!3d-6.2996439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e554aa19dabb%3A0x32d27fae22fc5751!2sSekolah%20Tanah%20Tingal!5e0!3m2!1sid!2sid!4v1700000000000",

    address: "Jl. Cireundeu Raya No. 1, Ciputat, Tangerang Selatan"
  },


    {
      id: "kandank-jurank-doank",
      title: "Kandank Jurank Doank",
      image: "jurang doank.jpg",
      description: "Kandank Jurank Doank adalah ruang kreatif dan edukasi yang didirikan oleh Dik Doank dengan konsep alam terbuka. Tempat ini menjadi wadah bagi anak-anak untuk belajar seni, bermain, dan berekspresi bebas di lingkungan yang hijau dan ramah. Suasananya santai, penuh warna, dan kental dengan nuansa komunitas, sehingga cocok untuk kegiatan sekolah, workshop, maupun rekreasi keluarga yang ingin menikmati pengalaman belajar yang lebih dekat dengan alam dan kreativitas.",
      rating: 4.5,
      reviewCount: 156,
      categories: ["edukasi", "keluarga"],
      video: "https://youtu.be/06xxVD_mr0k?si=9M-9HVDSMr-MZkrF",

       // VIDEO ID untuk thumbnail
    videoId: "06xxVD_mr0k",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.297217331874!2d106.7265365!3d-6.2959256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f006dfa04409%3A0xd7b545ee01c3c4eb!2sKandank%20Jurank%20Creative%20Park!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Cireundeu Raya, Ciputat, Tangerang Selatan"
    },
    {
      id: "hutan-kota-jombang",
      title: "Hutan Kota Jombang",
      image: "taman hutan jombang.jpg",
      description: "Hutan Kota Jombang adalah ruang hijau terbuka di Tangerang Selatan yang menawarkan suasana adem dan tenang di tengah kota. Dikelilingi pepohonan besar dan jalur pedestrian sederhana, tempat ini cocok untuk berjalan santai, olahraga ringan, atau sekadar menikmati udara segar. Lingkungannya yang teduh membuat Hutan Kota Jombang menjadi pilihan populer bagi keluarga, komunitas, maupun pengunjung yang ingin melepas penat tanpa harus jauh-jauh ke luar kota.",
      rating: 4.2,
      reviewCount: 234,
      categories: ["alam", "keluarga"],
      video: "https://youtu.be/c_-rGsOuoaQ?si=qa20ZuCfzMe7FSls",

          // VIDEO ID untuk thumbnail
    videoId: "c_-rGsOuoaQ",

      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.417217331874!2d106.696783!3d-6.289183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb75baea8d05%3A0xc4b0097af0c92b4c!2sTaman%20Hutan%20Kota%20Jombang!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Jombang Raya, Ciputat, Tangerang Selatan"
    }
  ],

  ciputattimur: [
    {
      id: "situ-gintung-2",
      title: "Taman Wisata Pulau Situ Gintung 2",
      image: "taman gintung.jpg",
      description: "Taman Wisata Pulau Situ Gintung 2 adalah destinasi rekreasi bernuansa alam yang berada di tepi danau Situ Gintung. Tempat ini menawarkan pemandangan air yang tenang, area piknik, serta fasilitas bermain yang cocok untuk keluarga. Pengunjung bisa menikmati suasana rindang, berjalan santai di sekitar danau, atau sekadar bersantai sambil menikmati udara segar. Dengan suasana yang damai dan dikelilingi pepohonan, Pulau Situ Gintung 2 menjadi pilihan tepat untuk liburan singkat, kegiatan komunitas, maupun rekreasi bersama anak-anak.",
      rating: 4.1,
      reviewCount: 178,
      categories: ["alam", "keluarga"],
      video: "https://youtu.be/RRdsLaJHlPw?si=qJqKD85ZrsiAeKxw",

      // VIDEO ID untuk thumbnail
    videoId: "RRdsLaJHlPw",

      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.517217331874!2d106.7624834!3d-6.3097675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f02c4a2752ff%3A0xd27fca03967a378f!2sTaman%20Wisata%20Pulau%20Situ%20Gintung%202!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Situ Gintung, Ciputat Timur, Tangerang Selatan"
    },
    {
      id: "camping-ground-situ-gintung",
      title: "Camping Ground Situ Gintung",
      image: "camping.jpg",
      description: "Camping Ground Situ Gintung adalah area perkemahan yang menawarkan pengalaman menginap di alam terbuka dengan suasana tenang di tepi danau Situ Gintung. Tempat ini dikelilingi pepohonan yang rindang, udara sejuk, dan pemandangan air yang menenangkan, membuatnya cocok untuk camping keluarga, kegiatan sekolah, outing komunitas, hingga aktivitas outdoor lainnya. Fasilitas yang tersedia cukup lengkap, sehingga pengunjung bisa menikmati suasana alam tanpa harus jauh dari kota. Spot ini ideal untuk melepas penat sekaligus menikmati pengalaman bermalam yang lebih dekat dengan alam.",
      rating: 4.4,
      reviewCount: 92,
      categories: ["alam", "keluarga"],
      video: "https://youtu.be/qVbceC4gzHg?si=YAq7LxL96v8tv4Wo",

      // VIDEO ID untuk thumbnail
    videoId: "qVbceC4gzHg",

      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.497217331874!2d106.7630989!3d-6.3076079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef000417f283%3A0x1e79bd1ed9830c44!2sCamping%20ground%20Situ%20Gintung!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Situ Gintung, Ciputat Timur, Tangerang Selatan"
    }
  ],

  setu: [
    {
      id: "paradise-dreamland",
      title: "Paradise Dreamland Swimming Pool",
      image: "Paradise-Dreamland.jpg",
      description: "Paradise Dreamland Swimming Pool adalah kolam renang keluarga yang menawarkan suasana ceria dan nyaman untuk semua usia. Dengan area renang yang luas, wahana air anak, serta fasilitas pendukung yang rapi dan bersih, tempat ini cocok untuk rekreasi akhir pekan maupun kegiatan olahraga harian. Suasananya yang ramah keluarga dan pilihan kolam yang beragam membuat pengunjung bisa bermain air, bersantai, atau belajar berenang dengan lebih aman dan menyenangkan. Tempat ini menjadi pilihan favorit bagi warga sekitar yang ingin menikmati waktu berkualitas di area kolam yang nyaman.",
      rating: 4.0,
      reviewCount: 145,
      categories: ["keluarga"],
      video: "https://youtu.be/OavFuMEt-Wk?si=LHzReAfKTc8Pk11A",

        // VIDEO ID untuk thumbnail
    videoId: "OavFuMEt-Wk",

      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.717217331874!2d106.696037!3d-6.3497684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5242f47565f%3A0xc5c48493ef0c0b03!2sParadise%20Dreamland%20Swimming%20Pool!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Raya Serpong, Setu, Tangerang Selatan"
    },
    {
      id: "AquaRegia Fish Farm",
      title: "AquaRegia Fish Farm",
      image: "fishcage-2-edited.png",
      description: "AquaRegia Fish Farm adalah usaha peternakan ikan yang berlokasi di Setu, Tangerang Selatan, Banten, Indonesia. Bisnis ini berfokus pada kegiatan budidaya dan pengembangan ikan, yang meliputi pembenihan serta perawatan ikan konsumsi maupun ikan hias dalam lingkungan yang terkontrol.",
      rating: 4.2,
      reviewCount: 87,
      categories: ["alam", "edukasi"],
      video: "",

      // VIDEO ID untuk thumbnail
    videoId: "",

      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.680117386569!2d106.6798169!3d-6.3527423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5f872d992fb%3A0x74b53433667da2c!2sAquaRegia%20Fish%20Farm!5e0!3m2!1sen!2sid!4v1700000000000",
      address: "Setu, Kota Tangerang Selatan, Banten"
    }
  ],

  pondokaren: [
    {
      id: "bintaro-xchange-mall",
      title: "Bintaro Xchange Mall (BXc Mall & BXc Park)",
      image: "bintaro x change.jpg",
      description: "Bintaro Xchange Mall adalah pusat perbelanjaan modern di kawasan Bintaro yang dikenal dengan desain terbuka dan suasana ramah keluarga. Mall ini menawarkan beragam tenant, mulai dari fashion, kuliner, hiburan, hingga area outdoor yang nyaman untuk berjalan santai. Salah satu daya tarik utamanya adalah arena ice skating yang menjadi favorit pengunjung. Dengan fasilitas yang lengkap, suasana bersih, serta area hijau di sekelilingnya, Bintaro Xchange Mall menjadi pilihan populer untuk berbelanja, makan, berkumpul, maupun menghabiskan waktu santai di akhir pekan.",
      rating: 4.5,
      reviewCount: 567,
      categories: ["belanja", "kuliner", "keluarga"],
      video: "https://youtu.be/oH8WulcXXfE?si=UDG8vHflrO6My72o",
      // VIDEO ID untuk thumbnail
    videoId: "oH8WulcXXfE",

      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.217217331874!2d106.7276002!3d-6.2853789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f00b95248a25%3A0x7a92959c5f05e001!2sBintaro%20Jaya%20Xchange%20Mall!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Bintaro Taman Selatan, Pondok Aren, Tangerang Selatan"
    },
    {
      id: "menteng-park-bintaro",
      title: "Taman Menteng Bintaro",
      image: "Taman-Menteng-Bintaro.jpg",
      description: "Menteng Park Bintaro adalah taman lingkungan yang menawarkan suasana hijau dan nyaman untuk aktivitas santai di kawasan Bintaro. Dilengkapi jalur pejalan kaki, area bermain anak, serta ruang terbuka yang tertata rapi, taman ini cocok untuk jogging ringan, jalan sore, atau sekadar duduk menikmati udara segar. Lingkungannya tenang dan bersih, menjadikannya tempat favorit warga sekitar untuk berolahraga atau berkumpul bersama keluarga. Cocok sebagai lokasi rekreasi singkat di tengah area permukiman Bintaro.",
      rating: 4.3,
      reviewCount: 234,
      categories: ["alam", "keluarga"],
      video: "https://youtu.be/4pM2-MA4Gnc?si=lO5mp0o7GSsymI6S",
      // VIDEO ID untuk thumbnail
    videoId: "4pM2-MA4Gnc",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.117217331874!2d106.7259094!3d-6.2729248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f077bc6559d3%3A0xdf60b4f55c627479!2sTaman%20Menteng%20Bintaro!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Menteng Raya, Bintaro, Pondok Aren, Tangerang Selatan"
    },
    ,
    {
  id: "pasar-modern-bintaro",
  title: "Pasar Modern Bintaro",
  image: "pasar modern.webp",
  description: "Pasar Modern Bintaro adalah pusat belanja harian yang terkenal dengan suasana bersih, rapi, dan lengkap, menyediakan berbagai bahan segar seperti sayur, buah, daging, hingga kebutuhan dapur, serta deretan kuliner populer mulai dari jajanan tradisional, kopi, hingga makanan siap saji. Tempat ini menjadi destinasi favorit warga untuk belanja sekaligus menikmati aneka makanan khas, terutama pada pagi dan malam hari.",
  rating: 4.4,
  reviewCount: 2500,
  categories: ["belanja", "kuliner", "keluarga"],
  video: "https://youtu.be/hw3c8Bj22Kg?si=zWn328ESAw1aMGGV",
   // VIDEO ID untuk thumbnail
    videoId: "hw3c8Bj22Kg",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.065889900905!2d106.7078382!3d-6.2798175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69faf7d5a9770b%3A0xf3e3d55b79a7f919!2sPasar%20Modern%20Bintaro!5e0!3m2!1sen!2sid!4v1690000000002!5m2!1sen!2sid",
  address: "Bintaro Jaya Sektor 2, Pondok Aren, Tangerang Selatan"
}


  ],

  pamulang: [
    {
      id: "alun-alun-pamulang",
      title: "Alun-Alun Pamulang",
      image: "Alun-Alun-Pamulang.jpg",
      description: "Alun-Alun Pamulang adalah ruang publik yang menjadi pusat aktivitas warga di kawasan Pamulang. Dengan area yang luas, jalur pejalan kaki, serta ruang terbuka untuk olahraga dan berkumpul, tempat ini sering digunakan untuk kegiatan komunitas, rekreasi keluarga, hingga event lokal. Suasananya ramai namun tetap nyaman, dilengkapi area duduk dan lingkungan yang tertata rapi. Alun-Alun Pamulang cocok untuk jalan sore, olahraga ringan, atau sekadar menikmati suasana kota bersama keluarga dan teman.",
      rating: 4.1,
      reviewCount: 189,
      categories: ["keluarga"],
      video: "https://youtu.be/bC0_egAW59Y?si=nBeYuBNFA6vGVUKc",
      // VIDEO ID untuk thumbnail
    videoId: "bC0_egAW59Y",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.817217331874!2d106.7349334!3d-6.3443884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efb24feba35b%3A0xd08b71ff89cb39df!2sALUN%20-%20ALUN%20PAMULANG!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Raya Pamulang, Pamulang, Tangerang Selatan"
    },
    {
      id: "danau-pamulang",
      title: "Danau Pamulang",
      image: "Situ_Sesak_Pamulang_Tangerang_Selatan.jpg",
      description: "Danau Pamulang sebenarnya bukan danau alami, melainkan waduk atau area tampungan air yang berada di kawasan Pamulang, Tangerang Selatan. Meski tidak dikelola sebagai tempat wisata resmi dan memiliki fasilitas yang cukup minim, kawasan ini tetap menjadi salah satu spot favorit warga sekitar untuk menghabiskan waktu. Banyak orang datang ke sini untuk memancing, berjalan santai, atau sekadar duduk menikmati suasana sore. Pemandangan matahari terbenam di danau ini juga menjadi daya tarik tersendiri—versi sederhana dari sunset ala Pamulang. Tempat ini cocok bagi siapa pun yang ingin mencari udara segar tanpa harus pergi terlalu jauh.",
      rating: 3.9,
      reviewCount: 76,
      categories: ["alam"],
      video: "https://youtu.be/LzTjQI_5djs?si=qZ8N-6bDh7wLQG8p",
      // VIDEO ID untuk thumbnail
    videoId: "LzTjQI_5djs",
      map: "https://maps.app.goo.gl/mDz2EzsZJ1ugexDn8",
      address: "Jl. Siliwangi, Pamulang, Tangerang Selatan"
    },
    {
      id: "taman-edukasi-ganespa",
      title: "Taman Edukasi Ganespa",
      image: "taman ganespa.webp",
      description: "Taman Edukasi Ganespa adalah ruang publik di kawasan Pamulang yang dirancang sebagai tempat rekreasi sekaligus sarana belajar bagi masyarakat. Lingkungannya tertata cukup rapi dengan area hijau, jalur pejalan kaki, dan beberapa fasilitas edukatif yang ditujukan untuk anak-anak maupun keluarga. Suasananya cenderung tenang, sehingga cocok untuk beristirahat, bermain ringan, atau menghabiskan waktu bersama keluarga.",
      rating: 4.2,
      reviewCount: 98,
      categories: ["edukasi", "keluarga"],
      video: "https://youtu.be/G6Kb-_MJL3g?si=sJbTLKEYiBOX01F2",
       // VIDEO ID untuk thumbnail
    videoId: "G6Kb-_MJL3g",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.807217331874!2d106.7288303!3d-6.3434337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efe7ace4f391%3A0x1e280a7d5607058f!2sTaman%20Edukasi%20Ganespa!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Ganesha, Pamulang, Tangerang Selatan"
    }
  ],

  serpong: [
    {
      id: "ocean-park-bsd",
      title: "Ocean Park BSD City",
      image: "Wahana-Ocean-Park-BSD-2.webp",
      description: "Ocean Park BSD City adalah taman rekreasi air keluarga di kawasan BSD, Tangerang Selatan, yang menawarkan berbagai wahana seperti kolam ombak, seluncuran, lazy river, dan area bermain anak, dilengkapi fasilitas pendukung seperti food court dan ruang bilas, sehingga menjadi pilihan populer untuk menghabiskan waktu liburan dengan suasana seru dan menyenangkan.",
      rating: 4.6,
      reviewCount: 892,
      categories: ["keluarga"],
      video: "https://youtu.be/7Wdt4nJsYAs?si=trfMUJLS58TyahWu",
      // VIDEO ID untuk thumbnail
    videoId: "7Wdt4nJsYAs",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.017217331874!2d106.669295!3d-6.2923897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb256f6534db%3A0x9713b38571eaca79!2sOcean%20Park%20BSD%20City%20Serpong!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "BSD City, Serpong, Tangerang Selatan"
    },
    {
      id: "scientia-square-park",
      title: "Scientia Square Park (SQP Park)",
      image: "Scientia Square Park (SQP Park).jpg",
      description: "Scientia Square Park adalah ruang terbuka hijau modern di kawasan Gading Serpong yang menghadirkan berbagai aktivitas outdoor seperti area bermain anak, taman edukasi, kolam ikan koi, panjat tebing, skate park, hingga spot santai di tengah taman yang tertata rapi, menjadikannya tempat favorit keluarga untuk berolahraga, belajar, dan menikmati suasana alam dalam lingkungan kota yang nyaman.",
      rating: 4.4,
      reviewCount: 345,
      categories: ["edukasi", "keluarga"],
      video: "https://youtu.be/oIOy4QZSsD8?si=CctrjwfxnZUwRhWe",
       // VIDEO ID untuk thumbnail
    videoId: "oIOy4QZSsD8",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.917217331874!2d106.6155004!3d-6.257042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc651e649223%3A0x3b96f2ef67285cd9!2sScientia%20Square%20Park%20(SQP%20Park)!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "BSD City, Serpong, Tangerang Selatan"
    },
    {
      id: "taman-kota-bsd1",
      title: "Taman Kota BSD 1",
      image: "Taman-Kota-1-BSD.webp",
      description: "Taman Kota BSD 1 adalah ruang hijau luas di kawasan BSD yang dipenuhi pepohonan rindang, jalur jogging, dan area duduk santai, menjadikannya tempat favorit untuk berolahraga, berjalan santai, atau sekadar menikmati udara segar di tengah kota dengan suasana yang sejuk dan natural.",
      rating: 4.3,
      reviewCount: 278,
      categories: ["alam", "keluarga"],
      video: "https://youtu.be/e_g_-yEfa_o?si=Bjh0w_86SCRz5arl",
       // VIDEO ID untuk thumbnail
    videoId: "e_g_-yEfa_o",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.117217331874!2d106.6759069!3d-6.2880094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb20a831fcf7%3A0x50f3f810684b9e19!2sTaman%20Kota%201%20BSD!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "BSD City, Serpong, Tangerang Selatan"
    },
    {
      id: "taman-kota-bsd2",
      title: "Taman Kota BSD 2",
      image: "Taman Kota 2 BSD.jpg",
      description: "Taman Kota BSD 2 adalah taman hijau yang tertata rapi dengan pepohonan besar, jembatan kayu, jalur pejalan kaki, serta area duduk yang nyaman, menghadirkan suasana tenang dan sejuk sehingga cocok untuk berolahraga, bersantai, atau menikmati waktu alam di tengah kawasan BSD yang modern.",
      rating: 4.2,
      reviewCount: 156,
      categories: ["alam", "keluarga"],
      video: "https://youtu.be/RKMivl6JI_M?si=Cbm9u0UhyT28b87A",
       // VIDEO ID untuk thumbnail
    videoId: "RKMivl6JI_M",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.317217331874!2d106.6833105!3d-6.3292468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fad8a505ebbd%3A0x3026f51e304d728c!2sTaman%20Kota%202%20BSD!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "BSD City, Serpong, Tangerang Selatan"
    },
    {
      id: "kampung-konservasi-rimbun",
      title: "Kampung Konservasi RIMBUN",
      image: "kampung-konservasi-rimbun.jpeg",
      description: "Kampung Konservasi Rimbun adalah kawasan bernuansa alami di daerah Pamulang yang mengusung konsep edukasi lingkungan, menawarkan suasana asri dengan pepohonan rimbun, kolam ikan, kebun, serta aktivitas seperti memberi makan hewan, belajar bercocok tanam, dan menikmati suasana pedesaan, sehingga menjadi tempat ideal untuk rekreasi keluarga sambil mengenal alam lebih dekat tanpa harus jauh dari kota.",
      rating: 4.5,
      reviewCount: 134,
      categories: ["alam", "edukasi"],
      video: "https://youtu.be/XjtbjnglQu8?si=gEG6RoGNHEWNmY68",
       // VIDEO ID untuk thumbnail
    videoId: "XjtbjnglQu8",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.417217331874!2d106.6990566!3d-6.333296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e512ba5304d9%3A0x3df3895e9c38f89b!2sKampung%20Konservasi%20RIMBUN!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Raya Serpong, Serpong, Tangerang Selatan"
    }
  ],

  serpongutara: [
    {
      id: "monumen-palagan-lengkong",
      title: "Monumen Palagan Lengkong",
      image: "monumen palagan.jpg",
      description: "Monumen Palagan Lengkong adalah situs bersejarah di Serpong yang dibangun untuk mengenang peristiwa pertempuran Lengkong tahun 1946, dengan area monumen yang tenang dan memiliki nilai edukasi tinggi tentang perjuangan para taruna, sehingga sering dikunjungi untuk napak tilas sejarah maupun kegiatan upacara.",
      rating: 4.0,
      reviewCount: 67,
      categories: ["edukasi"],
      video: "https://youtu.be/_IHgcRduawM?si=2dP3-e8KxcEnab-3",
      // VIDEO ID untuk thumbnail
    videoId: "_IHgcRduawM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.817217331874!2d106.6597427!3d-6.2809542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb1688893b17%3A0xe72861856759cf46!2sMonumen%20Palagan%20Lengkong!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Lengkong, Serpong Utara, Tangerang Selatan"
    },
    {
      id: "broadway-alam-sutera",
      title: "Broadway - The Flavor Bliss Alam Sutera",
      image: "Broadway-Alam-Sutera.webp",
      description: "Broadway di The Flavor Bliss Alam Sutera adalah kawasan kuliner bertema jalanan New York dengan bangunan warna-warni bergaya vintage, penuh spot foto estetik, deretan resto dan kafe, serta suasana yang hidup, menjadikannya tempat populer untuk nongkrong, makan, dan hunting foto.",
      rating: 4.4,
      reviewCount: 423,
      categories: ["kuliner"],
      video: "https://youtu.be/F7fmchBksxk?si=IiLN5zYQjX9oDtER",
       // VIDEO ID untuk thumbnail
    videoId: "F7fmchBksxk",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717217331874!2d106.6509098!3d-6.2422102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb3d3482170f%3A0x25e7a4952697b537!2sBroadway%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Alam Sutera, Serpong Utara, Tangerang Selatan"
    },
    {
      id: "living-world-alam-sutera",
      title: "Living World Alam Sutera",
      image: "Living-World.jpg",
      description: "Living World Alam Sutera adalah pusat perbelanjaan besar yang dikenal dengan konsep “Home Living and Eat-ertainment,” menawarkan beragam toko perlengkapan rumah, fashion, area kuliner, serta suasana nyaman yang cocok untuk belanja, makan, ataupun sekadar jalan santai bersama keluarga.",
      rating: 4.5,
      reviewCount: 678,
      categories: ["belanja", "kuliner", "keluarga"],
      video: "https://youtu.be/qVPtGaMwWq8?si=YGM_xKdpCSNTNHbb",
       // VIDEO ID untuk thumbnail
    videoId: "qVPtGaMwWq8",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717217331874!2d106.653103!3d-6.2443767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbbfddc33093%3A0x12783cb2371fb070!2sLiving%20World%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Alam Sutera, Serpong Utara, Tangerang Selatan"
    },
    {
      id: "the-nice-garden-serpong",
      title: "The Nice Garden Serpong",
      image: "the-nice-garden-serpong-di-tangerang-selatan-6.jpeg",
      description: "The Nice Garden Serpong adalah taman outdoor bernuansa modern dengan area hijau, spot foto cantik, dan tempat duduk santai, cocok untuk rekreasi ringan, hunting foto, atau menikmati suasana taman yang rapi dan nyaman di tengah kawasan Serpong.",
      rating: 4.3,
      reviewCount: 189,
      categories: ["alam", "keluarga"],
      video: "https://youtu.be/48x4wugeaiI?si=jtsWpYJxlexB8ZhP",
      // VIDEO ID untuk thumbnail
    videoId: "48x4wugeaiI",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.517217331874!2d106.6616243!3d-6.3103565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5714352fc23%3A0xdfffdf5089db55e5!2sThe%20Nice%20Garden%20Serpong!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Raya Serpong, Serpong Utara, Tangerang Selatan"
    },
    {
      id: "mall-alam-sutera",
      title: "Mall @ Alam Sutera",
      image: "mall alam sutera.jpg",
      description: "Mall @ Alam Sutera adalah mal bergaya modern dengan tenant lengkap mulai dari fashion, kuliner, hingga kebutuhan harian, terkenal dengan suasana yang luas dan nyaman, serta menjadi salah satu destinasi belanja dan hangout favorit warga Alam Sutera dan sekitarnya.",
      rating: 4.4,
      reviewCount: 512,
      categories: ["belanja", "kuliner", "keluarga"],
      video: "https://youtu.be/CEd0E4V2NkU?si=u1SwuLEDlht4plsT",
      // VIDEO ID untuk thumbnail
    videoId: "CEd0E4V2NkU",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.617217331874!2d106.6541314!3d-6.221679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbbff86ad0c5%3A0x7637aedafd55dea8!2sMall%20%40%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Alam Sutera, Serpong Utara, Tangerang Selatan"
    },
    {
      id: "situ-rawa-kutuk",
      title: "Situ Rawa Kutuk",
      image: "rawa kutuk.jpg",
      description: "Situ Rawa Kutuk adalah danau atau situ alami di kawasan Serpong Utara yang menawarkan suasana tenang dengan hamparan air luas dan pepohonan di sekelilingnya, sering dimanfaatkan warga untuk memancing, bersantai, atau menikmati udara segar, sehingga menjadi tempat singgah sederhana bagi yang ingin mencari ketenangan di tengah keramaian kota.",
      rating: 3.8,
      reviewCount: 45,
      categories: ["alam"],
      video: "https://youtu.be/iqsiG0W-dc8?si=mUHYBTyuRr_Wy4rM",
      // VIDEO ID untuk thumbnail
    videoId: "iqsiG0W-dc8",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.817217331874!2d106.6606892!3d-6.2518791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb304a041671%3A0x9480888df2dd9014!2sSitu%20Pondok%20Jagung%20-%20Kota%20Tangerang%20Selatan!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Raya Serpong, Serpong Utara, Tangerang Selatan"
    }
  ]
};

// ===== KATEGORI WISATA =====
const categoriesData = [
  {
    id: "alam",
    name: "Wisata Alam",
    icon: "fas fa-tree",
    description: "Destinasi dengan pemandangan alam yang menawan",
    color: "green"
  },
  {
    id: "edukasi",
    name: "Wisata Edukasi",
    icon: "fas fa-graduation-cap",
    description: "Tempat belajar sambil berekreasi",
    color: "blue"
  },
  {
    id: "keluarga",
    name: "Wisata Keluarga",
    icon: "fas fa-home",
    description: "Cocok untuk liburan bersama keluarga",
    color: "orange"
  },
  {
    id: "belanja",
    name: "Belanja & Retail",
    icon: "fas fa-shopping-bag",
    description: "Pusat perbelanjaan dan retail",
    color: "purple"
  },
  {
    id: "kuliner",
    name: "Kuliner",
    icon: "fas fa-utensils",
    description: "Destinasi makanan dan minuman",
    color: "red"
  }
];

// ===== KECAMATAN DATA =====
const districtsData = [
  {
    id: "ciputat",
    name: "Ciputat",
    totalDestinations: 3,
    icon: "fas fa-map-marker-alt"
  },
  {
    id: "ciputattimur",
    name: "Ciputat Timur",
    totalDestinations: 2,
    icon: "fas fa-tree"
  },
  {
    id: "setu",
    name: "Setu",
    totalDestinations: 2,
    icon: "fas fa-water"
  },
  {
    id: "pondokaren",
    name: "Pondok Aren",
    totalDestinations: 2,
    icon: "fas fa-shopping-cart"
  },
  {
    id: "pamulang",
    name: "Pamulang",
    totalDestinations: 3,
    icon: "fas fa-university"
  },
  {
    id: "serpong",
    name: "Serpong",
    totalDestinations: 5,
    icon: "fas fa-building"
  },
  {
    id: "serpongutara",
    name: "Serpong Utara",
    totalDestinations: 6,
    icon: "fas fa-city"
  }
];

// ===== CACHE SYSTEM =====
let destinationsCache = null;
let categoryCountsCache = null;
let popularDestinationsCache = null;

// ===== OPTIMIZED FUNCTIONS =====

// Get all destinations dengan cache
function getAllDestinations() {
  if (destinationsCache) {
    return destinationsCache;
  }
  
  const allDestinations = [];
  for (const district in destinationsData) {
    const districtDests = destinationsData[district];
    for (let i = 0; i < districtDests.length; i++) {
      const dest = districtDests[i];
      allDestinations.push({
        ...dest,
        district: district,
        districtName: getDistrictName(district)
      });
    }
  }
  
  destinationsCache = allDestinations;
  return allDestinations;
}

// Get popular destinations dengan cache
function getPopularDestinations(limit = 6) {
  if (popularDestinationsCache && popularDestinationsCache.length >= limit) {
    return popularDestinationsCache.slice(0, limit);
  }
  
  const allDests = getAllDestinations();
  
  popularDestinationsCache = allDests.sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }
    return b.reviewCount - a.reviewCount;
  });
  
  return popularDestinationsCache.slice(0, limit);
}

// Get destinations by district
function getDestinationsByDistrict(district) {
  return destinationsData[district] || [];
}

// Get destinations count by category dengan cache - DIPERBAIKI
function getDestinationsCountByCategory() {
  if (categoryCountsCache) {
    return { ...categoryCountsCache };
  }
  
  const allDests = getAllDestinations();
  const categoryCount = {};
  
  // Initialize all categories with 0
  categoriesData.forEach(category => {
    categoryCount[category.id] = 0;
  });
  
  // Count destinations for each category
  for (let i = 0; i < allDests.length; i++) {
    const dest = allDests[i];
    if (dest.categories && Array.isArray(dest.categories)) {
      for (let j = 0; j < dest.categories.length; j++) {
        const cat = dest.categories[j];
        if (categoryCount[cat] !== undefined) {
          categoryCount[cat]++;
        }
      }
    }
  }
  
  categoryCountsCache = categoryCount;
  return { ...categoryCount };
}

// Search destinations
function searchDestinations(query) {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const allDests = getAllDestinations();
  const lowerQuery = query.toLowerCase().trim();
  
  const searchRegex = new RegExp(lowerQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  
  return allDests.filter(dest => 
    searchRegex.test(dest.title) ||
    searchRegex.test(dest.description) ||
    searchRegex.test(dest.address) ||
    searchRegex.test(dest.districtName)
  );
}

// Filter destinations by category - DIPERBAIKI
let lastCategoryFilter = { category: null, result: null };

function filterDestinationsByCategory(category) {
  if (lastCategoryFilter.category === category) {
    return lastCategoryFilter.result;
  }
  
  const allDests = getAllDestinations();
  
  if (!category || category === 'all' || category === '') {
    const result = allDests;
    lastCategoryFilter = { category, result };
    return result;
  }
  
  const filtered = allDests.filter(dest => {
    if (!dest.categories || !Array.isArray(dest.categories)) {
      return false;
    }
    return dest.categories.includes(category);
  });
  
  lastCategoryFilter = { category, result: filtered };
  return filtered;
}

// Helper functions
const districtNames = {
  ciputat: "Ciputat",
  ciputattimur: "Ciputat Timur", 
  setu: "Setu",
  pondokaren: "Pondok Aren",
  pamulang: "Pamulang",
  serpong: "Serpong",
  serpongutara: "Serpong Utara"
};

function getDistrictName(districtKey) {
  return districtNames[districtKey] || districtKey;
}

const categoryMap = {};
categoriesData.forEach(cat => {
  categoryMap[cat.id] = cat;
});

function getCategoryName(categoryKey) {
  const category = categoryMap[categoryKey];
  return category ? category.name : categoryKey;
}

function getCategoryIcon(categoryKey) {
  const category = categoryMap[categoryKey];
  return category ? category.icon : 'fas fa-map-marker-alt';
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Get random destinations
function getRandomDestinations(limit = 3) {
  const allDests = getAllDestinations();
  const shuffled = [...allDests];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, limit);
}

// Get destinations by multiple categories
function getDestinationsByCategories(categoryArray) {
  if (!categoryArray || categoryArray.length === 0) {
    return getAllDestinations();
  }
  
  const allDests = getAllDestinations();
  return allDests.filter(dest => 
    dest.categories && categoryArray.some(cat => dest.categories.includes(cat))
  );
}

// Initialize category counts - DIPERBAIKI
let categoryCountsInitialized = false;

function initializeCategoryCounts() {
  if (categoryCountsInitialized) return;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(updateCategoryCountsDisplay, 500);
    });
  } else {
    setTimeout(updateCategoryCountsDisplay, 800);
  }
  
  categoryCountsInitialized = true;
}

// Update category counts display - DIPERBAIKI
function updateCategoryCountsDisplay() {
  console.log('🔄 Memperbarui tampilan jumlah kategori...');
  
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      performCategoryCountsUpdate();
    });
  } else {
    setTimeout(performCategoryCountsUpdate, 100);
  }
}

function performCategoryCountsUpdate() {
  try {
    const categoryCounts = getDestinationsCountByCategory();
    
    console.log('📊 Jumlah destinasi per kategori:', categoryCounts);
    
    const updates = [];
    
    // Update category count displays
    Object.keys(categoryCounts).forEach(category => {
      const elementId = `count${capitalizeFirst(category)}`;
      const countElement = document.getElementById(elementId);
      
      if (countElement) {
        updates.push({ 
          element: countElement, 
          text: `${categoryCounts[category]} destinasi` 
        });
      } else {
        console.warn(`⚠️ Element dengan ID ${elementId} tidak ditemukan`);
      }
    });
    
    if (updates.length > 0) {
      requestAnimationFrame(() => {
        updates.forEach(update => {
          update.element.textContent = update.text;
        });
        console.log('✅ Tampilan jumlah kategori berhasil diperbarui');
      });
    } else {
      console.warn('⚠️ Tidak ada element kategori yang ditemukan untuk diperbarui');
    }
  } catch (error) {
    console.error('❌ Gagal memperbarui tampilan jumlah kategori:', error);
  }
}

// Filter destinations by multiple criteria
function filterDestinations(filters = {}) {
  let allDests = getAllDestinations();
  
  if (filters.category && filters.category !== 'all') {
    allDests = allDests.filter(dest => 
      dest.categories && dest.categories.includes(filters.category)
    );
  }
  
  if (filters.district && filters.district !== 'all') {
    allDests = allDests.filter(dest => dest.district === filters.district);
  }
  
  if (filters.minRating) {
    allDests = allDests.filter(dest => dest.rating >= filters.minRating);
  }
  
  return allDests;
}

// Clear cache
function clearDataCache() {
  destinationsCache = null;
  categoryCountsCache = null;
  popularDestinationsCache = null;
  lastCategoryFilter = { category: null, result: null };
  categoryCountsInitialized = false;
}

// Other utility functions
function getAllCategories() {
  return categoriesData;
}

function getCategoryById(categoryId) {
  return categoryMap[categoryId] || null;
}

function getDistrictsData() {
  const districts = {};
  for (const district in destinationsData) {
    districts[district] = {
      count: destinationsData[district].length,
      name: getDistrictName(district)
    };
  }
  return districts;
}

// Auto-initialize - DIPERBAIKI
setTimeout(() => {
  console.log('📍 Modul Data Wisata Tangsel Dimuat');
  console.log('📊 Total destinasi:', getAllDestinations().length);
  console.log('🏷️ Total kategori:', getAllCategories().length);
  
  // Initialize category counts dengan delay lebih lama
  setTimeout(() => {
    initializeCategoryCounts();
  }, 1000);
}, 500);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    destinationsData,
    categoriesData,
    districtsData,
    getAllDestinations,
    getPopularDestinations,
    getDestinationsByDistrict,
    searchDestinations,
    filterDestinationsByCategory,
    filterDestinations,
    getDestinationsCountByCategory,
    getAllCategories,
    getCategoryById,
    getDistrictsData,
    getDistrictName,
    getCategoryName,
    getCategoryIcon,
    getRandomDestinations,
    getDestinationsByCategories,
    capitalizeFirst,
    initializeCategoryCounts,
    updateCategoryCountsDisplay,
    clearDataCache
  };
}
