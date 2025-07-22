<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Project Instructions

This is a modern portfolio website for João Gaspar built with:
- React + TypeScript + Vite
- Tailwind CSS for styling with glassmorphism design
- React Router DOM for navigation (configured for GitHub Pages with basename="/portfolio")
- Framer Motion for animations
- EmailJS for contact form functionality
- React Icons for UI icons

## Project Structure
- `/src/components/` - Reusable UI components (Navbar, Footer, Layout)
- `/src/pages/` - Page components (Home, About, etc.)
- `/src/assets/` - Static assets
- `/public/` - Public files including CV

## Design Guidelines
- Use glassmorphism effects with backdrop-blur and transparency
- Maintain consistent spacing and typography
- Implement smooth animations and transitions
- Ensure responsive design (mobile-first approach)
- Use the primary color (#3b82f6) consistently

## Features
- Responsive navigation with mobile menu
- Animated page transitions
- Contact form with EmailJS integration
- CV download functionality
- Social media links
- Project showcases with technology tags

## Important Notes
- The EmailJS configuration needs to be set up with actual service credentials
- CV file should be placed in `/public/cv_en.pdf`
- All external links open in new tabs
- The site is configured for deployment on GitHub Pages with basename="/portfolio"
