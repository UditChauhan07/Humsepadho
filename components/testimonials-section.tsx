"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      grade: "Class 12",
      rating: 5,
      text: "Humse Padho transformed my understanding of Mathematics. The personalized approach helped me improve from 60% to 95% in just 4 months!",
      subject: "Mathematics",
    },
    {
      name: "Arjun Patel",
      grade: "Class 10",
      rating: 5,
      text: "The Science tutors are amazing! They make complex concepts so easy to understand. I finally love studying Physics and Chemistry.",
      subject: "Science",
    },
    {
      name: "Sneha Gupta",
      grade: "Class 11",
      rating: 5,
      text: "Best decision ever! The flexible timings and expert guidance helped me balance studies with my other activities perfectly.",
      subject: "English",
    },
  ]

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Students Say
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from students who transformed their academic journey with Humse Padho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200 group-hover:text-blue-300 transition-colors" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="font-body text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="font-body text-sm text-gray-600">{testimonial.grade}</div>
                </div>
                <div className="text-right">
                  <div className="font-body text-sm font-medium text-blue-600">{testimonial.subject}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
