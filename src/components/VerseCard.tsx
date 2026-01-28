import type { LucideIcon } from "lucide-react";

interface VerseCardProps {
  title: string;
  verse: string;
  text: string;
  gradient: string;
  icon: LucideIcon;
}

export const VerseCard = ({
  title,
  verse,
  text,
  gradient,
  icon: Icon,
}: VerseCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}
      ></div>

      <div className="relative p-8 h-full items-center backdrop-blur-sm bg-white/5">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
        </div>

        <p className="text-white text-lg leading-relaxed">"{text}"</p>
        <div className="mt-6 flex justify-center items-center">
          <span className="text-white/80 flex items-center font-semibold">
            {verse}
          </span>
        </div>
      </div>

      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
    </div>
  );
};
