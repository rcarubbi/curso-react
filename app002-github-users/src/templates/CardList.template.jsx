import React from 'react';
import Card from '../Card';
 

const CardListTemplate = (props) => {

    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} onRemoveCard={props.onRemoveCard} />)}
        </div>
    ); 
};

export default CardListTemplate;