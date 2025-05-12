interface GameCardProps {
  gameId: string;
  title: string;
  releaseDate: string;
  categoryTitle: string;
  imageURL: string;
  onDelete?: () => void;
}
export default function GameCard({
  title,
  releaseDate,
  categoryTitle,
  imageURL,
}: GameCardProps) {
  const formattedDate = releaseDate.slice(0, 10);
  return (
    <div className="mx-3 mb-3">
      <div className="flex justify-center items-center w-96  rounded-2xl">
        <img
          className="rounded-2xl h-56"
          src={imageURL}
          alt={`${title} cover`}
        />
      </div>
      <div>
        <div className="flex justify-between items-center my-5">
          <div className="h-28 flex flex-col justify-between">
            <div className="flex items-center font-bold w-56 h-9 text-lg">
              {title}
            </div>
            <div className="text-cyan-300 font-semibold items-center text-lg">
              {categoryTitle}
            </div>
            <div className="text-zinc-500 items-center text-lg">
              {formattedDate}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10">
            <div className="flex justify-center items-center border-2 border-cyan-300 text-cyan-300 w-28 rounded-md h-8 text-base">
              Edit
            </div>
            <button
              onClick={() => {
                // Optional: trigger a callback or state update to remove the component
                console.log("Delete clicked");
              }}
              className="flex justify-center items-center border-2 border-red-300 text-red-300 w-28 rounded-md h-8 text-base hover:bg-red-300 hover:text-white transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
