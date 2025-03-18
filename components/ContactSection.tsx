import React, { useState } from 'react';
import { contactFormSchema, validateForm, type ContactFormData } from '@/utils/validation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

interface FormStatusState {
  submitted: boolean;
  error: boolean;
  loading: boolean;
}

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<FormStatusState>({
    submitted: false,
    error: false,
    loading: false
  });
  
  // Convert our existing schema to a zod schema
  const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    message: z.string().min(20, { message: "Message must be at least 20 characters" })
  });
  
  // Create form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });
  
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Set loading state
      setFormStatus(prev => ({ ...prev, loading: true }));
      
      // For actual Netlify deployment, this would work automatically
      // For local development, this is a placeholder
      console.log('Form submitted:', values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful submission
      setFormStatus({
        submitted: true,
        error: false,
        loading: false
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true,
        loading: false
      });
    }
  };

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
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(handleSubmit)} 
                  className="space-y-6" 
                  method="POST" 
                  name="contact" 
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-white/5 border-white/20 text-white focus-visible:ring-white/30"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="email"
                            className="bg-white/5 border-white/20 text-white focus-visible:ring-white/30"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">How would you use jewl.ai?</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            rows={5}
                            className="bg-white/5 border-white/20 text-white focus-visible:ring-white/30"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={formStatus.loading}
                    variant="default"
                  >
                    {formStatus.loading ? (
                      <>
                        <svg 
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24"
                        >
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                          ></circle>
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : "Request Access"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 