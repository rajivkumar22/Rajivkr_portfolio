import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { sendEmail } from "../lib/sendgrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { InteractiveCard } from "./ui/interactive-card";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      const success = await sendEmail({
        to: "kumarrajiv12945@gmail.com",
        from: data.email,
        subject: `Portfolio Contact: ${data.subject}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        html: `
          <h3>New Portfolio Contact</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `
      });

      if (success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="text-primary">Get In</span>
            <span className="text-foreground"> Touch</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <InteractiveCard>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                      <i className="fas fa-envelope text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">kumarrajiv12945@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mt-1 group-hover:bg-secondary/30 transition-all duration-300 group-hover:scale-110">
                      <i className="fas fa-phone text-secondary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+91 7295043810</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                      <i className="fas fa-map-marker-alt text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">Madhubani, Bihar, India</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-6 text-foreground">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/rajivkumar12945" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-blue-600/20 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 text-blue-600 hover:text-white duration-300 hover:shadow-lg hover:shadow-blue-600/25"
                    >
                      <i className="fab fa-linkedin-in text-xl" />
                    </a>
                    <a 
                      href="https://github.com/rajivkumar12945" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-slate-800/20 hover:bg-slate-800 rounded-xl flex items-center justify-center transition-all hover:scale-110 text-slate-700 dark:text-slate-300 hover:text-white duration-300 hover:shadow-lg hover:shadow-slate-800/25"
                    >
                      <i className="fab fa-github text-xl" />
                    </a>
                    <a 
                      href="https://leetcode.com/u/kumarrajiv12945/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-orange-600/20 hover:bg-orange-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 text-orange-600 hover:text-white duration-300 hover:shadow-lg hover:shadow-orange-600/25"
                    >
                      <i className="fas fa-code text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <InteractiveCard>
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-300">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        {...register("name")}
                        placeholder="Your name"
                        className="bg-muted/50 border-border focus:border-primary hover:bg-muted/70 transition-all duration-300 h-12"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        {...register("email")}
                        placeholder="Your email"
                        className="bg-muted/50 border-border focus:border-primary hover:bg-muted/70 transition-all duration-300 h-12"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Input
                      {...register("subject")}
                      placeholder="Subject"
                      className="bg-muted/50 border-border focus:border-primary hover:bg-muted/70 transition-all duration-300 h-12"
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      rows={6}
                      {...register("message")}
                      placeholder="Your message"
                      className="bg-muted/50 border-border focus:border-primary hover:bg-muted/70 transition-all duration-300 resize-none"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </InteractiveCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
