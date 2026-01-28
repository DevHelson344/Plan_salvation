import { useState } from "react";
import type { LucideIcon } from "lucide-react";

interface VerseCardProps {
  title: string;
  verse: string;
  text: string;
  description: string;
  gradient: string;
  icon: LucideIcon;
}

export const VerseCard = ({
  title,
  verse,
  text,
  description,
  gradient,
  icon: Icon,
}: VerseCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-96 cursor-pointer transition-all duration-300 hover:scale-105"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95`}
          ></div>
          <div className="relative p-6 h-full flex flex-col justify-between backdrop-blur-sm bg-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/25 rounded-xl backdrop-blur-md shadow-lg">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <span className="text-white/70 text-sm font-medium">{verse}</span>
              </div>
            </div>
            
            <div className="flex-1 flex items-center">
              <p className="text-white text-base leading-relaxed font-medium text-center w-full px-2">
                "{text}"
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-white/70 text-xs bg-white/20 px-3 py-1 rounded-full">
                Clique para saber mais
              </span>
            </div>
          </div>
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95`}
          ></div>
          <div className="relative p-6 h-full flex flex-col justify-between backdrop-blur-sm bg-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/25 rounded-xl backdrop-blur-md shadow-lg">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <span className="text-white/70 text-sm font-medium">{verse}</span>
              </div>
            </div>
            
            <div className="flex-1 flex items-center">
              <p className="text-white text-sm leading-relaxed text-justify">
                {description}
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-white/70 text-xs bg-white/20 px-3 py-1 rounded-full">
                Clique para voltar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
