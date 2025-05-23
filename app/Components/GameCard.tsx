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
    <div className="px-4 pb-4 ">
      <div className="relative flex justify-center h-72 items-center w-auto rounded-2xl overflow-hidden lg:h-52">
        <img
          className="absolute h-full w-full inset-0 object-cover"
          src={imageURL}
          alt={`${title} cover`}
        />
      </div>
      <div>
        <div className=" relative flex justify-between items-center mx-auto mt-4">
          <div className="h-28 flex flex-col justify-between">
            <div className="flex items-start font-bold w-44 md:w-10 lg:w-30 h-7 text-base">
              {title}
            </div>
            <div className="text-cyan-300 font-semibold items-center text-sm">
              {categoryTitle}
            </div>
            <div className="text-zinc-500 items-center text-base">
              {formattedDate}
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-10">
            <div className="flex justify-center items-center border-2 border-cyan-300 text-cyan-300 w-28 rounded-md h-8  text-base">
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
