import React from 'react';
import { FAQ_DATA } from '@/constatns/faqPage.constants';

const FAQSchema = () => {
  // Flatten all questions from all categories
  const allQuestions = FAQ_DATA.flatMap(category => 
    category.questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default FAQSchema;
