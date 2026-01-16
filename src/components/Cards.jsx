import "../styles/tailwind.css";
import Card from "./Card";

const Cards = ({ cards, onClick }) => {
  if (cards.length === 0)
    return <h1 className="container w-full block m-auto">Loading...</h1>;

  return (
    <div className="container w-full m-auto bg-gray-500 grid grid-cols-6 gap-6">
      {cards.map((data) => (
        <Card key={data.id} data={data} handleClick={onClick} />
      ))}
    </div>
  );
};
export default Cards;
