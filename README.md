# Exam Ranking - Next.js Website

A production-ready Next.js website for calculating exam ranks and analyzing performance across various competitive examinations. Built with modern web technologies including Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multiple Exam Support**: Rank calculators for JEE Main, NEET, CAT, GATE, UPSC CSE, SSC CGL, Bank PO, CLAT, and more
- **Flexible Input Methods**: Support for URL links, file uploads (PDF, DOC, images)
- **Detailed Analysis**: Comprehensive performance breakdown with insights and recommendations
- **Mobile-First Design**: Responsive UI that works seamlessly across all devices
- **SEO Optimized**: Built-in metadata, Open Graph tags, and sitemap for better search visibility
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader support
- **Fast Performance**: Optimized with Next.js App Router and static generation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── calculator/[slug]/  # Dynamic exam calculator pages
│   │   ├── contact/           # Contact page
│   │   ├── privacy-policy/    # Privacy policy
│   │   ├── terms/            # Terms of service
│   │   ├── disclaimer/       # Disclaimer page
│   │   ├── refund/           # Refund policy
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   ├── not-found.tsx     # Custom 404 page
│   │   └── page.tsx          # Homepage
│   ├── components/           # Reusable React components
│   │   ├── Navbar.tsx        # Navigation component
│   │   ├── Footer.tsx        # Footer component
│   │   ├── ExamCard.tsx      # Exam selection cards
│   │   ├── CalculatorForm.tsx # Input form for calculations
│   │   └── ResultsPanel.tsx  # Results display component
│   ├── data/
│   │   └── exams.json        # Exam data configuration
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   └── types/
│       └── exam.ts           # TypeScript type definitions
├── public/                   # Static assets
│   ├── robots.txt           # SEO robots file
│   └── sitemap.xml          # SEO sitemap
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd exam-ranking
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🎨 Customization Guide

### 1. Brand Identity

**Logo Replacement:**
- Replace placeholder logo in `src/components/Navbar.tsx`
- Add your logo file to `public/assets/`
- Update the logo reference in the component

**Brand Colors:**
- Modify color scheme in `tailwind.config.ts`
- Update primary and secondary color palettes
- Colors are used throughout the application via Tailwind classes

### 2. Exam Data

**Adding New Exams:**
Edit `src/data/exams.json` to add or modify exam entries:

```json
{
  "slug": "your-exam-slug",
  "name": "Your Exam Name",
  "description": "Description of the exam",
  "category": "Exam Category",
  "icon": "icon-name",
  "totalMarks": 300,
  "subjects": ["Subject 1", "Subject 2"]
}
```

**Available Icons:**
- calculator, stethoscope, briefcase, cpu, building
- users, credit-card, scale, or any Lucide React icon

### 3. Content Updates

**Homepage Content:**
- Edit hero section in `src/app/page.tsx`
- Update statistics and features sections
- Modify call-to-action content

**Static Pages:**
- Contact info: `src/app/contact/page.tsx`
- Legal pages: Update company details in privacy, terms, disclaimer, refund pages

### 4. Calculation Logic

**Mock Results:**
- Current implementation uses mock data in `src/lib/utils.ts`
- Replace `generateMockResult()` function with actual calculation API calls
- Update result processing in calculator components

**API Integration:**
```typescript
// Example API integration in CalculatorForm.tsx
const handleFormSubmit = async (formData: FormData) => {
  const response = await fetch('/api/calculate-rank', {
    method: 'POST',
    body: formData
  })
  const result = await response.json()
  return result
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Vercel
   - Deploy automatically on push

2. **Environment Variables**
   ```bash
   # Add in Vercel dashboard if needed
   NEXT_PUBLIC_API_URL=your-api-url
   DATABASE_URL=your-database-url
   ```

3. **Custom Domain**
   - Add your domain in Vercel dashboard
   - Update sitemap.xml with your domain
   - Update metadata URLs in layout.tsx

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the 'out' folder
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 SEO Configuration

### Metadata Updates

1. **Global Metadata** (`src/app/layout.tsx`):
   - Update site title, description, and keywords
   - Add your domain to Open Graph URLs
   - Update Twitter handle and verification codes

2. **Page-Specific Metadata**:
   - Each page has its own metadata configuration
   - Update titles and descriptions for better SEO

3. **Sitemap and Robots**:
   - Update domain in `public/sitemap.xml`
   - Modify crawling rules in `public/robots.txt`

## 🔧 Key Components Reference

### ExamCard.tsx
- Displays exam information on homepage
- Links to individual calculator pages
- Customizable icons and styling

### CalculatorForm.tsx
- Handles file uploads and URL inputs
- Form validation and submission
- Category and filter selection

### ResultsPanel.tsx
- Displays calculation results
- Performance breakdown and insights
- Leaderboard and comparison data

### Navbar.tsx
- Responsive navigation menu
- Mobile hamburger menu
- Brand logo and navigation links

### Footer.tsx
- Site-wide footer with links
- Contact information
- Legal page links

## 📱 Mobile Responsiveness

The website is built mobile-first with responsive design:
- Tailwind CSS breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Touch-friendly interface elements
- Optimized for all screen sizes
- Fast loading on mobile networks

## 🔒 Security Considerations

- Input validation on all forms
- File upload restrictions (type, size)
- XSS protection with proper escaping
- HTTPS enforcement in production
- Secure headers configuration

## 🎯 Performance Optimization

- Next.js automatic code splitting
- Image optimization with next/image
- Static generation for better performance
- Lazy loading of components
- Minimized bundle size

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript Errors:**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

**Styling Issues:**
```bash
# Rebuild Tailwind CSS
npx tailwindcss -i ./src/app/globals.css -o ./dist/output.css
```

### Development Tips

1. **Hot Reload**: Changes are reflected automatically in development
2. **Error Overlay**: Next.js shows detailed error information
3. **Console Logs**: Check browser console for client-side issues
4. **Network Tab**: Monitor API calls and resource loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: support@examranking.com
- Documentation: Check this README and inline code comments
- Issues: Create GitHub issues for bugs and feature requests

## 🗺️ Roadmap

- [ ] Real calculation API integration
- [ ] User authentication system
- [ ] Saved results and history
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Multi-language support

---

**Built with ❤️ for students everywhere**
