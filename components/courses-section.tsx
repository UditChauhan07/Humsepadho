"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, Star } from "lucide-react"

export function CoursesSection() {
  const courses = [
    {
      title: "Mathematics",
      level: "Class 6-12",
      duration: "3 months",
      students: "2,500+",
      rating: 4.9,
      price: "₹2,999/month",
      features: ["Algebra & Geometry", "Calculus", "Statistics", "Problem Solving"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Science",
      level: "Class 6-12",
      duration: "4 months",
      students: "1,800+",
      rating: 4.8,
      price: "₹3,499/month",
      features: ["Physics", "Chemistry", "Biology", "Lab Experiments"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "English",
      level: "Class 6-12",
      duration: "2 months",
      students: "3,200+",
      rating: 4.9,
      price: "₹2,499/month",
      features: ["Grammar", "Literature", "Writing Skills", "Speaking Practice"],
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section id="courses" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Popular Courses
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive courses designed by experts to help you excel in your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="font-body">
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-body text-sm font-medium">{course.rating}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-2xl mb-3 text-gray-800">{course.title}</h3>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-body">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="font-body">{course.students}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-body text-gray-600">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div className="font-heading font-bold text-2xl text-gray-800">{course.price}</div>
                  <Button
                    className={`bg-gradient-to-r ${course.color} hover:scale-105 transition-transform duration-300 text-white font-body font-semibold`}
                  >
                    Book Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
