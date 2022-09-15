import { useRef } from "react";
import "./NoteModal.css";

export const NoteModal = (props) => {
  const {
    title,
    noteTitle,
    description,
    textOk,
    textNok,
    onOkClicked,
    onNokClicked,
  } = props;

  const titleRef = useRef();
  const descriptionRef = useRef();

  return (
    <div className="NoteModal">
      <div className="NoteModal-title">{title}</div>
      <div className="NoteModal-note-title">
        <input
          className="NoteModal-input-lg"
          type="text"
          placeholder={noteTitle}
          ref={titleRef}
        />
      </div>
      <div className="NoteModal-description">
        <textarea
          className="NoteModal-input-lg"
          placeholder={description}
          rows={10}
          cols={30}
          ref={descriptionRef}
        />
      </div>
      <div className="NoteModal-footer">
        <button
          className="NoteModal-footer-button btn primary"
          onClick={() => onOkClicked(
            titleRef.current.value,
            descriptionRef.current.value
          )}
        >
          {textOk}
        </button>
        <button
          className="NoteModal-footer-button btn secondary"
          style={{ marginLeft: "5px" }}
          onClick={onNokClicked}
        >
          {textNok}
        </button>
      </div>
    </div>
  );
};
