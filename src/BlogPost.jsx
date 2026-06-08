export default function BlogPost({ id, title, date, author, category, excerpt, content }) {
  {/* Individual blog post component */}
  return (
    <article className="blog-post">
      <div className="post-header">
        <h2 className="post-title">{title}</h2>
        <div className="post-meta">
          <span className="post-date">{date}</span>
          <span className="post-category">{category}</span>
          <span className="post-author">by {author}</span>
        </div>
      </div>
      <div className="post-content">
        <p className="post-excerpt">{excerpt}</p>
        <p className="post-body">{content}</p>
      </div>
      <div className="post-footer">
        <a href={`#post-${id}`} className="read-more-link">Read More</a>
      </div>
    </article>
  );
}
