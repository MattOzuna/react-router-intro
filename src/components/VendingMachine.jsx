import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <>
      <h1>Vending Machine!</h1>
      <div>What would you like to eat?</div>
      <div>
        <Link to="/soda">Soda</Link>
        <Link to="/chips">Chips</Link>
        <Link to="/freshsardines">Fresh Sardines</Link>
      </div>
    </>
  );
};

export default VendingMachine;
