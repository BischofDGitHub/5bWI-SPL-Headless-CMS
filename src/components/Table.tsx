import Card from "./Card.tsx";
import React, { useEffect, useState } from "react";

type Address = {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
};

type Person = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthday: string; // oder Date, wenn du später parsen willst
  gender: "male" | "female" | "other";
  address: Address;
  website: string;
  image: string;
};

type Card = {
  title: string;
  text: string;
  imageLink: string;
};

type Props = {
  cards: Array<Card>;
};

export default function Table(/*{ cards }: Props*/) {
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    fetch("https://fakerapi.it/api/v2/persons?_quantity=10").then((res)=>{
      res.json().then((data)=>{
        console.log(data);
        setCards(data.data);
      })
    })
  }, [])

  return (
    <div className="grid gap-6 sm:grid-cols-4 grid-cols-2">
      {cards.map((card:Person)=>{
        return <Card imageLink={`https://picsum.photos/640/480?random=${card.id}`} firstName={card.firstname} lastName={card.lastname}/>;
      })}
    </div>
  );
}
