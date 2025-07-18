# Project Context: Personal Technical Blog

## Project Overview
A personal technical blog built with Astro that serves dual purposes:
1. **Personal Portfolio** - Showcasing expertise and professional identity
2. **Technical Blog** - Publishing thoughtful content on programming, computer science, and embedded systems

## Design Philosophy
- **Minimal & Clean**: Focus on content without visual distractions
- **Professional**: Suitable for both personal branding and technical discourse
- **Performance-First**: Fast loading, optimized for Core Web Vitals
- **Accessibility**: WCAG 2.1 AA compliant

## Visual Design

### Color Scheme: Nordic Cold Gray Theme
- **Primary Gray**: `#2E3440` (dark slate)
- **Secondary Gray**: `#3B4252` (medium slate)
- **Light Gray**: `#4C566A` (muted slate)
- **Background**: `#ECEFF4` (light frost)
- **Text Primary**: `#2E3440` (dark for readability)
- **Text Secondary**: `#5E81AC` (nord blue for links/accents)
- **Accent**: `#88C0D0` (light blue for highlights)
- **Success/Code**: `#A3BE8C` (muted green)

### Typography
- **Headings**: Modern sans-serif (Inter, Poppins, or system fonts)
- **Body**: Readable serif or clean sans-serif
- **Code**: Monospace (JetBrains Mono, Fira Code)

## Layout Structure

### Homepage (Dual Function)
**Hero Section:**
- Large name/brand
- Professional tagline
- Brief bio (2-3 lines)
- Call-to-action (Contact, Resume, etc.)

**Recent Posts Section:**
- Grid layout of latest 6-8 blog posts
- Each post card: title, excerpt, date, tags, read time
- "View All Posts" link

**About/Skills Section:**
- Concise professional summary
- Key technologies/expertise
- Current focus areas

### Navigation (Top)
- Logo/Name (left)
- Menu items: Home | Blog | About | Contact
- Minimal, clean design
- Responsive hamburger menu on mobile

### Footer (Simple)
- Copyright notice
- Social links (GitHub, LinkedIn, Twitter)
- RSS feed link
- Contact email

## Content Strategy

### Blog Categories
- **Programming**: Languages, tools, software engineering
- **Computer Science**: Algorithms, theory, practical applications
- **Embedded Systems**: Hardware, low-level programming
- **Tutorials**: Step-by-step guides and how-tos
- **Reflections**: Personal insights on technology and development

### Content Types
- **Long-form essays**: 1500-3000 words
- **Technical tutorials**: Code-heavy, practical guides
- **Short insights**: 500-800 words
- **Code snippets**: Quick tips and tricks

## Technical Requirements

### Performance Goals
- **Lighthouse Score**: 90+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Features
- **Dark/Light Mode**: System preference detection
- **Search**: Client-side search functionality
- **RSS Feed**: Auto-generated from content
- **Syntax Highlighting**: Code blocks with proper theming
- **Image Optimization**: Astro's built-in image optimization
- **SEO**: Proper meta tags, Open Graph, structured data

### Accessibility
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant ratios
- **Focus Management**: Visible focus indicators

## Content Management

### File Structure
```
src/
├── content/
│   ├── blog/           # Blog posts (Markdown)
│   └── config.ts       # Content collection schemas
├── components/
│   ├── ui/             # Reusable UI components
│   ├── blog/           # Blog-specific components
│   └── layout/         # Layout components
├── layouts/
│   ├── BaseLayout.astro
│   ├── BlogLayout.astro
│   └── PostLayout.astro
├── pages/
│   ├── index.astro     # Homepage
│   ├── blog/           # Blog pages
│   └── about.astro
└── styles/
    ├── global.css
    └── components/
```

### Content Schema
```typescript
interface BlogPost {
  title: string;
  description: string;
  publishDate: Date;
  tags: string[];
  category: 'programming' | 'computer-science' | 'embedded' | 'tutorial';
  draft?: boolean;
  featured?: boolean;
}
```

## Brand Identity

### Tone of Voice
- **Professional but approachable**
- **Knowledgeable without being condescending**
- **Practical and actionable**
- **Honest about limitations and learning**

### Target Audience
- **Primary**: Software developers, engineers, CS students
- **Secondary**: Technical recruiters, potential collaborators
- **Tertiary**: General tech enthusiasts

## Success Metrics
- **Content Quality**: Engagement time, return visitors
- **Professional Growth**: Inquiries, networking opportunities
- **Technical Reach**: Shares on dev.to, GitHub stars
- **Personal Satisfaction**: Writing improvement, knowledge sharing

## Future Enhancements
- **Newsletter Integration**: Substack connection
- **Comments System**: Giscus or similar
- **Project Showcase**: Dedicated portfolio section
- **Speaking/Writing**: Links to external publications
- **Analytics**: Privacy-respecting visitor tracking