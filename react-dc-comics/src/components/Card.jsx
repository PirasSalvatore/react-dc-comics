export default function Card({ title, image }) {

    console.log(image);

    return (
        <div className="col-2">
            <div className="card">
                <img src={image} alt="" className="cardImg" />
                <h3 className="tilte">{title}</h3>
            </div>
        </div>
    )
}