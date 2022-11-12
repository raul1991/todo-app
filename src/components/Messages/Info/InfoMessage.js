import React from "react";

// export type InfoMessageProps = {
//     message: string
// };

export const InfoMessage = (props) => {
  return (
    <div className="InfoMessage-container">
      <p className="InfoMessage-text">{props.message}</p>
    </div>
  );
};
