

export default function NavBar({ links }) {

    return (
        <nav className="container">
            <img src="/img/dc-logo.png" alt="" />

            <ul>
                {/* <li><a href="">CHARACTERS</a></li>
                <li><a href="" className="active">COMICS</a></li>
                <li><a href="">MOVIES</a></li>
                <li><a href="">TV</a></li>
                <li><a href="">GAMES</a></li>
                <li><a href="">COLLECTIBLES</a></li>
                <li><a href="">VIDEOS</a></li>
                <li><a href="">FANS</a></li>
                <li><a href="">NEWS</a></li>
                <li><a href="">SHOP</a></li> */

                    links.map((element) =>
                        (<li><a href={element.link} className={element.active ? 'active' : ''}>{element.title} </a></li>)
                    )

                }
            </ul>
        </nav>
    )
}