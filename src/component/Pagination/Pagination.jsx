import React, { useEffect, useState } from "react";
import "./Pagination.css";
import PaginationItem from "./PaginationItem";
export default function Pagination({
  recordsPerPage,
  totalNum,
  paginate,
  prePage,
  nextPage,
  currentPage,
}) {
  const pageNum = [];
  for (let index = 1; index <= Math.ceil(totalNum / recordsPerPage); index++) {
    pageNum.push(index);
  }
  const [preDisabled, setpreDisable] = useState("");
  const [nextDiabled, setNextDiabled] = useState("");
  useEffect(() => {
    if (currentPage == 1) {
      setpreDisable("disabled");
    } else if (currentPage == Math.ceil(totalNum / recordsPerPage)) {
      setNextDiabled("disabled");
      setpreDisable("");
    } else {
      setpreDisable("");
      setNextDiabled("");
    }
  }, [currentPage]);

  var preClassName = "page-item" + " " + preDisabled;
  var nextClassName = "page-item" + " " + nextDiabled;

  return (
    <nav>
      <ul className="pagination flex-wrap">
        <li className={preClassName}>
          <a className="page-link" href="#" tabIndex="-1" onClick={prePage}>
            Previous
          </a>
        </li>
        {pageNum.map((num) => (
          <PaginationItem
            key={num}
            num={num}
            currentPage={currentPage}
            paginate={paginate}
          />
        ))}
        <li className={nextClassName}>
          <a className="page-link" href="#" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
