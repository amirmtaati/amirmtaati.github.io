# Amir's Blog - Astro + UnoCSS

A clean, minimalist blog built with Astro and UnoCSS, featuring a beautiful Gruvbox-inspired theme with light and dark mode support.

![Minimalist Blog Screenshot](screenshot.png)

## ✨ Features

- **Clean, Minimal Design** - Focus on content with a distraction-free reading experience
- **Light & Dark Mode** - Gruvbox-inspired color scheme with seamless theme switching
- **Multiple Content Types**:
  - Blog posts - For regular updates and shorter content
  - Essays - For longer, thoughtful explorations
  - Aphorisms - For brief, insightful observations
- **Responsive Layout** - Works beautifully on all devices
- **Fast Performance** - Built with Astro for optimal speed and minimal JavaScript
- **UnoCSS Integration** - Utility-first styling with atomic CSS
- **Markdown Content** - Write content in Markdown with frontmatter support
- **SEO Friendly** - Optimized metadata and semantic HTML

## 🚀 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections (blog, essays, aphorisms)
│   │   ├── blog/        # Blog posts
│   │   ├── essays/      # Essays
│   │   └── aphorisms/   # Aphorisms
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── uno.config.ts        # UnoCSS configuration
└── package.json         # Project dependencies
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Styling

This project uses [UnoCSS](https://github.com/unocss/unocss) for styling with a custom Gruvbox-inspired theme. The color scheme is defined in `uno.config.ts`.

### Color Variables

#### Light Theme
- `gl-bg`: Main background (#fbf1c7)
- `gl-bg2`: Secondary background (#ebdbb2)
- `gl-fg`: Main text color (#3c3836)
- `gl-fg2`: Secondary text color (#504945)
- `gl-accent`: Accent color (#98971a)

#### Dark Theme
- `gd-bg`: Main background (#282828)
- `gd-bg2`: Secondary background (#3c3836)
- `gd-bg3`: Tertiary background (#504945)
- `gd-fg`: Main text color (#ebdbb2)
- `gd-fg2`: Secondary text color (#d5c4a1)
- `gd-accent`: Accent color (#b8bb26)

## 📝 Content Management

Content is managed through Astro's content collections in the `src/content` directory:

- **Blog Posts**: `src/content/blog/*.md`
- **Essays**: `src/content/essays/*.md`
- **Aphorisms**: `src/content/aphorisms/*.md`

## 📚 Documentation

For more detailed information on how to work with Astro, refer to the [official Astro documentation](https://docs.astro.build).

## 📄 License

This project is [MIT](LICENSE) licensed.
