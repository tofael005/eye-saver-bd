

const NavBar = () => {
    return (
        <div className="flex justify-between items-center bg-slate-300">
            <div>
                <img className="w-[75px] " src="/src/assets/png.png" alt="" />
            </div>
            <div className="flex justify-between items-center gap-7">
                <h1>ICON PROFILE</h1>
                <h1>SHOPPING CART</h1>
            </div>
        </div>
    );
};

export default NavBar;