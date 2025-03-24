import comics from '../assets/comics'
import Card from './Card'

export default function Album() {
    //logic

    const cards = comics.map((element, index) => {
        return (<Card key={index} title={element.series} image={element.thumb} />)
    })

    console.log(cards);


    return (
        <>
            <div className='btn-category-container col-12'>
                <button type="button" className='btn-category'>CURRENT SERIES</button>
            </div>

            <div className="album col-12">
                <div className="container">
                    <div className="row">
                        {cards}
                    </div>
                </div>
            </div>

            <div className='btn-load-container col-12'>
                <button type="button" className='btnLoad'>LOAD MORE</button>
            </div>
        </>
    )
}