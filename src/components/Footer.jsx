import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Al Fayed</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Partners in Engineering Innovation & Success. Delivering advanced engineering technologies and precision solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Consult Before You Order</li>
              <li>Smart Supply</li>
              <li>After-Sales Services</li>
              <li>Workshop Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300">+20 1149663112</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300">mohamedfayd97@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300">Benha, Egypt</span>
                <span className="text-gray-300">cairo, Nasser City, Egypt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-primary-800" />

      {/* Bottom Footer */}
      <div className="container-custom py-8">
        <p className="text-gray-400 text-sm text-center md:text-left">
          &copy; {currentYear} Al Fayed for Supplies, Import, Export & Contracting. All rights reserved. <br />
          Built & Designed by{' '}
          <a
            href="https://omarabdelghani-portfolio.netlify.app/"   
            target="_blank"                  
            rel="Eng:OmarAbdelghani_portfolio"       
            className="font-semibold text-primary-500 hover:underline"
          >
            Omar Abdelghani
          </a>
        </p>

        
      </div>
    </footer>
  )
}
