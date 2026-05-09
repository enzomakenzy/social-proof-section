import userPhotoOne from "../assets/image-colton.jpg";
import userPhotoTwo from "../assets/image-anne.jpg";
import userPhotoThree from "../assets/image-irene.jpg";

export interface UserReview {
  name: string;
  profession: string;
  review: string;
  photo: string;
}

export const usersReviews: UserReview[] = [
  {
    name: "Sofia Brandt",
    profession: "Designer Visual",
    review: "É o meu lugar favorito para buscar inspiração diária. A qualidade das coleções é impecável e o sistema de filtragem por cores é sensacional.",
    photo: userPhotoOne
  },
  {
    name: "Marcus Viana",
    profession: "Curador de Arte",
    review: "A plataforma mudou a forma como descobrimos novos talentos. A interface é intuitiva e permite que o foco seja totalmente voltado para as obras expostas.",
    photo: userPhotoTwo
  },
  {
    name: "Beatriz Helena",
    profession: "Diretora Criativa",
    review: "Um recurso indispensável para qualquer estúdio que leva o design a sério. A comunidade é engajada e o conteúdo é sempre de altíssimo nível.",
    photo: userPhotoThree
  }
];

export const starCardTexts: string[] = [
  "Primeiro lugar no Global Design Awards",
  "Melhor App de Experiência Visual 2026",
  "Referência em Curadoria de Arte Digital"
];
