import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Upload } from '@/components/Upload';
import { Footer } from '@/components/Footer';

export default function Home() {
  return <div className="font-[family-name:var(--font-geist-sans)]">
    <Header />
    <Hero />
    <Features />
    <Upload/>
  </div>
}
