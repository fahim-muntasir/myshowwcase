import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, country, color }) => (
  <div className={`p-6 shadow-lg ${color} border-2 h-full`}>
    <Quote className="h-6 w-6 mb-4 text-primary/70" />
    <p className="text-base mb-4 text-foreground italic leading-relaxed">{quote}</p>
    <div className="mt-auto">
      <p className="font-medium">{country}</p>
    </div>
  </div>
);

export default TestimonialCard;