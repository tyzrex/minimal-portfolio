import Footer from "@/components/globals/footer"
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper"
import { Calendar, Clock, ArrowLeft, Coffee, Code, Camera, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Stories - Sulav Baral",
  description: "Personal experiences, lessons learned, and insights from my journey as a developer",
}

export default function StoriesPage() {
  return (
    <main className="min-h-screen">
      <MaxWidthWrapper>
        {/* Header */}
        <section className="py-10 md:py-20 border-b">
          <Link href="/" className="inline-flex items-center text-accent-red hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <h1 className="hero-typography mb-8">
              <span className="text-gradient">stories & experiences</span>
              <span className="text-accent-red">.</span>
            </h1>

            <p className="section-p-typography mb-8">
              Welcome to my little corner of the internet where I share personal experiences, lessons learned, and
              insights from my journey as a developer. These are the stories behind the code, the challenges that shaped
              me, and the moments that made it all worthwhile.
            </p>
          </div>
        </section>

        {/* Stories */}
        <section className="py-10 md:py-20">
          <div className="max-w-4xl space-y-8 md:space-y-12">
            {stories.map((story, index) => (
              <article key={index} className="bg-white dark:bg-transparent border rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-red/10 rounded-full flex items-center justify-center">
                    <story.icon className="w-5 h-5 text-accent-red" />
                  </div>
                  <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    <Calendar className="w-3 h-3 mr-1" />
                    {story.date}
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    <Clock className="w-3 h-3 mr-1" />
                    {story.readTime}
                  </Badge>
                </div>

                <h2 className="sub-section-title-typography mb-4">{story.title}</h2>

                <div className="space-y-4">
                  {story.content.map((paragraph, idx) => (
                    <p key={idx} className="section-p-typography">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {story.lesson && (
                  <div className="mt-6 bg-accent-red/5 border-l-4 border-accent-red rounded-r-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2 text-accent-red" />
                      Key Takeaway
                    </h4>
                    <p className="section-p-typography">{story.lesson}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-20 border-t">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="sub-section-title-typography mb-4">Want to Share Your Story?</h3>
            <p className="section-p-typography mb-6">
              I love connecting with fellow developers and hearing about their journeys. If you have a story to share or
              just want to chat about code, coffee, or cameras, let's connect!
            </p>
            <Link href="#contact">
              <Button className="bg-accent-red hover:bg-accent-red/90 text-white">Let's Connect</Button>
            </Link>
          </div>
        </section>
      </MaxWidthWrapper>
      <Footer />
    </main>
  )
}

const stories = [
  {
    icon: Code,
    title: "My First Real Project: Learning by Breaking Things",
    date: "December 2023",
    readTime: "5 min read",
    content: [
      "I still remember the panic I felt when I accidentally deleted an entire component while working on my first freelance project. It was 2 AM, I had no backup, and the client demo was the next day.",
      "That night taught me more about version control, backup strategies, and staying calm under pressure than any tutorial ever could. I ended up rebuilding the component from scratch, and it turned out even better than the original.",
      "The client loved the final result, but more importantly, I learned that mistakes aren't failures—they're expensive lessons that make you a better developer. Now I commit code religiously and always have multiple backups.",
    ],
    lesson:
      "Always use version control, even for the smallest projects. Your future self will thank you when things go wrong.",
  },
  {
    icon: Coffee,
    title: "The Cafe That Changed My Perspective",
    date: "March 2024",
    readTime: "4 min read",
    content: [
      "There's this small cafe in Thamel where I've spent countless hours coding. The owner, an elderly man named Kaji, noticed I was always there with my laptop and started bringing me free refills without asking.",
      "One day, he sat down and asked what I was building. I showed him a simple website I was working on, and his eyes lit up. He said, 'You're creating something from nothing. That's magic.' It was such a simple observation, but it completely shifted how I see my work.",
      "Before that conversation, I sometimes felt like I was just moving pixels around. But Kaji helped me realize that every line of code, every design decision, every user interaction is part of creating something meaningful for real people.",
    ],
    lesson:
      "Sometimes the most profound insights come from the most unexpected conversations. Stay open to different perspectives.",
  },
  {
    icon: Camera,
    title: "When Photography Made Me a Better Developer",
    date: "June 2024",
    readTime: "6 min read",
    content: [
      "I picked up photography as a hobby to take a break from screens, but it ended up making me a better developer in ways I never expected.",
      "Photography taught me about composition, balance, and the importance of negative space. These principles directly translate to UI design. Just like a good photo needs breathing room, a good interface needs whitespace.",
      "The patience required for the perfect shot also improved my debugging skills. Sometimes you need to wait, observe, and try different angles before you find the solution. Both photography and coding require seeing the bigger picture while paying attention to tiny details.",
      "Now when I'm designing interfaces, I think like a photographer: What's the focal point? How does the eye move through the composition? What story am I trying to tell?",
    ],
    lesson:
      "Skills from different domains often complement each other in unexpected ways. Don't be afraid to explore interests outside of tech.",
  },
  {
    icon: Lightbulb,
    title: "The Day I Realized I Love Teaching",
    date: "September 2024",
    readTime: "4 min read",
    content: [
      "A friend asked me to help their cousin learn web development. I was hesitant—I barely felt qualified to teach anyone. But I agreed to spend a weekend showing them the basics.",
      "What started as a favor turned into one of the most rewarding experiences I've had. Watching someone's face light up when they successfully center a div for the first time reminded me why I fell in love with coding.",
      "I realized that teaching isn't about being the smartest person in the room. It's about breaking down complex concepts, being patient, and celebrating small wins. These are the same skills that make you a better team member and communicator.",
      "Now I try to mentor junior developers whenever I can. It keeps me grounded and constantly learning, because explaining something to someone else is the best way to truly understand it yourself.",
    ],
    lesson: "Teaching others is one of the best ways to solidify your own knowledge and give back to the community.",
  },
  {
    icon: Code,
    title: "From College Student to Professional: The Transition",
    date: "January 2025",
    readTime: "7 min read",
    content: [
      "Graduating college last month felt surreal. One day I was a student working on assignments, the next I was a professional developer with real responsibilities and deadlines that actually matter.",
      "The transition from academic projects to real-world applications was eye-opening. In college, if your code worked, you got an A. In the professional world, working code is just the beginning—it needs to be maintainable, scalable, and user-friendly.",
      "I've learned that soft skills matter just as much as technical skills. Communication, time management, and the ability to work with different personalities are crucial. The best code in the world is useless if you can't explain it to your team or deliver it on time.",
      "Starting my career during a time when remote work is common has been both challenging and rewarding. I've had to be more proactive about communication and building relationships with colleagues I might never meet in person.",
      "The imposter syndrome is real, but I've learned that everyone feels it sometimes. The key is to embrace being a beginner and focus on continuous learning rather than trying to know everything from day one.",
    ],
    lesson:
      "The transition from student to professional is about more than just technical skills—it's about developing a professional mindset and learning to work effectively with others.",
  },
]
