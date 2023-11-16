import './Catalog.css';
import React, { useEffect, useState} from 'react';


function Catalog()  {
    return(
    
    <div className="fetchdiv">
            {imagenes.events.map((event) => {
                return (

                    <div className='card' key={event.id}>
                        <img className="eventImage" src={event.imagen} alt={event.name} />
                        <p>€{event.precio}</p>
                        
                    </div>

                );
            })}
            </div>
    )
    
    return (
        <div className='card'>
            <img className='eventImage' />
            <div className='eventText'>
                <h4 className='eventName'>Event Name</h4>
                <p className='date'>Date</p>
            </div>
        </div>

    )
}

export default Catalog;

