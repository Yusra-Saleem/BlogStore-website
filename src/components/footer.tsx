import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0e1217] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BlogStore</h3>
            <p className="text-gray-400">Exploring ideas, sharing knowledge, and inspiring creativity.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">123 Blog Street, City, Country</p>
            <p className="text-gray-400">Email: info@blogstore.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Facebook size={24} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Twitter size={24} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Instagram size={24} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Linkedin size={24} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2023 BlogStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}