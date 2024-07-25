import items from "../assets/items.json";
import Item from "./Item";

const Body = () => {
  return (
    <div className="flex flex-wrap m-4 items-center justify-center">
      {items.items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Body;
