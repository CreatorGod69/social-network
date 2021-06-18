import React from "react";
import u from "./../../Friends/Friends.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  // let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i < 9; i++) {
    pages.push(i);
  }
  return (
    <div className={u.selector}>
      {pages.map((page) => {
        return (
          <span
            key={page}
            onClick={(e) => {
              onPageChanged(page);
            }}
            className={currentPage === page ? u.selectPage : null}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};
export default Paginator;
