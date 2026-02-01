import location from "../Data/placeholder.png"

export default function Card(props){
    return (
        <div className="card">
            <div className="main-image_container">
                <img className="main_image" 
                src={props.img.src} 
                alt={props.img.alt} />
            </div>
            <div className="card-content">
                <span>

                <img className="marker" src={location} alt="map marker icon" />
                <span>{props.country}  </span>
                <a href={props.googleMapsLink}>View on Google Map</a>
                </span>
                <h2>{props.title}</h2>
                <p>{props.dates}</p>
                <p>{props.text}</p>
            </div>
      </div>
    )
}
