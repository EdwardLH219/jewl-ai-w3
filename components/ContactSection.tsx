import React, { useState } from 'react';
import { contactFormSchema, validateForm, type ContactFormData } from '@/utils/validation';
import { Card } from './ui/custom-card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/custom-button';

interface FormStatusState {
  submitted: boolean;
  error: boolean;
  loading: boolean;
  validationErrors?: Record<string, string>;
}

export default function ContactSection() {
  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatusState>({
    submitted: false,
    error: false,
    loading: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const validateContactForm = (): boolean => {
    const result = validateForm(contactFormSchema, formState);
    
    if (result.success) {
      setFormStatus(prev => ({ ...prev, validationErrors: undefined }));
      return true;
    } else {
      setFormStatus(prev => ({ ...prev, validationErrors: result.errors }));
      return false;
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    const result = validateForm(contactFormSchema, formState);
    if (!result.success) {
      setFormStatus(prev => ({ ...prev, validationErrors: result.errors }));
      return;
    }
    
    try {
      // Set loading state
      setFormStatus(prev => ({ ...prev, loading: true }));
      
      // For actual Netlify deployment, this would work automatically
      // For local development, this is a placeholder
      console.log('Form submitted:', formState);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful submission
      setFormStatus({
        submitted: true,
        error: false,
        loading: false,
        validationErrors: undefined
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
        error: true,
        loading: false,
        validationErrors: undefined
      });
    }
  };

  // Helper to check if a field has an error
  const hasError = (field: keyof ContactFormData): boolean => 
    !!formStatus.validationErrors?.[field];
  
  // Helper to get the error message for a field
  const getErrorMessage = (field: keyof ContactFormData): string => 
    formStatus.validationErrors?.[field] || '';

  if (formStatus.submitted) {
    return (
      <section id="contact" className="section-padding bg-black text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Thank you!</h2>
            <p className="text-xl text-gray-300">
              Your request for early access has been received. We'll be in touch soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

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
          <form onSubmit={handleSubmit} className="space-y-6" method="POST" name="contact" data-netlify="true">
            <Card className="rounded-lg transition-all p-8 bg-white/10 backdrop-blur-sm border border-white/20">
              <input type="hidden" name="form-name" value="contact" />
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`bg-white/5 border ${
                    hasError('name') ? 'border-red-500' : 'border-white/20'
                  } text-white`}
                  required
                  aria-invalid={hasError('name')}
                />
                {hasError('name') && (
                  <p className="text-sm text-red-500" role="alert">
                    {getErrorMessage('name')}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`bg-white/5 border ${
                    hasError('email') ? 'border-red-500' : 'border-white/20'
                  } text-white`}
                  required
                  aria-invalid={hasError('email')}
                />
                {hasError('email') && (
                  <p className="text-sm text-red-500" role="alert">
                    {getErrorMessage('email')}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  How would you use jewl.ai?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className={`bg-white/5 border ${
                    hasError('message') ? 'border-red-500' : 'border-white/20'
                  } text-white`}
                  required
                  aria-invalid={hasError('message')}
                />
                {hasError('message') && (
                  <p className="text-sm text-red-500" role="alert">
                    {getErrorMessage('message')}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={formStatus.loading}
                  isLoading={formStatus.loading}
                >
                  Request Access
                </Button>
              </div>
            </Card>
          </form>
        </div>
      </div>
    </section>
  );
} 