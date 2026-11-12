export interface ISkillItem {
  name: string;
  category: 'FRONTEND' | 'BACKEND' | 'TOOLS' | 'TECHNICAL - SECURITY';
  proficiency: string; // e.g., 'Advanced', 'Production-grade'
  description: {
    id: string;
    en: string;
  };
}

export interface ISkillCategory {
  id: string;
  title: string;
  code: string;
  description: {
    id: string;
    en: string;
  };
  skills: ISkillItem[];
}

export const skillCategories: ISkillCategory[] = [
  {
    id: "frontend",
    title: "FRONTEND ARCHITECTURE",
    code: "01 - FE",
    description: {
      id: "Membangun antarmuka modern dengan modularitas tinggi, micro-interaction presisi, dan performa mulus.",
      en: "Engineering modern client surfaces with high modularity, physics micro-interactions, and 60fps performance.",
    },
    skills: [
      {
        name: "HTML5 & Semantic Web",
        category: "FRONTEND",
        proficiency: "Expert",
        description: {
          id: "Struktur semantik murni, aksesibilitas WCAG 2.1 AA, dan optimalisasi SEO natural.",
          en: "Pure semantic markup, WCAG 2.1 AA compliance, and natural search crawling optimization.",
        },
      },
      {
        name: "CSS3 - Modern CSS",
        category: "FRONTEND",
        proficiency: "Expert",
        description: {
          id: "CSS Variables, layout subgrid - flexbox, container queries, dan arsitektur desain token.",
          en: "CSS variables, subgrid & flexbox geometry, container queries, and tokenized design systems.",
        },
      },
      {
        name: "JavaScript (ESNext)",
        category: "FRONTEND",
        proficiency: "Advanced",
        description: {
          id: "Asynchronous streams, Web APIs, DOM manipulation presisi, dan memory management.",
          en: "Async pipelines, Web APIs, precision DOM operations, and memory footprint management.",
        },
      },
      {
        name: "React & TypeScript",
        category: "FRONTEND",
        proficiency: "Advanced",
        description: {
          id: "Komposisi komponen tanpa bloat, type safety ketat, dan manajemen state deterministik.",
          en: "Zero-bloat component composition, strict type safety, and deterministic state handling.",
        },
      },
      {
        name: "Tailwind CSS",
        category: "FRONTEND",
        proficiency: "Expert",
        description: {
          id: "Utility-first architecture, token archetypes kustom, dan eliminasi total duplikasi styling.",
          en: "Utility-first discipline, bespoke token archetypes, and strict style anti-duplication.",
        },
      },
    ],
  },
  {
    id: "backend",
    title: "BACKEND & SYSTEMS",
    code: "02 - BE",
    description: {
      id: "Layanan server tangguh, kontrak API yang konsisten, dan pemrosesan data deterministik.",
      en: "Resilient server runtimes, consistent API contracts, and deterministic data pipelining.",
    },
    skills: [
      {
        name: "Node.js",
        category: "BACKEND",
        proficiency: "Advanced",
        description: {
          id: "Event loop orchestration, asynchronous stream processing, dan serverless functions.",
          en: "Event loop orchestration, async stream handling, and serverless runtime execution.",
        },
      },
      {
        name: "Express.js",
        category: "BACKEND",
        proficiency: "Advanced",
        description: {
          id: "Middleware architecture, routing modular, dan otentikasi JWT berbasis standar industri.",
          en: "Middleware architecture, modular route trees, and enterprise-grade token auth.",
        },
      },
      {
        name: "PHP",
        category: "BACKEND",
        proficiency: "Intermediate",
        description: {
          id: "Pemrograman berorientasi objek modern, dependency injection, dan pengujian unit.",
          en: "Modern object-oriented paradigms, dependency injection, and deterministic unit testing.",
        },
      },
      {
        name: "Laravel",
        category: "BACKEND",
        proficiency: "Intermediate",
        description: {
          id: "Eloquent ORM, arsitektur MVC, database migrations, dan sistem job queues.",
          en: "Eloquent ORM relational modeling, MVC architecture, migrations, and job worker queues.",
        },
      },
    ],
  },
  {
    id: "tools",
    title: "DEVELOPER TOOLING",
    code: "03 - TL",
    description: {
      id: "Ekosistem alat kerja untuk kolaborasi terstruktur, otomasi, dan desain berbasis kode.",
      en: "Toolchain ecosystem for systematic collaboration, automation, and code-aligned design.",
    },
    skills: [
      {
        name: "Git",
        category: "TOOLS",
        proficiency: "Advanced",
        description: {
          id: "Atomic commits, branch rebasing, merge conflict resolution, dan integrity auditing.",
          en: "Atomic commits, interactive rebasing, merge conflict auditing, and history integrity.",
        },
      },
      {
        name: "GitHub",
        category: "TOOLS",
        proficiency: "Advanced",
        description: {
          id: "GitHub Actions CI-CD workflows, pull request reviews, dan release management.",
          en: "GitHub Actions CI-CD workflows, pull request code reviews, and semantic releases.",
        },
      },
      {
        name: "Figma",
        category: "TOOLS",
        proficiency: "Intermediate",
        description: {
          id: "Auto layout, wireframing, penataan token tipografi, dan translasi desain ke kode.",
          en: "Auto-layout components, design token tokens mapping, and direct code translation.",
        },
      },
      {
        name: "VS Code",
        category: "TOOLS",
        proficiency: "Advanced",
        description: {
          id: "Workspaces terkonfigurasi, debugging terintegrasi, dan profiling performa lokal.",
          en: "Configured multi-root workspaces, integrated debugging, and local runtime profiling.",
        },
      },
    ],
  },
  {
    id: "security",
    title: "TECHNICAL & CYBERSECURITY",
    code: "04 - SEC",
    description: {
      id: "Fondasi keamanan jaringan, inspeksi protokol, hardening sistem operasi, dan mitigasi ancaman.",
      en: "Network security foundations, protocol dissection, operating system hardening, and threat mitigation.",
    },
    skills: [
      {
        name: "Linux (Debian - Ubuntu - Arch)",
        category: "TECHNICAL - SECURITY",
        proficiency: "Advanced",
        description: {
          id: "Manajemen shell bash - zsh, konfigurasi hak akses, systemd, dan monitoring proses.",
          en: "Bash - zsh scripting, permission auditing, systemd service management, and process triage.",
        },
      },
      {
        name: "Networking & TCP-IP",
        category: "TECHNICAL - SECURITY",
        proficiency: "Advanced",
        description: {
          id: "Subnetting, routing, analisis handshake TCP, arsitektur DNS - TLS, dan firewalls.",
          en: "Subnetting, routing, TCP state teardowns, DNS - TLS infrastructure, and packet filtering.",
        },
      },
      {
        name: "Wireshark",
        category: "TECHNICAL - SECURITY",
        proficiency: "Intermediate",
        description: {
          id: "Deep packet inspection (DPI), capture filtering, dan investigasi anomali lalu lintas data.",
          en: "Deep packet inspection (DPI), capture filters, and network traffic anomaly forensics.",
        },
      },
      {
        name: "Burp Suite",
        category: "TECHNICAL - SECURITY",
        proficiency: "Intermediate",
        description: {
          id: "Web proxy interception, fuzzing parameter, dan audit kerentanan OWASP Top 10.",
          en: "Web proxy interception, request replay fuzzing, and OWASP Top 10 vulnerability auditing.",
        },
      },
      {
        name: "Nmap",
        category: "TECHNICAL - SECURITY",
        proficiency: "Intermediate",
        description: {
          id: "Network port scanning, service version detection, dan NSE scripting reconnaissance.",
          en: "Network port reconnaissance, service fingerprinting, and automated NSE script scans.",
        },
      },
    ],
  },
];
