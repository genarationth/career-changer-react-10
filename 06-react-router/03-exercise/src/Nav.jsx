const Navbar = () => {
    const location = useLocation();
    return (
        <ul>
            <li>{location.pathname}</li>
            <li><a href={'/'}>Main</a></li>
            <li><a href={'/login'}>Login</a></li>
            <li><a href={'/signup'}>Sign up</a></li>
            <li><a href={'/error'}>Error</a></li>

        </ul>
    )
}

export default Navbar