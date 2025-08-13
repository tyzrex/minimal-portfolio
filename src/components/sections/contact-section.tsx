"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import SectionHeader from "../reusables/section-header"
import SectionWrapper from "../wrappers/section-wrapper"
import { Badge } from "../ui/badge"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionWrapper>
      <div id="contact">
        <SectionHeader title="get in touch" />

        <div className="flex items-center gap-3 mb-8">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-700">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for Freelance Projects
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700">
            Quick Response Time
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="sub-section-title-typography mb-5">Let's work together</h3>
            <p className="section-p-typography mb-8">
              I'm currently available for freelance projects and full-time opportunities. Whether you need a modern
              website, web application, or want to discuss a potential collaboration, I'd love to hear from you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-red" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="section-p-typography">sulavbaral58@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-red" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="section-p-typography">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent-red" />
                </div>
                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="section-p-typography">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="dark:bg-transparent">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again or email me directly.</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-accent-red hover:bg-accent-red/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  )
}
