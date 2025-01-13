import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the service work?",
    answer:
      "Our service connects you with professional chefs who come to your home to prepare fresh, delicious meals. You can choose your preferred cuisine, dietary requirements, and schedule.",
  },
  {
    question: "Is the service safe and vetted?",
    answer:
      "Yes, all our chefs undergo thorough background checks and are professionally certified. They follow strict safety and hygiene protocols.",
  },
  {
    question: "What is included in the subscription?",
    answer:
      "Your subscription includes meal planning, grocery shopping, cooking, and kitchen cleanup. The chef brings all necessary ingredients and equipment.",
  },
  {
    question: "Can I change or cancel my booking?",
    answer:
      "Yes, you can modify or cancel your booking up to 24 hours before the scheduled service without any penalty.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Absolutely! Our chefs can accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergies.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about our service
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};