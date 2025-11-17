"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For static deployment, integrate with a third-party service like Formspree or Netlify Forms.
    // Example: window.open('https://formspree.io/f/your-form-id', '_blank');
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto p-4 py-12 animate-fade-in-up">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-foreground animate-fade-in-down">Contact Me</h1>
      <p className="text-base sm:text-lg text-muted-foreground text-center max-w-xl mx-auto mb-10 sm:mb-12 animate-fade-in-up px-4">
        Have a question, a project idea, or just want to say hello? Feel free to reach out!
      </p>
      <div className="max-w-xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-lg border border-border animate-fade-in-up">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-input border-border text-foreground focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-input border-border text-foreground focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="bg-input border-border text-foreground focus:ring-primary focus:border-primary"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
