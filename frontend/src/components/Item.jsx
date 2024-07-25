const Item = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center shadow shadow-grey-600 m-4 p-0 w-56 rounded-bl-lg  rounded-br-lg h-96 rounded-tl-lg  rounded-tr-lg ">
      <img
        src={item.thumbnail}
        alt=""
        className="rounded-tl-lg  rounded-tr-lg w-xl"
      />
      <div className="p-2 flex flex-col gap-2">
        <div className="font-bold">{item.title}</div>
        <div className="font-semibold">₹{item.price}/-</div>
        <button className="bg-violet-500 px-6 py-1 rounded-lg hover:bg-violet-600 text-white w-48">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Item;
