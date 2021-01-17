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
      "É o procedimento realizado nos estofados através de uma limpeza profunda contendo produtos bactericidas, antiácaros , alvejante e sempre deixando um aroma agradável e proporcionando mais saúde e conforto.",
    texto2: "Sofá, colchão, cadeira, poltrona, puff, cabeceira, recamier, pelúcia, bebê conforto, cadeirinha infantil, e muito mais.",
    palavrasChave: ["pufe", "colxão", "limpeza", "lavagem"],
    imgWeb: sofa,
  },
  {
    id: 2,
    titulo: "IMPERMEABILIZAÇÃO",
    texto:
      "A impermeabilização é aplicação de um produto específico que permitem o fechamento das tramas do tecido. Esse serviço irá proteger contra derramamento de líquidos gerando uma repelencia, mantendo o estofado mais limpo e prolongando sua vida útil.",
    palavrasChave: ["prova", "água", "xixi", "proteção", "não molha"],
    imgWeb: imper,
  },
  {
    id: 3,
    titulo: "LAVAGEM DE TAPETE",
    texto:
      "É muito importante para a remoção de ácaros, resíduos e pó acumulados durante o tempo de uso. A limpeza deve ser feita com frequência pra prolongar vida útil do tapete, além de manter os adultos e crianças livres de alergias e possíveis contaminações, principalmente em casas que tenham animais.",
    palavrasChave: ["carpete", "limpagem"],
    imgWeb: tapete,
  },
  {
    id: 4,
    titulo: "LAVAGEM DE CORTINA",
    texto:
      "Recolhemos sua cortina na sua casa com horário agendado, levamos para nossa lavanderia e fazemos todo procedimento sanitizante eliminando ácaros e bactérias. Depois agendamos a entrega, limpamos os trilhos e fazemos a instalação, deixando o ambiente mais limpo, saudável e cheiroso.",
    palavrasChave: ["persiana", "blackout", "trilho", "black"],
    imgWeb: cortina,
  },
];
