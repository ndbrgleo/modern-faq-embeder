
import { Button } from "@/components/ui/button";

const FAQHeader = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <span className="inline-block px-3 py-1 text-sm font-medium bg-just-orange/10 text-just-orange rounded-full mb-3">
        Frequently Asked Questions
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Got questions about Just?
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Find answers to common questions about our platform, pricing, and how we help companies reduce their FX costs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="bg-just-orange hover:bg-just-darkOrange text-white py-2 px-6 rounded-md transition-all">
          Book a demo
        </Button>
        <Button variant="outline" className="border-just-orange text-just-orange hover:bg-just-orange/10 py-2 px-6 rounded-md transition-all">
          Contact support
        </Button>
      </div>
    </div>
  );
};

export default FAQHeader;
