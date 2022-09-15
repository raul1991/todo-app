import "./Note.css";
export const Note = (props) => {
  const { title, description } = props;
  return (
    <div className="Note">
      <div className="Note-title">{title}</div>
      <div className="Note-description">{description}</div>
    </div>
  );
};
