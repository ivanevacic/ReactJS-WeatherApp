import React from 'react';

//  Stateless component
    //  If we have one argument we don't need to use ()
const Weather = props => (  
    //  Can be written like this is we return one single element 
        <div>
            {/* If props.city returns true,show City and Country on the page  */}
            { props.city && <p>City: { props.city }</p> }
            { props.country && <p>Country: { props.country }</p> }
            { props.temperature && <p>Temperature: { props.temperature }</p> }
            { props.humidity && <p>Humidity: { props.humidity }</p> }
            { props.description && <p>Description: { props.description }</p> }
            { props.error && <p>{ props.error }</p> }                                       
        </div>
    );

export default Weather;