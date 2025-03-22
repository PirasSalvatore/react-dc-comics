import comics from '../assets/comics'
import Card from './Card'

export default function Album() {
    //logic

    const cards = comics.map((element) => {
        return (<Card title={element.series} image={element.thumb} />)
    })

    console.log(cards);


    return (
        <div className="album">
            <div className="container">
                <div className="row">
                    {cards}
                </div>
            </div>
        </div>
    )
}