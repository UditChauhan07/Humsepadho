"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  const subjects = [
    { name: "Mathematics", href: "#" },
    { name: "Science", href: "#" },
    { name: "English", href: "#" },
    { name: "Social Studies", href: "#" },
  ]

  const policies = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "FAQ", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <div className="font-heading font-bold text-3xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Humse Padho
              </div>
              <p className="font-body text-gray-300 mb-6 leading-relaxed">
                Accessible, personalized, and engaging learning for every student. Transform your academic journey with
                us.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="font-body text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="font-body text-sm">hello@humsepadho.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="font-body text-sm">Delhi, Mumbai, Bangalore</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-body text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subjects */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-white">Subjects</h3>
              <ul className="space-y-3">
                {subjects.map((subject, index) => (
                  <li key={index}>
                    <a
                      href={subject.href}
                      className="font-body text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {subject.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies & Newsletter */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-white">Stay Updated</h3>
              <p className="font-body text-gray-300 text-sm mb-4">
                Subscribe to get the latest updates and educational tips.
              </p>

              <div className="flex gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white font-body text-sm focus:outline-none focus:border-blue-500"
                />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-body"
                >
                  Subscribe
                </Button>
              </div>

              <ul className="space-y-2">
                {policies.map((policy, index) => (
                  <li key={index}>
                    <a
                      href={policy.href}
                      className="font-body text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {policy.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-body text-gray-400 text-sm">© 2024 Humse Padho. All rights reserved.</div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
