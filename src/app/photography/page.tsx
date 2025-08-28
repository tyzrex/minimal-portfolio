import Footer from "@/components/globals/footer";
import { Photos } from "@/components/sections/parallex-photos";
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper";
import { Camera, Heart, MapPin, Calendar, Instagram, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Travel Photography - Sulav Baral",
  description:
    "Join my travel adventures through mobile photography and short videos - exploring Nepal and beyond, one destination at a time",
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
                adventures through a phone lens
              </span>
              <span className="text-accent-red">.</span>
            </h1>

            <p className="section-p-typography max-w-4xl mx-auto mb-8 text-center md:text-center">
              Adventures happen everywhere, and capturing those moments just
              feels right. From hidden mountain trails to bustling city streets,
              every journey becomes a collection of stories—frozen moments and
              short clips that bring places to life and hopefully inspire others
              to explore.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center md:text-center">
                <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Adventure Calls</h3>
                <p className="section-p-typography">
                  Every destination has stories waiting to unfold. From
                  Nepal&apos;s hidden gems to new horizons beyond.
                </p>
              </div>

              <div className="text-center md:text-center">
                <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-accent-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Capturing Moments
                </h3>
                <p className="section-p-typography">
                  Those perfect spontaneous shots that happen when you least
                  expect them. Simple, authentic captures of real experiences.
                </p>
              </div>

              <div className="text-center md:text-center">
                <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-accent-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visual Stories</h3>
                <p className="section-p-typography">
                  Mixing photos with short videos to share the full experience—
                  the sounds, energy, and feeling of being there.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <Photos />

        {/* Bottom Section */}
        <section className="py-20 border-b">
          <div className="text-center md:text-center mb-12">
            <h2 className="section-title-typography mb-8">
              <span className="text-gradient">wanderlust & pixels</span>
              <span className="text-accent-red">.</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="section-p-typography mb-8 text-left">
                There&apos;s something magical about being in a new place and
                feeling that urge to capture a moment—whether it&apos;s the way
                morning light hits ancient temples, the chaos and energy of
                local markets, or those quiet mountain mornings that make you
                forget about everything else. Adventure calls, and documenting
                these experiences just feels natural.
              </p>

              <p className="section-p-typography mb-8 text-left">
                Every trip tells a different story. Weekend escapes to Pokhara,
                challenging treks through the Himalayas, or discovering hidden
                gems in bustling cities—each adventure brings moments worth
                remembering. These experiences turn into visual stories that
                hopefully inspire others to pack their bags and create their own
                adventures.
              </p>

              <p className="section-p-typography mb-12 text-left">
                The best part? Those unplanned moments that become the most
                memorable—stumbling upon a local festival, catching a perfect
                sunset from an unexpected viewpoint, or meeting incredible
                people who share stories over chai. These spontaneous
                discoveries are what make traveling so addictive and worth
                documenting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://www.instagram.com/sulav_baral_58/"
                target="_blank"
              >
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                  <Instagram className="h-5 w-5 mr-2" />
                  Travel Adventures
                </Button>
              </Link>

              <Link href="https://www.instagram.com/mr.ialboe/" target="_blank">
                <Button
                  variant="outline"
                  className="border-accent-red text-accent-red hover:bg-accent-red hover:text-white bg-transparent"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Short Videos & Reels
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
