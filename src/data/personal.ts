export interface IPersonalInfo {
  name: string;
  role: string;
  shortRole: string;
  location: string;
  timezone: string;
  status: {
    id: string;
    en: string;
  };
  profileImage: string;
  heroImage: string;
  email: string;
  statement: {
    id: string;
    en: string;
  };
  introParagraph: {
    id: string;
    en: string;
  };
  aboutStory: {
    id: string;
    en: string;
  }[];
  focusAreas: {
    title: { id: string; en: string };
    desc: { id: string; en: string };
  }[];
  stats: {
    value: string;
    label: { id: string; en: string };
  }[];
}

export const personalData: IPersonalInfo = {
  name: "RHANENDRA PRADIPTA",
  role: "Creative Developer & Problem Solver",
  shortRole: "Creative Developer",
  location: "Surabaya, Indonesia",
  timezone: "WIB (UTC+7)",
  status: {
    id: "TERBUKA UNTUK PROYEK & RISET",
    en: "OPEN TO SELECTIVE WORK",
  },
  profileImage: "/assets/profile/profile-fullbody.png",
  heroImage: "/assets/profile/profile-hero.png",
  email: "rhanendra.pradipta@gmail.com",
  statement: {
    id: "Membangun sistem digital presisi tinggi: perpaduan antara tipografi editorial, arsitektur frontend tangguh, dan keamanan siber.",
    en: "Engineering high-precision digital systems at the confluence of editorial craft, resilient frontend architecture, and cybersecurity.",
  },
  introParagraph: {
    id: "Saya adalah seorang creative developer dan researcher yang berfokus pada eksplorasi antarmuka digital bermutu tinggi, sistem terdistribusi, serta audit keamanan web.",
    en: "I am a creative developer and technical builder exploring high-craft digital interfaces, resilient distributed systems, and web security auditing.",
  },
  aboutStory: [
    {
      id: "Berangkat dari rasa ingin tahu mendalam tentang bagaimana software berinteraksi dengan manusia dan infrastruktur jaringan, saya memadukan kepekaan visual desainer produk dengan disiplin engineering yang ketat.",
      en: "Driven by curiosity about how software interacts with people and network infrastructure, I merge the visual rigor of a product designer with disciplined engineering standards.",
    },
    {
      id: "Setiap baris kode ditulis dengan tujuan jelas: tanpa kompromi performa, tanpa ornamen dekoratif berlebih (anti-slop), dan memprioritaskan privasi, efisiensi render pipeline, serta ketangguhan sistem di segala kondisi.",
      en: "Every line of code serves a verified purpose: zero performance compromise, zero decorative fluff (anti-slop), and prioritizing user privacy, render pipeline efficiency, and resilient system execution.",
    },
    {
      id: "Bagi saya, antarmuka digital bukan sekadar estetika permukaan, melainkan jembatan komunikasi deterministik antara data kompleks dan pengalaman interaktif yang intuitif, cepat, dan aman.",
      en: "To me, a digital interface is not mere surface aesthetics, but a deterministic bridge communicating complex backend telemetry into fluid, intuitive, and secure human interactions.",
    },
  ],
  focusAreas: [
    {
      title: { id: "Frontend Engineering", en: "Frontend Engineering" },
      desc: {
        id: "Arsitektur modular, micro-interactions berbasis fisika, render pipeline teroptimasi, dan kepatuhan WCAG 2.1 AA.",
        en: "Modular architectures, physics-based micro-interactions, optimized render pipelines, and WCAG 2.1 AA accessibility.",
      },
    },
    {
      title: { id: "Cybersecurity & Hardening", en: "Cybersecurity & Hardening" },
      desc: {
        id: "Analisis paket jaringan, pengujian penetrasi web, pertahanan mitigasi OWASP Top 10, dan arsitektur zero-trust.",
        en: "Network packet analysis, web penetration assessments, OWASP Top 10 mitigation, and zero-trust principles.",
      },
    },
    {
      title: { id: "Sistem & Backend", en: "Systems & Backend" },
      desc: {
        id: "Perancangan RESTful API deterministik, integrasi database relasional, dan manajemen state terdistribusi.",
        en: "Deterministic RESTful APIs, relational database integrations, and distributed client-server synchronization.",
      },
    },
    {
      title: { id: "Tipografi Editorial", en: "Editorial Typography" },
      desc: {
        id: "Komposisi Swiss asimetris, ritme ruang negatif, dan hierarki visual yang berbicara dengan keyakinan.",
        en: "Asymmetric Swiss composition, deliberate negative space rhythms, and confident visual hierarchy.",
      },
    },
  ],
  stats: [
    {
      value: "4+",
      label: { id: "Tahun Eksplorasi Kode", en: "Years of Craft" },
    },
    {
      value: "100%",
      label: { id: "Dedikasi Bebas Slop", en: "Anti-Slop Purity" },
    },
    {
      value: "99.8%",
      label: { id: "Integritas Performa", en: "Lighthouse Standard" },
    },
    {
      value: "24-7",
      label: { id: "Rasa Ingin Tahu", en: "Intellectual Curiosity" },
    },
  ],
};
