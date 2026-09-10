---
title: "OWASP Top 10 (2025): What's Changed and Why It Matters"
date: "2025-11-08"
description: "A technical practitioner analysis of the evolving OWASP Top 10, examining why Broken Access Control persists, how supply chain vectors have matured, and the architectural shifts required for modern application security."
tags: ["OWASP", "AppSec", "Web Security"]
readingTime: "9 min read"
---

The OWASP Top 10 remains one of the most widely referenced documents in application security, yet it is often misunderstood as a checklist rather than a categorization of systemic design and implementation failures. As systems become more distributed, composed of microservices, third-party libraries, and increasingly autonomous agentic components, the threat landscape shifts in subtle ways.

In this practitioner review, we analyze what has evolved in the 2025 release cycle, why Broken Access Control continues to dominate real-world findings, and what these changes mean for enterprise penetration testers and application security engineers.

```
+-----------------------------------------------------------------------+
|                EVOLUTION OF ENTERPRISE ATTACK VECTORS                 |
+-----------------------------------------------------------------------+
|  Monolithic Perimeter               Distributed Trust Boundaries      |
|  [Browser] -> [Monolith] -> [DB]    [Browser] -> [API Gateway]        |
|                                                     |                 |
|  * SQL Injection                    * Broken Object-Level Auth (BOLA) |
|  * Cross-Site Scripting (XSS)       * SSRF across Cloud Metadata      |
|  * Parameter Tampering              * Insecure Third-Party Dep Tree   |
|                                     * Agentic / LLM Ingestion Flaws   |
+-----------------------------------------------------------------------+
```

## 1. Broken Access Control (BAC) Remains #1

For several cycles now, Broken Access Control has retained the top spot. During enterprise penetration testing engagements, authorization flaws consistently outnumber injection vulnerabilities.

Why does authorization remain so stubborn?
- **Business Logic Complexity**: Unlike memory corruption or basic SQL injection, access control cannot be solved by a generic compiler flag or an automated parameterized query wrapper. Authorization is intimately tied to business domain models: Who owns this tenant? Can a sub-manager approve an invoice created in another subsidiary?
- **Microservice Disconnects**: When an application decomposes into dozens of internal services, teams frequently rely on the edge gateway for authentication, leaving downstream inter-service calls unprotected or assuming trusted internal networks.
- **Horizontal Privilege Creep**: In modern REST and GraphQL APIs, predictable resource identifiers (UUIDs or sequential IDs) exposed without server-side owner validation directly facilitate Insecure Direct Object References (IDOR).

From an offensive standpoint, testing for BAC requires manual contextual exploration: swapping session tokens, manipulating tenant headers, and mapping state machines across different permission tiers. Automated DAST scanners struggle here because they lack the business context to know whether User A was supposed to view User B's statement.

## 2. Security Misconfiguration and Cloud Metadata

Security misconfiguration is no longer just about default admin passwords on Tomcat servers. Today, misconfiguration manifests in complex orchestration layers:
- Permissive Cross-Origin Resource Sharing (CORS) configurations with wildcard origins reflecting authenticated origins.
- Dangling DNS records and subdomain takeovers due to unmanaged serverless deployments.
- Inadequately scoped service accounts inside container environments, where containers can query the instance metadata service (IMDS) at `169.254.169.254`.

Penetration testers must treat configuration as executable code. Reviewing Terraform modules or Kubernetes manifests (SAST for IaC) alongside runtime verification is now required to catch these gaps before an attacker leverages an SSRF primitive into full cloud control plane compromise.

## 3. Software and Data Integrity Failures: The Supply Chain Reality

The software supply chain has moved from a theoretical threat to a primary breach vector. Applications today are rarely built from scratch; they are assembled from thousands of open-source dependencies, CI/CD actions, and pre-built container layers.

Integrity failures now encompass:
- Malicious packages published via typosquatting or namespace confusion.
- Compromised developer workstations used to sign and push malicious commits into trusted build pipelines.
- CI/CD secrets exfiltrated during pipeline runs via untrusted pull request actions.

Addressing this requires strict dependency pinning, automated software bill of materials (SBOM) generation, and runtime integrity checks. For security testers, validating whether an enterprise enforces signature verification for build artifacts is as crucial as finding an input validation flaw.

## 4. Injection: Less Raw SQL, More Parsing Discrepancies

While traditional SQL injection has declined in modern web frameworks that utilize object-relational mappers (ORMs) by default, injection as a vulnerability class has evolved into parsing discrepancies:
- **NoSQL & ORM Injection**: Complex JSON query structures in MongoDB or ORM filter bypasses allowing unauthorized data retrieval.
- **Template Injection (SSTI)**: Server-side template engines executing arbitrary commands when untrusted strings are concatenated into templates.
- **Command Injection via Helper Scripts**: Internal automation pipelines invoking shell commands without proper argument separation.

The fundamental flaw remains identical: treating untrusted data as executable control flow instructions.

## 5. Server-Side Request Forgery (SSRF) in Modern Clouds

SSRF remains critical because modern architectures heavily integrate with external webhooks, PDF generation microservices, and preview scrapers. When an application fetches a remote URL supplied by an end-user, without strict protocol and IP restrictions, attackers can route requests internally to:
- Cloud metadata services to extract short-lived instance tokens.
- Internal administrative portals operating without authentication behind the perimeter.
- Loopback services listening on `127.0.0.1` inside container pods.

Remediation requires defense in depth: DNS resolution pinning before request dispatch, strict IP allowlisting (disallowing private RFC 1918 ranges), and enforcing IMDSv2 across cloud environments.

## 6. Emerging Consideration: Language Models in the Request Path

An emerging frontier for application security is the introduction of Large Language Models directly into application request and response workflows. When an application passes user inputs or third-party web content into an LLM prompt and then executes actions based on the model's output, traditional trust boundaries are breached.

Prompt injection, insecure output handling, and tool abuse represent new variants of age-old issues:
- Untrusted data altering instruction semantics (the core definition of injection).
- Downstream systems executing unvalidated commands returned by an external processor without proper authorization checks.

Security teams preparing for modern architectures must evaluate both classic OWASP web vulnerabilities and emerging LLM-specific trust boundary violations.

## Practical Takeaways for Practitioners

1. **Prioritize Authorization Matrix Audits**: Dedicate the majority of pentest time to verifying user-to-resource ownership across all API endpoints.
2. **Automate the Obvious, Reserve Human Analysis for the Complex**: Use SAST and dependency scanning in CI/CD to eliminate low-hanging misconfigurations, allowing security engineers to focus on business logic and identity flaws.
3. **Validate Cloud Boundary Protections**: Ensure IMDSv2 is enforced across all cloud workloads and verify that egress filtering prevents SSRF pivoting.
4. **Treat Identity as the Perimeter**: As microservices proliferate, ensure tokens are cryptographically signed, explicitly scoped, and validated at every service boundary.
