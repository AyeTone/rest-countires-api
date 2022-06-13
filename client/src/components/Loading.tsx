import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <i className="fas fa-spinner"></i>
      <h2 className="loading--text">
        This is being loaded slower so you can admire this loading animation.
        It's dark more compatible too! 😁
      </h2>
    </div>
  );
};

export default Loading;
