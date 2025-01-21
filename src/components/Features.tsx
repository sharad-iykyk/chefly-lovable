import { UserCheck, Calendar, Leaf, Globe, Clock } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: UserCheck,
    title: "Personalized Chef Matching",
    description: "Get matched with chefs based on your preferences and schedule",
  },
  {
    icon: Calendar,
    title: "Flexible Plans",
    description: "Choose from weekly, bi-weekly, monthly, or one-time services",
  },
  {
    icon: Leaf,
    title: "Eat Healthier",
    description: "Enjoy fresh, nutritious meals prepared just for you",
  },
  {
    icon: Globe,
    title: "Diverse Cuisines",
    description: "Explore a world of flavors with experienced chefs",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Focus on what matters while we handle the cooking",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-accent/20 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Features & Benefits
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need for a perfect dining experience
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative flex flex-col items-center p-8 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group border-primary/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-center text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};