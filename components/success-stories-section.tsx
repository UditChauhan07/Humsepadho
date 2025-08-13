"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Award, BookOpen } from "lucide-react"

export function SuccessStoriesSection() {
  const stories = [
    {
      name: "Rahul Kumar",
      before: "45%",
      after: "92%",
      subject: "Mathematics",
      achievement: "IIT JEE Qualified",
      story:
        "Struggled with calculus and algebra. With personalized guidance, mastered advanced concepts and qualified for IIT JEE.",
      duration: "6 months",
    },
    {
      name: "Ananya Singh",
      before: "52%",
      after: "89%",
      subject: "Science",
      achievement: "NEET Qualified",
      story:
        "Chemistry was my weakness. The interactive sessions and practice tests helped me crack NEET with flying colors.",
      duration: "8 months",
    },
    {
      name: "Vikash Sharma",
      before: "38%",
      after: "85%",
      subject: "English",
      achievement: "School Topper",
      story: "English literature seemed impossible. Now I'm the school topper and love reading Shakespeare!",
      duration: "4 months",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-blue-50/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real transformations that inspire us every day. These students didn't just improve grades—they discovered
            their potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="p-6 glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="font-heading font-bold text-2xl text-red-500">{story.before}</div>
                    <div className="font-body text-xs text-gray-500">BEFORE</div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-500" />
                  <div className="text-center">
                    <div className="font-heading font-bold text-2xl text-green-500">{story.after}</div>
                    <div className="font-body text-xs text-gray-500">AFTER</div>
                  </div>
                </div>

                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-body">
                  <Award className="w-3 h-3 mr-1" />
                  {story.achievement}
                </Badge>
              </div>

              <h3 className="font-heading font-bold text-xl mb-2 text-gray-800 text-center">{story.name}</h3>

              <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-body">{story.subject}</span>
                </div>
                <div className="font-body">{story.duration}</div>
              </div>

              <p className="font-body text-gray-600 text-center leading-relaxed italic">"{story.story}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
