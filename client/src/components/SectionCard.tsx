import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SectionCardProps {
  title: string;
  description: string;
  items: Array<{ label: string; link: string }>;
  icon?: React.ReactNode;
  bgColor?: string;
  accentColor?: string;
}

export function SectionCard({
  title,
  description,
  items,
  icon,
  bgColor = "bg-blue-50",
  accentColor = "from-blue-600 to-blue-700",
}: SectionCardProps) {
  return (
    <div className={`${bgColor} rounded-2xl p-8 md:p-12`}>
      <div className="flex items-start gap-4 mb-6">
        {icon && <div className="text-4xl">{icon}</div>}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {item.label}
              </span>
              <ArrowRight
                size={20}
                className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

interface FeatureGridProps {
  title: string;
  description?: string;
  features: Array<{
    icon?: React.ReactNode;
    title: string;
    description: string;
  }>;
}

export function FeatureGrid({ title, description, features }: FeatureGridProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {description && <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">{description}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
            {feature.icon && <div className="text-4xl mb-4">{feature.icon}</div>}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CTACardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgGradient?: string;
  textColor?: string;
}

export function CTACard({
  title,
  description,
  buttonText,
  buttonLink,
  bgGradient = "from-blue-600 to-blue-700",
  textColor = "text-white",
}: CTACardProps) {
  return (
    <div className={`bg-gradient-to-r ${bgGradient} rounded-2xl p-8 md:p-12 text-center ${textColor}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">{description}</p>
      <a href={buttonLink} target="_blank" rel="noopener noreferrer">
        <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold">
          {buttonText}
        </Button>
      </a>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function FAQItem({ question, answer, isOpen = false, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-left">{question}</span>
        <span className={`text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}
