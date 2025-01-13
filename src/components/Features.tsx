import { UserCheck, Calendar, Leaf, Globe, Clock } from "lucide-react";

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
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Features & Benefits
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need for a perfect dining experience
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-center text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};