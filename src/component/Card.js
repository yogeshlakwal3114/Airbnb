export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
         <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={props.img} width="200px" height="250px"/>
            <div className="card--stats">
                <img className="card--star" src="../images/star.png" width="14px" height="14px" />
                <span>{props.rating}</span>
                <span className="gray"> ({props.reviewCount}) - </span>
                <span className="gray">{props.location}</span>
            </div>   
            <p>{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p> 
         </div>
    )
}