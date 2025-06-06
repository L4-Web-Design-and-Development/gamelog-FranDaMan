import { Form, Link } from "@remix-run/react";
interface GameCardProps {
  id: string;
  gameId: string;
  title: string;
  releaseDate: string;
  categoryTitle: string;
  imageURL: string;
  onDelete?: () => void;
}
export default function GameCard({
  id,
  title,
  releaseDate,
  categoryTitle,
  imageURL,
}: GameCardProps) {
  const formattedDate = releaseDate.slice(0, 10);

  return (
    <div className="px-4 pb-9 ">
      <Link
        to={`/edit-game/${id}`}
        className="relative flex justify-center h-72 items-center w-auto rounded-2xl overflow-hidden lg:h-60"
      >
        {" "}
        <img
          className="absolute h-full w-full inset-0 object-cover"
          src={imageURL}
          alt={`${title} cover`}
        />
      </Link>

      <div>
        <div className="  relative flex justify-between items-center mx-auto mt-5 md:mt-8 lg:mt-4">
          <div className="lg:h-20 md:h-32 h-28 flex flex-col justify-between">
            <div className="flex">
              <div
                title={title}
                className="whitespace-nowrap overflow-hidden text-ellipsis md:truncate w-full md:w-52 lg:w-28 xl:w-40 2xl:w-52  font-bold text-base cursor-default select-none"
              >
                {title}
              </div>
            </div>

            <div className="text-cyan-300 font-semibold items-center text-sm">
              {categoryTitle}
            </div>
            <div className="text-zinc-500 items-center text-base">
              {formattedDate}
            </div>
          </div>
          <div className="flex flex-col justify-between items-center md:gap-14 lg:gap-7 gap-9">
            <Link to={`/edit-game/${id}`}>
              <button className="flex justify-center w-32 h-8 items-center border-2 border-cyan-300 text-cyan-300 lg:w-24 rounded-sm lg:h-6 lg:text-xs text-base md:w-28 hover:bg-cyan-300/30 transition">
                Edit
              </button>
            </Link>
            <Form action={`/delete-game/${id}`} method="post">
              <button
                type="submit"
                className="flex justify-center w-32 h-8 items-center border-2 border-red-300 text-red-300 lg:w-24 rounded-sm lg:h-6 text-base md:w-28 lg:text-xs hover:bg-red-300/30 transition"
              >
                Delete
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
