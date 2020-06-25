import React, { useState } from "react";
import SingleNote from "./SingleNote";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const Main = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const [notes, setNotes] = useState([]);
  const [expand, setExpand] = useState(false);
  const [error, setError] = useState(false);

  const addData = (e) => {
    setError(false);
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const saveNote = () => {
    notes.title = data.title;
    notes.description = data.description;

    if (notes.title === "" || notes.description === "") {
      setError(true);
    } else {
      setNotes((oldNotes) => {
        return [...oldNotes, notes];
      });
    }

    setData({
      title: "",
      description: "",
    });
  };

  const deleteNote = (id) => {
    setNotes((oldNotes) => {
      return oldNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  const expandFun = () => {
    setExpand(true);
  };

  const expandFun1 = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="createNote">
        <input
          type="text"
          placeholder="Title"
          onChange={addData}
          value={data.title}
          name="title"
          onClick={expandFun}
          onDoubleClick={expandFun1}
        />
        {expand ? (
          <span>
            <textarea
              rows="5"
              value={data.description}
              onChange={addData}
              placeholder="Write A Note"
              name="description"
            ></textarea>

            <Button onClick={saveNote} className="addBtn">
              <AddIcon className="addIcon" />
            </Button>
          </span>
        ) : null}
      </div>
      {error ? (
        <p className="alert">
          <ErrorOutlineIcon />
          <span>Please Fill All The Information</span>
        </p>
      ) : null}
      <div className="noteSection">
        {notes.map((singleNote, index) => {
          return (
            <SingleNote
              title={singleNote.title}
              description={singleNote.description}
              key={index}
              id={index}
              onSelect={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default Main;
