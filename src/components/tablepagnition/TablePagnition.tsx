import React from "react";
import {
  IoPlayForwardSharp,
  IoPlayBackSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";
const TablePagnition = () => {
  return (
    <div className="table-pagnition">
      <button className="btn">
        <span className="icon">
          <IoPlayBackSharp />
        </span>
      </button>
      <button className="btn">
        <span className="icon">
          <IoPlaySkipBackSharp />
        </span>
      </button>
      <button className="btn">
        <span className="icon">
          <IoPlaySkipForwardSharp />
        </span>
      </button>
      <button className="btn">
        <span className="icon">
          <IoPlayForwardSharp />
        </span>
      </button>
    </div>
  );
};

export default TablePagnition;
