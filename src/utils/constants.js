import Contato from "../pages/Contato";
import Home from "../pages/Home";

import sofa from "../assets/images/sofa.jpg"
import imper from "../assets/images/impermeabilizacao.jpg"
import tapete from "../assets/images/tapete.jpg"

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
      "É o procedimento realizado nos estofados através de uma limpeza profunda contendo produtos bactericidas, antiacaros, alvejante e sempre deixando um aroma agradável proporcionando mais saúde e conforto.",
    imgWeb: sofa,
  },
  {
    id: 2,
    titulo: "IMPERMEABILIZAÇÃO",
    texto:
      "A impermeabilização é aplicação de um produto específico que permitem o fechamento das tramas do tecido. Esse serviço irá proteger contra derramamento de líquidos gerando uma repelencia, mantendo o estofado mais limpo e prolongando sua vida útil.",
    imgWeb: imper,
  },
  {
    id: 3,
    titulo: "LAVAGEM DE TAPETE",
    texto:
      "É muito importante para a remoção de ácaros, resíduos e pó acumulados durante o tempo de uso. A limpeza deve ser feita com frequência pra prolongar vida útil do tapete, além de manter os adultos e crianças livres de alergias e possíveis contaminações, principalmente em casas que tenham animais.",
    imgWeb: tapete,
  },
];
