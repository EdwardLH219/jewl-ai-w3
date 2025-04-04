import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import Features from '@/components/Features';
import ContactSection from '@/components/ContactSection';

describe('Content Consistency Tests', () => {
  describe('Typography and Headings', () => {
    it('Home page has consistent heading typography', () => {
      render(<Home />);
      
      // Check main heading (h1)
      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toHaveTextContent('Access company jewels instantly');
      expect(mainHeading).toHaveClass('font-bold');
      
      // Check section headings (h2)
      const sectionHeadings = screen.getAllByRole('heading', { level: 2 });
      sectionHeadings.forEach(heading => {
        expect(heading).toHaveClass('mb-6');
      });
      
      // Check for descriptive paragraphs
      const homeParagraphs = screen.getAllByText(/jewl\.ai|intelligent|document/i);
      expect(homeParagraphs.length).toBeGreaterThanOrEqual(1);
    });
    
    it('Features component has consistent heading and styling', () => {
      render(<Features />);
      
      // Check component heading
      const featuresHeading = screen.getByRole('heading', { name: /key features/i, level: 2 });
      expect(featuresHeading).toHaveClass('mb-6');
      
      // Check feature card headings
      const featureHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(featureHeadings).toHaveLength(3); // Three feature cards
      
      featureHeadings.forEach(heading => {
        expect(heading).toHaveClass('text-2xl', 'font-semibold', 'leading-none', 'tracking-tight');
      });
      
      // Check for descriptive content
      const featureDescriptions = screen.getAllByText(/AI|search|document|retrieval|insight/i);
      expect(featureDescriptions.length).toBeGreaterThanOrEqual(3);
    });
    
    it('Contact section has consistent heading and form elements', () => {
      render(<ContactSection />);
      
      // Check component heading
      const contactHeading = screen.getByRole('heading', { name: /get early access/i, level: 2 });
      expect(contactHeading).toHaveClass('mb-6');
      
      // Check for form fields with consistent styling
      const formLabels = screen.getAllByRole('textbox');
      expect(formLabels.length).toBeGreaterThanOrEqual(2); // Name, Email, Message
      
      // Check for submit button with consistent styling
      const submitButton = screen.getByRole('button');
      expect(submitButton).toHaveTextContent('Request Access');
    });
  });
  
  describe('Content Structure', () => {
    it('All sections have descriptive paragraphs', () => {
      render(<Home />);
      
      // Check for descriptive paragraphs
      const allParagraphs = screen.getAllByText(/jewl\.ai|document|search|AI|transform|find|analyze/i);
      expect(allParagraphs.length).toBeGreaterThanOrEqual(1);
    });
    
    it('Features section contains feature cards', () => {
      render(<Features />);
      
      // Check for all feature headings
      const aiSearchHeading = screen.getByRole('heading', { name: /ai-powered search/i });
      const documentRetrievalHeading = screen.getByRole('heading', { name: /document retrieval/i });
      const aiInsightsHeading = screen.getByRole('heading', { name: /ai-generated insights/i });
      
      expect(aiSearchHeading).toBeInTheDocument();
      expect(documentRetrievalHeading).toBeInTheDocument();
      expect(aiInsightsHeading).toBeInTheDocument();
    });
  });
}); 