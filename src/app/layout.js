import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Loader from "@/components/ui/Loader";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dentelle - Premium Cosmetic Dental Clinic",
  description: "Advanced dental care with modern technology and compassionate treatment. Your smile is our priority.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased selection:bg-[var(--color-primary)] selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Loader />
          <Navbar />
          <main className="min-h-screen pt-[72px]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
