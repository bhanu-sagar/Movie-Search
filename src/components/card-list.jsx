import React from 'react';
import { cardsList, SAMPLE_BOX, DONE } from './helperFile';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CardList() {

    const handleFooter = (pathName, buttonName) => {
        return (
            <Link to={{ pathname: pathName }}  >
                <Button variant="contained" color="primary">{buttonName}</Button>
            </Link>
        )
    }

    const handleTableData = () => {
        return (
            cardsList.map(item => {
                return (
                    <div className="sub_cards">
                        <h1 id="sub_card_label">{item.label}</h1>
                        <p id="sub_card_description">{item.description}</p>
                    </div>
                )
            }))
    }

    return (
        <div className="card_container">
            <div className="card_title">{SAMPLE_BOX}</div>
            {handleTableData()}
            <span id="button_adjustment">
                {handleFooter('/', DONE)}
            </span>
        </div>
    )
}
export default CardList;