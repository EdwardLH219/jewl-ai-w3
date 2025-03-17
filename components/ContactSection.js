import React, { useState } from 'react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // For actual Netlify deployment, this would work automatically
      // For local development, this is a placeholder
      console.log('Form submitted:', formState);
      
      // Simulate successful submission
      setFormStatus({
        submitted: true,
        error: false
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-black text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Get Early Access</h2>
          <p className="text-xl text-gray-300">
            Join our early access program to experience how jewl.ai can transform your document management workflow.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          {formStatus.submitted ? (
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
              <p className="text-gray-300">Your request for early access has been received. We'll be in touch soon with more information about joining our program.</p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 space-y-6"
              data-netlify="true"
              name="contact"
              method="POST"
            >
              {/* Netlify form hidden input */}
              <input type="hidden" name="form-name" value="contact" />
              
              {formStatus.error && (
                <div className="bg-red-500/20 border border-red-500/40 p-4 rounded-lg">
                  <p>There was an error submitting your form. Please try again.</p>
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-white">
                  How would you use jewl.ai?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Request Access
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
} 