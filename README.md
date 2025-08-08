# Abdul Ahad Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, minimalist design
- 📱 Fully responsive
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 🌙 Dark theme

## Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd abdul-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your images to the `public/` directory:
   - `headshot.jpg` - Your profile photo
   - `career.jpg` - Career-related image
   - `tt.jpg` - Table tennis image
   - `training.jpg` - Training/running image
   - `favicon.ico` - Website favicon

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy

### Option 3: GitHub Pages

1. Add this to your `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

## Customization

### Colors and Styling
The portfolio uses Tailwind CSS. You can customize colors and styling in `tailwind.config.js`.

### Content
Update the content in `src/App.jsx`:
- Personal information
- Social media links
- Project descriptions
- Contact information

### Images
Replace the placeholder images in the `public/` directory with your own:
- Use high-quality images
- Optimize for web (compress if needed)
- Maintain aspect ratios

## Performance

This portfolio is optimized for performance:
- Lazy loading of images
- Optimized bundle size
- Fast loading times
- SEO friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, reach out to [ahad382@gmail.com](mailto:ahad382@gmail.com) 