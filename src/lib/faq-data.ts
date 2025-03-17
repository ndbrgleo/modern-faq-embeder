
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
    category: 'getting started',
    videoEmbed: 'https://www.youtube.com/embed/y7iVTTH5tOA'
  },
  {
    id: 'faq-2',
    question: 'How do I get started with FX trading?',
    answer: 'To start FX trading, you need to: 1) Learn the basics of forex trading, 2) Choose a reliable broker, 3) Open and fund your trading account, 4) Develop a trading strategy.',
    category: 'basics',
    videoEmbed: 'https://www.youtube.com/embed/NhFlqFVBmxc'
  },
  {
    id: 'faq-3',
    question: 'What are the risks involved?',
    answer: 'FX trading involves significant risks including: market volatility, leverage risks, interest rate changes, and geopolitical events that can affect currency values.',
    category: 'risks',
    videoEmbed: 'https://www.youtube.com/embed/u6pxQxfUJxY'
  },
  {
    id: 'faq-4',
    question: 'What is leverage in trading?',
    answer: 'Leverage allows traders to control larger positions with a smaller amount of capital. For example, 1:100 leverage means you can trade positions worth $100 for every $1 in your account.',
    category: 'advanced',
    videoEmbed: 'https://www.youtube.com/embed/QF0vPYGhXYo'
  },
  {
    id: 'faq-5',
    question: 'How to analyze market trends?',
    answer: 'Market analysis involves technical analysis (charts, indicators) and fundamental analysis (economic news, events). Both are crucial for informed trading decisions.',
    category: 'analysis',
    videoEmbed: 'https://www.youtube.com/embed/Uq5JnknTKJY'
  },
  {
    id: 'faq-6',
    question: 'What are trading strategies?',
    answer: 'Trading strategies include day trading, swing trading, position trading, and scalping. Each has its own timeframe and risk/reward profile.',
    category: 'strategies',
    videoEmbed: 'https://www.youtube.com/embed/dVzJ6bTbS88'
  }
];
