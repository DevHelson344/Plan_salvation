import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-slate-900"></div>
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-lg rounded-full mb-6">
           
          ✝️ = ❤️
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
             Olá.
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Seja Bem vindo
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Deus te ama e tem um plano maravilhoso para sua vida
          </p>
          
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl">
            Conhecer o Plano
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </div>
  );
};

export default Hero;
