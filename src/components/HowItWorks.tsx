import { UserPlus, Settings, User, Utensils } from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    description: "Sign up with ease or continue as a guest",
  },
  {
    icon: Settings,
    title: "Set your preferences",
    description: "Choose dietary needs, cuisines, and schedules",
  },
  {
    icon: User,
    title: "Match with a chef",
    description: "Get personalized chef recommendations",
  },
  {
    icon: Utensils,
    title: "Enjoy your meals",
    description: "Chef cooks at your home; you relax and savor",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Four simple steps to your perfect dining experience
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-center text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};