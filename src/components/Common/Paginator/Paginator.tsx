import * as React from 'react'
import {useState} from 'react'
// @ts-ignore
import classes from './Paginator.module.css'

type PropsType = {
    currentPage: number
    pageSize: number
    totalItemsCount: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<PropsType> = (props) => {
    const portionSize: number = 15;

    let pagesCount: number = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages: Array<number> = [];
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
                                    onClick={(e)=> {props.onPageChanged(p);
                                    }}>{p}</span>
            })}
            { portionCount > portionNumber &&
                <button className={classes.spanButton} onClick={()=> {setPortionNumber(portionNumber + 1)} } > next </button>
            }
        </div>
    );
};

export default Paginator;