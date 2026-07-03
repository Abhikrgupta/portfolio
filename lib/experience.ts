export type ExperienceEntry = {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "PwC",
    role: "Cybersecurity Consultant",
    duration: "Apr 2025 — Present",
    responsibilities: [
      "Evaluate Oauth 2.0 authentication flows, including token issuance, scope validation, session handling, and authorization enforcement.",
      "Perform security validation of SAML based Single Sign On (SSO) implementations, verifying identity assertions, claims mapping, and authentication flows.",
      "Conduct security testing of authentication and authorization mechanisms as part of enterprise Identity and Access Management (IAM) migration initiatives across web and API applications.",
      "Identify vulnerabilities related to broken authentication, access control flaws, and identity misconfigurations using manual testing and automated DAST tools such as Burp Suite and Invicti (Netsparker).",
      "Analyse security findings, prioritize risks based on impact, and collaborate with development and IAM teams to improve application identity security posture.",
    ],
    technologies: ["Burp Suite", "OWASP ZAP", "Postman", "Nmap", "SAML", "OAuth 2.0", "OpenID Connect", "JWT"],
  },
  {
    company: "Deloitte",
    role: "Risk Advisory Consultant",
    duration: "Jun 2022 — Aug 2024",
    responsibilities: [
      "Conducted Vulnerability Assessment and Penetration Testing (VAPT) for web, API, and mobile applications using manual testing techniques and security tools including Burp Suite, Qualys, and Nessus.",
      "Identified and validated critical vulnerabilities aligned with OWASP Top 10 and SANS Top 25, enabling development teams to remediate security flaws and strengthen application security posture.",
      "Performed Static and Dynamic Application Security Testing (SAST & DAST) using Checkmarx, SonarQube, and Burp Suite, identifying insecure coding practices and improving secure development workflows.",
      "Developed Python-based automation scripts for vulnerability analysis and reporting, optimizing vulnerability management workflows and reducing manual audit effort by ~40%.",
      "Conducted cloud security assessments across AWS and GCP environments, identifying configuration weaknesses and recommending remediation aligned with CIS benchmarks and industry security standards.",
    ],
    technologies: ["Burp Suite", "Postman", "Nmap", "Frida", "Metasploit", "OWASP ZAP"],
  },
];
