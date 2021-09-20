const Navbar = (props) => {
    const navigation = (e) => {
        console.log(e.target.textContent);
        props.setPageRender(e.target.textContent)
    }
    return (
        <header>
            <h1>
                <a onClick={navigation} href="home" >Clayton Andersen</a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a onClick={navigation}>About Me</a>
                    </li>
                    <li>
                        <a onClick={navigation}>My Showcase</a>
                    </li>
                    <li>
                        <a onClick={navigation}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Navbar