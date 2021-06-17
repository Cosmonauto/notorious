import React from "react";
import "../Cards/cards.css";
import CardItem from "../CardItem";

function Cards() {
  return (
    <ul className="cards__items">
      <CardItem
        src="https://dunkindonutsmoscow.ru/upload/iblock/ad7/Ring-Klubnika.png"
        text="Знаменитый оригинальный ринг донат в сочной клубничной глазури."
        label="Strawberry"
      />
      <CardItem
        src="https://dunkindonutsmoscow.ru/upload/iblock/0e7/5.png"
        text="Шелл донат с двойной начинкой из спелой черники и чизкейка, украшен жемчужной посыпкой и сахарными полосочками."
        label="Blueberry"
      />
      <CardItem
        src="https://dunkindonutsmoscow.ru/upload/iblock/ab0/1.png"
        text="Фруктовый шелл донат с шоколадной посыпкой и нежным банановым кремом внутри."
        label="Banana"
      />

      <CardItem
        src="https://dunkindonutsmoscow.ru/upload/iblock/3ff/SHell-Vishnya-2.0.png"
        text="Шелл в малиновой глазури и вишневой начинкой, украшен сахарным красным и белыми драже"
        label="Cherry"
      />
    </ul>
  );
}

export default Cards;
