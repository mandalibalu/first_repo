---
name: react-components
description: "Use when: writing React components, modifying JSX, or creating new component files. Ensures consistency with functional component patterns and React hooks conventions."
applyTo: "src/**/*.jsx"
---

# React Component Standards for This Project

## Component Structure

All components in this project follow these patterns:

### 1. **Functional Components Only**
- Use functional components with React hooks (no class components)
- Import only required hooks: `useState`, `useEffect`, `useCallback`, etc.

```jsx
import { useState, useEffect } from "react";

export default function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue);
  
  return (
    <div>
      {/* JSX here */}
    </div>
  );
}
```

### 2. **Props Pattern**
- Destructure props in function parameters
- Document prop types with comments when needed
- Pass child components as props for composition

### 3. **State Management**
- Use `useState` for local component state
- Use `setStudents` callback pattern passed from parent for data persistence
- Keep state minimal and co-locate with usage

### 4. **Effects and Side Effects**
- Use `useEffect` for API calls and subscriptions
- Always include dependency array: `useEffect(() => { ... }, [])`
- Clean up side effects when needed

### 5. **API Integration**
- Endpoint URL: `http://localhost:3000/students`
- Standard HTTP methods: GET (fetch), POST (create), PUT/PATCH (update), DELETE (remove)
- Always use `Content-Type: 'application/json'` header (note: NOT 'application.json')
- Handle fetch responses with `.json()` parsing

### 6. **Event Handlers**
- Name handlers as `handle[EventName]` (e.g., `handleSubmit`, `handleClick`)
- Use arrow functions or `useCallback` for handlers
- Prevent default behavior on forms: `e.preventDefault()`

### 7. **Comments**
- Add comments explaining purpose of components and complex logic
- Format: `{/* Comment explaining what this section does */}`

## File Organization

- **Component files**: One component per file, named after the component (e.g., `Form.jsx`)
- **Default export**: Always use `export default` for the main component
- **Import order**: React imports first, then local components, then assets

## Common Mistakes to Avoid

- ❌ Typos in headers: use `'application/json'` not `'application.json'`
- ❌ Forgetting dependency arrays in `useEffect`
- ❌ Not updating parent state when creating/updating data
- ❌ Using class components instead of functional components
