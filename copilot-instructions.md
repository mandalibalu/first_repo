---
name: genpact-react-copilot-instructions
description: "Project guidance for GitHub Copilot. Use when: working on the Genpact React Student Manager project with JSON Server backend. Covers project structure, API endpoints, tech stack, and development patterns."
---

# Genpact React + Vite + JSON Server Project Guide

## Project Overview

A React application for managing students, featuring:
- **Frontend**: React 19 with Vite (v8.0.16)
- **Backend**: JSON Server (v1.0.0-beta.15) on port 3000
- **Development Server**: Vite on port 5173 with HMR

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19.2.6 | UI framework |
| React DOM | 19.2.6 | React rendering |
| Vite | 8.0.12 | Build tool & dev server |
| JSON Server | 1.0.0-beta.15 | Mock REST API backend |
| ESLint | 10.3.0 | Code linting |
| Node.js | Latest | Runtime |

## Project Structure

```
src/
├── App.jsx          # Main app component, manages student state & fetching
├── Form.jsx         # Student creation form
├── Header.jsx       # App header component
├── StudentList.jsx  # Display list of students
├── main.jsx         # Entry point
└── index.css        # Global styles

db.json             # JSON Server data file (students database)
```

## API Endpoints

**Base URL**: `http://localhost:3000`

### Students Resource
- `GET /students` - Fetch all students
- `POST /students` - Create new student (body: `{ "name": "string" }`)
- `PUT /students/:id` - Update student
- `DELETE /students/:id` - Delete student

## Development Commands

```bash
npm run dev        # Start Vite dev server (port 5173)
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

**Running JSON Server separately** (in another terminal):
```bash
npx json-server --watch db.json --port 3000
```

## Code Patterns & Best Practices

### State Management Pattern
- Store main state (students array) in `App.jsx`
- Pass `setStudents` callback to child components
- Use pessimistic rendering: update UI only after server confirms

### Fetch Pattern
```javascript
const response = await fetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});
const result = await response.json();
```

### Component Structure
- Functional components with React hooks
- Destructure props in parameters
- Use `useEffect` with dependency arrays
- Comment complex logic sections

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Failed to fetch" | Ensure JSON Server is running on port 3000 |
| CORS errors | JSON Server is local, shouldn't occur |
| Content-Type header typo | Use `'application/json'` NOT `'application.json'` |
| Hot reload not working | Check Vite dev server is running, restart if needed |
| Student not appearing | Verify server response is parsed and state is updated |

## Git & Deployment

- Repository: [mandalibalu/first_repo](https://github.com/mandalibalu/first_repo)
- Main branch: `main`
- Build output: `dist/` folder (gitignored in dev)

## Notes for Copilot

When making suggestions:
1. **Always use functional components** with hooks
2. **Always include dependency arrays** in useEffect calls
3. **Use pessimistic rendering** for data updates (wait for server response)
4. **Update parent state** when children modify data
5. **Maintain consistent styling** with existing CSS patterns
6. **Test API calls** with proper error handling
7. **Keep components focused** on single responsibility
