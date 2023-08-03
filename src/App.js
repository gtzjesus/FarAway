const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 1, description: 'Socks', quantity: 4, packed: false },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌲 Far Far Far Away 🧳</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip? ✈️</h3>
    </div>
  );
}
function PackingList() {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}
function Item({ item }) {
  return <div></div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%) 🏷️</em>
    </footer>
  );
}
