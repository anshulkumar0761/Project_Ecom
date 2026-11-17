
const Right_content = ({cards}) => {
  return (
    <div className="w-full h-full px-7 pb-7 pt-0 flex gap-5 overflow-x-auto">
      {cards.map((card) => (
        <div key={card.id} className="relative h-110 w-2xs shrink-0">
          <div className="absolute top-0 left-0 z-10 h-full w-full px-6 pb-9 rounded-4xl flex flex-col justify-between bg-linear-to-t from-black/80 via-black/20 to-transparent">
            <h2 className=" mt-4 text-2xl bg-gray-200 rounded-full w-8 flex justify-center items-center font-semibold">
              {card.id}
            </h2>
            <p className="text-amber-50 text-sm leading-relaxed">
              {card.text}
              <button className="bg-gray-200 rounded-xl px-4 py-1.5 ml-18 mt-3.5 font-medium hover:bg-blue-500 hover:text-white text-black cursor-pointer transition-colors">
                {card.button}
              </button>
            </p>
          </div>

          <div className="h-full w-full">
            <img
              className="w-full h-full object-cover rounded-4xl"
              src={card.img}
              alt={card.alt}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Right_content;