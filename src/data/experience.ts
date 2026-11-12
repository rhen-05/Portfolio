export interface IExperienceItem {
  id: string;
  year: string;
  category: 'EDUCATION' | 'COMPETITIONS' | 'CERTIFICATIONS' | 'PROJECTS' | 'MILESTONES';
  role: {
    id: string;
    en: string;
  };
  organization: string;
  location: string;
  description: {
    id: string;
    en: string;
  };
  highlights?: {
    id: string;
    en: string;
  }[];
  tags: string[];
}

export const experienceData: IExperienceItem[] = [
  {
    id: "exp-1",
    year: "2024 — PRESENT",
    category: "MILESTONES",
    role: {
      id: "Independent Creative Developer & Security Researcher",
      en: "Independent Creative Developer & Security Researcher",
    },
    organization: "Studio & Lab Eksplorasi",
    location: "Surabaya, Indonesia",
    description: {
      id: "Fokus mendalam pada perancangan antarmuka web editorial presisi tinggi, arsitektur frontend performa ekstrem, dan riset keamanan siber defensif.",
      en: "Dedicated focus on crafting high-precision editorial web surfaces, extreme performance frontend architectures, and defensive cybersecurity research.",
    },
    highlights: [
      {
        id: "Merancang fondasi desain token anti-slop untuk antarmuka web modern.",
        en: "Engineered anti-slop tokenized design foundations for modern web interfaces.",
      },
      {
        id: "Menyelesaikan audit keamanan mandiri terhadap aplikasi web berbasis OWASP ASVS.",
        en: "Executed independent web security audits benchmarked against OWASP ASVS standards.",
      },
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Linux", "Web Security"],
  },
  {
    id: "exp-2",
    year: "2023 — 2024",
    category: "COMPETITIONS",
    role: {
      id: "Finalist — Web Innovation & Cybersecurity CTF",
      en: "Finalist — Web Innovation & Cybersecurity CTF",
    },
    organization: "National Tech Showcase & CTF",
    location: "Indonesia",
    description: {
      id: "Berkompetisi dalam pemecahan tantangan keamanan web (reverse engineering, kriptografi, web exploitation) serta pembuatan purwarupa aplikasi berkecepatan tinggi.",
      en: "Competed in solving technical web security challenges (reverse engineering, cryptography, web exploitation) and rapid high-fidelity application prototyping.",
    },
    highlights: [
      {
        id: "Menyelesaikan challenge reverse engineering dan inspeksi lalu lintas jaringan.",
        en: "Solved complex reverse engineering and packet inspection challenge tracks.",
      },
    ],
    tags: ["Capture The Flag", "Network Forensics", "Web Exploitation", "Prototyping"],
  },
  {
    id: "exp-3",
    year: "2022 — 2024",
    category: "PROJECTS",
    role: {
      id: "Frontend Engineer & Interface Specialist",
      en: "Frontend Engineer & Interface Specialist",
    },
    organization: "Collaborative Tech Projects",
    location: "Indonesia",
    description: {
      id: "Mengembangkan berbagai aplikasi web interaktif, dasbor data real-time, dan situs presentasi produk dengan komitmen tinggi pada modularitas dan aksesibilitas.",
      en: "Engineered bespoke interactive web applications, real-time data dashboards, and product presentation sites committed to modularity and accessibility.",
    },
    tags: ["JavaScript", "React", "Node.js", "Express", "UI Systems"],
  },
  {
    id: "exp-4",
    year: "2021 — PRESENT",
    category: "EDUCATION",
    role: {
      id: "Teknik Informatika - Computer Science",
      en: "Informatics & Computer Science Studies",
    },
    organization: "Universitas - Institusi Pendidikan",
    location: "Surabaya, Indonesia",
    description: {
      id: "Mendalami struktur data, algoritma komputasi, sistem operasi, jaringan komputer, dan rekayasa perangkat lunak modern.",
      en: "Deep dive into data structures, computational algorithms, operating systems, computer networking, and modern software engineering paradigms.",
    },
    tags: ["Algorithms", "Computer Systems", "Database Design", "Operating Systems"],
  },
];
