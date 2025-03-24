export default function Card({ title, image }) {

    console.log(image);

    return (
        <div className="col-2">
            <div className="card">
                <div className="card-figure">
                    <img src={image} alt="" className="cardImg" />
                </div>
                <h3 className="tilte">{title}</h3>
            </div>
        </div>
    )
}