import NavBar from './NavBar'
import Jumbotron from './Jumbotron'

export default function Header({ links }) {

    //logic header

    //markup
    return (
        <header>
            <NavBar links={links} />
            <Jumbotron />
        </header>
    )
}