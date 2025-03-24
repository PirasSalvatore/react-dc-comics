export default function Menu() {
    //logic

    //markup
    return (
        <div className="menu col-12">
            <div className="container">
                <ul>
                    <li>
                        <img src="/img/buy-comics-digital-comics.png" alt="" />
                        <a href="">DIGITAL COMICS</a>
                    </li>
                    <li>
                        <img src="/img/buy-comics-merchandise.png" alt="" />
                        <a href="">DS MERCHANDISE</a>
                    </li>
                    <li>
                        <img src="/img/buy-comics-subscriptions.png" alt="" />
                        <a href="">SUBSCRIPTION</a>
                    </li>
                    <li>
                        <img id="shopLocator" src="/img/buy-comics-shop-locator.png" alt="" />
                        <a href="">COMIC SHOP LOCATOR</a>
                    </li>
                    <li>
                        <img src="/img/buy-dc-power-visa.svg" alt="" />
                        <a href="">DC POWER VISA</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}