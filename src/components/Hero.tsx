import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to Our</span>
            <span className="block text-primary">Amazing Website</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create something beautiful and share it with the world. We're here to help you bring your vision to life.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};