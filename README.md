# 🦷 Dentelle - Premium Dental Clinic Website

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)

Dentelle is a modern, responsive, and high-performance web application tailored for a premium dental clinic. It provides patients with an elegant digital experience to explore services, learn about the clinic and doctors, and book appointments seamlessly.

## ✨ Key Features

- **Modern & Responsive Design:** Beautifully crafted layouts that work flawlessly across all devices (mobile, tablet, desktop).
- **Dynamic Animations:** Engaging scroll animations, micro-interactions, and beautiful UI effects powered by Framer Motion.
- **Dark & Light Mode:** Built-in theme switching providing optimal viewing experiences in any lighting.
- **Service & Clinic Showcases:** Interactive galleries, service carousels, and detailed pages highlighting treatments and facilities.
- **Working Contact Form:** Integrated with Web3Forms for seamless appointment requests directly from the website.
- **Performance Optimized:** Built on the Next.js App Router for optimal SEO, fast page loads, and excellent core web vitals.

## 🛠️ Technology Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Contact Form:** [Web3Forms](https://web3forms.com/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js (v18.17.0 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository** (if applicable) or download the source code.
2. **Navigate into the project directory:**
   ```bash
   cd dentelle
   ```
3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
5. **Open the application:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser to view the site.

## 📁 Project Structure

```
dentelle/
├── src/
│   ├── app/                # Next.js App Router pages (Home, About, Services, Contact, Clinic)
│   ├── components/         # Reusable React components organized by section
│   │   ├── about/          # About page specific components
│   │   ├── clinic/         # Clinic page specific components
│   │   ├── home/           # Homepage sections
│   │   ├── services/       # Services page components
│   │   └── ui/             # Global UI elements (Navbar, Footer, Animations, ThemeProvider)
│   └── lib/                # Utility functions and shared logic
├── public/
│   └── images/             # Static assets, logos, and gallery images
├── tailwind.config.js      # Tailwind CSS configuration (if applicable)
├── next.config.mjs         # Next.js configuration
└── package.json            # Project dependencies and scripts
```

## 📝 Customization

- **Styling:** The global theme colors and variables are configured in `src/app/globals.css`.
- **Forms:** To link the contact form to your email, update the Web3Forms `access_key` in `src/app/contact/page.js`.
- **Images:** Replace the placeholder images in the `public/images/` directory with your clinic's actual photos.

## 📄 License

This project is open-source and available for usage and modifications.
