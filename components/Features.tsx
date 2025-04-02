import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card className="group hover:transform hover:scale-105 transition-all duration-300" data-testid="feature-card">
    <CardHeader>
      <div className="mb-4">
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-700">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export default function Features() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "AI-powered Search",
      description: "Our intelligent search engine understands context and intent, retrieving the most relevant information instantly from any document in your repository."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Document Retrieval",
      description: "Find and access your documents quickly with smart filtering capabilities. Our system makes locating critical information efficient and painless."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI-generated Insights",
      description: "Go beyond simple document retrieval with powerful analysis tools that extract key insights, summarize content, and identify patterns across your entire document collection."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Key Features</h2>
          <p className="text-xl text-gray-700">
            Jewl leverages cutting-edge artificial intelligence to transform how you interact with your documents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 