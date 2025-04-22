
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
}

const Section = ({ children, className = "", id, bgColor = "bg-background" }: SectionProps) => {
  return (
    <section 
      id={id}
      className={`py-16 ${bgColor} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
