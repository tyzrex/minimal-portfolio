"use client";

import type React from "react";

import Footer from "@/components/globals/footer";
import SectionWrapper from "@/components/wrappers/section-wrapper";
import {
  ArrowLeft,
  Send,
  Heart,
  MessageCircle,
  User,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function VisitorsBoardPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, message, email });
    // Reset form
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <main className="min-h-screen">
      <SectionWrapper>
        {/* Header */}
        <section className="py-20 border-b">
          <Link
            href="/"
            className="inline-flex items-center text-accent-red hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div>
            <h1 className="hero-typography mb-8">
              <span className="text-gradient">visitors board</span>
              <span className="text-accent-red">.</span>
            </h1>

            <p className="section-p-typography mb-8">
              Welcome to my visitors board! This is a space where anyone who
              visits my portfolio can leave a message, share feedback, or just
              say hello. I love hearing from fellow developers, potential
              clients, and anyone interested in connecting.
            </p>
          </div>
        </section>

        {/* Leave a Message Form */}
        <section className="py-20">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-red/5 via-transparent to-blue-500/5 rounded-3xl"></div>
            <div className="absolute top-4 right-4">
              <Sparkles className="w-6 h-6 text-accent-red/30" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Star className="w-4 h-4 text-blue-500/30" />
            </div>

            <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="sub-section-title-typography mb-4">
                  <span className="text-gradient">Leave Your Mark</span>
                </h2>
                <p className="section-p-typography">
                  Share your thoughts, feedback, or just say hello! Every
                  message makes my day ✨
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      What should I call you? *
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your awesome name"
                      className="border-2 border-gray-200 dark:border-gray-700 focus:border-accent-red transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Email (for replies)
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="border-2 border-gray-200 dark:border-gray-700 focus:border-accent-red transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    What&apos;s on your mind? *
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your thoughts, feedback, project ideas, or just say hello! I read every single message 😊"
                    rows={5}
                    className="border-2 border-gray-200 dark:border-gray-700 focus:border-accent-red transition-colors resize-none"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-accent-red to-red-600 hover:from-red-600 hover:to-accent-red text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Messages */}
        <section className="py-20 border-t">
          <h2 className="sub-section-title-typography mb-12 text-center">
            Recent Messages
          </h2>

          <div className="space-y-6">
            {sampleMessages.map((msg, index) => (
              <div
                key={index}
                className="bg-white dark:bg-transparent border rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-accent-red" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold">{msg.name}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {msg.date}
                      </Badge>
                      {msg.isClient && (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                          Client
                        </Badge>
                      )}
                    </div>

                    <p className="section-p-typography mb-3">{msg.message}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="flex items-center gap-1 hover:text-accent-red transition-colors">
                        <Heart className="w-4 h-4" />
                        {msg.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-accent-red transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t">
          <div className="text-center">
            <h3 className="sub-section-title-typography mb-4">
              Want to Work Together?
            </h3>
            <p className="section-p-typography mb-6">
              If you&apos;re interested in collaborating on a project or just
              want to have a more detailed conversation, feel free to reach out
              directly!
            </p>
            <Link href="#contact">
              <Button className="bg-accent-red hover:bg-accent-red/90 text-white">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </SectionWrapper>
      <Footer />
    </main>
  );
}

const sampleMessages = [
  {
    name: "Sarah Chen",
    message:
      "Love your portfolio design! The animations are smooth and the projects showcase is really impressive. Would love to connect about potential collaboration opportunities.",
    date: "2 days ago",
    likes: 5,
    isClient: true,
  },
  {
    name: "Dev Kumar",
    message:
      "Fellow Nepali developer here! Your MockStox project is amazing - the AI integration looks really sophisticated. Keep up the great work!",
    date: "1 week ago",
    likes: 3,
    isClient: false,
  },
  {
    name: "Alex Rodriguez",
    message:
      "Stumbled upon your portfolio through GitHub. Really clean code structure and great documentation. Thanks for sharing your journey in the stories section!",
    date: "2 weeks ago",
    likes: 7,
    isClient: false,
  },
  {
    name: "Priya Sharma",
    message:
      "Hi Sulav! I&apos;m a startup founder looking for a frontend developer. Your Better Bikes project caught my attention. Would love to discuss a potential project with you.",
    date: "3 weeks ago",
    likes: 2,
    isClient: true,
  },
];
