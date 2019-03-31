import React from "react";

const Card = props => {
  return (
    <div>
      <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} />
      <div>
        <div>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  );
};

export default Card;
