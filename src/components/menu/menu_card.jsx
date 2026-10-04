import "./Menu.css";

export default function MenuCard({ item }) {
  return (
    <div className="menu_card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h4>₹{item.price}</h4>
    </div>
  );
}
