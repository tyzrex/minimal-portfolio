import SectionWrapper from "../wrappers/section-wrapper";
import SectionHeader from "../reusables/section-header";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiGmail,
  SiGithub,
} from "@icons-pack/react-simple-icons";

export default function Socials() {
  return (
    <SectionWrapper>
      <SectionHeader title="connect with me" />

      <div>
        <p className="section-p-typography mb-12 text-left">
          Let&apos;s stay connected! Follow my journey, see my latest work, or
          just say hello. I love connecting with fellow developers, potential
          clients, and anyone interested in tech and creativity.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group bg-white dark:bg-transparent border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-accent-red/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center group-hover:bg-accent-red/20 transition-colors">
                    <social.icon size={20} className="text-accent-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{social.name}</h3>
                    <p className="text-xs section-p-typography">
                      {social.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <p className="section-p-typography mb-6 text-left">
            Prefer email? Drop me a line anytime at{" "}
            <Link
              href="mailto:sulavbaral58@gmail.com"
              className="text-accent-red hover:underline"
            >
              sulavbaral58@gmail.com
            </Link>
          </p>
          <div className="flex justify-start">
            <Link href="#contact">
              <Button
                variant="outline"
                className="border-accent-red text-accent-red hover:bg-accent-red hover:text-white bg-transparent"
              >
                Send a Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

const socialLinks = [
  {
    name: "GitHub",
    description: "Code & Projects",
    icon: SiGithub,
    url: "https://github.com/tyzrex",
  },
  {
    name: "Instagram",
    description: "Photography & Life",
    icon: SiInstagram,
    url: "https://www.instagram.com/sulav_baral_58/",
  },
  {
    name: "LinkedIn",
    description: "Professional Network",
    icon: SiFacebook, // Fixed LinkedIn icon
    url: "https://www.linkedin.com/in/sulav-baral/",
  },
  {
    name: "Twitter",
    description: "Tech Thoughts",
    icon: SiX,
    url: "https://twitter.com/tyzrex07",
  },
  {
    name: "Facebook",
    description: "Personal Updates",
    icon: SiFacebook,
    url: "https://www.facebook.com/sulav.baral.58/",
  },
  {
    name: "Email",
    description: "Direct Contact",
    icon: SiGmail,
    url: "mailto:sulavbaral58@gmail.com",
  },
];
