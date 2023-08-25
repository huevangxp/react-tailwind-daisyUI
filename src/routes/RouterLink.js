const provite = ({ children }) => {
    const auth = false;
    const token = localStorage.getItem('token');
    if (token) {
        auth = true;
    }
    return auth ? (
        <>
            <CustomNavbar />
            {children}
        </>
    ) : (
        <>
            <Navigate to='/' />
        </>
    )
}