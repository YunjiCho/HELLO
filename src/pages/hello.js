import React from "react";
import World from "./world";
//http://localhost:3000/hello
export default function Hello() {
  return (
    <>
      <h1>
        hello,
        <World name="DOG" />!
      </h1>
      <img src="1.jpg" />
    </>
  );
}
