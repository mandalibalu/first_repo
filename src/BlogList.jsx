import BlogPost from "./BlogPost";

export default function BlogList({ posts }) {
  return (
    <main className="blog-list">
      <div className="posts-container">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              author={post.author}
              category={post.category}
              excerpt={post.excerpt}
              content={post.content}
            />
          ))
        ) : (
          <p className="no-posts">No blog posts found.</p>
        )}
      </div>
    </main>
  );
}
