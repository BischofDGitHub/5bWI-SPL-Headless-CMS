import React from "react";

type Props = {
  imageLink: string;
  firstName: string;
  lastName: string;
};

export default function Card({ imageLink, firstName, lastName }: Props) {
  return (
    <div className="border border-black rounded-xl bg-white">
      <img className="rounded-t-xl" src={imageLink} />
      <div className="p-4">
        <div className="font-bold">
          {firstName} {lastName}
        </div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic a vitae aperiam accusamus quaerat quis perspiciatis ducimus laborum quas repudiandae! Labore temporibus et ab magnam.  </div>
      </div>
    </div>
  );
}
