# TISSAGE Website Deployment Guide

## Project Overview
TISSAGE is a marketplace website designed to help small artisans sell their handmade products. This project is a high-fidelity mockup with mocked data for demonstration purposes, built with React and ready for deployment on Vercel.

## Project Structure
- `/src/components`: UI components including layout elements
- `/src/pages`: Main page components for each screen
- `/src/data`: Mock data for products, artisans, and categories
- `/src/assets`: Static assets (placeholder for images)

## Deployment Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or pnpm
- A Vercel account

### Local Development
1. Clone the repository
2. Install dependencies:
   ```
   cd tissage_project
   pnpm install
   ```
3. Start the development server:
   ```
   pnpm run dev
   ```
4. View the site at http://localhost:5173

### Deployment to Vercel
1. Install Vercel CLI (if not already installed):
   ```
   npm install -g vercel
   ```
2. Login to Vercel:
   ```
   vercel login
   ```
3. Deploy the project:
   ```
   vercel
   ```
4. Follow the prompts to complete deployment
5. For production deployment:
   ```
   vercel --prod
   ```

## Customization Guide

### Replacing Placeholder Images
1. Add your actual images to the `/src/assets` directory
2. Update image references in the mock data files

### Adding the Custom Font
1. Add the Bugaki Regular font files to `/src/assets/fonts`
2. Update the CSS in `index.css` to use the font:
   ```css
   @font-face {
     font-family: 'Bugaki Regular';
     src: url('/assets/fonts/bugaki-regular.woff2') format('woff2'),
          url('/assets/fonts/bugaki-regular.woff') format('woff');
     font-weight: normal;
     font-style: normal;
   }
   ```

### Modifying Mock Data
1. Edit the files in `/src/data` to update products, artisans, or categories
2. All data is contained in the `mockData.ts` file

### Connecting to a Real Backend
If you want to connect the site to a real backend in the future:
1. Create API service files in `/src/services`
2. Replace the mock data imports with API calls
3. Implement actual authentication flows

## Notes for Presentation
- This is a demonstration mockup with pass-through functionality
- All data is mocked and no actual database is connected
- Login/register functionality is simulated
- The design follows the TISSAGE PDF specifications for colors, typography, and user flows
