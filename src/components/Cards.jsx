import "../styles/tailwind.css";
import Card from "./Card";

const Cards = ({ cards, onClick }) => {
  if (cards.length === 0)
    return (
      <main className="flex justify-center items-center min-h-[50vh]">
        <h1 className="text-2xl md:text-4xl font-bold">Loading...</h1>
      </main>
    );

  return (
    <main className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 p-4 gap-4">
      {cards.map((data) => (
        <Card key={data.id} data={data} handleClick={onClick} />
      ))}
    </main>
  );
};
export default Cards;
