import React from 'react';

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Key Features</h2>
          <p className="text-xl text-gray-700">
            jewl.ai leverages cutting-edge artificial intelligence to transform how you interact with your documents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card p-8 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">AI-powered Search</h3>
            <p className="text-gray-700">
              Our intelligent search engine understands context and intent, retrieving the most relevant information instantly from any document in your repository.
            </p>
          </div>
          
          <div className="card p-8 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Document Retrieval</h3>
            <p className="text-gray-700">
              Find and access your documents quickly with smart filtering capabilities. Our system makes locating critical information efficient and painless.
            </p>
          </div>
          
          <div className="card p-8 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">AI-generated Insights</h3>
            <p className="text-gray-700">
              Go beyond simple document retrieval with powerful analysis tools that extract key insights, summarize content, and identify patterns across your entire document collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 