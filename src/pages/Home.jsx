import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>The Future of Folk Lab</h1>
        <p className="hero-tagline">Exploring traditional folk practices through a contemporary lens</p>
      </section>

      <section className="featured-posts">
        <h2>Latest Posts</h2>
        <div className="posts-grid">
          {posts.length > 0 ? (
            posts.map((post) => {
              const excerpt = post.content.split('\n\n').find(p => p.length > 20) || post.content;
              return (
                <article key={post.id} className="post-card">
                  <Link to={`/posts/${post.id}`}>
                    <h3>{post.title}</h3>
                    <div className="post-meta">
                      <span className="post-author">By {post.author}</span>
                      <time className="post-date" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    <p>{excerpt.substring(0, 150).replace(/^#+ /, '')}...</p>
                  </Link>
                </article>
              );
            })
          ) : (
            <p>No posts available yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
