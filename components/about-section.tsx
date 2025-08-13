"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, Users, Award, Clock } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "Tailored curriculum designed specifically for your learning style and pace.",
    },
    {
      icon: Users,
      title: "Expert Tutors",
      description: "Learn from qualified educators with years of teaching experience.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "98% of our students achieve their academic goals within 6 months.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Choose your preferred time slots that fit your busy lifestyle.",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Humse Padho?
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe every student deserves access to quality education. Our platform combines cutting-edge technology
            with personalized teaching methods to create an unparalleled learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-gray-800">{feature.title}</h3>
                <p className="font-body text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
