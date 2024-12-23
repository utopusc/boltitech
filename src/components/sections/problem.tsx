import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brush, Globe, Wrench } from "lucide-react";

const problems = [
  {
    title: "Outdated Branding",
    description:
      "Many restaurants struggle with outdated logos and visual identities that fail to connect with modern customers.",
    icon: Brush,
  },
  {
    title: "Inefficient Websites",
    description:
      "Slow and unresponsive websites frustrate potential customers and result in lost reservations or orders.",
    icon: Globe,
  },
  {
    title: "Lack of Automation",
    description:
      "Managing daily operations without automation leads to wasted time and missed opportunities for growth.",
    icon: Wrench,

  },

];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Custom solutions for your unique challenges."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
