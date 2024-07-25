// import items from "../assets/items.json"
import Item from "./Item";

const Body = () => {
  return (
    <div>
      <Item
        item={{
          id: 168,
          title: "Charger SXT RWD",
          price: 32999.99,
          quantity: 3,
          total: 98999.97,
          discountPercentage: 13.39,
          discountedTotal: 85743.87,
          thumbnail:
            "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
        }}
      />
    </div>
  );
};

export default Body;
