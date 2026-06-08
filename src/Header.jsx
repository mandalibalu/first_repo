export default function Header({ title, tagline }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-tagline">{tagline}</p>
      </div>
    </header>
  );
}
