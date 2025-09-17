import "./App.css";
import Book from "./Book";
import Applicitons from "./Applicition";
import Exams from "./Exams";
import Reandering from "./Reandering";
import Phone from "./Phone";



function App() {
  const myArr = [12, 23, 34, 45, 56, 67, 78];
  const list = [
    { id: 1, name: "Korim", job: "Jounieor Dev" },
    { id: 2, name: "Rohim", job: "Softiear Dev" },
    { id: 3, name: "Jabi", job: "Web Dev" },
    { id: 4, name: "Sadi", job: "Senior Dev" },
  ];
  const phone = [
    { id: 1, name: "IPhone", price:130000 },
    { id: 2, name: "Readme", price:12000 },
    { id: 3, name: "Oppeo", price: 9000 },
    { id: 4, name: "Realme", price:30000 },
  ];

  return (
    <>
      <h1>React Pricktise Conceaps</h1>
      {
        phone.map((phone) =>(
           <Phone key={phone.id} phone={phone}></Phone>))
      }

      {/* <Steat></Steat> */}
      <Book
        name1="Math"
        name2="Cheistmery"
        name3="English"
        name4="Bangla"
      ></Book>
      <Book
        name1="HTML"
        name2="CSS"
        name3="Tailwind"
        name4="Java Scripet"
      ></Book>
      <Book name1="React" name2="Node.js" name3="MongoBD" name4="SQL"></Book>

      {list.map((person) => (
        <Applicitons  person={person}></Applicitons>
      ))}

      {myArr.map((find) => (
        <Exams find={find}></Exams>
      ))}

      <Reandering name="React" areYouHeangry={true}></Reandering>
      <Reandering name="React-JS" areYouHeangry={true}></Reandering>
      <Reandering name="Node-JS" areYouHeangry={false}></Reandering>
      <Reandering name="Next-JS" areYouHeangry={true}></Reandering>

      
    </>
  );
}

function Steat() {
  return (
    <div>
      <ul>
        <li>Hello World</li>
        <li>Wounder Full World</li>
      </ul>
    </div>
  );
}

export default App;
