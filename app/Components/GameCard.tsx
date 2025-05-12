interface GameCardProps {
  title: string;
  releaseDate: string;
  categoryTitle: string;
  imageURL: string;
}
export default function GameCard({
  title,
  releaseDate,
  categoryTitle,
  imageURL,
}: GameCardProps) {
  const formattedDate = releaseDate.slice(0, 10);
  return (
    <div className=" p-3">
      <div className="flex justify-center items-center w-80  rounded-2xl">
        <img
          className="rounded-2xl h-48"
          src={imageURL}
          alt={`${title} cover`}
        />
      </div>
      <div>
        <div className="flex justify-between items-center my-5">
          <div className="h-24 flex flex-col justify-between">
            <div className="flex items-center font-bold w-48 h-7">{title}</div>
            <div className="text-cyan-300 font-semibold items-center">
              {categoryTitle}
            </div>
            <div className="text-zinc-500 items-center">{formattedDate}</div>
          </div>
          <div className="flex flex-col justify-between gap-10">
            <div className="flex justify-center items-center border-2 border-cyan-300 text-cyan-300 w-24 rounded-md h-7 text-sm">
              Edit
            </div>
            <div className="flex justify-center items-center border-2 border-red-300 text-red-300 w-24 rounded-md h-7 text-sm">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
