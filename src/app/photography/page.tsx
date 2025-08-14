import Footer from "@/components/globals/footer";
import { Photos } from "@/components/sections/parallex-photos";
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper";
import { Camera, Heart, MapPin, Calendar, Instagram, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Photography - Sulav Baral",
  description:
    "Explore my photography journey - capturing moments, stories, and emotions through my lens",
};

export default function PhotographyPage() {
  return (
    <main className="min-h-screen">
      <MaxWidthWrapper>
        {/* Hero Section */}
        <section className="py-20 border-b">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Camera className="w-3 h-3 mr-1" />
                Photography
              </Badge>
              <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 border-pink-300 dark:border-pink-700">
                <Heart className="w-3 h-3 mr-1" />
                Passion Project
              </Badge>
            </div>

            <h1 className="hero-typography mb-8">
              <span className="text-gradient">
                capturing life through my lens
              </span>
              <span className="text-accent-red">.</span>
            </h1>

            <p className="section-p-typography max-w-4xl mx-auto mb-8">
              Photography isn&apos;t just a hobby for me—it&apos;s a way to
              freeze moments in time and tell stories without words. From the
              bustling streets of Kathmandu to serene mountain landscapes, from
              intimate cafe moments to vibrant cultural celebrations, I capture
              the essence of life as I see it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-accent-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">My Perspective</h3>
                <p className="section-p-typography">
                  Every photo tells a story. I focus on capturing authentic
                  emotions and genuine moments that resonate with viewers.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Local Explorer</h3>
                <p className="section-p-typography">
                  From hidden cafes in Thamel to sunrise views from Nagarkot, I
                  explore Nepal&apos;s beauty through my camera.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-accent-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Daily Moments</h3>
                <p className="section-p-typography">
                  I believe extraordinary moments exist in ordinary days. My
                  photos capture the beauty in everyday life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <Photos />

        {/* Bottom Section */}
        <section className="py-20 border-b">
          <div className="text-center mb-12">
            <h2 className="section-title-typography mb-8">
              <span className="text-gradient">behind the camera</span>
              <span className="text-accent-red">.</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="section-p-typography mb-8">
                My photography journey started with a simple smartphone and an
                eye for interesting compositions. Over the years, I&apos;ve
                developed my skills using both my trusty 10-year-old camera and
                modern smartphone technology. What matters most isn&apos;t the
                equipment—it&apos;s the story behind each shot.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white dark:bg-transparent border rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-accent-red" />
                    My Equipment
                  </h3>
                  <ul className="section-p-typography space-y-2">
                    <li>• 10-year-old DSLR camera (still going strong!)</li>
                    <li>• Smartphone photography for spontaneous moments</li>
                    <li>• Natural lighting enthusiast</li>
                    <li>• Minimal post-processing approach</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-transparent border rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-accent-red" />
                    What I Love Capturing
                  </h3>
                  <ul className="section-p-typography space-y-2">
                    <li>• Cafe culture and coffee moments</li>
                    <li>• Street photography and urban life</li>
                    <li>• Travel and landscape photography</li>
                    <li>• Candid portraits and emotions</li>
                  </ul>
                </div>
              </div>

              <p className="section-p-typography mb-8">
                Each photo in this collection represents a moment that caught my
                attention—whether it&apos;s the golden hour light streaming
                through a cafe window, the vibrant colors of a local festival,
                or the quiet beauty of a mountain sunrise. Photography has
                taught me to slow down, observe, and appreciate the world around
                me.
              </p>

              <p className="section-p-typography mb-12">
                I also create short reels and stories about my photography
                adventures, sharing behind-the-scenes moments and the stories
                behind my favorite shots. It&apos;s not just about the final
                image—it&apos;s about the entire experience of being present in
                the moment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://www.instagram.com/sulav_baral_58/"
                target="_blank"
              >
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                  <Instagram className="h-5 w-5 mr-2" />
                  Follow My Photography Journey
                </Button>
              </Link>

              <Link href="https://www.instagram.com/mr.ialboe/" target="_blank">
                <Button
                  variant="outline"
                  className="border-accent-red text-accent-red hover:bg-accent-red hover:text-white bg-transparent"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Behind the Scenes
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
      <Footer />
    </main>
  );
}
