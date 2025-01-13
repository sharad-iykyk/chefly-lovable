import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

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
    <section className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-2 text-lg text-white/80">
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
              className="flex-1 px-4 py-2 rounded-md border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
            />
            <Button
              type="submit"
              variant="secondary"
              className="whitespace-nowrap"
            >
              Subscribe Now
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};