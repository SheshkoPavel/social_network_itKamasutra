import React, {useState} from 'react';
import classes from "./Paginator.module.css";
import {useDispatch} from "react-redux";
import {getUsersThunkCreator, setCurrentPage} from "../../../redux/usersReducer";
import Button from "@mui/material/Button";

const Paginator = (props) => {

    const dispatch = useDispatch()
    const portionSize = 15;   //Сколько страниц переключения отображаем на странице

    //Функция вызывается с параметром при отрисовке юзеров
    const onPageChanged = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(getUsersThunkCreator(pageNumber, pageSize));
    }

    // Сетаем количество юзеров на странице
    const [pageSize, setPageSize] = useState(props.pageSize)
    const onSizeChange = (e) =>{
        setPageSize(e.currentTarget.value)
    }
    //Изменяем количество пользователей на странице
    const onPageSizeChanged = () => {
        dispatch(setCurrentPage(1));
        dispatch(getUsersThunkCreator(1, pageSize));
    }

    //Узнаём количество страниц. Делим количество всех элементов на количество элементов на странице, округляем вверх
    let pagesCount = Math.ceil(props.totalItemsCount / pageSize);

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
              <Button variant={"outlined"} size={"small"} onClick={()=> {setPortionNumber(portionNumber - 1)} }>
                  previous
              </Button>
            }

            { //Выводим текущую порцию страниц (1-15, 15-30), в зависимости от размера порции
                pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <Button variant={'text'}
                                       size={"small"}
                                       sx={{minWidth: 25}}
                                       color={props.currentPage === p ? "secondary" : "primary"}
                                       key={p}
                                       onClick={()=> {onPageChanged(p)}}>
                                    {p}
                                </Button>
            })}
            { //Если количество порций для вывода больше текущего номера порции, то показываем кнопку
                portionCount > portionNumber &&
                <Button variant={"outlined"} size={"small"} onClick={()=> {setPortionNumber(portionNumber + 1)} } >
                    next
                </Button>
            }
            { //Задаём количество юзеров на странице
                <div className={classes.users__on__page}>
                    <span>Users on page</span><br/>
                    <input type="number" min="1" max="30"
                               onChange={onSizeChange} defaultValue={props.pageSize}/>
                    <Button variant={"outlined"} size={"small"}
                            sx={{minWidth: 25, marginLeft: 1, marginTop: 1, height: 25}}
                            color={'inherit'}
                            onClick={onPageSizeChanged}>ok</Button>
                </div>
            }
        </div>
    );
};

export default Paginator;