import React from 'react';
import Features from '@/components/Features';
import ContactSection from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface UseCaseCardProps {
  title: string;
  description: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description }) => (
  <Card className="h-full">
    <CardContent className="pt-6">
      <CardTitle className="text-2xl font-semibold mb-4">{title}</CardTitle>
      <CardDescription className="text-gray-700 mb-6">{description}</CardDescription>
      <a href="#" className="text-black font-medium hover:underline inline-flex items-center">
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </CardContent>
  </Card>
);

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <Card className="text-center bg-transparent border-none shadow-none">
    <CardContent className="pt-6">
      <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
        {icon}
      </div>
      <CardTitle className="text-xl font-semibold mb-3">{title}</CardTitle>
      <CardDescription className="text-gray-700">{description}</CardDescription>
    </CardContent>
  </Card>
);

export default function Home() {
  const useCases = [
    {
      title: "Finding Documents Fast",
      description: "Quickly locate the exact documents you need from vast repositories. Our AI understands context, so you'll find what you're looking for even without knowing the exact filename or location."
    },
    {
      title: "Finding Text Within Documents",
      description: "Search for specific content across all your documents simultaneously. Identify key phrases, clauses, or data points without manually opening and scanning files one by one."
    },
    {
      title: "Getting Opinions on Agreements",
      description: "Gain valuable insights and analysis on contracts and legal documents. Our AI highlights important clauses, potential issues, and provides summaries to speed up review processes."
    },
    {
      title: "Analyzing Reports",
      description: "Extract meaningful data from complex reports instantly. Identify trends, summarize findings, and generate actionable insights from financial statements, research papers, or technical documents."
    }
  ];

  const whyChooseFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast",
      description: "Get results in seconds, not minutes or hours. Our optimized AI delivers quick, accurate responses."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure & Private",
      description: "Your documents never leave your secure environment. All processing happens within your boundaries."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Intelligent Insights",
      description: "Not just search results, but actionable intelligence derived from your documents."
    }
  ];

  return (
    <>
      <section id="home" className="py-32 md:py-40">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold tracking-tight mb-8">
              Leave it to jewl.ai
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
              jewl.ai is an AI-powered document assistant that bridges search and intelligence: it doesn't just find documents, it delivers insights.
            </p>
            
            <div className="relative w-full max-w-3xl mx-auto mb-10 aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1920/1080' }}>
                <iframe 
                  src="https://share.synthesia.io/embeds/videos/05ba1e6f-c240-478b-b7aa-143f5d86cca1" 
                  loading="lazy" 
                  title="Synthesia video player - Revolutionize Your Document Search with Jewl.ai" 
                  allowFullScreen 
                  allow="encrypted-media; fullscreen;" 
                  style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0, overflow: 'hidden' }}
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative inline-block group rounded-full overflow-hidden">
                <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#1DA1F2,#FF0000,#FFCC00,#99CC00,#1DA1F2)]"></span>
                <Button 
                  asChild 
                  variant="default" 
                  size="lg" 
                  className="relative m-[2px] bg-black text-white hover:bg-black hover:text-white rounded-full px-8"
                >
                  <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Get Early Access
                  </a>
                </Button>
              </div>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="relative text-black border border-black rounded-full transition-all duration-300 overflow-hidden group"
              >
                <a href="#features" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-[#1DA1F2] via-[#FF0000] via-[#FFCC00] to-[#99CC00] blur-md"></span>
                  <span className="relative z-10 text-black">Learn More</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Features />
      
      <section id="use-cases" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Use case gallery</h2>
            <p className="text-xl text-gray-700">
              Learn how jewl.ai handles real-world document challenges through interactive examples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <UseCaseCard 
                key={index}
                title={useCase.title}
                description={useCase.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">Why choose jewl.ai?</h2>
            <p className="text-xl text-gray-700">
              jewl.ai is designed with both power and simplicity in mind, giving you unmatched document intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseFeatures.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
} 