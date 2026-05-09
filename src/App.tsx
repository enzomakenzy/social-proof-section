import { StarCard } from "./components/StarCard"
import { UserReviewCard } from "./components/UserReviewCard"
import { starCardTexts, usersReviews } from "./utils/data"

function App() {
  return (
    <main>
      <div className="p-5 my-10">
        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="font-bold text-[2.4rem]/10 w-60 text-center text-primary-dark">Curadoria de arte e design digital.</h1>
            <p className="text-body text-neutral-grayish-dark text-center">
              Explore as coleções mais influentes da semana, selecionadas por especialistas do mundo todo. Junte-se a uma comunidade focada em estética e inovação.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {
              starCardTexts.map((text) => (
                <StarCard text={text} />
              ))
            }
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {
            usersReviews.map(({name, profession, review, photo}) => (
              <UserReviewCard 
                name={name}
                profession={profession}
                review={review}
                photo={photo}
              />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default App
