# The Future of Folk Lab

A modern React-based website exploring the intersection of traditional folk practices and contemporary innovation.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Markdown** - Markdown rendering for blog posts

## 📁 Project Structure

```
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Nav.jsx       # Navigation component
│   │   ├── Footer.jsx    # Footer component
│   │   └── Layout.jsx    # Layout wrapper
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Homepage
│   │   ├── Posts.jsx     # Posts listing
│   │   ├── PostDetail.jsx # Individual post view
│   │   ├── About.jsx     # About page
│   │   ├── Contact.jsx   # Contact page
│   │   └── Docs.jsx      # Documentation page
│   ├── data/             # Data files
│   │   └── posts.js      # Blog posts content
│   ├── App.jsx           # Main app component with routing
│   ├── App.css           # Global styles
│   └── main.jsx          # App entry point
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Features

- ✅ Responsive navigation with mobile menu
- ✅ Blog post system with markdown support
- ✅ Post navigation (previous/next)
- ✅ Modern, clean UI design
- ✅ Fast development with Vite HMR
- ✅ Client-side routing with React Router

## 🌐 Routes

- `/` - Homepage
- `/posts` - All blog posts
- `/posts/:id` - Individual post
- `/about` - About page
- `/contact` - Contact page
- `/docs` - Documentation

## 📝 Adding New Posts

Edit `src/data/posts.js` and add a new post object:

```javascript
{
  id: 'your-post-slug',
  title: 'Your Post Title',
  date: '2025-12-03',
  author: 'Author Name',
  content: `# Your markdown content here`
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC License