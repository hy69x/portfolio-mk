# Project Rules & AI Guidelines

## 1. Project Context
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm

## 2. Code Style & Structure
- **Functional Components:** Use functional components with hooks. Avoid class components.
- **Typing:** Strict TypeScript usage. Avoid `any`. Define interfaces/types in the same file if local, or in `types/` if shared.
- **Directory Structure:**
  - All source code goes in `src/`.
  - Use the App Router structure (`src/app/`).
  - specific components go in `src/components/`.
  - shared utilities in `src/lib/` or `src/utils/`.
- **Naming:**
  - Components: PascalCase (e.g., `UserProfile.tsx`).
  - Functions/Variables: camelCase.
  - Constant values: UPPER_SNAKE_CASE.
  - Directories for routes: kebab-case (e.g., `src/app/blog-posts/`).

## 3. Styling (Tailwind CSS)
- Use utility classes directly in JSX.
- For complex repetitive styles, utilize `@layer components` in `globals.css` or abstract into a small component.
- Ensure mobile-first responsiveness (`class="flex flex-col md:flex-row"`).

## 4. State Management
- Prefer local state (`useState`) or URL state (search params) for UI state.
- Use `useContext` sparingly for global themes or user sessions.
- Server Components should fetch data directly where possible. Client Components should receive data via props or use hooks if interaction is needed.

## 5. Git & Version Control
- **Commit Messages:** Semantic and concise (e.g., `feat: add dark mode toggle`, `fix: correct typo in navbar`).
- **Review:** Check diffs before committing.

## 6. AI Interaction Rules
- **Read First:** Always examine existing files (especially `package.json`, `tsconfig.json`, and `layout.tsx`) to understand the environment before creating new ones.
- **Minimal Changes:** Only modify what is necessary. Do not rewrite entire files unless asked.
- **Comments:** Add comments only for complex logic, not for obvious boilerplate.
