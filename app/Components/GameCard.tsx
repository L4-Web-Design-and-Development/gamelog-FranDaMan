export default function GameCard() {
  return (
    <div>
      Games
      <div className="flex justify-center items-center w-80 h-60 bg-indigo-900 rounded-2xl">
        image
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <div>Witcher 3: Wild Hunt</div>
            <div>RPG</div>
            <div>2023-10-01</div>
          </div>
          <div className="flex flex-col justify-between items-Center m-2">
            <div className="border-2 border-cyan-300 text-cyan-300 px-6 rounded-md py-1">
              Edit
            </div>
            <div className="border-2 border-red-300 text-red-300 px-6 rounded-md py-1">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
