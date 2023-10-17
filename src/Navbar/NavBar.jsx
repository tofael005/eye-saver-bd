

const NavBar = () => {
    return (
        <div className="flex justify-between items-center py-4 px-3 bg-slate-300">
            <div>
                <h1>LOGO</h1>
            </div>
            <div className="flex justify-between items-center gap-7">
                <h1>ICON PROFILE</h1>
                <h1>SHOPPING CART</h1>
            </div>
        </div>
    );
};

export default NavBar;