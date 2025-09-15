import "./App.css";
import ToDo from "./ToDo";
import Food from "./Food";
import Books from "./Book";
import Actors from "./Actors";
import Singer from "./Singer";

function App() {
  // const time = "90s";
  // const lista = ["Korim Uddine","Khalak Uddine",'Motlod Uddine','Blise You'];
  const singer = [
    {id:1, name:"Dr.Korim Uddine", age:69},
    {id:2, name:"Dr.Hartik", age:19},
  {id:3, name:"Dr.JIT", age:39},
    {id:4, name:"Dr.REACT", age:49},
  ]
  return (
    <>
      <h1>React Core Concapet Part-1</h1>
      {
        singer.map(persons => <Singer key={persons.id} singer={persons}></Singer>)

      }


       {
        lista.map(actors => <Actors actors={actors}></Actors>)
       }
 
       <ToDo name="kORIM" clear={true}></ToDo>
      <ToDo name="Rohime" clear={false}></ToDo>
      <ToDo name="Jabed" clear={true}></ToDo>

      <Food foodName="Rost" hungry={true} times={time}></Food>
      <Food foodName="Boylear" hungry={false} times={time}></Food>
      <Food foodName="Gory er Mansheo" hungry={true} times={time}></Food>
      <Food foodName="Fish" hungry={false} times={time}></Food>

      <Books name="Math" rigthing={true} capter="6-7"></Books>
      <Books name="English" rigthing={false} capter="6-7"></Books>
      <Books name="Computer Microprocessor" rigthing={true} capter="11-13"></Books>
      <Books name="Bangla" rigthing={false} capter="6-7"></Books>
      <Books name="Cmistry" rigthing={false} capter="6-7"></Books> 

      <List></List>
      <Imges></Imges>
      <Salary></Salary>
      <Newreact></Newreact>
      <Older></Older>
      <Salary></Salary>
      <List></List>
      <Imges></Imges>
      <Devices name="Laptop" program="Java Scripet" person="Rohim"></Devices>
      <Devices name="Mobile" program="Pythone"  person="Korim"></Devices>
      <Devices name="Tableat" program="SQL" person="Rakib Uddin"></Devices>
      <Devices name="Coumputer" program="C++ and C" person="Jamal"></Devices>
      <Students name="Jodder" mark="59" age='17'></Students>
      <Students name="Jodder" mark="59" age='17'></Students>
      <Students name="Jodder" mark="59" age='17'></Students>
      <Students name="Jodder" mark="59" age='17'></Students>
      <Book name='JS Book' collag="Digital Elections" page="890"></Book>
      <Book name='Python Book' collag="Disine Elections" page="490"></Book>
      <Book name='C++ Book' collag="Bangla Elections" page="90"></Book>
      <Book name='React Book' collag="Digital Elections" page="390"></Book>
      <Discturing name="Rohin" age="21" mother="Shiafily" father="Korim Uddine"></Discturing>
    </>
  );
}
function Discturing({ name, age, mother, father }) {
  const AddCOlor = {
    color: "blue",
    backGround: "red",
    border: "10px",
    border: "3px solid yellow",
  };
  return (
    <div style={AddCOlor}>
      <h1>This is React Functions Call</h1>
      <p>This is the Functions call Same to same Java Scripet</p>
      <ul>
        <li>Person Name : {name}</li>
        <li>Person Age : {age}</li>
        <li>Person Mother Name : {mother}</li>
        <li>Person Fither Name : {father}</li>
      </ul>
      <button>Click Me</button>
    </div>
  );
}

// Use Object Descutringes
function Students({ name, mark, age }) {
  // console.log(detils);
  const myStyl = {
    border: "2px",
    border: "2px solid Red",
    marginTop: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={myStyl}>
      <p>Name : {name}</p>
      <p>Mark : {mark}</p>
      <p>Age : {age}</p>
    </div>
  );
}
function Book({ name, collag, page }) {
  const myStyl = {
    border: "2px",
    border: "2px solid green",
    marginTop: "20px",
    borderRadius: "20px",
    padding: "20px",
  };
  return (
    <div style={myStyl}>
      <p>My Febrite Book : {name} </p>
      <p>My Collages Book : {collag}</p>
      <p>Book Pages : {page}</p>
      <input placeholder="your name"></input>
      <button style={{}}>Submite</button>
    </div>
  );
}

function Devices(informitions) {
  // console.log(informitions);
  const myStyl = {
    border: "2px",
    border: "2px solid white",
    marginTop: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={myStyl}>
      <p>Divices Name : {informitions.name} </p>
      <p>Divices Program : {informitions.program}</p>
      <p>Use Divices Person Name : {informitions.person}</p>
    </div>
  );
}

function Newreact() {
  return <p>My First Code On React in Component</p>;
}
function Salary() {
  const salary = 67000;
  return <h1>My Salary is {salary}</h1>;
}

function Older() {
  const country = "UK";
  return (
    //Use css in React System-- 3
    <h1 style={{ color: "green" }}>Hi My Name is Jon Damon {country}</h1>
  );
}
function List() {
  //  Css Use Variable in System -> 2
  const listStyle = {
    color: "red",
    border: "20px",
    padding: "20px",
    textAline: "left",
  };
  return (
    //style css add System -> 1
    <div style={listStyle}>
      <h3>My Fourits Div</h3>
      <ul>
        <li>Mango</li>
        <li>Oranges</li>
        <li>Banana</li>
        <li>Borai</li>
      </ul>
    </div>
  );
}

function Imges() {
  return (
    <div className="listStyle">
      <h2>My Imges Sections</h2>
      <img src="./assets/react.svg"></img>
      <p>This is My Imges Div</p>
    </div>
  );
}
 
export default App;
