import { FaBars } from 'react-icons/fa';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='navbar'>
                <h1 className='nav-head'>rj group</h1>

                {/* Desktop nav */}
                <div className='nav-links desktop'>
                    <button>settings</button>
                    <button>games</button>
                </div>

                {/* Hamburger */}
                <FaBars
                    className="hamburger"
                    onClick={() => setOpen(prev => !prev)}
                    size={24}
                />
            </div>

            {/* Mobile nav (conditionally rendered) */}
            {open && (
                <div className="mobile-nav">
                    <button>games</button>
                    <button>settings</button>
                </div>
            )}
        </>
    );
};

export default Navbar;
