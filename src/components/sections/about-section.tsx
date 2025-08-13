import SectionHeader from "../reusables/section-header"
import SectionWrapper from "../wrappers/section-wrapper"
import { Badge } from "../ui/badge"
import { GraduationCap, MapPin, Coffee, Code } from "lucide-react"

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
            Hi there! I'm Sulav, a passionate frontend developer who just completed my Computer Science degree from
            Tribhuvan University last month. While I'm fresh out of college, I've been building real-world applications
            and gaining professional experience for over two years now.
          </p>

          <p className="section-p-typography mb-6">
            What drives me? Creating digital experiences that people actually enjoy using. I believe great websites
            shouldn't just look good—they should feel intuitive, load fast, and solve real problems. Whether it's a
            sleek business website or a complex web application, I focus on building solutions that make users' lives
            easier.
          </p>

          <p className="section-p-typography mb-6">
            I'm currently working as an Associate Software Engineer at Hamro Patro, where I get to work on products used
            by millions of Nepali users. But I also love taking on freelance projects because each client brings unique
            challenges that help me grow as a developer. There's something special about working directly with clients
            and seeing their ideas come to life.
          </p>

          <p className="section-p-typography mb-6">
            When I'm not coding, you'll find me exploring Kathmandu's cafe scene with my camera, capturing moments that
            tell stories. I'm also that person who gets genuinely excited about clean code, smooth animations, and
            finding the perfect color palette for a project. I've probably visited every cafe in Thamel while working on
            projects—good coffee plus good code equals a happy developer!
          </p>

          <p className="section-p-typography">
            I'm always open to new opportunities and collaborations. Whether you're a startup looking for a dedicated
            developer, a business needing a modern website, or someone with a crazy idea that needs to be built—let's
            chat! I believe the best projects come from great conversations and shared enthusiasm.
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
