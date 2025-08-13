"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Sparkles } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-slate-900/40" />

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-float" />
      <div className="absolute top-40 right-32 w-32 h-32 bg-purple-500/15 rotate-45 blur-xl animate-rotate-slow" />
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute bottom-40 left-32 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl animate-bounce-subtle" />

      {/* Central glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Navigation */}
        <nav className="absolute top-8 left-0 right-0 z-20">
          <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
            <div className="font-heading font-bold text-2xl text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-400 animate-pulse-slow" />
              Humse Padho
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="font-body text-gray-300 hover:text-indigo-400 transition-all duration-300 hover:scale-105"
              >
                About
              </a>
              <a
                href="#courses"
                className="font-body text-gray-300 hover:text-indigo-400 transition-all duration-300 hover:scale-105"
              >
                Courses
              </a>
              <a
                href="#testimonials"
                className="font-body text-gray-300 hover:text-indigo-400 transition-all duration-300 hover:scale-105"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="font-body text-gray-300 hover:text-indigo-400 transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect-dark rounded-full px-6 py-3 mb-8 animate-glow">
            <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse-slow" />
            <span className="font-body text-sm font-medium text-gray-200">Trusted by 10,000+ Students</span>
          </div>

          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
            Learn Without
            <br />
            <span className="relative text-indigo-400">
              Limits
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 rounded-full animate-glow" />
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Accessible, personalized, and engaging learning for every student. Book your demo today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-body font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 animate-glow group hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Book Free Demo
              <ArrowRight
                className={`ml-2 w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="glass-effect-dark border-2 border-indigo-400/30 hover:border-indigo-400/60 text-indigo-300 hover:text-white px-8 py-4 text-lg font-body font-semibold rounded-full transition-all duration-300 group bg-transparent hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div
              className="text-center animate-fade-in glass-effect-dark rounded-lg p-4"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="font-heading font-bold text-3xl text-indigo-400 mb-2">10,000+</div>
              <div className="font-body text-gray-300">Happy Students</div>
            </div>
            <div
              className="text-center animate-fade-in glass-effect-dark rounded-lg p-4"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="font-heading font-bold text-3xl text-purple-400 mb-2">500+</div>
              <div className="font-body text-gray-300">Expert Tutors</div>
            </div>
            <div
              className="text-center animate-fade-in glass-effect-dark rounded-lg p-4"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="font-heading font-bold text-3xl text-emerald-400 mb-2">98%</div>
              <div className="font-body text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
