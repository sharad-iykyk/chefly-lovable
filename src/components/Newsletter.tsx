import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card } from "./ui/card";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-lg border-white/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Get exclusive offers and meal tips delivered to your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 transition-colors"
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="whitespace-nowrap hover:scale-105 transition-transform"
              >
                Subscribe Now
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};