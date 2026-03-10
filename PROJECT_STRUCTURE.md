# Global Experts Consultoria - Corporate Website

## Project Overview

A modern, high-performance corporate website for Global Experts Consultoria featuring:
- Multi-page React application with React Router
- Advanced animations using Framer Motion
- Responsive design with Tailwind CSS v4
- TypeScript for type safety
- Professional enterprise aesthetic with #012401 brand color

## Features

### Core Features
- ✅ Multi-page routing (Home, About, Services, Industries, Projects, Insights, Careers, Contact)
- ✅ Sticky navigation with mega-menu dropdowns
- ✅ Animated hero sections with gradient overlays
- ✅ Scroll-triggered animations
- ✅ Animated statistics counters
- ✅ Interactive service cards
- ✅ Project portfolio showcase
- ✅ Team profiles
- ✅ Career listings
- ✅ Contact form
- ✅ Responsive mobile navigation
- ✅ Back to top button
- ✅ Custom scrollbar
- ✅ 404 error page

### Animations & Interactions
- Scroll-triggered reveal animations
- Parallax effects
- Hover animations on cards and buttons
- Animated counters
- Gradient overlays with motion
- Particle background effects
- Smooth page transitions
- Interactive mega-menus

## Project Structure

```
/src/app/
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Main navigation with mega-menu
│   │   ├── Footer.tsx          # Footer with CTA and links
│   │   └── Layout.tsx          # Main layout wrapper
│   ├── sections/
│   │   ├── Hero.tsx            # Animated hero section
│   │   ├── ServicesShowcase.tsx # Services grid
│   │   └── AnimatedCounter.tsx  # Statistics counter
│   ├── ui/                      # Reusable UI components (shadcn)
│   ├── BackToTop.tsx           # Scroll to top button
│   ├── ScrollToTop.tsx         # Auto scroll on route change
│   ├── Loading.tsx             # Loading component
│   └── ParticlesBackground.tsx # Particle animation
├── pages/
│   ├── Home.tsx                # Landing page
│   ├── About.tsx               # About us page
│   ├── Services.tsx            # Services detail page
│   ├── Industries.tsx          # Industries served
│   ├── Projects.tsx            # Project portfolio
│   ├── Insights.tsx            # Blog/articles
│   ├── Careers.tsx             # Job listings
│   ├── Contact.tsx             # Contact form
│   └── NotFound.tsx            # 404 page
├── hooks/
│   └── useScrollAnimation.ts   # Custom animation hooks
├── types/
│   └── index.ts                # TypeScript types
├── routes.ts                   # React Router configuration
└── App.tsx                     # App entry point

/src/styles/
├── fonts.css                   # Font imports
├── tailwind.css                # Tailwind directives
├── theme.css                   # Theme variables & brand colors
└── index.css                   # Global styles
```

## Brand Colors

- **Primary**: #012401 (Deep Forest Green)
- **Primary Light**: #024502
- **Primary Dark**: #001800
- **Accent**: #0a5f0a (Medium Green)
- **Gold**: #d4af37 (Metallic Gold)

## Pages Overview

### Home
- Animated hero with particles
- Services showcase grid
- Statistics counter
- Industries overview
- Why choose us section
- Core values

### Services
- Detailed service descriptions
- Engineering Consulting
- Project Management
- Asset Integrity Management
- Maintenance Optimization
- Technical Advisory Services

### Industries
- Oil & Gas
- Renewable Energy
- Manufacturing
- Infrastructure
- Mining & Minerals
- Power Generation

### Projects
- Portfolio showcase
- Filter by industry
- Project case studies
- Results and metrics

### About
- Company mission & vision
- 25-year timeline
- Leadership team
- Certifications

### Insights
- Featured articles
- Industry insights
- Expert thought leadership
- Newsletter signup

### Careers
- Company benefits
- Open positions
- Company culture
- Application process

### Contact
- Contact form
- Global office locations
- Contact information
- Map integration ready

## Technologies Used

- **React 18.3.1**: UI framework
- **React Router 7.13.0**: Client-side routing
- **TypeScript**: Type safety
- **Tailwind CSS 4.1**: Styling
- **Framer Motion (motion)**: Animations
- **Lucide React**: Icons
- **Recharts**: Charts and graphs
- **Radix UI**: Accessible UI primitives

## Key Features Implementation

### Animations
- Used `motion/react` for all animations
- Custom hooks for scroll-triggered animations
- Parallax effects using scroll position
- Animated counters with requestAnimationFrame

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Responsive navigation with mobile menu
- Fluid typography and spacing

### Performance
- Code splitting with React Router
- Lazy loading ready
- Optimized images with Unsplash
- Smooth scrolling and transitions

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements

## Development Notes

- All animations use `motion/react` (imported from "motion" package)
- Brand colors defined as CSS variables in theme.css
- Custom scrollbar styled to match brand
- Smooth scroll behavior enabled globally
- Line-clamp utilities for text truncation
- All routes use React Router Data mode pattern

## Future Enhancements

- Blog/CMS integration
- Client portal
- Multi-language support
- Advanced search functionality
- Real-time chat support
- Video backgrounds
- 3D graphics integration
- Performance analytics
