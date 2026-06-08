import { blogPosts, blogInfo } from "./blog";
import Header from "./Header";
import Navigation from "./Navigation";
import BlogList from "./BlogList";
import Footer from "./Footer";

export default function App() {
  {/* Extract unique categories from blog posts */}
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <div className="App">
      {/* Header component - displays blog title and tagline */}
      <Header title={blogInfo.title} tagline={blogInfo.tagline} />
      
      {/* Navigation component - links to categories */}
      <Navigation categories={categories} />
      
      {/* BlogList component - displays all blog posts */}
      <BlogList posts={blogPosts} />
      
      {/* Footer component - copyright and info */}
      <Footer author={blogInfo.author} />
    </div>
  );
}
