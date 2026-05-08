## Plan: Portfolio Website Implementation (Next.js, Modular Features)

A step-by-step plan to implement the portfolio website, using a modular, feature-driven approach for clarity, maintainability, and agent/team collaboration.

---

**Phases & Steps**

### Phase 1: Project Setup

1. Initialize a new Next.js project with TypeScript.
2. Integrate Tailwind CSS for styling.
3. Set up version control (Git) and connect to a remote repository (e.g., GitHub).

### Phase 2: Core Infrastructure

4. Set up i18n (next-i18next or next-intl) for EN/FR support.
5. Implement global layout: header, footer, and main content area.
6. Add dark mode support (toggle in header/navbar).
7. Set up responsive design breakpoints in Tailwind config.

### Phase 3: Section Implementation (Feature-Driven)

8. Implement Header/Navbar:
   - Logo/name, navigation links, language and dark mode toggles.
9. Implement Hero Section:
   - Name, title, tagline.
10. Implement About Section:
    - Photo, bio, key skills (map from CV).
11. Implement Experience Section:
    - Timeline/cards for roles/companies (map from CV).
12. Implement Consulting Engagements Section:
    - Cards/timeline for client projects (map from CV).
13. Implement Skills Section:
    - List/icons (map from CV).
14. Implement Contact Section:
    - Email, LinkedIn, GitHub, contact form.
15. Implement Footer:
    - Copyright, social icons.

### Phase 4: Content & Localization

16. Extract and structure content from CV_Long_Mario_Skaff.docx for each section.
17. Populate EN/FR translation files with content.
18. Ensure all sections render correctly in both languages.

### Phase 5: Polish & QA

19. Test responsiveness on multiple devices.
20. Test dark mode and language toggles.
21. Validate accessibility (a11y) and SEO basics.
22. Add basic unit/integration tests (optional).

### Phase 6: Deployment & Handoff

23. Deploy to Vercel.
24. Final review and handoff.

---

**Relevant files**

- /SPEC.md — High-level project overview.
- /features/ (or similar) — One file per feature/section for requirements and acceptance criteria.
- /pages, /components, /public — Next.js app structure.
- /locales — i18n translation files.
- /styles — Tailwind/global CSS.
- CV_Long_Mario_Skaff.docx — Source for content.

---

**Verification**

1. Each section matches design and content requirements.
2. All features (dark mode, i18n, responsiveness) work as specified.
3. Content is accurate and complete in both EN/FR.
4. Site passes manual QA and basic automated tests.
5. Successful deployment and live site review.

---

**Decisions**

- Modular, feature-driven implementation for clarity and parallelization.
- Content mapped directly from CV to site sections.
- SPEC.md remains high-level; feature files hold implementation details.

---

**Further Considerations**

1. Optionally, automate content extraction from CV for future updates.
2. Consider adding analytics, blog, or CMS integration in future phases.
3. Maintain modular agent/instruction files for ongoing development.

---
