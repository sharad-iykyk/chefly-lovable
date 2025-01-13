import { Lightbulb, Heart, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

export const Features = () => {
  const features = [
    {
      title: "Innovative Design",
      description: "Create beautiful and responsive designs that work on any device.",
      icon: Lightbulb,
    },
    {
      title: "Built with Love",
      description: "Carefully crafted with attention to every detail.",
      icon: Heart,
    },
    {
      title: "Lightning Fast",
      description: "Optimized for speed and performance.",
      icon: Zap,
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Amazing Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to create something amazing.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};