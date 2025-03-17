
export interface FAQItem {
  id: string;
  question: string;
  answer: string | JSX.Element;
  category: string;
  videoEmbed?: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is FX trading?',
    answer: 'Foreign exchange (FX) trading is the process of converting one currency into another for various reasons, usually for commerce, trading, or tourism.',
    category: 'basics'
  },
  {
    id: 'faq-2',
    question: 'How do I get started with FX trading?',
    answer: 'To start FX trading, you need to: 1) Learn the basics of forex trading, 2) Choose a reliable broker, 3) Open and fund your trading account, 4) Develop a trading strategy.',
    category: 'getting started'
  },
  {
    id: 'faq-3',
    question: 'What are the risks involved?',
    answer: 'FX trading involves significant risks including: market volatility, leverage risks, interest rate changes, and geopolitical events that can affect currency values.',
    category: 'risks'
  }
];
