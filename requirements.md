# TISSAGE Website Requirements Documentation

## Project Overview
TISSAGE is a marketplace website designed to help small artisans who lack the knowledge or financial resources to sell their handmade products on major online platforms. The project supports sustainable development goals including poverty eradication, decent work and economic growth, and reducing inequalities.

## Brand Identity

### Logo
- TISSAGE logo features the brand name with interlaced "S" letters
- Tagline: "ARTE DE UNIR IDEIAS"
- Primary display on light backgrounds

### Color Palette

#### Primary Colors
- **Mineral Green**
  - HEX: #516a5b
  - RGB: 81, 106, 91
  - CMYK: 81, 51, 71, 9
  - Usage: Structural elements like headers, footers, and navigation bars

- **Strawberry Cream**
  - HEX: #f7d5d5
  - RGB: 247, 213, 213
  - CMYK: 0, 25, 13, 0
  - Usage: Backgrounds, artisan stories, and call-to-action elements

### Typography
- **Primary Font (Titles)**: Bugaki Regular
  - Chosen for its visual connection to the brand symbol
  - Serif format with droplets that reference the interlaced "S" letters in the logo
  - Robust structure that gives personality to the visual identity

- **Secondary Font (Body)**: Montserrat
  - Selected for aesthetic neutrality and excellent legibility
  - Slight contrast between letters ensures good readability
  - Used for text blocks and informational content

## User Interface & Experience

### Navigation Structure
The website follows the fluxogram documented in `fluxogram.md`, with key user journeys for both artisans and customers.

### Key Pages to Implement
1. **Home Page**
   - Featured artisans
   - Product categories
   - Search functionality
   - Navigation menu

2. **Product Listing Page**
   - Filtering options
   - Product cards with images
   - Quick view options

3. **Product Detail Page**
   - Product images
   - Description
   - Price
   - Add to cart functionality
   - Artisan information

4. **Artisan Profile Page**
   - Artisan bio/story
   - Product showcase
   - Contact information

5. **Checkout Flow**
   - Cart review
   - Address input
   - Payment method selection (mocked)
   - Order confirmation

6. **Login/Register Pages** (mocked functionality)
   - User registration form
   - Login form
   - Password recovery

## Technical Requirements
- Frontend-only implementation (no backend/database)
- All data will be mocked
- Login/register functionality will be pass-through
- Responsive design for all screen sizes
- High fidelity to the original design
- Deployment on Vercel

## Implementation Notes
- Use React for the frontend implementation
- Follow the fluxogram for navigation structure
- Implement responsive design principles
- Use the specified color palette and typography
- Create mock data for all features
- Ensure high fidelity to the original design
