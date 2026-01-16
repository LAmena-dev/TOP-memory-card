import "../styles/tailwind.css";

const Card = ({ data, handleClick }) => {
  return (
    <div
    className="container flex justify-center items-center bg-gray-200"
    onClick={() => handleClick(data.id)}>
      <img src={data.sprites.front_default} alt={data.name} />
      <h2 className="text-2xl">{data.name}</h2>
    </div>
  );
};

export default Card;
