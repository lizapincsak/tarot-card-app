import React from 'react';

function TarotCards(props){
    return(
        <div>
            <h1>Discover your Daily Medicine</h1>
            {props.tarot.map((item) => (
                <div key={item.id} className="tarot">
                    {/* <img src={tarot.img} alt={tarot.nam}/> */}
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.type}</p>
                        <p>{item.description}</p>
                        <p>{item.img}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TarotCards;