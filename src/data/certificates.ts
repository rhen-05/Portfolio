export interface ICertificate {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: string;
  image: string;
  verificationUrl?: string;
  description: {
    id: string;
    en: string;
  };
  skillsCovered: string[];
}

export const certificatesData: ICertificate[] = [
  {
    slug: "comptia-security-plus",
    title: "CompTIA Security+ (SY0-701)",
    issuer: "CompTIA",
    date: "2024",
    credentialId: "COMP-SEC-782194",
    category: "CYBERSECURITY & DEFENSE",
    image: "/assets/certificates/cert-1.jpg",
    verificationUrl: "https://www.credly.com/",
    description: {
      id: "Sertifikasi industri global yang memvalidasi kompetensi fundamental dalam arsitektur keamanan siber, analisis ancaman, manajemen kerentanan, kepatuhan hukum, dan mitigasi insiden keamanan.",
      en: "Global industry credential validating core competencies in cybersecurity architecture, threat analysis, vulnerability management, security compliance, and incident response mitigation.",
    },
    skillsCovered: ["Threat Vectors", "Cryptographic Protocols", "Identity Management", "Security Operations", "Incident Response"],
  },
  {
    slug: "ccna-enterprise-networking",
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco Systems",
    date: "2023",
    credentialId: "CSCO-ID-149028",
    category: "NETWORK INFRASTRUCTURE",
    image: "/assets/certificates/cert-2.jpg",
    verificationUrl: "https://www.cisco.com/",
    description: {
      id: "Validasi mendalam mengenai protokol routing dan switching IP, topologi jaringan LAN-WAN, keamanan port jaringan, serta otomasi infrastruktur berbasis kontroler.",
      en: "In-depth validation of IP routing and switching protocols, LAN-WAN topologies, network port security, and controller-driven infrastructure automation.",
    },
    skillsCovered: ["IPv4 - IPv6 Subnetting", "VLANs & Trunking", "OSPF Routing", "ACLs & NAT", "Network Automation"],
  },
  {
    slug: "dicoding-frontend-expert",
    title: "Menjadi Front-End Web Developer Expert",
    issuer: "Dicoding Indonesia",
    date: "2024",
    credentialId: "DCD-FE-994102",
    category: "FRONTEND ENGINEERING",
    image: "/assets/certificates/cert-3.jpg",
    verificationUrl: "https://www.dicoding.com/",
    description: {
      id: "Program sertifikasi pengembang web tingkat lanjut yang mencakup Progressive Web Apps (PWA), Web Workers, optimasi Core Web Vitals, otomatisasi pengujian E2E dan Unit testing.",
      en: "Advanced web engineering certification covering Progressive Web Apps (PWA), Web Workers, Core Web Vitals optimization, automated E2E testing, and unit testing rigs.",
    },
    skillsCovered: ["PWA & Service Workers", "IndexedDB Caching", "Web Performance Budget", "Clean Architecture", "Automated Testing"],
  },
  {
    slug: "linux-foundation-sysadmin",
    title: "Linux System Administration & Security",
    issuer: "The Linux Foundation",
    date: "2023",
    credentialId: "LF-SA-551042",
    category: "OPERATING SYSTEMS",
    image: "/assets/certificates/cert-4.jpg",
    verificationUrl: "https://training.linuxfoundation.org/",
    description: {
      id: "Sertifikasi pengelolaan server Linux tingkat lanjut: konfigurasi kernel, partisi storage LVM, hardening SSH, manajemen log sistem (journald), dan isolasi proses.",
      en: "Advanced Linux server administration certification: kernel tuning, LVM storage configuration, SSH hardening, systemd journal auditing, and process namespace isolation.",
    },
    skillsCovered: ["Bash Scripting", "Process Management", "Systemd Units", "Firewall UFW-iptables", "Kernel Parameters"],
  },
  {
    slug: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SAA-839201",
    category: "CLOUD INFRASTRUCTURE",
    image: "/assets/certificates/cert-5.jpg",
    verificationUrl: "https://aws.amazon.com/certification/",
    description: {
      id: "Validasi perancangan arsitektur cloud terdistribusi, ketersediaan tinggi (High Availability), cost optimization, mitigasi risiko data, dan keamanan multi-tier AWS.",
      en: "Validation in architecting distributed cloud systems, high availability patterns, cost efficiency, data resilience, and multi-tier AWS security controls.",
    },
    skillsCovered: ["AWS VPC & Networking", "Auto Scaling & ECS", "S3 Storage Systems", "IAM Zero Trust", "Serverless Architecture"],
  },
  {
    slug: "offsec-cybersecurity-defense",
    title: "OffSec Defense & Penetration Testing",
    issuer: "OffSec",
    date: "2024",
    credentialId: "OFFSEC-OSCP-491208",
    category: "OFFENSIVE SECURITY",
    image: "/assets/certificates/cert-6.jpg",
    verificationUrl: "https://www.offsec.com/",
    description: {
      id: "Pengujian penetrasi defensif dan ofensif tingkat lanjut, exploit analysis, privilege escalation sistem operasi, dan metodologi audit postur keamanan siber.",
      en: "Advanced defensive and offensive penetration testing, exploit chain analysis, operating system privilege escalation, and security posture auditing.",
    },
    skillsCovered: ["Privilege Escalation", "Buffer Overflow", "Web App Pentesting", "Active Directory Attacks", "Network Pivoting"],
  },
];
