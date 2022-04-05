import React, {useState} from 'react';
import classes from "./Paginator.module.css";
import {useDispatch} from "react-redux";
import {getUsersThunkCreator, setCurrentPage} from "../../../redux/usersReducer";

const Paginator = (props) => {

    const portionSize = 15;   //По сколько Пользователей выводим на страницу

    const dispatch = useDispatch()

    const onPageChanged = (pageNumber) => {
       dispatch(setCurrentPage(pageNumber));
       dispatch(getUsersThunkCreator(pageNumber, props.pageSize));
    }


    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.paginator}>
            { portionNumber > 1 &&
              <button className={classes.spanButton} onClick={()=> {setPortionNumber(portionNumber - 1)} }> previous </button>
            }

            { pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span className={props.currentPage === p ? classes.selectedPage : classes.page }
                                    key={p}
                                    onClick={(e)=> {onPageChanged(p);
                                    }}>{p}</span>
            })}
            { portionCount > portionNumber &&
                <button className={classes.spanButton} onClick={()=> {setPortionNumber(portionNumber + 1)} } > next </button>
            }
        </div>
    );
};

export default Paginator;