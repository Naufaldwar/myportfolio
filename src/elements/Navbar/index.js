import React from "react";
import Brand from "../../parts/IconText";
import Button from "../Button";

function index() {
  return (
    <section className="flex justify-between ">
      <Brand />
      <ul className="flex gap-x-6 ">
        <Button
          link
          className="text-black hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-gray-500"
        >
          Home
        </Button>
        <Button
          link
          className="text-black hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-gray-500"
        >
          Browse By
        </Button>
        <Button
          link
          className="text-black hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-gray-500"
        >
          Stories
        </Button>
        <Button
          link
          className="text-black hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-gray-500"
        >
          Agents
        </Button>
      </ul>
    </section>
  );
}

export default index;
