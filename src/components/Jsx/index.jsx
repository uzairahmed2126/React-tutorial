import React from "react";

function add(first, second) {
  return first + second;
}
function Jsx() {
  return (
    <div>
      Jsx{2 + 2}
      <div>{add(5, 10)}</div>
    </div>
  );
}

export default Jsx;
