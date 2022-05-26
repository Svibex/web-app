import React from "react";

const StartPage: React.FC = () => {
    return (
        <div className={'startPage'}>
            <div className={'startPageShadow'}>
                <div className={'startPageTitle'}>Twenty One Pilots</div>
                <div className={'startPageDate'}>22.02.23 в 21:00</div>
            </div>
            <div className={'startPageBtns'}>
                <button className={'startPageButton'}>&lt;</button>
                <button className={'startPageButton'}>Купить билет</button>
                <button className={'startPageButton'}>&gt;</button>
            </div>
        </div>
    )
}

export default StartPage;