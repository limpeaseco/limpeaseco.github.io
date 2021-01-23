import Contato from "../pages/Contato";
import Home from "../pages/Home";

import sofa from "../assets/images/sofa.jpg";
import imper from "../assets/images/impermeabilizacao.jpg";
import tapete from "../assets/images/tapete.jpg";
import cortina from "../assets/images/cortina.jpg";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/contato",
    component: Contato,
  },
];

export const servicos = [
  {
    id: 1,
    titulo: "HIGIENIZAÇÃO DE ESTOFADOS",
    texto:
      "É o procedimento realizado nos estofados (higienização de sofás, poltronas, colchões, etc.) através de uma limpeza profunda contendo produtos bactericidas, antiácaros , alvejante e sempre deixando um aroma agradável e proporcionando mais saúde e conforto.",
    texto2: "Sofá, colchão, cadeira, poltrona, puff, cabeceira, recamier, pelúcia, bebê conforto, cadeirinha infantil, e muito mais.",
    palavrasChave: ["pufe", "colxão", "limpeza", "lavagem"],
    imgWeb: sofa,
  },
  {
    id: 2,
    titulo: "IMPERMEABILIZAÇÃO",
    texto:
      "A impermeabilização é aplicação de produto específico que permite o fechamento das tramas do tecido. Esse serviço irá proteger seu sofá (ou outro estofado) contra derramamento de líquidos, gerando repelência e mantendo o estofado mais limpo, prolongando sua vida útil.",
    palavrasChave: ["prova", "água", "xixi", "proteção", "não molha"],
    imgWeb: imper,
  },
  {
    id: 3,
    titulo: "LAVAGEM DE TAPETE",
    texto:
      "A lavagem de tapetes e carpetes é muito importante para a remoção de ácaros, resíduos e pó acumulados durante o tempo de uso. A limpeza deve ser feita com frequência para prolongar a vida útil do tapete, além de manter adultos e crianças livres de alergias e possíveis contaminações, principalmente em casas que tenham animais (os amados pets).",
    palavrasChave: ["carpete", "limpagem"],
    imgWeb: tapete,
  },
  {
    id: 4,
    titulo: "LAVAGEM DE CORTINA",
    texto:
      "Recolhemos a cortina na sua casa com horário agendado, levamos para nossa lavanderia e fazemos todo procedimento sanitizante, eliminando ácaros e bactérias. Depois agendamos a entrega, limpamos os trilhos e fazemos a instalação, deixando o ambiente mais limpo, saudável e cheiroso.",
    palavrasChave: ["persiana", "blackout", "trilho", "black"],
    imgWeb: cortina,
  },
];
