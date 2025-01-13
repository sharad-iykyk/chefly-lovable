import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Experience the Joy of</span>
              <span className="block text-primary">Home-Cooked Meals</span>
              <span className="block">by a Professional Chef</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:text-xl max-w-3xl">
              Book a personal chef to prepare healthy, delicious meals tailored to your preferences—all in the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                Book Your Chef Now <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Try Free Trial
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Chef cooking in kitchen"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};