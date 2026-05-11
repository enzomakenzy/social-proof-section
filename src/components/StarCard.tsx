import star from "../assets/icon-star.svg";

type Props = {
  text: string;
  className?: string;
}

export function StarCard({ text, className }: Props) {
  return (
    <div className={`bg-neutral-grayish-light flex flex-col items-center justify-center gap-3 p-4 rounded-xl xs:flex-row md:w-88 lg:w-120 md:flex-col lg:flex-row ${className || ""}`}>
      <div className="flex gap-2">
        <img src={star} alt="Ícone de estrela" />
        <img src={star} alt="Ícone de estrela" />
        <img src={star} alt="Ícone de estrela" />
        <img src={star} alt="Ícone de estrela" />
        <img src={star} alt="Ícone de estrela" />
      </div>

      <p className="font-bold text-primary-dark text-center">{text}</p>
    </div>
  )
}