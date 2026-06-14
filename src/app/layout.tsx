import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Header from '@/components/Shared/Header';

const lexend = Lexend({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend'
});

export const metadata: Metadata = {
  title: 'Study Buddy | AI-Powered Exam Prep',
  description: 'Master your exams with AI-generated practice quizzes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} antialiased`}>
      <body className="bg-[#F7F9FC] text-[#1A1A1A] min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
          {children}
        </main>
        <footer className="py-6 text-center text-sm text-[#4A4A4A] border-t border-[#D8DADD]">
          © {new Date().getFullYear()} Study Buddy MVP • Built for Academic Clarity
        </footer>
      </body>
    </html>
  );
}