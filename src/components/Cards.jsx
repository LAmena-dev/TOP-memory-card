import Card from "./Card";

const Cards = ({ cards, onClick }) => {
  if (cards.length === 0) return <h1>Loading...</h1>;

  return (
    <div>
      {cards.map((data) => (
        <Card key={data.id} data={data} handleClick={onClick} />
      ))}
    </div>
  );
};
export default Cards;
