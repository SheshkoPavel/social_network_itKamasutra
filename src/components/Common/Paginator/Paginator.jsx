import React from 'react';
import classes from "./Paginator.module.css";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>      {/* this was like className={props.currentPage === p && classes.selectedPage}*/}
            { pages.map((p) => <span key={p.id} className={props.currentPage === p ? classes.selectedPage : undefined}
                             onClick={(e)=> {props.onPageChanged(p); }} >
                {p}
                </span>
            )}
        </div>
    );
};

export default Paginator;