import { MapPin, Clock, Phone } from "lucide-react";

export const ChurchCard = () => {
  const address =
    "Rua General Theodorico Gonçalves Guimarães, 465, Xaxim, Curitiba, PR, 81720-070";

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="max-w-lg w-full">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br p-1 shadow-2xl">
        <div className="relative bg-slate-900/95 backdrop-blur-sm rounded-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-amber-500/20 rounded-2xl mb-4">
              <MapPin className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Venha nos Visitar!
            </h3>
            <p className="text-gray-300 text-sm">
              Você é sempre bem-vindo em nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              
              {/* Endereço */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/20 rounded-lg flex-shrink-0">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Endereço
                  </h4>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-xs leading-relaxed block hover:text-amber-400 transition"
                  >
                    Rua General Theodorico Gonçalves Guimarães, 465
                    <br />
                    Xaxim
                    <br />
                    CEP: 81720-070
                  </a>
                </div>
              </div>

              {/* Contato */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/20 rounded-lg flex-shrink-0">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Contato
                  </h4>

                 <a
  href="https://wa.me/5588988508317?text=Olá,%20gostaria%20de%20mais%20informações."
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 text-xs hover:text-amber-400 transition"
>
  (88) 98850-8317
</a>
                </div>
              </div>
            </div>

            {/* Cultos */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/20 rounded-lg flex-shrink-0">
                  <Clock className="w-4 h-4 text-amber-100" />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Cultos
                  </h4>

                  <div className="text-gray-300 text-xs space-y-1">
                    <p>Qua: 19:45</p>
                    <p>Sábado: 19:30</p>
                    <p>Domingo: 19:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center border-t border-amber-500/20 pt-6">
            <p className="text-amber-400 font-semibold text-sm mb-1">
              "Vinde a mim, todos os que estais cansados"
            </p>
            <p className="text-gray-400 text-xs">Mateus 11:28</p>
          </div>
        </div>
      </div>
    </div>
  );
};