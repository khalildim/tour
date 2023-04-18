import "./TripStyles.css";
function TripData(props) {
  return (
    <div className="t-Card">
      <div className="t-image">
        <img alt="img" src={props.img1} />
      </div>
      <h4>{props.heading}</h4>
      <p> {props.text} </p>
    </div>
  );
}
export default TripData;
