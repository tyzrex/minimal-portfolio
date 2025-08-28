import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";
import { Badge } from "../ui/badge";
import { GraduationCap, MapPin, Coffee, Code } from "lucide-react";

export default function AboutSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="about me" />

        <div>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-700">
              <GraduationCap className="w-3 h-3 mr-1" />
              Fresh Graduate
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700">
              <MapPin className="w-3 h-3 mr-1" />
              Kathmandu, Nepal
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-700">
              <Code className="w-3 h-3 mr-1" />
              Frontend Specialist
            </Badge>
            <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-300 dark:border-orange-700">
              <Coffee className="w-3 h-3 mr-1" />
              Available for Freelance
            </Badge>
          </div>

          <p className="section-p-typography mb-6">
            Hey! I&apos;m Sulav, a frontend developer who just graduated from
            Tribhuvan University but has been building real apps for over two
            years. I love creating digital experiences that people actually
            enjoy using—not just pretty websites, but solutions that feel
            intuitive and solve real problems.
          </p>

          <p className="section-p-typography mb-6">
            Currently, I&apos;m working as an Associate Software Engineer at
            Hamro Patro, building products for millions of users. I also take on
            freelance projects because there&apos;s something magical about
            turning someone&apos;s vision into reality and seeing their
            excitement when it comes to life.
          </p>

          <p className="section-p-typography mb-6">
            When I&apos;m not coding, you&apos;ll find me exploring
            Kathmandu&apos;s cafes with my camera or getting way too excited
            about clean code and smooth animations. Good coffee + good code =
            happy developer! ☕
          </p>

          <p className="section-p-typography">
            Always open to new opportunities and crazy ideas that need building.
            Whether you&apos;re a startup, business, or someone with a wild
            concept—let&apos;s chat! The best projects start with great
            conversations.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
