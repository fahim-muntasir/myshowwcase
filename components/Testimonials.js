'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "He is an amazing professional and knows his work well. He understood my requirements to the best level and ensured all the work is done up to the mark. Highly recommend him for all your MERN stack-related projects. Thanks for the great work",
      country: "Pakistan",
      color: "bg-emerald-100/50 border-emerald-300",
    },
    {
      id: 4,
      quote: "Outstanding performance, I think my requirement (a react app fetch data from 2 external servers got CORS problem) is pretty difficult and he has solved beautifully. Very fast, friendly, professionally, he deserves more attention. Definitely will come back with project in the future.",
      country: "Vietnam",
      color: "bg-indigo-100/50 border-indigo-300",
    },
    {
      id: 6,
      quote: "Thank You for all the hard work. There were quite some issues with the requirements and existing project, but he handled it all so well and with patience. Appreciate your help. Thanks again.",
      country: "Pakistan",
      color: "bg-teal-100/50 border-teal-300",
    },
    {
      id: 7,
      quote: "It was an amazing experience of working with this seller. He knows his work well and pays attention to the requirements and expectations of the client.",
      country: "Pakistan",
      color: "bg-sky-100/50 border-sky-300",
    },
    {
      id: 5,
      quote: "Very very flexible and understanding guy, He adapted and did exactly what satisfied me.....surely working with him more",
      country: "United States",
      color: "bg-yellow-100/50 border-yellow-300",
    },
    {
      id: 2,
      quote: "Amazing work. Was able to resolve my issue very quickly",
      country: "United States",
      color: "bg-rose-100/50 border-rose-300",
    },
    {
      id: 3,
      quote: "well done. the seller tried his best to do the task",
      country: "Netherlands",
      color: "bg-purple-100/50 border-purple-300",
    },
    {
      id: 8,
      quote: "Amazing dev! Explained the problem and guided through the fixes",
      country: "United States",
      color: "bg-orange-100/50 border-orange-300",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(2);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCount >= testimonials.length
        ? 0
        : prevIndex + 1
    );
  }, [visibleCount, testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, testimonials.length - visibleCount)
        : prevIndex - 1
    );
  }, [visibleCount, testimonials.length]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="reviews" className="pt-20 mt-20 mb-20 container mx-auto xl:max-w-screen-lg">
      <div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg max-w-2xl mx-auto">
            I&apos;m honored to have worked with clients from around the world on the marketplace.
            Here are some of their kind words and feedback about my work and dedication.
          </p>
        </div>


        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex w-full transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 xl:w-1/2 flex-shrink-0 p-4"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="flex gap-2">
            {[...Array(Math.ceil(testimonials.length / visibleCount))].map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${i === Math.floor(currentIndex / visibleCount) ? 'bg-primary' : 'bg-muted'
                  }`}
                onClick={() => setCurrentIndex(i * visibleCount)}
                aria-label={`Go to testimonial group ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;