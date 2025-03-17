
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
    question: 'What determines fair pricing in FX trading?',
    answer: 'Fair pricing in FX trading is driven by market liquidity, supply and demand, and interest rate differentials. Major financial institutions and liquidity       providers influence pricing through bid/ask spreads, while central bank policies and macroeconomic events create fluctuations. Transparent pricing comes from           competitive market forces, but traders should always compare quotes across providers to ensure minimal hidden costs.',
    category: 'FAQ',  // Change this to whatever category name you want
    videoEmbed: ''
  },
  {
    id: 'faq-2',
    question: 'How To Upload Trade Confirmations?',
    answer: 'To upload your trade confirmation files, log in and navigate to the top right corner of any screen, where you’ll find a green upload button with an arrow.       Click on it to begin. You can either drag and drop your files or select ‘Choose from computer’ to browse your recent files. Once you’ve selected the files, click       ‘Open’, then ‘Upload All’ to complete the process.',
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/NjifB4RjvyQ'
  },
  {
    id: 'faq-3',
    question: 'How do I get started with FX trading?',
    answer: 'To start FX trading, you need to: 1) Learn the basics of forex trading, 2) Choose a reliable broker, 3) Open and fund your trading account, 4) Develop a trading strategy.',
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/NhFlqFVBmxc'
  },
  {
    id: 'faq-4',
    question: 'How do I get started with FX trading?',
    answer: 'To start FX trading, you need to: 1) Learn the basics of forex trading, 2) Choose a reliable broker, 3) Open and fund your trading account, 4) Develop a trading strategy.',
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/NhFlqFVBmxc'
  },
  {
    id: 'faq-5',
    question: 'How do I get started with FX trading?',
    answer: 'To start FX trading, you need to: 1) Learn the basics of forex trading, 2) Choose a reliable broker, 3) Open and fund your trading account, 4) Develop a trading strategy.',
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/NhFlqFVBmxc'
  },
  {
    id: 'faq-6',
    question: 'How do I get started with FX trading?',
    answer: 'To start FX trading, you need to: 1) Learn the basics of forex trading, 2) Choose a reliable broker, 3) Open and fund your trading account, 4) Develop a trading strategy.',
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/NhFlqFVBmxc'
  },
  {
    id: 'faq-7',
    question: 'How do I get started with FX trading?',
    answer: 'To start FX trading, you need to: 1) Learn the basics of forex trading, 2) Choose a reliable broker, 3) Open and fund your trading account, 4) Develop a trading strategy.',
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/NhFlqFVBmxc'
  },
  {
    id: 'faq-8',
    question: 'How do I get started with FX trading?',
    answer: 'To start FX trading, you need to: 1) Learn the basics of forex trading, 2) Choose a reliable broker, 3) Open and fund your trading account, 4) Develop a trading strategy.',
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/NhFlqFVBmxc'
  },
  {
    id: 'faq-9',
    question: 'How do I get started with FX trading?',
    answer: 'To start FX trading, you need to: 1) Learn the basics of forex trading, 2) Choose a reliable broker, 3) Open and fund your trading account, 4) Develop a trading strategy.',
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/NhFlqFVBmxc'
  },
  {
    id: 'faq-10',
    question: 'How do I get started with FX trading?',
    answer: 'To start FX trading, you need to: 1) Learn the basics of forex trading, 2) Choose a reliable broker, 3) Open and fund your trading account, 4) Develop a trading strategy.',
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/NhFlqFVBmxc'
  },
  {
    id: 'faq-11',
    question: 'How does the FX market operate?',
    answer: 'The FX market is decentralized or "over-the-counter" market, where trading occurs directly between two parties rather than via centralized exchanges. It       is the largest financial market in the world, accounting for over $5 trillion in daily trading volume.In a typical corporate FX transaction, a contract is made to      purchase one currency and sell another at a set rate. This contract is subsequently "settled" by physically delivering the currencies between parties.The key           participants of the FX market are international banks, who act as "market makers" and trade significant volumes of currency, driving global price movements.            Transactions between these major banks are referred to as the "interbank market", and represents the most efficient market (best pricing with smallest spread) for      FX.The FX market operates 24 hours a day, except weekends. Trading may also be suspended in individual markets on public holidays, which can impact liquidity for      example, relatively little volume is trade on Christmas Day and New Year\'s Day).',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-12',
    question: 'What are bid and ask?',
    answer: 'The "bid" price is what the dealer is willing to pay for currency if the customer is selling, while the “ask” price is how much the dealer wants for a         currency if the customer is buying. The ask price is also referred to as the "offer" price.The bid price is lower than the ask price, because you cannot sell           currency at a higher price than you buy it. The difference between the bid and ask prices is referred to as the "spread".',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-13',
    question: 'What is liquidity?',
    answer: 'Liquidity refers to the level of trading activity for a given currency pair at a point in time. High liquidity helps keep the market stable and avoid          price volatility, and keeps spread tighter and hence pricing more favourable. It is therefore often more risky to trade at times when liquidity is reduced, such as     major market holidays.',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-14',
    question: 'What is a market maker?',
    answer: 'A "market maker" quotes prices at which currency can be bought and sold to the counterparties (other organizations) with which they have a relationship.       Specifically, what identifies a market maker is that they always quote both bid and ask prices for a set of currencies.It is effectively the network of market          makers around the world which drive foreign exchange pricing. Large international banks typically have market makers for every major currency pair.Market makers        make money in two ways: firstly, through the bid/ask spread on the currencies they trade, and secondly (optionally) by taking positions themselves in the market by     trading with other banks.',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-15',
    question: 'How are prices set in the FX market?',
    answer: 'FX pricing is driven by market makers and due to the decentralized nature of the market, there is no single "source of truth" for pricing. In fact,            pricing available to a trade is highly dependent on the counterparties with which they have a relationship.Typically market makers will consider several factors in     setting pricing:1) Rates being quoted by other market makers - it is always desirable to attract FX "flow" (transaction volume) by offering competitive pricing.2)      Positions they have taken in the market - for example, if they wish to adjust their risk profile they may offer pricing which enables them to rebalance their           position.3) Their prediction of future direction for an exchange  rate.',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-16',
    question: 'How does the size of a trade affect the price?',
    answer: 'When market makers quote bid and ask pricing, they typically accompany this with a "volume". This is the size of trade for which the price will be             honoured. At any one time, there may be multiple quotes in the market with different pricing at different volumes. This means that depending on the size of a           trade, different prices may be available. The best pricing in the market ("top of book") may only be available for smaller volumes, and larger trades may be            executed at a price further down the order book.',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-17',
    question: 'How do banks make money on FX',
    answer: 'Banks make money on FX operations in several ways. The capital markets departments typically make money through market making and trading operations -         collecting bid/ask spread and taking positions in the market.However, banks also generate profit through the corporate FX services they provide. Typically, the FX      sales desk which quotes pricing to corporate customers will apply a margin or mark-up to the prices at which the bank\'s traders are dealing. This margin is not        disclosed, and can differ wildly from customer to customer ("price discrimination").Just FX Analytics uses interbank top-of-book prices usually accessible only to      professional traders to benchmark corporate FX rates and calculate this markup.',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-18',
    question: 'What is a SPOT contract?',
    answer: 'A spot FX transaction is the “simplest” trade and refers to an agreement between two parties to exchange currencies at an agreed price (the “spot rate”).      The idea of a spot trade is that it is as close as is often practical to an “immediate” exchange of  currencies, allowing for some time to physically deliver the       currency (“settle" the trade).Spot transactions are typically settled (that is, funds are transferred between parties) two business days after the trade date           (“T+2”). However, there are exceptions to this convention: most notably, USD/CAD settles on T+1.Spot trades are the most common type of FX trade, and account for       more than 2 trillion USD of daily transactions.',
    category: 'FX Instruments',
    videoEmbed: 'https://www.youtube.com/embed/dVzJ6bTbS88'
  },
  {
    id: 'faq-19',
    question: 'What are trading strategies?',
    answer: 'Trading strategies include day trading, swing trading, position trading, and scalping. Each has its own timeframe and risk/reward profile.',
    category: 'FX Instruments',
    videoEmbed: 'https://www.youtube.com/embed/dVzJ6bTbS88'
  },
  {
    id: 'faq-20',
    question: 'What are trading strategies?',
    answer: 'Trading strategies include day trading, swing trading, position trading, and scalping. Each has its own timeframe and risk/reward profile.',
    category: 'FX Instruments',
    videoEmbed: 'https://www.youtube.com/embed/dVzJ6bTbS88'
  },
  {
    id: 'faq-21',
    question: 'What are tenors?',
    answer: `Tenors refer to the common standard contract durations for forward trades.

  **Fixed FX tenors**
  **Pre-Spot** ("short-dated" forwards)
  - **TOD** (Today)
  - **TOM** (Tomorrow)

  **Post-Spot**
  - **SN** (Spot Next) - this is 1 day after a spot
  - 1 WEEK, 2 WEEK, 3 WEEK - number of weeks after the spot date
  - 1 MONTH, 2 MONTH, etc. - number of months after the spot date
  - 1 YEAR, 2 YEAR, 5 YEAR - number of years after the spot date

  **Calculating Fixed Tenors**
  If the date of a fixed tenor for a trade falls on a market holiday for either currency in the pair, the date is typically moved to the next business day.

  **Broken Tenors**
  A Broken Tenor is a forward contract that is for a time period that falls in between the fixed FX tenors described above.`,

    category: 'FX Instruments',
    videoEmbed: ''
  },
  {
    id: 'faq-22',
    question: 'What are trading strategies?',
    answer: 'Trading strategies include day trading, swing trading, position trading, and scalping. Each has its own timeframe and risk/reward profile.',
    category: 'FX Courses',
    videoEmbed: 'https://www.youtube.com/embed/dVzJ6bTbS88'
  },
  {
    id: 'faq-23',
    question: 'What are trading strategies?',
    answer: 'Trading strategies include day trading, swing trading, position trading, and scalping. Each has its own timeframe and risk/reward profile.',
    category: 'Guides (Playbooks)',
    videoEmbed: 'https://www.youtube.com/embed/dVzJ6bTbS88'
  }
];
