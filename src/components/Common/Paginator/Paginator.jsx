import React, {useState} from 'react';
import classes from "./Paginator.module.css";
import {useDispatch} from "react-redux";
import {getUsersThunkCreator, setCurrentPage} from "../../../redux/usersReducer";

const Paginator = (props) => {

    const portionSize = 15;   //Сколько страниц переключения отображаем на странице

    const dispatch = useDispatch()
    const onPageChanged = (pageNumber) => {
       dispatch(setCurrentPage(pageNumber));
       dispatch(getUsersThunkCreator(pageNumber, props.pageSize));
    }

    //Узнаём количество страниц. Делим количество всех элементов на количество элементов на странице, округляем вверх
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    //Создаём и заполняем массив, равный количеству страниц
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    //Находим количество порций для вывода
    let portionCount = Math.ceil(pagesCount / portionSize);
    //Устанавливаем по умолчанию номер порции 1 (Будут показываться страницы с 1 по 15)
    let [portionNumber, setPortionNumber] = useState(1);
    //Узнаём крайние значения слева и справа порции (Для первой 1 и 15)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.paginator}>
            { //Показываем кнопку "previous", исли номер порции больше 1
                portionNumber > 1 &&
              <button className={classes.spanButton} onClick={()=> {setPortionNumber(portionNumber - 1)} }>
                  previous
              </button>
            }

            { //Выводим текущую порцию страниц (1-15, 15-30), в зависимости от размера порции
                pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span className={props.currentPage === p ? classes.selectedPage : classes.page }
                                    key={p}
                                    onClick={()=> {onPageChanged(p)}}>
                                {p}
                                </span>
            })}
            { //Если колицество порций для вывода больше текущего номера порции, то показываем кнопку
                portionCount > portionNumber &&
                <button className={classes.spanButton} onClick={()=> {setPortionNumber(portionNumber + 1)} } >
                    next
                </button>
            }
        </div>
    );
};

export default Paginator;