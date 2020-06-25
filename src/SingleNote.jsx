import React from "react";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const SingleNote = (props) => {
  return (
    <>
      <div className="note">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Button
          className="deleteBtn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <DeleteOutlineIcon className="deleteIcon" />
        </Button>
      </div>
    </>
  );
};

export default SingleNote;
