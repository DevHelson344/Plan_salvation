import {
  Heart,
  Cross,
  BookOpen,
  Sparkles,
  HeartCrack,
  HandCoinsIcon,
} from "lucide-react";
import { VerseCard } from "./components/VerseCard";
import { ChurchCard } from "./components/ChurchCard";

function App() {
  const verses = [
    {
      title: "Amor de Deus",
      verse: "João 3:16",
      text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
      description:
        "Este versículo revela o coração de Deus - Seu amor incondicional pela humanidade. Deus não apenas nos ama, mas demonstrou esse amor de forma tangível enviando Jesus Cristo. Este é o fundamento de toda a fé cristã: o amor sacrificial de Deus.",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      icon: Heart,
    },
    {
      title: "Todos Pecaram",
      verse: "Romanos 3:23",
      text: "Porque todos pecaram e destituidos estão da Glória de Deus.",
      description:
        "Este versículo estabelece uma verdade universal: todos nós falhamos em atingir o padrão perfeito de Deus. O pecado nos separa de Deus e cria uma barreira que não podemos superar por nossos próprios esforços. Reconhecer nossa condição é o primeiro passo para a salvação.",
      gradient: "from-gray-600 via-gray-500 to-gray-700",
      icon: HeartCrack,
    },
    {
      title: "Salário do Pecado",
      verse: "Romanos 6:23",
      text: "Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus, nosso Senhor.",
      description:
        "O pecado tem consequências sérias - a separação eterna de Deus. Mas este versículo também revela a esperança: enquanto merecemos a morte, Deus oferece gratuitamente a vida eterna através de Jesus Cristo. É um contraste entre o que merecemos e o que Deus oferece.",
      gradient: "from-orange-400 via-red-400 to-pink-400",
      icon: HandCoinsIcon,
    },
    {
      title: "Salvação",
      verse: "Romanos 10:9",
      text: "Se você confessar com a sua boca que Jesus é Senhor e crer em seu coração que Deus o ressuscitou dentre os mortos, será salvo.",
      description:
        "Este versículo mostra como receber a salvação: através da fé genuína em Jesus Cristo. Confessar Jesus como Senhor significa reconhecer Sua autoridade sobre nossa vida. Crer na ressurreição é aceitar que Jesus venceu a morte e tem poder para nos salvar.",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      icon: Cross,
    },
    {
      title: "Graça",
      verse: "Efésios 2:8-9",
      text: "Pois vocês são salvos pela graça, por meio da fé, e isto não vem de vocês, é dom de Deus; não por obras, para que ninguém se glorie.",
      description:
        "A salvação é um presente imerecido de Deus, não algo que conquistamos através de boas obras. A graça significa favor imerecido - Deus nos dá o que não merecemos. Isso nos mantém humildes e gratos, sabendo que nossa salvação vem inteiramente de Deus.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: Sparkles,
    },
    {
      title: "Vida Nova",
      verse: "2 Coríntios 5:17",
      text: "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!",
      description:
        "Quando aceitamos Jesus, não apenas recebemos perdão - somos completamente transformados. Tornamo-nos uma nova criação com nova identidade, novos propósitos e nova esperança. O passado não nos define mais; somos livres para viver uma vida nova em Cristo.",
      gradient: "from-green-400 via-emerald-400 to-lime-400",
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
      <div className="flex justify-center mb-16">
       <ChurchCard />
      </div>
      <footer className="text-center py-8 text-gray-400">
        <p>© 2026 Plano da Salvação - Compartilhe o amor de Cristo</p>
      </footer>
    </div>
  );
}

export default App;
