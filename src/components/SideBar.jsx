import React from "react";

function SideBar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sideBar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <h3 className="descriptionTitle">{data?.date}</h3>
          <p>{data?.explanation}</p>
        </div>
        <button id="goBackButton" onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
