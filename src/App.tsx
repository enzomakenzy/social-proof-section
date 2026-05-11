import { StarCard } from "./components/StarCard"
import { UserReviewCard } from "./components/UserReviewCard"
import userPhotoOne from "./assets/image-colton.jpg";
import userPhotoTwo from "./assets/image-anne.jpg";
import userPhotoThree from "./assets/image-irene.jpg";

function App() {
  return (
    <main className="relative overflow-hidden min-h-screen w-full lg:flex lg:items-center lg:justify-center lg:flex-col">
      <div className="absolute top-0 left-0 w-full h-full bg-[url(./assets/bg-pattern-top-mobile.svg)] bg-no-repeat bg-contain bg-top-left -z-10 sm:bg-[url(./assets/bg-pattern-top-desktop.svg)] sm:bg-size-[70%] lg:bg-size-[45%]"></div>

      <div className="absolute bottom-0 right-0 w-full h-full bg-[url(./assets/bg-pattern-bottom-mobile.svg)] bg-no-repeat bg-bottom-right bg-contain -z-10 sm:bg-[url(./assets/bg-pattern-bottom-desktop.svg)] sm:bg-size-[60%]"></div>

      <div className="px-5 pt-15 w-full md:max-w-none lg:max-w-300">
        <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h1 className="font-bold text-[2.4rem]/10 max-w-60 text-center text-primary-dark sm:max-w-80 md:text-[2.7rem]/12 md:max-w-120 lg:text-5xl lg:text-start lg:max-w-80">Curadoria de arte e design digital.</h1>
            <p className="text-body text-neutral-grayish-dark text-center max-w-120 md:max-w-140 lg:max-w-110 lg:text-start">
              Explore as coleções mais influentes da semana, selecionadas por especialistas do mundo todo. Junte-se a uma comunidade focada em estética e inovação.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full md:flex-row md:flex-wrap md:justify-center lg:flex-col">
            <StarCard text="Primeiro lugar no Global Design Awards" className="lg:self-start" />
            <StarCard text="Melhor App de Experiência Visual 2026" className="lg:self-center" />
            <StarCard text="Referência em Curadoria de Arte Digital" className="lg:self-end" />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full md:flex-row md:flex-wrap md:justify-center lg:justify-between lg:h-67">
          <UserReviewCard 
            name="Sofia Brandt"
            profession="Designer Visual"
            review="É o meu lugar favorito para buscar inspiração diária. A qualidade das coleções é impecável e o sistema de filtragem por cores é sensacional."
            photo={userPhotoOne}
            className="self-start"
          />

          <UserReviewCard 
            name="Marcus Viana"
            profession="Curador de Arte"
            review="A plataforma mudou a forma como descobrimos novos talentos. A interface é intuitiva e permite que o foco seja totalmente voltado para as obras expostas."
            photo={userPhotoTwo}
            className="self-center"
          />

          <UserReviewCard 
            name="Beatriz Helena"
            profession="Diretora Criativa"
            review="Um recurso indispensável para qualquer estúdio que leva o design a sério. A comunidade é engajada e o conteúdo é sempre de altíssimo nível."
            photo={userPhotoThree}
            className="self-end"
          />
        </div>
      </div>

      <p className="my-6 text-center">Coded by <a className="text-primary-soft" href="https://github.com/enzomakenzy" target="_blank" rel="external">Enzo Makenzy</a>.</p>
    </main>
  )
}

export default App
