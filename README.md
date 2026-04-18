# Coaching Web App - Apex Academy

A modern, responsive coaching institute website built with [Next.js](https://nextjs.org), featuring dynamic animations, smooth user experience, and comprehensive information management for an educational institution.

## Project Overview

**Apex Academy** is a premier coaching institute website designed to showcase courses, faculty, student testimonials, and academic achievements. This web application provides an engaging platform for prospective students to learn about the institute, browse courses, submit applications, and connect with the academy.

## 🎯 Key Features & Functionality

### Core Features
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Interactive Animations**: Smooth transitions and animations using Framer Motion
- **Modern UI Components**: Reusable, accessible component library
- **Performance Optimized**: Next.js 16 with modern React 19
- **Type-Safe Development**: Full TypeScript support

### Visual Enhancements
- **Parallax Scrolling**: Engaging parallax effects on section backgrounds
- **Fade-in Animations**: Elements fade in as they become visible
- **Animated Counters**: Dynamic number animations for statistics
- **Tilt Card Effects**: Interactive 3D-like card tilting on hover
- **Staggered Animations**: Sequential animations for list items

## 📄 Pages & Sections

### 1. **Home Page** (`/`)
- Hero section with call-to-action buttons
- Institute statistics (students, success rate, awards)
- Featured courses preview
- Testimonials preview
- Animated statistics counters

### 2. **About Page** (`/about`)
- Comprehensive institute information
- Mission & vision statements
- Core values (Excellence, Integrity, Innovation, Inclusivity)
- Historical timeline of achievements
- Faculty highlights
- Key accomplishments and milestones

### 3. **Courses Page** (`/courses`)
- Complete course catalog
- Detailed course descriptions
- Course durations and eligibility criteria
- Curriculum overview
- Batch schedules
- Course-specific faculty information
- Fee structure and payment options

### 4. **Faculty Page** (`/faculty`)
- Faculty directory with expertise areas
- Faculty member profiles with qualifications
- Experience and achievements
- Specializations by subject
- Contact information for faculty advisories

### 5. **Admissions Page** (`/admissions`)
- Admission process overview
- Eligibility requirements by course
- Merit-based selection criteria
- Batch details and start dates
- Admission timeline and important dates
- FAQ section for admission-related queries

### 6. **Apply Page** (`/apply`)
- Online application form
- Step-by-step application process
- Required documents checklist
- Application submission tracking
- Success stories of admitted students
- Contact support for assistance

### 7. **Contact Page** (`/contact`)
- Contact form for inquiries
- Multiple contact methods
- Institute branches and locations
- Phone numbers and email addresses
- Office hours and response times
- Location maps for each branch

### 8. **Blog Page** (`/blog`)
- Educational articles and news
- Student success stories
- Study tips and guidance
- Exam preparation resources
- Institute updates and announcements
- Category-based filtering

### 9. **Results Page** (`/results`)
- Student exam results showcase
- Achievement statistics
- Top performers recognition
- Course-wise result breakdown
- Comparison with previous years
- Downloadable result reports

### 10. **Testimonials Page** (`/testimonials`)
- Student success testimonials
- Video testimonials (framework ready)
- Before-after case studies
- Parent feedback
- Alumni updates
- Ratings and reviews

### 11. **Gallery Page** (`/gallery`)
- Photo gallery of events
- Campus facility images
- Classroom and lab photos
- Student activity pictures
- Faculty interactions
- Institute milestones documentation

### 12. **FAQs Page** (`/faqs`)
- Frequently asked questions by category
- Admission FAQs
- Course-related FAQs
- Payment and fees FAQs
- Student life FAQs
- Technical support FAQs

## 🏗️ Project Structure

```
coaching-web-app/
├── app/                          # Next.js 16 App Router
│   ├── layout.tsx               # Root layout with navigation and footer
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── about/page.tsx           # About page
│   ├── courses/page.tsx         # Courses listing page
│   ├── faculty/page.tsx         # Faculty directory
│   ├── admissions/page.tsx      # Admissions information
│   ├── apply/page.tsx           # Application form
│   ├── contact/page.tsx         # Contact page
│   ├── blog/page.tsx            # Blog listing
│   ├── results/page.tsx         # Results showcase
│   ├── testimonials/page.tsx    # Testimonials section
│   ├── gallery/page.tsx         # Photo gallery
│   └── faqs/page.tsx            # FAQ section
│
├── components/                   # Reusable React components
│   ├── animations/              # Animation-related components
│   │   ├── AnimatedCounter.tsx  # Number animation component
│   │   ├── FadeInWhenVisible.tsx # Fade-in on scroll
│   │   ├── ParallaxSection.tsx  # Parallax scroll effect
│   │   ├── StaggerContainer.tsx # Sequential animation container
│   │   └── TiltCard.tsx         # 3D tilt effect component
│   │
│   ├── sections/                # Page section components
│   │   ├── HeroSection.tsx      # Hero banner with CTA
│   │   ├── StatsSection.tsx     # Statistics with counters
│   │   ├── CoursesPreviewSection.tsx # Featured courses
│   │   └── TestimonialsPreviewSection.tsx # Testimonials preview
│   │
│   └── ui/                      # Base UI components
│       ├── Navbar.tsx           # Navigation bar
│       ├── Footer.tsx           # Footer with links
│       └── SectionHeader.tsx    # Reusable section headers
│
├── data/
│   └── content-mock.json        # Mock data for institute info, courses, etc.
│
├── public/                      # Static assets
│   └── favicon.ico
│
├── package.json                 # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
└── eslint.config.mjs           # ESLint configuration
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.3](https://nextjs.org) - React framework for production
- **React**: [React 19.2.4](https://react.dev) - UI library
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type safety
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion 12.38.0](https://www.framer.com/motion/) - Advanced animations and interactions
- **Build Tool**: Next.js built-in bundler

### Development Tools
- **Linting**: ESLint 9 with Next.js config
- **CSS Processing**: PostCSS with Tailwind

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or later
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd coaching-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Open [http://localhost:3000](http://localhost:3000) to see the application

The page auto-updates as you edit files. TypeScript errors will be shown in the terminal and browser console.

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint code quality checks

## 🎨 Component Usage

### Animations
- **AnimatedCounter**: Display animated number transitions
  ```tsx
  <AnimatedCounter end={15000} duration={2} />
  ```

- **FadeInWhenVisible**: Elements fade in on scroll visibility
  ```tsx
  <FadeInWhenVisible>
    <div>Content fades in when visible</div>
  </FadeInWhenVisible>
  ```

- **ParallaxSection**: Parallax scrolling effect
  ```tsx
  <ParallaxSection offset={50}>
    <div>Background scrolls slower</div>
  </ParallaxSection>
  ```

- **TiltCard**: 3D tilt effect on hover
  ```tsx
  <TiltCard>
    <CourseCard />
  </TiltCard>
  ```

- **StaggerContainer**: Sequential animations for children
  ```tsx
  <StaggerContainer>
    <CourseCard />
    <CourseCard />
  </StaggerContainer>
  ```

## 📝 Development Guidelines

### Adding New Pages
1. Create new folder in `app/` directory
2. Create `page.tsx` in that folder
3. Use layout components from `components/`
4. Update navigation in `components/ui/Navbar.tsx`

### Adding Components
1. Place reusable components in appropriate subdirectory in `components/`
2. Use TypeScript interfaces for props
3. Apply Tailwind CSS for styling
4. Add animations using Framer Motion when appropriate

### Content Management
- Mock content is stored in `data/content-mock.json`
- Replace with actual API calls when backend is ready
- Maintain consistent data structure across pages

## 🚀 Deployment

### Deploy on Vercel (Recommended)
The easiest way to deploy this Next.js app:

1. Push your code to GitHub/GitLab
2. Import project to [Vercel](https://vercel.com/new)
3. Vercel auto-detects Next.js and configures build settings
4. Deploy with one click

### Deploy on Other Platforms
- See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other hosting options
- Supports: Docker, self-hosted servers, AWS, Google Cloud, etc.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

When contributing to this project:
- Follow the existing code structure and conventions
- Use TypeScript for type safety
- Keep components focused and reusable
- Test responsiveness across devices
- Update documentation for new features

## 📄 License

This project is part of the Apex Academy initiative.
