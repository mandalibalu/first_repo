export default function Footer({ author, year = 2026 }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {year} {author}. All rights reserved.
        </p>
        <p className="footer-text">
          A personal blog built with React and Vite.
        </p>
      </div>
    </footer>
  );
}
