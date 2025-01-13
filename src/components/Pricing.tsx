import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

export const Pricing = () => {
  const [people, setPeople] = useState(2);
  const [mealsPerWeek, setMealsPerWeek] = useState(3);
  const [dishesPerMeal, setDishesPerMeal] = useState(2);
  const { toast } = useToast();

  const basePrice = 25; // Base price per dish
  const totalPrice = people * mealsPerWeek * dishesPerMeal * basePrice;

  const handleBookNow = () => {
    toast({
      title: "Booking Started",
      description: "We're preparing your customized chef experience!",
    });
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Calculate your perfect meal plan
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Price Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Number of People: {people}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={people}
                    onChange={(e) => setPeople(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Meals per Week: {mealsPerWeek}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={mealsPerWeek}
                    onChange={(e) => setMealsPerWeek(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Dishes per Meal: {dishesPerMeal}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={dishesPerMeal}
                    onChange={(e) => setDishesPerMeal(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-primary">
                    ${totalPrice}/week
                  </p>
                  <p className="text-sm text-gray-500">
                    ${(totalPrice / (people * mealsPerWeek)).toFixed(2)} per meal
                    per person
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle>What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full text-primary mr-3">✓</span>
                  Personalized chef matching
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full text-primary mr-3">✓</span>
                  Fresh, high-quality ingredients
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full text-primary mr-3">✓</span>
                  Kitchen cleanup included
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full text-primary mr-3">✓</span>
                  Dietary preferences respected
                </li>
              </ul>
              <Button onClick={handleBookNow} className="w-full mt-6">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};