import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
              <span className="block">Experience the Joy of</span>
              <span className="block text-accent">Home-Cooked Meals</span>
              <span className="block">by a Professional Chef</span>
            </h1>
            <p className="mt-3 text-lg text-white/90 sm:text-xl md:text-2xl max-w-3xl">
              Book a personal chef to prepare healthy, delicious meals tailored to your preferences—all in the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="group hover:scale-105 transition-transform">
                Book Your Chef Now 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Try Free Trial
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
              <img
                src="/placeholder.svg"
                alt="Chef cooking in kitchen"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};