import React from "react";

function List(props) {
  return (
    <div className="list">
      <li>
        {props.passing}
        <button
          className="delbtn"
          onClick={() => props.handledelete(props.index)}
        >
          X
        </button>
      </li>
    </div>
  );
}

export default List;
