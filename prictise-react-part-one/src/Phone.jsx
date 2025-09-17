export default function Phones({ phone }) {
  return phone.price > 10000 ? (
    <div className="myList3">
      <p>Name : {phone.name}</p>
      <p>Price : {phone.price}</p>
    </div>
  ) : (
    <div className="myList3">
      <p>Name : {phone.name}</p>
      <p>Price : Dosnot Exgiset</p>
    </div>
  );
}
