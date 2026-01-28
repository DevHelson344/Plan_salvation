import {
  Heart,
  Cross,
  BookOpen,
  Sparkles,
  HeartCrack,
  HandCoinsIcon,
} from "lucide-react";
import { VerseCard } from "./components/VerseCard";

function App() {
  const verses = [
    {
      title: "Amor de Deus",
      verse: "João 3:16",
      text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      icon: Heart,
    },
    {
      title: "Todos Pecaram",
      verse: "Romanos 3:23",
      text: "Porque todos pecaram e destituidos estão da Glória de Deus.",
      gradient: "from-black-500 via-rose-500 to-black-500",
      icon: HeartCrack,
    },
    {
      title: "Sálario do Pecado",
      verse: "Romanos 6:23",
      text: "Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus, nosso Senhor.",
      gradient: "from-pink-300 via-rose-300 to-red-300",
      icon: HandCoinsIcon,
    },
    {
      title: "Salvação",
      verse: "Romanos 10:9",
      text: "Se você confessar com a sua boca que Jesus é Senhor e crer em seu coração que Deus o ressuscitou dentre os mortos, será salvo.",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      icon: Cross,
    },
    {
      title: "Graça",
      verse: "Efésios 2:8-9",
      text: "Pois vocês são salvos pela graça, por meio da fé, e isto não vem de vocês, é dom de Deus; não por obras, para que ninguém se glorie.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: Sparkles,
    },
    {
      title: "Vida Nova",
      verse: "2 Coríntios 5:17",
      text: "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!",
      gradient: "from-green-500 via-emerald-500 to-lime-500",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Plano da Salvação
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubra o amor incondicional de Deus e o caminho para a vida eterna
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {verses.map((verse, index) => (
            <VerseCard key={index} {...verse} />
          ))}
        </div>
      </section>
      <footer className="text-center py-8 text-gray-400">
        <p>© 2026 Plano da Salvação - Compartilhe o amor de Cristo</p>
      </footer>
    </div>
  );
}

export default App;
