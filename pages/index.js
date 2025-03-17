import React from 'react';
import Features from '../components/Features';
import ContactSection from '../components/ContactSection';

export default function Home() {
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
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-black/75 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors" aria-label="Play video">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium px-3 py-1 bg-black/70 rounded-full">
                0:45
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="relative inline-block group rounded-full">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 via-orange-300 via-yellow-300 via-green-400 via-cyan-400 via-blue-400 to-purple-400"></span>
                <span className="relative block btn m-[2px] bg-black text-white hover:bg-black hover:text-white rounded-full px-8">
                  Get Early Access
                </span>
              </a>
              <a href="#features" className="text-black border border-black rounded-full px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors">
                Learn More
              </a>
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
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-4">Finding Documents Fast</h3>
              <p className="text-gray-700 mb-6">Quickly locate the exact documents you need from vast repositories. Our AI understands context, so you'll find what you're looking for even without knowing the exact filename or location.</p>
              <a href="#" className="text-black font-medium hover:underline inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-4">Finding Text Within Documents</h3>
              <p className="text-gray-700 mb-6">Search for specific content across all your documents simultaneously. Identify key phrases, clauses, or data points without manually opening and scanning files one by one.</p>
              <a href="#" className="text-black font-medium hover:underline inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-4">Getting Opinions on Agreements</h3>
              <p className="text-gray-700 mb-6">Gain valuable insights and analysis on contracts and legal documents. Our AI highlights important clauses, potential issues, and provides summaries to speed up review processes.</p>
              <a href="#" className="text-black font-medium hover:underline inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-4">Analyzing Reports</h3>
              <p className="text-gray-700 mb-6">Extract meaningful data from complex reports instantly. Identify trends, summarize findings, and generate actionable insights from financial statements, research papers, or technical documents.</p>
              <a href="#" className="text-black font-medium hover:underline inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
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
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-700">Get results in seconds, not minutes or hours. Our optimized AI delivers quick, accurate responses.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-gray-700">Your documents never leave your secure environment. All processing happens within your boundaries.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Insights</h3>
              <p className="text-gray-700">Not just search results, but actionable intelligence derived from your documents.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
} 