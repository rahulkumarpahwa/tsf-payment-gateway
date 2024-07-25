const Item = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center shadow w-xl h-xl">

      <img src={item.thumbnail} alt="" className="rounded-tl-lg w-xl"/>
      <div>
        <div>{item.title}</div>
        <div>₹{item.price}</div>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Item;
