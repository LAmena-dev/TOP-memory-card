import "../styles/tailwind.css";

const Card = ({ data, handleClick }) => {
  return (
    <article
      className="flex items-center flex-col bg-blue-300 shadow-lg hover:shadow-xl m-4 p-4 rounded-lg cursor-pointer transition-shadow"
      onClick={() => handleClick(data.id)}
    >
      <img src={data.sprites.front_default} alt={data.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg" />
      <h2 className="text-center text-lg md:text-2xl font-semibold mt-2">{data.name}</h2>
    </article>
  );
};

export default Card;
