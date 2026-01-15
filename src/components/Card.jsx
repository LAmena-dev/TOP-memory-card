const Card = ({ data, handleClick }) => {
  return (
    <div onClick={() => handleClick(data.id)}>
      <img src={data.sprites.front_default} alt={data.name} />
      <h2>{data.name}</h2>
    </div>
  );
};

export default Card;
