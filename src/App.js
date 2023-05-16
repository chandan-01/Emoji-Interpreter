import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "🫠": "melting face",
  "☺️": "smiling",
  "🫡": "saluting",
  "😌": "releived",
  "😔": "sad",
  "😭": "crying",
  "😂": "laughing",
  "": "search emoji meaning"
};

export default function App() {
  const [emojiMeaning, setEmoji] = useState("");
  const shoppingList = Object.keys(emojiDictionary);
  // const emojiss=document.getElementById(emojis).value;
  // const shoppingList =["😂", "😔", "😭", "😌", "🫠"];
  function inputEventhandler(event) {
    const userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setEmoji(emojiDictionary[userInput]);
    } else setEmoji("we dont have this in our database");
    // setEmoji(event.target.value);
  }

  // function getBg(index) {
  //   if (index % 2 === 0) {
  //     return "gray";
  //   }
  //   return "white";
  // }
  // function fontSize(index) {
  //   if (index % 2 !== 0) {
  //     return "1.5rem";
  //   }
  // }
  function clickEventHandler(item) {
    // console.log(item);
    if (item in emojiDictionary) {
      setEmoji(emojiDictionary[item]);
    }
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={inputEventhandler}></input>
      {/* <div> {emojiMeaning} </div> */}
      <p>{emojiMeaning}</p>
      {shoppingList.map((item, index) => (
        <li
          // style={{ backgroundColor: getBg(index) }}
          key={item}
          onClick={() => clickEventHandler(item)}
        >
          {item}
        </li>
      ))}
    </div>
  );
}
