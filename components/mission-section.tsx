"use client"

import { Card } from "@/components/ui/card"
import { Target, Heart, Lightbulb, Globe } from "lucide-react"

export function MissionSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make quality education accessible to every student, regardless of their background or location.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in empathy, excellence, and empowerment through personalized learning experiences.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "To create a world where every student can unlock their full potential and achieve their dreams.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Our Impact",
      description: "Transforming lives across India with innovative teaching methods and dedicated support.",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-white">Our Purpose</h2>
          <p className="font-body text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Driven by passion, guided by purpose, and committed to excellence in education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-white">{value.title}</h3>
                <p className="font-body text-blue-100 leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
