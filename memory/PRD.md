# We Care Foundation - NGO Website PRD

## Original Problem Statement
Build a website for NGO called "We Care Foundation" with:
- Sections: Home, About, Projects, Our Team, Volunteer, Contact Us, Blog, Donate Now
- Modern and elegant theme fitted for an NGO site
- Emphasis on donate section
- Nice animations and scroll effects
- Beautiful pictures

## User Personas
1. **Donors** - People looking to contribute financially to the cause
2. **Volunteers** - Individuals wanting to offer their time and skills
3. **Visitors** - General public wanting to learn about the foundation
4. **Beneficiaries** - Communities seeking help

## Core Requirements (Static)
- Responsive, modern design matching logo colors (blue, orange, magenta)
- Multiple pages: Home, About, Projects, Team, Volunteer, Blog, Contact, Donate
- Beautiful UI with scroll animations (Framer Motion)
- Forms for volunteering, contact, and donations (UI only, no backend processing)
- Static blog content
- No payment integration (demo forms only)

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion
- **Backend**: FastAPI (minimal, not heavily used)
- **Database**: MongoDB (available but not actively used for this site)
- **UI Components**: Shadcn/UI components
- **Typography**: Playfair Display (headings) + Manrope (body)
- **Colors**: Primary Blue (#0056D2), Secondary Orange (#FF9F1C), Accent Magenta (#E91E63)

## What's Been Implemented (December 2024)

### ✅ Completed Features
1. **Header Component** - Sticky glassmorphism header with navigation and prominent Donate button
2. **Hero Section** - Inspiring hero with stats, CTA buttons, and floating card
3. **About Section** - Mission, vision, values with image grid and stats
4. **Projects Section** - Bento grid layout showcasing 6 initiatives
5. **Team Section** - 8 team member cards with social links and hover effects
6. **Volunteer Section** - Benefits, opportunities list, and application form with toast
7. **Contact Section** - Contact info, Google Maps embed, and contact form with toast
8. **Blog Section** - Featured post + 3 smaller posts in grid layout
9. **Donate Section** - Pre-selected amounts ($10-$250), custom input, one-time/monthly toggle, impact display
10. **Footer** - CTA banner, quick links, programs, contact info, newsletter, social links
11. **Routing** - All pages accessible via React Router
12. **Animations** - Scroll-triggered animations using Framer Motion
13. **Responsive Design** - Mobile-first with proper breakpoints
14. **User's Logo** - Custom logo integrated throughout the site

## P0/P1/P2 Features

### P0 (Completed)
- ✅ All main sections implemented
- ✅ Navigation working
- ✅ Donate section with prominence
- ✅ Forms with UI feedback (toasts)

### P1 (Future Enhancement)
- Real payment integration (Stripe/PayPal)
- Email service for contact form (SendGrid/Resend)
- Admin panel for blog management
- User authentication for donors/volunteers

### P2 (Backlog)
- Event calendar
- Donation history tracking
- Volunteer hour tracking
- Impact dashboard with real data
- Multi-language support
- Newsletter automation

## Next Tasks
1. Add real payment integration if needed
2. Connect contact form to email service
3. Add admin panel for content management
4. Implement blog CMS functionality
