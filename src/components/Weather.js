import React from 'react';

//  Stateless component
    //  If we have one argument we don't need to use ()
const Weather = props => (  
    //  Can be written like this is we return one single element 
        <div className="weather__info">
            {/* If props.city returns true,show City and Country on the page  */}
            { 
                props.city && <p className="weather__key">City: 
                <span className="weather__value"> { props.city }</span></p> 
            }
            { 
                props.country && <p className="weather__key">Country: 
                <span className="weather__value"> { props.country } </span></p> 
            }
            { 
                props.temperature && <p className="weather__key">Temperature: 
                <span className="weather__value"> { props.temperature } °C</span></p> 
            }
            { 
                props.humidity && <p className="weather__key">Humidity: 
                <span className="weather__value"> { props.humidity } %</span></p> 
            }
            { 
                props.description && <p className="weather__key">Description: 
                <span className="weather__value"> { props.description }</span></p> 
            }
            { 
                props.error && <p className="weather__error">{ props.error }</p> 
            }                                       
        </div>
    );

export default Weather;