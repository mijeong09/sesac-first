import React from "react";
import Child from "./Child";

export default function Parent() {
  return (
    <div>
      <Child>
        <div>
          <h1>child1</h1>
          <p>난 90살</p>
        </div>
      </Child>
      <Child>
        <div>
          <h2>child2</h2>
          <p>난 80살</p>
        </div>
      </Child>
      <Child>
        <div>
          <h3>child3</h3>
          <p>난 3살</p>
        </div>
      </Child>
    </div>
  );
}
