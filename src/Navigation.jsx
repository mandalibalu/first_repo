export default function Navigation({ categories }) {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#all" className="nav-link">All Posts</a>
        </li>
        {categories.map((category) => (
          <li key={category} className="nav-item">
            <a href={`#${category}`} className="nav-link">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
