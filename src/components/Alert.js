import React from "react";

const Capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export default function Alert(props) {
  if (props.alert)
    return (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {`${Capitalize(props.alert.type)}: ${props.alert.message}`}
      </div>
    );
  else {
    return null;
  }
}
