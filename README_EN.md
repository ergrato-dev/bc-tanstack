<p align="center">
  <img src="assets/bootcamp-header.svg" alt="TanStack Bootcamp — Zero to Hero" width="860">
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey.svg" alt="License CC BY-NC-SA 4.0"></a>
  <a href="#"><img src="https://img.shields.io/badge/weeks-24-yellow.svg" alt="24 Weeks"></a>
  <a href="#"><img src="https://img.shields.io/badge/hours-192-orange.svg" alt="192 Hours"></a>
  <a href="#"><img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React 19"></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5"></a>
  <a href="#"><img src="https://img.shields.io/badge/TanStack-FF4154?logoColor=white" alt="TanStack"></a>
</p>

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇪🇸_Español-DC143C?style=for-the-badge&logoColor=white" alt="Versión en Español"></a>
</p>

---

## 📋 Description

Intensive **24-week (~6-month)** bootcamp designed to take students from zero
to TanStack Developer Junior. The approach is 100% practical: each week
combines concise theory, guided exercises, and an integrative project adapted
to the student's assigned domain.

> 🏛️ **Unique Domain Policy (Anti-copying)**: Each student works on a unique
> business domain assigned by the instructor (Library, Pharmacy, Gym, etc.).
> This ensures original implementations and prevents copying between peers.

### 🎯 Objectives

Upon completing the bootcamp, students will be able to:

- ✅ Manage server state with TanStack Query v5 (cache, mutations, infinite queries, optimistic updates)
- ✅ Build SPAs and SSR apps with fully type-safe routing (TanStack Router)
- ✅ Implement complex data tables with server-side operations (TanStack Table)
- ✅ Handle complex forms with synchronous and asynchronous validation (TanStack Form)
- ✅ Virtualize massive lists and grids without performance degradation (TanStack Virtual)
- ✅ Develop full-stack applications with SSR and server functions (TanStack Start)
- ✅ Integrate the entire ecosystem into a coherent, maintainable architecture

### 🚀 Why TanStack?

> **Server state first, client state after** — the right order for learning
> modern React applications.

The TanStack ecosystem solves the most complex problems in frontend development:
intelligent caching, type-safe routing, advanced data tables, and forms with
async validation. Students learn the same tools used by real product teams.

---

## 🗓️ Bootcamp Structure

| Stage | Weeks | Hours | Main Topics |
| :---: | :-----: | :---: | --- |
| **Stage 0** — Technical Foundations | 1–3 | 24h | TypeScript, modern React, Tooling |
| **Stage 1** — TanStack Query: Fundamentals | 4–7 | 32h | `useQuery`, `queryKey`, `useMutation`, cache |
| **Stage 2** — TanStack Query: Advanced | 8–10 | 24h | Infinite queries, Suspense, optimistic updates, testing |
| **Stage 3** — TanStack Router | 11–14 | 32h | Type-safe routing, loaders, auth patterns |
| **Stage 4** — TanStack Table | 15–17 | 24h | Headless tables, sorting, server-side ops |
| **Stage 5** — TanStack Form | 18–19 | 16h | Form state, Zod, async validation |
| **Stage 6** — TanStack Virtual + Start | 20–22 | 24h | Virtualization, SSR, full-stack |
| **Stage 7** — Final Integrative Project | 23–24 | 16h | Full-stack app with the complete stack |

**Total: 24 weeks** | **~192 hours** of intensive training

---

## 📚 Weekly Content

Each week includes:

```
bootcamp/week-XX-tema_principal/
├── README.md                 # Description and objectives
├── rubrica-evaluacion.md     # Evaluation criteria
├── 0-assets/                 # SVG diagrams (architecture, data flow, lifecycle)
├── 1-teoria/                 # Theoretical material in markdown
├── 2-practicas/              # Guided exercises (uncomment code)
│   └── ejercicio-XX/
│       ├── starter/          # Commented code to uncomment
│       └── solution/         # Complete, working code
├── 3-proyecto/               # Weekly integrative project
│   └── starter/              # Skeleton with TODOs to implement
├── 4-recursos/               # Additional resources
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/               # Key TanStack/React terms (A–Z)
```

### 🔑 Key Components

- 📖 **Theory**: Fundamental concepts with executable TypeScript/React examples
- 💻 **Practice**: Progressive exercises (uncomment and run)
- 📝 **Assessment**: Evidence of knowledge, performance, and product
- 🎓 **Resources**: Glossaries, video content, and official references

---

## 🛠️ Tech Stack

| Technology | Version | Use |
| --- | --- | --- |
| TanStack Query | 5.x | Server state management (stages 1–2) |
| TanStack Router | 1.x | Type-safe routing (stage 3) |
| TanStack Table | 8.x | Headless data tables (stage 4) |
| TanStack Form | 1.x | Form state management (stage 5) |
| TanStack Virtual | 3.x | Virtualization (stage 6) |
| TanStack Start | 1.x | Full-stack SSR (stage 6) |
| TypeScript | 5.x | Type safety across the entire stack |
| React | 19.x | UI layer |
| Vite | 6.x | Bundler (stages 0–5) |
| Zod | 3.x | Schema validation |
| MSW | 2.x | API mocking in tests |
| Vitest | 3.x | Testing |
| pnpm | 9.x | Exclusive package manager |
| Git | 2.30+ | Version control |
| VS Code | — | Recommended editor |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 22+** — JavaScript runtime
- **pnpm 9+** — exclusive package manager for this bootcamp
- **Git** — to clone the repository
- **VS Code** with recommended extensions (`.vscode/extensions.json`)

