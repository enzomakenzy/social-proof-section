import type { UserReview } from "../utils/users-reviews";

export function UserReviewCard({ name, profession, review, photo }: UserReview) {
  return (
    <div className="bg-primary-dark p-8 rounded-xl">
      <div className="flex items-center mb-5 h-12 gap-4">
        <img 
          src={photo} 
          alt="Foto do usuário" 
          className="w-10 h-10 rounded-4xl"
        />

        <div className="text-base/snug">
          <p className="text-neutral-grayish-light">{name}</p>
          <p className="text-primary-soft">{profession}</p>
        </div>
      </div>

      <p className="text-neutral-grayish-light text-body">
        "{review}"
      </p>
    </div>
  );
}
