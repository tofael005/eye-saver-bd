import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
    return (
        <div className="flex justify-between items-center bg-slate-300">
            <div>
                <img className="w-[75px] " src="/src/assets/png.png" alt="" />
            </div>
            <div className="flex justify-between items-center gap-7">
                <CgProfile />
                <AiOutlineShoppingCart />
            </div>
        </div>
    );
};

export default NavBar;