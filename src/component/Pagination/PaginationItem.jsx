import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function PaginationItem({ num, currentPage, paginate }) {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (num == currentPage) {
      setActive("active");
    } else {
      setActive("");
    }
  }, [currentPage]);

  const classNameLi = "page-item" + " " + active;
  return (
    <li key={num} className={classNameLi}>
      <a
        href="!#"
        className="page-link "
        onClick={() => {
          paginate(num);
        }}
      >
        {num}
      </a>
    </li>
  );
}
