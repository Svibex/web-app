import React from "react";
import CardsList from "./CardsList";

const StartPage: React.FC = () => {
    return (
        <div className='startPage'>
            <div className='startPageBackground'>
                <div className='startPageShadow'> </div>
                    <div className='startPageTitle'>Twenty One Pilots</div>
                    <div className='startPageDate'>22.02.23 в 21:00</div>
                <div className='startPageBtns'>
                    <button className='startPageButton buttonArrow'>&lt;</button>
                    <button className='startPageButton buttonProfile'>Купить билет</button>
                    <button className='startPageButton buttonArrow'>&gt;</button>
                </div>
            </div>
            <div className='wrapper'>
                <div className='startPageTickets'>
                    <h2>Купили билеты</h2>
                    <button className='startPageTicketsButton'>Смотреть всех</button>
                </div>
                <CardsList />
            </div>
            <div>
                <div className='wrapper startPageInformation'>
                    <div className='startPagePlace'>
                        <h2>О площадке</h2>
                        <div className='startPageAboutPlace'>
                            <div className='startPageAboutPreview'>
                                Современная площадка для проведения
                                концертов и других мероприятий любой
                                сложности.</div>
                            <div className='startPageAboutPlaceText'>
                                Мы предоставляем всю необходимую для
                                организаторов инфраструктуру и готовые
                                решения под все основные задачи любого
                                события, а также современное оборудование,
                                соответствующее самым высоким мировым
                                стандартам. </div>
                        </div>
                    </div>
                    <div className='startPageApplication'>
                        <div className='startPageApplicationTitle'>
                            Оставить заявку на проведение концерта</div>
                        <textarea placeholder='Расскажите о вашем предложении'/>
                        <button className='startPageApplicationButton cardButton'>Отправить</button>
                    </div>
                </div>
            </div>
            <div className='wrapper startPageGroup'>
                <h2 className='startPageGroupTitle'>О группе</h2>
                <div className='startPageAboutGroup'>
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