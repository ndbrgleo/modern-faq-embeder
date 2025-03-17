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
  
  // Extract unique categories from faqItems
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

  // Group FAQ items by category for the two-column layout
  const fxMarketMechanics = filteredFAQs.filter(item => item.category === "market mechanics");
  const fxInstruments = filteredFAQs.filter(item => item.category === "instruments");
  const otherFaqs = filteredFAQs.filter(item => 
    item.category !== "market mechanics" && item.category !== "instruments"
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - FX Market Mechanics */}
          {(activeCategory === "all" || activeCategory === "market mechanics") && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h2 className="text-xl font-bold text-gray-900">FX Market Mechanics</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {fxMarketMechanics.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="faq-item border border-gray-200 rounded-lg overflow-hidden bg-white px-0 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                      <div className="text-left">
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
            </div>
          )}

          {/* Right column - FX Instruments */}
          {(activeCategory === "all" || activeCategory === "instruments") && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h2 className="text-xl font-bold text-gray-900">FX Instruments</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {fxInstruments.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="faq-item border border-gray-200 rounded-lg overflow-hidden bg-white px-0 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                      <div className="text-left">
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
            </div>
          )}
          
          {/* Other FAQs if not in the categories above */}
          {otherFaqs.length > 0 && (
            <div className={`space-y-6 ${activeCategory !== "all" ? "lg:col-span-2" : ""}`}>
              {activeCategory !== "all" && (
                <div className="border-b border-gray-200 pb-2">
                  <h2 className="text-xl font-bold text-gray-900">{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</h2>
                </div>
              )}
              <Accordion type="single" collapsible className="space-y-4">
                {otherFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="faq-item border border-gray-200 rounded-lg overflow-hidden bg-white px-0 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                      <div className="text-left">
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const faqItems: FAQItem[] = [
  {
    id: "1",
    category: "market mechanics",
    question: "How does the FX market operate?",
    answer: (
      <>
        <p>The FX market is decentralized or "over-the-counter" market, where trading occurs directly between two parties rather than via centralized exchanges. It is the largest financial market in the world, accounting for over $5 trillion in daily trading volume.</p>
        <p>In a typical corporate FX transaction, a contract is made to purchase one currency and sell another at a set rate. This contract is subsequently "settled" by physically delivering the currencies between parties.</p>
        <p>The key participants of the FX market are international banks, who act as "market makers" and trade significant volumes of currency, driving global price movements. Transactions between these major banks are referred to as the "interbank market", and represents the most efficient market (best pricing with smallest spread) for FX.</p>
        <p>The FX market operates 24 hours a day, except weekends. Trading may also be suspended in individual markets on public holidays, which can impact liquidity (for example, relatively little volume is trade on Christmas Day and New Year's Day).</p>
      </>
    ),
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "2",
    category: "market mechanics",
    question: "What are bid and ask?",
    answer: (
      <>
        <p>The "bid" price is what the dealer is willing to pay for currency if the customer is selling, while the "ask" price is how much the dealer wants for a currency if the customer is buying. The ask price is also referred to as the "offer" price.</p>
        <p>The bid price is lower than the ask price, because you cannot sell currency at a higher price than you buy it. The difference between the bid and ask prices is referred to as the "spread".</p>
      </>
    ),
  },
  {
    id: "3",
    category: "market mechanics",
    question: "What is liquidity?",
    answer: (
      <>
        <p>Liquidity refers to the level of trading activity for a given currency pair at a point in time. High liquidity helps keep the market stable and avoid price volatility, and keeps spread tighter and hence pricing more favourable.</p>
        <p>It is therefore often more risky to trade at times when liquidity is reduced, such as major market holidays.</p>
      </>
    ),
  },
  {
    id: "4",
    category: "market mechanics",
    question: "What is a market maker?",
    answer: (
      <>
        <p>A "market maker" quotes prices at which currency can be bought and sold to the counterparties (other organizations) with which they have a relationship. Specifically, what identifies a market maker is that they always quote both bid and ask prices for a set of currencies.</p>
        <p>It is effectively the network of market makers around the world which drive foreign exchange pricing. Large international banks typically have market makers for every major currency pair.</p>
        <p>Market makers make money in two ways: firstly, through the bid/ask spread on the currencies they trade, and secondly (optionally) by taking positions themselves in the market by trading with other banks.</p>
      </>
    ),
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "5",
    category: "market mechanics",
    question: "How are prices set in the FX market?",
    answer: (
      <>
        <p>FX pricing is not set by any central authority, and due to the decentralized nature of the market, there is no single "source of truth" for pricing. In fact, pricing available to a trade is highly dependent on the counterparties with which they interact.</p>
        <p>As described above, market makers continuously quote bid and ask prices for the currencies they trade, and these quotes will fluctuate throughout the day as a result of trading volumes and the global balance of supply and demand for the currencies.</p>
        <p>Increased volatility in pricing is generally accompanied by wider spreads (the difference between bid and ask prices), as market makers seek to manage the additional risk associated with the volatile prices.</p>
      </>
    ),
  },
  {
    id: "6",
    category: "market mechanics",
    question: "How does the size of a trade affect the price?",
    answer: (
      <>
        <p>The size of a trade can have a significant impact on the price, depending on market conditions. For example, a large trade in a relatively illiquid currency pair can significantly move the market price, resulting in a less favorable rate for the customer.</p>
        <p>Market makers generally offer better pricing for larger transactions, as the fixed costs of processing a trade are spread over a greater amount. However, very large trades may get worse pricing due to the market impact and risk factors described above.</p>
        <p>This relationship between trade size and pricing is one of the reasons why organizations with high FX volumes can benefit from using a platform like Just to track and optimize their currency transactions.</p>
      </>
    ),
  },
  {
    id: "7",
    category: "market mechanics",
    question: "How do banks make money on FX?",
    answer: (
      <>
        <p>Banks make money on FX transactions primarily in two ways:</p>
        <ol className="list-decimal pl-5 space-y-1 mt-2">
          <li><strong>The Spread:</strong> The difference between the bid (buying) and ask (selling) prices. This is effectively the transaction fee built into every FX trade.</li>
          <li><strong>Proprietary Trading:</strong> Some banks use their knowledge of market flows and client positioning to take proprietary positions in currency markets.</li>
        </ol>
        <p>Additionally, banks may charge explicit fees for certain FX services, particularly for retail or small business customers. Corporate clients often negotiate FX fee structures based on their trading volume.</p>
      </>
    ),
  },
  {
    id: "8",
    category: "instruments",
    question: "What is a SPOT contract?",
    answer: (
      <>
        <p>A SPOT contract is an agreement to exchange currencies at the current market rate, with settlement typically occurring within two business days of the trade date.</p>
        <p>The term "SPOT" refers to "Single Payment Option Trading" or more colloquially, trading "on the spot" (i.e., at the current market price).</p>
        <p>SPOT transactions represent the most basic and common form of foreign exchange trading, and form the foundation of the FX market. The SPOT rate is also used as the reference point for calculating forward rates.</p>
      </>
    ),
  },
  {
    id: "9",
    category: "instruments",
    question: "What is a FORWARD contract?",
    answer: (
      <>
        <p>A FORWARD contract is an agreement to exchange currencies at a predetermined rate on a specific future date.</p>
        <p>Unlike SPOT contracts, which settle within two business days, FORWARD contracts can have settlement dates ranging from a few days to several years in the future.</p>
        <p>The FORWARD rate is calculated based on the SPOT rate, adjusted for the interest rate differential between the two currencies over the time period of the contract. This adjustment is known as the "forward points" or "swap points."</p>
        <p>FORWARD contracts are commonly used by companies to hedge against currency risk in future transactions or balance sheet exposures.</p>
      </>
    ),
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "10",
    category: "instruments",
    question: "What is a SWAP?",
    answer: (
      <>
        <p>In the FX market, a SWAP involves the simultaneous purchase and sale of identical amounts of one currency for another with two different value dates.</p>
        <p>A typical FX SWAP consists of a spot transaction in one direction and a forward transaction in the opposite direction. For example, buying USD/JPY spot and simultaneously selling the same amount USD/JPY forward.</p>
        <p>SWAPS are often used for rolling forward positions, managing liquidity, or changing the currency exposure of an investment without incurring foreign exchange risk.</p>
        <p>The price of a SWAP is expressed in forward points, which represent the interest rate differential between the two currencies.</p>
      </>
    ),
  },
  {
    id: "11",
    category: "instruments",
    question: "What are tenors?",
    answer: (
      <>
        <p>"Tenor" in FX trading refers to the duration or time period until the settlement of a contract.</p>
        <p>Common FX tenors include:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>ON (Overnight): Settlement the next business day</li>
          <li>TN (Tomorrow Next): Settlement in two business days</li>
          <li>Spot: Settlement in typically two business days</li>
          <li>1W, 2W: One week, two weeks from the spot date</li>
          <li>1M, 2M, 3M, 6M: One month, two months, etc. from the spot date</li>
          <li>1Y, 2Y, etc.: One year, two years, etc. from the spot date</li>
        </ul>
        <p>Different tenors may have different liquidity profiles and pricing considerations. Typically, shorter tenors (up to 1Y) are the most liquid and have the tightest spreads.</p>
      </>
    ),
  },
  {
    id: "12",
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
  },
  {
    id: "13",
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
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
];

export default FAQAccordion;
