import React from "react";
import {Link} from "react-router-dom";
import CardsList from "../../components/CardsList/CardsList";
import './StartPage.css'

const StartPage: React.FC = () => {
    return (
        <div>
            <div className='startPage'>
                <div className='startPage__shadow'> </div>
                    <div className='startPage__title'>Twenty One Pilots</div>
                    <div className='startPage__date'>22.02.23 в 21:00</div>
                <div className='startPage_navigation'>
                    <button className='startPage__button startPage__button-arrow'>&lt;</button>
                    <button className='startPage__button'>Купить билет</button>
                    <button className='startPage__button startPage__button-arrow'>&gt;</button>
                </div>
            </div>
            <div className='startPage__tickets'>
                <div className='startPage__tickets-title'>
                    <h2>Купили билеты</h2>
                    <Link to="/users">
                        <button className='startPage__tickets-button'>Смотреть всех</button>
                    </Link>
                </div>
                <CardsList number='4' />
            </div>
            <div>
                <div className='startPage__information'>
                    <div>
                        <h2>О площадке</h2>
                        <div className='startPage__information-place'>
                            <div className='startPage__information-place-preview'>
                                Современная площадка для проведения
                                концертов и других мероприятий любой
                                сложности.</div>
                            <div className='startPage__information-place-text'>
                                Мы предоставляем всю необходимую для
                                организаторов инфраструктуру и готовые
                                решения под все основные задачи любого
                                события, а также современное оборудование,
                                соответствующее самым высоким мировым
                                стандартам. </div>
                        </div>
                    </div>
                    <div className='startPage__application'>
                        <div className='startPage__application-title'>
                            Оставить заявку на проведение концерта</div>
                        <textarea className='startPage__application-textarea'
                            placeholder='Расскажите о вашем предложении'/>
                        <button className='startPage__application-button'>Отправить</button>
                    </div>
                </div>
            </div>
            <div className='startPage__group'>
                <h2>О группе</h2>
                <div className='startPage__group-text'>
                    Twenty One Pilots — американский дуэт из
                    Колумбуса, штат Огайо. Группа образовалась
                    в 2009 году и на данный момент состоит из
                    Тайлера Джозефа и Джоша Дана. Коллектив
                    самостоятельно выпустил два альбома:
                    Twenty One Pilots в 2009 и Regional at
                    Best в 2011.</div>
            </div>
        </div>
    )
}

export default StartPage;