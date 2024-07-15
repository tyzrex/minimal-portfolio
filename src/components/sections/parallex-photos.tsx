import ScrollGallery from "../molecules/parallex-scroll";
import cloudinary from "cloudinary";
import SectionWrapper from "../wrappers/section-wrapper";
import SectionHeader from "../reusables/section-header";
import Link from "next/link";
import { Button } from "../ui/button";
import { Instagram } from "lucide-react";
import { Suspense, cache } from "react";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const getPhotos = cache(async () => {
  const res = await cloudinary.v2.api.resources({
    type: "upload",
    prefix: "uploaded/Portfolio/",
    max_results: 500,
    context: true,
  });
  return res.resources;
});

async function Gallery() {
  const photos = await getPhotos();

  const gallery = photos.map((photo: any) => {
    return {
      url: photo.secure_url,
    };
  });
  return (
    <>
      <ScrollGallery images={gallery} />
    </>
  );
}

export async function Photos() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader
          title="
            Photo Enthusiast
        "
        />

        <div className="flex my-10 flex-col">
          <p className="section-p-typography ">
            These are some of the photos I have taken over the years. I love
            clicking pictures and capturing moments. I am a photo enthusiast and
            love to capture moments in my phone and my 10 year old camera. I
            also create small reels about life, travels and cafe hopping.
          </p>
          <div className="flex md:items-center gap-5 mt-5 flex-col md:flex-row">
            <Link
              prefetch={false}
              href="https://www.instagram.com/sulav_baral_58/"
              target="_blank"
            >
              <Button>
                <Instagram className="h-5 w-5 mr-2" />
                Follow me on Instagram
              </Button>
            </Link>

            <Link
              prefetch={false}
              href="https://www.instagram.com/mr.ialboe/"
              target="_blank"
            >
              <Button className="bg-accent-red text-white">
                <Instagram className="h-5 w-5 mr-2" />
                Follow my drafts page
              </Button>
            </Link>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Gallery />
        </Suspense>
      </SectionWrapper>
    </>
  );
}
