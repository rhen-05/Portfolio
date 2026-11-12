export interface IProject {
  slug: string;
  title: string;
  subtitle: {
    id: string;
    en: string;
  };
  category: string;
  year: string;
  featured: boolean;
  image: string;
  secondaryImage?: string;
  technologies: string[];
  metrics?: {
    label: { id: string; en: string };
    value: string;
  }[];
  description: {
    id: string;
    en: string;
  };
  role: {
    id: string;
    en: string;
  };
  problem: {
    id: string;
    en: string;
  };
  solution: {
    id: string;
    en: string;
  };
  process: {
    phase: string;
    title: { id: string; en: string };
    desc: { id: string; en: string };
  }[];
  outcomes?: {
    id: string;
    en: string;
  }[];
  github?: string;
  demo?: string;
}

export const projectsData: IProject[] = [
  {
    slug: "sentinel-core",
    title: "SENTINEL CORE — REAL-TIME NETWORK TELEMETRY",
    subtitle: {
      id: "Platform Telemetri Jaringan & Analisis Ancaman Siber Real-Time",
      en: "Real-Time Cyber Threat Intelligence & Network Telemetry Surface",
    },
    category: "CYBERSECURITY - SYSTEMS",
    year: "2025",
    featured: true,
    image: "/assets/projects/sentinel-core.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Wireshark PCAP", "WebSockets"],
    metrics: [
      { label: { id: "Throughput Paket", en: "Packet Throughput" }, value: "100k pkt-sec" },
      { label: { id: "Latensi Render", en: "Render Latency" }, value: "< 16ms" },
      { label: { id: "Tingkat Akurasi Parser", en: "Parser Accuracy" }, value: "99.98%" },
    ],
    description: {
      id: "Sentinel Core adalah platform telemetri keamanan jaringan berkinerja tinggi yang dirancang untuk membedah paket data mentah, mendeteksi lonjakan anomali, dan memetakan vektor serangan siber secara real-time. Menggunakan pipeline buffer WebSocket biner dan virtualisasi windowing berpresisi tinggi, konsol ini mampu memproses lebih dari 100.000 paket per detik dengan latensi render di bawah 16ms tanpa penurunan frame rate antarmuka.",
      en: "Sentinel Core is a high-performance network security telemetry console engineered to dissect raw packet captures, detect anomaly spikes, and map attack vectors with high-precision monochrome clarity. Engineered with strict window virtualization and binary WebSocket buffering, it effortlessly ingests over 100,000 live packets per second while maintaining guaranteed sub-16ms render paint cycles.",
    },
    role: {
      id: "Lead Frontend Engineer & System Architect — merancang arsitektur komponen, pipeline parsing data real-time, dan sistem grafis telemetri.",
      en: "Lead Frontend Engineer & System Architect — designed component architecture, real-time data parsing pipeline, and custom telemetry data graph.",
    },
    problem: {
      id: "Alat pemantau jaringan konvensional seringkali membebani browser dengan ribuan DOM node saat streaming log bervolume tinggi, menyebabkan UI membeku di tengah insiden keamanan kritis.",
      en: "Conventional network monitoring dashboards overwhelm client browsers with thousands of DOM nodes during high-volume log streams, locking up critical telemetry during live security incidents.",
    },
    solution: {
      id: "Mengimplementasikan virtualisasi windowing, buffer pesan WebSocket biner, dan representasi visual SVG reaktif yang hanya me-render delta perbedaan secara deterministik.",
      en: "Engineered strict window virtualization, binary WebSocket frame buffering, and lightweight reactive SVG graph layers rendering only state deltas without unnecessary re-renders.",
    },
    process: [
      {
        phase: "01 - SPECIFICATION",
        title: { id: "Pemetaan Protokol & RFC", en: "Protocol & RFC Analysis" },
        desc: {
          id: "Menganalisis spesifikasi header TCP-UDP dan struktur anomali DDoS untuk menentukan metrik penting yang harus tampil di layar pertama.",
          en: "Dissected TCP-UDP header RFCs and DDoS anomaly footprints to prioritize critical telemetry in the primary viewport.",
        },
      },
      {
        phase: "02 - ARCHITECTURE",
        title: { id: "Pemisahan State & Buffer", en: "State Isolation & Ring Buffers" },
        desc: {
          id: "Memisahkan telemetry ingestion ke dalam Web Worker agar thread render antarmuka tetap berada di 60 FPS murni.",
          en: "Decoupled streaming telemetry ingestion into Web Workers to preserve guaranteed 60fps UI paint cycles on main thread.",
        },
      },
      {
        phase: "03 - EDITORIAL INTERFACE",
        title: { id: "Desain Sistem Monokrom", en: "Monochrome Precision UI" },
        desc: {
          id: "Mengganti grafik warna-warni yang melelahkan mata dengan hierarki monokrom kontras tinggi dan aksen hijau zamrud untuk anomali terkonfirmasi.",
          en: "Replaced fatigue-inducing multi-color charts with high-contrast monochrome typography and disciplined emerald teal indicators for confirmed breaches.",
        },
      },
    ],
    outcomes: [
      {
        id: "Mampu memproses streaming 100.000 paket per detik di browser tanpa lag memori.",
        en: "Successfully streams 100k packets per sec in browser sessions with zero memory creep.",
      },
      {
        id: "Mempersingkat waktu investigasi insiden jaringan berkat visualisasi jalur anomali terisolasi.",
        en: "Reduced incident triage time through isolated anomaly graph pathways.",
      },
    ],
    github: "https://github.com/rhanendra",
    demo: "https://github.com/rhanendra",
  },
  {
    slug: "kinetic-archive",
    title: "KINETIC ARCHIVE — GENERATIVE SWISS TYPOGRAPHY",
    subtitle: {
      id: "Sistem Tipografi Swiss Generatif & Eksplorasi Kanvas Editorial",
      en: "Generative Swiss Typographic System & Editorial Canvas",
    },
    category: "DESIGN SYSTEM - FRONTEND",
    year: "2024",
    featured: true,
    image: "/assets/projects/kinetic-archive.jpg",
    technologies: ["React", "TypeScript", "Canvas API", "CSS Grid", "Tailwind CSS"],
    metrics: [
      { label: { id: "FPS Kanvas", en: "Canvas FPS" }, value: "60 FPS" },
      { label: { id: "Ukuran Bundle", en: "Bundle Footprint" }, value: "22 KB" },
      { label: { id: "Skor Aksesibilitas", en: "A11y Rating" }, value: "100-100" },
    ],
    description: {
      id: "Sebuah sistem desain interaktif yang menggabungkan prinsip International Typographic Style (Swiss Style) dengan komputasi kanvas generatif, memungkinkan desainer dan engineer menyusun poster editorial interaktif berbasis web. Dilengkapi kalkulator skala modular matematis, penataan ruang negatif asimetris dinamis, dan transisi kanvas 60 FPS dengan jejak bundle ultra-ringan hanya 22 KB.",
      en: "An interactive design system marrying International Typographic Style (Swiss Style) with generative canvas algorithms, allowing designers and engineers to compose dynamic web-based editorial posters. Built with modular scale mathematical models, asymmetric negative space balance, and guaranteed 60 FPS canvas rendering with an ultra-lightweight 22 KB bundle footprint.",
    },
    role: {
      id: "Solo Creator & Creative Technologist — riset tipografi, matematika grid asimetris, dan implementasi kanvas interaktif.",
      en: "Solo Creator & Creative Technologist — typography research, asymmetric grid mathematics, and interactive canvas coding.",
    },
    problem: {
      id: "Banyak situs portfolio modern terjebak dalam template generik kartu 3-kolom yang seragam, kehilangan jiwa seni dan kepekaan tata letak editorial yang abadi.",
      en: "Modern portfolio templates are trapped in repetitive three-column card grids, lacking typographic character, artistic gravity, and timeless editorial rhythm.",
    },
    solution: {
      id: "Membangun kalkulator skala modular, penataan ruang negatif asimetris, serta transisi wipe bertingkat yang menghormati ritme visual majalah arsitektur.",
      en: "Built a modular scale calculator, asymmetric negative space rhythm system, and layered color-wipe reveals inspired by classical architectural periodicals.",
    },
    process: [
      {
        phase: "01 - RESEARCH",
        title: { id: "Studi Tipografi Swiss", en: "Swiss Typographic Canon" },
        desc: {
          id: "Menganalisis prinsip grid Josef Müller-Brockmann dan Emil Ruder untuk diintegrasikan ke sistem token CSS modern.",
          en: "Distilled the principles of Josef Müller-Brockmann and Emil Ruder into modern CSS variables and mathematical aspect ratios.",
        },
      },
      {
        phase: "02 - PROTOTYPING",
        title: { id: "Interaksi Kanvas & Transform", en: "Canvas Interpolation" },
        desc: {
          id: "Merancang micro-motion yang responsif terhadap pergerakan pointer tanpa membebani daya komputasi perangkat mobile.",
          en: "Engineered pointer-responsive physics micro-movement that gracefully degrades on low-power mobile viewports.",
        },
      },
    ],
    outcomes: [
      {
        id: "Mencapai skor Lighthouse 100 pada Performance dan Best Practices.",
        en: "Achieved perfect 100-100 Lighthouse performance and accessibility audit scores.",
      },
      {
        id: "Digunakan sebagai acuan modul desain editorial untuk beberapa proyek web kreatif.",
        en: "Adopted as the foundational layout blueprint for high-craft editorial web initiatives.",
      },
    ],
    github: "https://github.com/rhanendra",
    demo: "https://github.com/rhanendra",
  },
  {
    slug: "monolith-runtime",
    title: "MONOLITH RUNTIME",
    subtitle: {
      id: "Koordinator Job Terdistribusi & Bridge Telemetri Deterministik",
      en: "Deterministic Distributed Job Coordinator & Telemetry Engine",
    },
    category: "BACKEND - DISTRIBUTED",
    year: "2024",
    featured: true,
    image: "/assets/projects/monolith-runtime.jpg",
    technologies: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Docker", "Linux"],
    metrics: [
      { label: { id: "P99 Response", en: "P99 Latency" }, value: "4.2 ms" },
      { label: { id: "Fault Tolerance", en: "Uptime Stability" }, value: "99.99%" },
    ],
    description: {
      id: "Runtime backend yang dirancang untuk mengeksekusi antrean tugas asinkron dengan konsistensi data kuat, jejak audit terenkripsi, dan antarmuka inspeksi berbasis terminal yang minimalis.",
      en: "A backend runtime engineered for executing asynchronous background job queues with strict consistency, encrypted audit trails, and a minimalist terminal inspection UI.",
    },
    role: {
      id: "Backend Engineer — perancangan skema database relasional, skrip orkestrasi Linux, dan benchmark performa.",
      en: "Backend Engineer — relational schema design, Linux orchestration scripts, and throughput benchmark profiling.",
    },
    problem: {
      id: "Kegagalan silent pada worker proses sering kali tidak terdeteksi sebelum terjadi desinkronisasi data antar layanan.",
      en: "Silent worker failures often go undetected until relational state desynchronization occurs across dependent microservices.",
    },
    solution: {
      id: "Membuat sistem heartbeat deterministik dengan self-healing worker pool dan event ledger yang tidak dapat diubah (immutable).",
      en: "Constructed deterministic heartbeat health probes with self-healing worker pools and an append-only immutable event ledger.",
    },
    process: [
      {
        phase: "01 - MODELING",
        title: { id: "Desain Skema Transaksional", en: "Transactional Schema" },
        desc: {
          id: "Memodelkan tabel job dengan locking baris tingkat lanjut untuk menghindari race condition pada beban kerja tinggi.",
          en: "Engineered row-level transaction locks in PostgreSQL to eliminate concurrency race conditions under peak loads.",
        },
      },
      {
        phase: "02 - HARDENING",
        title: { id: "Pengamanan Kontainer Linux", en: "Linux Container Hardening" },
        desc: {
          id: "Mengurangi attack surface kontainer Docker dengan prinsip least-privilege dan audit dependensi ketat.",
          en: "Stripped container attack surfaces via rootless Docker daemon execution and zero-CVE dependency auditing.",
        },
      },
    ],
    outcomes: [
      {
        id: "Tingkat pemulihan otomatis 100% pada simulasi kegagalan worker node.",
        en: "100% automated worker recovery during node failure stress simulations.",
      },
    ],
    github: "https://github.com/rhanendra",
  },
  {
    slug: "cipher-flow",
    title: "CIPHER FLOW",
    subtitle: {
      id: "Suite Audit Kriptografi & Analisis Keamanan Permukaan Web",
      en: "Cryptographic Audit Suite & Web Surface Security Scanner",
    },
    category: "SECURITY TOOLING",
    year: "2023",
    featured: true,
    image: "/assets/projects/cipher-flow.jpg",
    technologies: ["Python", "JavaScript", "Linux CLI", "Burp Suite API", "Nmap NSE"],
    metrics: [
      { label: { id: "Endpoint Scan", en: "Target Checks" }, value: "140+ Rules" },
      { label: { id: "False Positive", en: "False Positive Rate" }, value: "< 1.5%" },
    ],
    description: {
      id: "Perangkat lunak analisis kerentanan ringan yang menginspeksi konfigurasi header TLS-SSL, sanitasi input, dan kebocoran token pada aplikasi web modern.",
      en: "A lightweight vulnerability scanner assessing TLS-SSL cipher suites, input sanitization boundaries, and client token exposure on modern web surfaces.",
    },
    role: {
      id: "Security Researcher & Developer — implementasi parser aturan audit, generator laporan markdown, dan CLI tooling.",
      en: "Security Researcher & Developer — implemented rule parsers, markdown report generators, and CLI tooling integration.",
    },
    problem: {
      id: "Pemindaian keamanan enterprise seringkali lambat, menghasilkan terlalu banyak noise false-positive, dan laporannya sulit dipahami pengembang frontend.",
      en: "Enterprise vulnerability scanners generate excessive false-positive noise and output unreadable PDF blobs that frontend developers struggle to act on.",
    },
    solution: {
      id: "Membangun scanner bertarget cepat yang memvalidasi temuan dengan bukti nyata (Proof-of-Concept) dan instruksi perbaikan kode yang jelas.",
      en: "Engineered a fast, focused scanner delivering reproducible Proof-of-Concept payloads and actionable code-level remediation diffs.",
    },
    process: [
      {
        phase: "01 - TAXONOMY",
        title: { id: "Klasifikasi Kerentanan", en: "Vulnerability Taxonomy" },
        desc: {
          id: "Menyelaraskan cek aturan dengan panduan OWASP ASVS dan CIS Benchmark.",
          en: "Mapped automated rule checks directly to OWASP ASVS and CIS hardening benchmarks.",
        },
      },
    ],
    github: "https://github.com/rhanendra",
  },
];
