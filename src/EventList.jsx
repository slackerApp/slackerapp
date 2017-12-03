
import React from 'react';
import dateFormat from 'dateformat'

const EventList = (props) => {
  // if(props.eventList.length < 0){
  //   return
  // }
  const dateConvert= (dt) =>{
    var date = new Date(dt);
    return dateFormat(date, "mmmm dS, yyyy");
  }

  const secsTodate= (secs) =>{
    var date = new Date(secs * 1000);
    return dateFormat(date, "mmmm dS, yyyy");
  }
  const getEventUrl= (eventLogoObj)=>{
    let logoCopy = Object.assign({}, eventLogoObj);
    // console.log('this is the eventLogoObj',logoCopy);
    let logo = logoCopy.url;

    return logo;
  }
  return(
    <div>
      {props.eventList.map((event) =>
        <div className="Event" key={event.id}>
          <img className="eventLogo" src={getEventUrl(event.logo)} alt={"logo"} />
          <h3>Name: {event.name.text}</h3>
          {/* <h3>{event.logo}</h3> */}
          <h4>Price: {event.is_free ? 'Free Event' : 'See Description'}</h4>
          <h4>When: {dateConvert(event.start.utc)} Ends: {dateConvert(event.end.utc)} </h4>
          {/* <p>{event.description.text}</p> */}
          <p>Forecast: {props.weatherArr.filter((dayForcast)=> dateConvert(event.start.utc) === secsTodate(dayForcast.dt)).length > 0
            ?  props.weatherArr.filter((dayForcast)=> dateConvert(event.start.utc) === secsTodate(dayForcast.dt))[0].weather[0].description.toUpperCase():"Weather not available"}</p>
          <a href={event.url}>Reserve</a>
        </div>
      )}
    </div>

  )

}


export default EventList;
