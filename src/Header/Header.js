import React from "react";
export default function Header({ title }) {
  return (
    <>
      <h1 className="header">{title}</h1>
      <h3 className="header">Cats</h3>
    </>
  );
}
