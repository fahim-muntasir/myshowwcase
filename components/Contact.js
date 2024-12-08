"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { TiSocialSkypeOutline } from "react-icons/ti";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let's create something amazing together.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                      fahimmuntasir0909@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TiSocialSkypeOutline className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Skype</p>
                    <a href="skype:live:.cid.67d5ce38182c1db0?chat" className="text-muted-foreground hover:text-primary transition-colors">
                    live:.cid.67d5ce38182c1db0
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.linkedin.com/in/fahim-muntasir0909" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://github.com/fahim-muntasir" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5 mr-2" />
                    Twitter
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Blog
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}