> ⚠️ This bootcamp uses **pnpm exclusively**. Never use `npm` or `yarn`.

### 1. Clone the Repository

```bash
git clone https://github.com/ergrato-dev/bc-tanstack.git
cd bc-tanstack
```

### 2. Set Up the Environment (once)

```bash
# Enable exact versions globally (no ^ or ~)
pnpm config set save-exact true

# Set up the commit template
git config commit.template .gitmessage
```

### 3. Navigate to Content

```bash
# Go to the first week
cd bootcamp/week-01-typescript_esencial

# Read instructions
cat README.md
```

### 4. Install and Run an Exercise

```bash
# Inside starter/ or solution/ of any exercise
pnpm install

# Start the development server
pnpm dev
```

---

## 📊 Learning Methodology

### Teaching Strategies

- 🎯 **Project-Based Learning (PBL)**
- 🧩 **Deliberate Practice** — exercises of incremental complexity
- 🔄 **Unique Domains** — each student works on their assigned domain
- 👥 **Peer Code Review**
- 🎮 **Live Coding** with real-time component architecture

### Time Distribution (8h/week)

- **Theory**: 2 hours
- **Practice**: 3.5 hours
- **Project**: 2.5 hours

### Assessment

Each week includes three types of evidence:

1. **Knowledge 🧠** (30%): Quizzes and theoretical assessments
2. **Performance 💪** (40%): Practical exercises executed correctly
3. **Product 📦** (30%): Deliverable project adapted to the assigned domain

**Passing criteria**: Minimum 70% in each type of evidence

---

## 🤝 Contributing

Contributions are welcome! This is an open educational project under the
[CC BY-NC-SA 4.0](LICENSE) license — you can share and adapt it with
attribution, for non-commercial use, and under the same license.

### How to Contribute

1. Fork the repository
2. Create your branch (`git checkout -b feat/new-exercise`)
3. Commit with [Conventional Commits](https://www.conventionalcommits.org/) (`git commit -m 'feat(week-04): add useQuery exercise with MSW'`)
4. Push to your branch (`git push origin feat/new-exercise`)
5. Open a Pull Request

### 📋 Contribution Areas

- ✨ Additional exercises
- 📚 Documentation and theory improvements
- 🐛 TypeScript/React code bug fixes
- 🎨 SVG diagrams (architecture, data flow, lifecycle)
- 🌐 Translations

---

## 📞 Support

- 💬 Discussions: [GitHub Discussions](https://github.com/ergrato-dev/bc-tanstack/discussions)
- 🐛 Issues: [GitHub Issues](https://github.com/ergrato-dev/bc-tanstack/issues)

---

## 📄 License

This project is under the
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) license —
share and adapt with attribution, for non-commercial use, and under the same
license. See the [LICENSE](LICENSE) file for details.

---

## 🏆 Acknowledgments

- [TanStack](https://tanstack.com/) — For the most powerful ecosystem in the frontend world
- [Tanner Linsley](https://github.com/tannerlinsley) — For creating and maintaining TanStack
- [React Team](https://react.dev/) — For React 19 and the composition model
- [Vite](https://vitejs.dev/) — For the fastest bundler in the ecosystem
- All contributors

---

## 📚 Additional Documentation

- [🤖 Copilot Instructions](.github/copilot-instructions.md)
- [📖 General Documentation](docs/)

---

## ⚠️ Disclaimer

This repository is a freely available educational resource, distributed **as-is**,
without warranty of any kind, express or implied.

- The content is intended **for educational purposes only**. It does not
  constitute professional advice in software development for production environments.
- The authors and contributors **are not liable** for any direct, indirect, or
  consequential damages arising from the use, application, or misuse of the
  material published here.
- The **TypeScript/React code snippets** are designed for local learning
  environments. **They must not be used in production** without a proper security
  review.
- References to third-party tools, libraries, or services are included for
  informational purposes only. The authors do not endorse or guarantee the
  availability, accuracy, or suitability of those resources.
- The material may contain **typos or inaccuracies**. Please report them by
  opening an [Issue](https://github.com/ergrato-dev/bc-tanstack/issues).

---

<p align="center">
  <strong>🎓 TanStack Bootcamp — Zero to Hero</strong><br>
  <em>From zero to TanStack Developer Junior in ~6 months</em>
</p>

<p align="center">
  <a href="bootcamp/week-01-typescript_esencial">Start Week 1</a> •
  <a href="docs">View Documentation</a> •
  <a href="https://github.com/ergrato-dev/bc-tanstack/issues">Report Issue</a>
</p>

<p align="center">
  Made with ❤️ for the JavaScript community
</p>
