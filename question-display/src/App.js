import { useState } from "react";
import "./App.css";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
export default function App() {
  return (
    <h1>Questions </h1>
    <div>
      <Display data={faqs} />
    </div>
  );
}
function Display({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div>
      {data.map((item, i) => (
        <DisplayItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={item.title}
          number={i}
          key={item.title}
        >
          {item.text}
        </DisplayItem>
      ))}
      <DisplayItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Thinking like React"
        number={23}
        key="Thinkink like React"
      >
        <p>Allowa React developer to :</p>
        <ul>
          <li> Break up UI into components</li>
          <li>Make components reusable </li>
          <li> Place state effeciently</li>
        </ul>
      </DisplayItem>
    </div>
  );
}
function DisplayItem({ title, number, curOpen, onOpen, children }) {
  const isOpen = number === curOpen;
  function handleToggle() {
    onOpen(isOpen ? null : number);
  }
  return (
    <div className={`item ${isOpen ? "open" : " "}`} onClick={handleToggle}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
