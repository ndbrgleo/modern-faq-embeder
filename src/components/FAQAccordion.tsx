
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: React.ReactNode;
  videoEmbed?: string;
}

const FAQAccordion = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>(faqItems);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categories = ["all", ...Array.from(new Set(faqItems.map(item => item.category)))];

  useEffect(() => {
    const filtered = faqItems.filter(item => {
      const matchesSearch = 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredFAQs(filtered);
  }, [searchTerm, activeCategory]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input 
          type="text" 
          placeholder="Search FAQs..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 py-6 text-base transition-all duration-200 focus:ring-2 focus:ring-just-orange focus:border-just-orange"
        />
      </div>
      
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`whitespace-nowrap ${
                activeCategory === category 
                  ? "bg-just-orange hover:bg-just-darkOrange text-white" 
                  : "hover:text-just-orange hover:border-just-orange"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </div>
      
      {filteredFAQs.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">No results found</h3>
          <p className="mt-2 text-gray-600">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      ) : (
        <Accordion type="single" collapsible className="space-y-4">
          {filteredFAQs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="faq-item border border-gray-200 rounded-lg overflow-hidden bg-white px-0"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                <div className="text-left">
                  <span className="question-chip">{faq.category}</span>
                  <h3 className="font-medium text-gray-900 group-hover:text-just-orange transition-colors">
                    {faq.question}
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-2 pb-6">
                <div className="prose prose-sm max-w-none faq-content">
                  {faq.answer}
                  
                  {faq.videoEmbed && (
                    <div className="mt-4">
                      <iframe
                        src={faq.videoEmbed}
                        title={`Video for ${faq.question}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

const faqItems: FAQItem[] = [
  {
    id: "1",
    category: "pricing",
    question: "How can Just help reduce my FX costs?",
    answer: (
      <>
        <p>Just Technologies' platform helps companies reduce their FX costs in several ways:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Providing complete transparency into your bank's margins</li>
          <li>Benchmarking your rates against what similar companies are paying</li>
          <li>Enabling you to negotiate better rates with data-backed insights</li>
          <li>Automating the tracking and analysis of all your FX trades</li>
          <li>Identifying patterns and outliers in your FX costs</li>
        </ul>
        <p className="mt-2">Our clients typically achieve 8-15x ROI on their investment in our platform.</p>
      </>
    ),
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "2",
    category: "platform",
    question: "What is the Just FX Analytics platform?",
    answer: (
      <>
        <p>The Just FX Analytics platform is a comprehensive solution that helps companies:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Track and analyze all FX trades across multiple banks</li>
          <li>Reveal hidden margins charged by banks</li>
          <li>Compare rates across providers</li>
          <li>Generate detailed reports for management and treasury</li>
          <li>Optimize FX strategy with data-driven insights</li>
        </ul>
        <p className="mt-2">The platform integrates seamlessly with your existing systems and provides real-time analytics through an intuitive dashboard.</p>
      </>
    ),
  },
  {
    id: "3",
    category: "integration",
    question: "How does Just integrate with my existing systems?",
    answer: (
      <>
        <p>Just offers several integration options to work seamlessly with your existing systems:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>API connections to your banking platforms</li>
          <li>Secure file upload for trade confirmations and reports</li>
          <li>Direct integrations with major ERP systems</li>
          <li>SWIFT message processing</li>
          <li>Custom integration solutions for unique requirements</li>
        </ul>
        <p className="mt-2">Our implementation team handles the entire integration process, typically completing it within 2-4 weeks.</p>
      </>
    ),
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "4",
    category: "security",
    question: "How does Just ensure the security of my financial data?",
    answer: (
      <>
        <p>Security is our top priority. Just Technologies implements multiple layers of protection:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>SOC 2 Type II certified infrastructure</li>
          <li>End-to-end encryption for all data</li>
          <li>Regular penetration testing by third-party security firms</li>
          <li>Granular user permissions and access controls</li>
          <li>Compliant with GDPR, CCPA, and other relevant regulations</li>
        </ul>
        <p className="mt-2">We never store or access your banking credentials, and all sensitive data is encrypted both in transit and at rest.</p>
      </>
    ),
  },
  {
    id: "5",
    category: "pricing",
    question: "What is the pricing model for Just's services?",
    answer: (
      <>
        <p>Just offers flexible pricing models to suit different company sizes and needs:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Subscription-based pricing with annual or multi-year options</li>
          <li>Pricing tiers based on annual FX volume</li>
          <li>Enterprise plans for companies with complex requirements</li>
          <li>Success-based components available (fees based on cost savings achieved)</li>
        </ul>
        <p className="mt-2">For a detailed quote tailored to your company's specific needs, please contact our sales team to schedule a demo.</p>
      </>
    ),
  },
  {
    id: "6",
    category: "platform",
    question: "Can Just help with other treasury operations besides FX?",
    answer: (
      <>
        <p>Yes, Just's platform extends beyond just FX analytics:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Interest Rate Analytics for optimizing debt and investment portfolios</li>
          <li>Commodities Analytics for companies with exposure to commodity prices</li>
          <li>Liquidity Connect for streamlining cash management</li>
          <li>Risk management tools for comprehensive financial risk assessment</li>
        </ul>
        <p className="mt-2">Our platform provides a holistic view of your financial operations, helping treasury teams make more informed decisions across multiple areas.</p>
      </>
    ),
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "7",
    category: "onboarding",
    question: "What does the implementation process look like?",
    answer: (
      <>
        <p>Our implementation process is designed to be efficient and minimally disruptive:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Initial consultation to understand your specific needs</li>
          <li>Configuration of the platform to match your requirements</li>
          <li>Integration with your existing systems</li>
          <li>Historical data import and analysis</li>
          <li>User training and onboarding</li>
          <li>Ongoing support and optimization</li>
        </ul>
        <p className="mt-2">Most clients are fully operational within 2-4 weeks, with minimal time required from your team.</p>
      </>
    ),
  },
  {
    id: "8",
    category: "support",
    question: "What kind of customer support does Just provide?",
    answer: (
      <>
        <p>Just offers comprehensive support to ensure your success:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Dedicated customer success manager for each client</li>
          <li>24/7 technical support for critical issues</li>
          <li>Regular check-ins and quarterly business reviews</li>
          <li>Ongoing training and educational resources</li>
          <li>User community for sharing best practices</li>
        </ul>
        <p className="mt-2">Our support team includes treasury experts who understand your business challenges and can provide strategic advice beyond just technical support.</p>
      </>
    ),
  }
];

export default FAQAccordion;
