export interface RoleExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  framing?: string;
  badge?: string;
}

export interface FocusArea {
  id: string;
  title: string;
  thesis: string;
  topics: string[];
  openQuestions?: string[];
  tags: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  badge?: string;
}

export interface SkillGroup {
  number: string;
  name: string;
  skills: string[];
}

export const profile = {
  identity: {
    fullName: "Abhishek Kumar Gupta",
    shortName: "Abhishek",
    professionalTitle: "Security Engineer @ PwC",
    primaryPositioning: "Application Security • VAPT • IAM • LLM Security",
    currentLocation: "Kolkata, West Bengal, India",
    website: "https://abhikrgupta.dev",
    linkedIn: "https://www.linkedin.com/in/abhikrgupta",
    github: "https://github.com/Abhikrgupta",
    email: {
      user: "abhishekkumargupta1207",
      domain: "gmail.com",
      label: "Write to me directly",
      fallback: "#contact"
    }
  },

  hero: {
    name: "Abhishek Kumar Gupta",
    role: "Security Engineer @ PwC",
    headlineStart: "Finding the failures that ",
    headlineEmphasized: "keep recurring",
    headlineEnd: "",
    description:
      "Security engineer working on application security, VAPT, and identity & access management at PwC, previously Deloitte. I write about how these failures appear in real systems - increasingly in applications with language models in the request path.",
    primaryCta: { text: "What I work on", href: "#focus" },
    secondaryCta: { text: "Selected writing", href: "/writing" },
    thirdCta: { text: "LinkedIn", href: "https://www.linkedin.com/in/abhikrgupta" }
  },

  terminal: {
    title: "abhik@sec-ops ~",
    entries: [
      { cmd: "cat focus.txt", output: "authorization • identity • llm-security" },
      { cmd: "ls certifications/", output: "CEH  CND  CLLMSP  CLLMSE" },
      { cmd: "cat location.txt", output: "Kolkata, West Bengal, India" },
      { cmd: "echo $STATUS", output: "open to security work and collaboration" }
    ]
  },

  stats: [
    { value: "B.Tech", label: "Computer Science" },
    { value: "Big 4", label: "PwC + Deloitte" },
    { value: "3+", label: "Years in security" },
    { value: "CEH", label: "+ LLM security certs" }
  ],

  about: {
    sectionLabel: "Profile",
    summary:
      "Cybersecurity professional, 3+ years AppSec/VAPT/IAM; find exploitable issues, rank by business risk, explain to engineers and leadership; also studies how AppSec changes when LLMs sit in the request path.",
    highlights: [
      {
        title: "Enterprise VAPT",
        desc: "Web, mobile, and API penetration testing across multi-tenant enterprise environments."
      },
      {
        title: "Risk-Ranked Reporting",
        desc: "Translating technical vulnerabilities into actionable business risk for engineering and executive leadership."
      },
      {
        title: "VAPT Process Design",
        desc: "Structuring vulnerability management workflows, scoping protocols, and remediation validation."
      },
      {
        title: "IAM & Access Control",
        desc: "Treating identity as a core control plane and systematically addressing authorization failure classes."
      },
      {
        title: "LLM / AI Security",
        desc: "OWASP LLM Top 10, prompt injection defenses, RAG data integrity, and plugin authorization."
      },
      {
        title: "Delivery Pipeline Security",
        desc: "Embedding continuous security testing into CI/CD workflows while preserving human adversarial analysis."
      }
    ]
  },

  focusAreas: [
    {
      id: "llm-security",
      title: "LLM and AI application security",
      thesis: "LLMs introduce new trust boundaries and new application-level security failure modes.",
      topics: [
        "Prompt injection (direct & indirect)",
        "Insecure output handling",
        "Plugin and tool use authorization",
        "Data leakage and context isolation",
        "RAG security and document provenance",
        "Model / application trust boundaries",
        "OWASP LLM Top 10 implementation",
        "Defenses that remain robust across model weights updates"
      ],
      openQuestions: [
        "Systematic evaluation frameworks for non-deterministic pipelines",
        "Formal security taxonomies for autonomous tool-calling agents",
        "Architectural defenses that survive model capability shifts"
      ],
      tags: ["LLM01-10", "Prompt injection", "RAG", "Tool use"]
    },
    {
      id: "authorization-access-control",
      title: "Authorization and access control",
      thesis: "Authorization failures remain one of the most persistent application security failure classes.",
      topics: [
        "Broken Object-Level Authorization (BOLA / IDOR)",
        "Privilege gaps across microservice boundaries",
        "Access-control design and enforcement patterns",
        "Structural authorization bugs in complex workflows",
        "Policy definitions and distributed enforcement",
        "API security and token scope validation",
        "Identity & Access Management (IAM) architectures"
      ],
      tags: ["Access control", "API security", "IAM"]
    },
    {
      id: "continuous-security-testing",
      title: "Continuous security testing",
      thesis: "An annual pentest alone is too late for modern delivery cycles.",
      topics: [
        "VAPT lifecycle integration in CI/CD pipelines",
        "Pre-commit security hooks (Gitleaks, secret hygiene)",
        "Automated Static Analysis (Semgrep, SAST)",
        "Dynamic Application Security Testing (DAST / ZAP)",
        "Staging verification vs. production controls",
        "Contextual security metrics and remediation tracking",
        "Why automation scales testing but cannot replace human penetration testing or cognitive risk analysis"
      ],
      tags: ["VAPT", "CI/CD", "Measurement"]
    },
    {
      id: "identity-cloud-security",
      title: "Identity, misconfiguration and cloud-adjacent security",
      thesis: "Identity is the ultimate control plane in modern distributed systems.",
      topics: [
        "Enterprise IAM migrations (OpenAM to Microsoft Entra ID)",
        "OAuth 2.0, OIDC, and SAML token validation",
        "Overly broad cloud permissions and privilege escalation",
        "Security misconfigurations across AWS and GCP",
        "Server-Side Request Forgery (SSRF) and metadata protection",
        "Hardening against CIS benchmarks"
      ],
      tags: ["IAM", "Misconfiguration", "SSRF"]
    }
  ],

  experience: [
    {
      company: "PwC",
      role: "Associate - Security Engineer",
      period: "May 2025 - Present",
      location: "Kolkata, India",
      summary:
        "Security engineering role focused on finding exploitable issues, understanding their business impact, communicating findings clearly, and improving how security is incorporated into systems and delivery.",
      highlights: [
        "Application security assessments and penetration testing across enterprise web, API, and mobile platforms.",
        "Security testing of authentication and authorization mechanisms for enterprise OpenAM to Microsoft Entra ID migration.",
        "Security evaluation of OAuth 2.0, OIDC, and SAML implementations, validating token handling, claims mapping, and session integrity.",
        "Identifying vulnerabilities related to broken authentication, access control flaws, and identity misconfigurations using manual testing and automated DAST tools.",
        "Threat modeling, secure architecture design reviews, and risk-ranked remediation reporting."
      ],
      badge: "Current Role"
    },
    {
      company: "Deloitte",
      role: "Risk Advisory Consultant",
      period: "June 2022 - August 2024",
      location: "Mumbai, India",
      summary:
        "Professional cybersecurity consulting practice across end-to-end vulnerability management, penetration testing, and enterprise client advisory.",
      highlights: [
        "Conducted manual and automated VAPT for enterprise Web, API, and Mobile applications aligned with OWASP Top 10 and SANS Top 25.",
        "Performed Static & Dynamic Application Security Testing (SAST & DAST) using Checkmarx, SonarQube, Burp Suite, Invicti, Acunetix, Nessus, and Qualys.",
        "Automated security testing and reporting workflows using Python, Nuclei, Dirsearch, and FFUF, reducing manual audit effort by ~40%.",
        "Conducted cloud security reviews across AWS and GCP environments, identifying configuration weaknesses and advising on CIS benchmark remediation.",
        "Led client communications, scoping discussions, risk rating justifications, and technical remediation validation."
      ]
    },
    {
      company: "Delhivery",
      role: "QA Intern",
      period: "April 2022 - May 2022",
      location: "Gurugram, India",
      summary:
        "Software quality assurance and automated defect identification within high-scale logistics platforms.",
      highlights: [
        "Engineered manual and automated test suites using Selenium and Maven.",
        "Identified defects and validated test coverage across pre-deployment release pipelines."
      ]
    },
    {
      company: "Rams Creative Technologies",
      role: "Business Analyst Executive",
      period: "October 2021 - December 2021",
      location: "Jaipur, India",
      summary:
        "Product requirements and platform analysis for immersive AR/VR educational solutions.",
      highlights: [
        "Conducted stakeholder analysis and technical requirements gathering.",
        "Evaluated educational platform workflows and digital asset pipelines."
      ]
    },
    {
      company: "SketchingNerds",
      role: "Founder",
      period: "March 2019 - June 2020",
      location: "Phagwara, India",
      summary:
        "Founded and operated an online artist commission marketplace connecting independent digital creators with global clients.",
      highlights: [
        "Led product development, marketplace operations, and client communications.",
        "Managed a creative collective of 10+ artists, overseeing project scoping and delivery."
      ]
    }
  ],

  educationAndCredentials: {
    sectionLabel: "Education & credentials",
    university: {
      institution: "Lovely Professional University (LPU)",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2018 - 2022",
      location: "Phagwara, Punjab, India",
      coursework: [
        "Data Structures in C++",
        "Design and Analysis of Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Compiler Design",
        "Computer Organization",
        "Theory of Computation"
      ]
    },
    certifications: [
      {
        name: "CLLMSE",
        issuer: "Red Team Leaders",
        period: "2026",
        badge: "LLM Security"
      },
      {
        name: "CLLMSP",
        issuer: "Red Team Leaders",
        period: "2026",
        badge: "LLM Security"
      },
      {
        name: "CEH (Certified Ethical Hacker)",
        issuer: "EC-Council",
        period: "2023 - 2026",
        badge: "Offensive"
      },
      {
        name: "CND (Certified Network Defender)",
        issuer: "EC-Council",
        period: "2026 - 2029",
        badge: "Defense"
      },
      {
        name: "Google IT Automation with Python",
        issuer: "Coursera / Google",
        period: "2020",
        badge: "Automation"
      },
      {
        name: "Developing Applications with GCP",
        issuer: "Coursera / Google",
        period: "2020",
        badge: "Cloud"
      }
    ],
    languages: [
      { name: "English", level: "Full professional proficiency" },
      { name: "Hindi", level: "Native" },
      { name: "Bengali", level: "Professional" },
      { name: "Nepali", level: "Professional" },
      { name: "German", level: "Elementary" }
    ]
  },

  skillsGroups: [
    {
      number: "01",
      name: "Offensive Security",
      skills: [
        "Web application penetration testing",
        "Mobile penetration testing",
        "API penetration testing",
        "VAPT",
        "Vulnerability assessment",
        "Burp Suite",
        "Frida",
        "Postman",
        "Kali Linux",
        "OWASP methodology"
      ]
    },
    {
      number: "02",
      name: "Risk & Controls",
      skills: [
        "Risk assessment",
        "Risk ranking",
        "Security reporting",
        "Threat modeling",
        "Security controls",
        "IAM",
        "Access control",
        "Secure design",
        "VAPT process design",
        "Security governance"
      ]
    },
    {
      number: "03",
      name: "AI / LLM Security",
      skills: [
        "LLM security",
        "OWASP LLM Top 10",
        "Prompt injection defense",
        "RAG security",
        "Tool security",
        "Plugin security",
        "Output handling",
        "AI application security",
        "LLM threat modeling",
        "AI security testing"
      ]
    },
    {
      number: "04",
      name: "Technical Stack",
      skills: [
        "Python",
        "C / C++",
        "Selenium",
        "Maven",
        "Postman",
        "Burp Suite",
        "Frida",
        "Kali Linux",
        "Checkmarx",
        "Nessus",
        "Qualys",
        "Gitleaks",
        "Semgrep",
        "Trivy",
        "OWASP ZAP"
      ]
    }
  ],

  recommendation: {
    author: "Rushikesh Patil",
    role: "Product Security @ Flipkart | Offensive Security",
    relationship: "Worked with Abhishek for around two years on the same team",
    date: "January 26, 2026",
    source: "LinkedIn Recommendation",
    quote: [
      "I had the opportunity to work closely with Abhishek for around two years as part of the same team, and it was genuinely a great experience. He is someone who combines strong technical depth with clear and effective communication, which is not easy to find.",
      "Abhishek has excellent hands-on experience in web, mobile, and API penetration testing, and he consistently demonstrated a solid understanding of both attack techniques and real-world security implications. What really stood out to me was his ability to explain complex security issues in a simple and practical way, whether it was during internal discussions or while working with stakeholders.",
      "He is proactive, reliable, and always willing to help others in the team. You can count on him to take ownership of tasks and deliver quality work without needing constant supervision. Any team working in security or offensive testing would be lucky to have him."
    ],
    qualities: [
      "Technical depth",
      "Clear communication",
      "Web, mobile & API penetration testing",
      "Proactive & reliable",
      "Independent task ownership"
    ]
  },

  contact: {
    heading: "Contact",
    description:
      "Open to security work, technical collaboration, and conversations about the problems above."
  }
};
