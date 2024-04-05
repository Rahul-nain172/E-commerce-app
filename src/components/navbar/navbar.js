import house from "../../assets/images/house.png"
import login from "../../assets/images/login.png"
import logout from "../../assets/images/logout.png"
import cart from "../../assets/images/cart.png"
import myorders from "../../assets/images/myorders.png"
import { useContext } from "react";
import { UserContext } from "../../contexts/usercontext";
import { signOut, getAuth } from "firebase/auth";
import { app } from "../../firebaseInit";
import { Link, Outlet } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Navbar = () => {
    const Userdata = useContext(UserContext)
    const auth = getAuth(app);
    const user = Userdata.User;
    const handlelogout = async () => {
        try {
            await signOut(auth);
            toast.success('You are Signed Out!!');
            // Sign-out successful.
        }
        catch (error) {
            console.log(error);
        };
    }
    return (
        <div class="container-fluid">
            <div class="row sticky-top" >
            <nav  class="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand ">EMART</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item mx-2 px-3">
                                <Link to="/" class="nav-link " aria-current="page">
                                    <img src={house} alt="home"/>&nbsp;Home
                                </Link>
                            </li>
                            {user&&<li class="nav-item mx-2 px-3">
                                <Link to="/orders" class="nav-link" href="#">
                                    <img src={myorders} alt="orders"/>&nbsp;My orders
                                </Link>
                            </li>}
                            {user&&<li class="nav-item mx-2 px-3">
                                <Link to="/cart" class="nav-link" href="#">
                                    <img src={cart} alt="cartlogo"></img>&nbsp; Cart</Link>
                            </li>}
                            {user&&<li class="nav-item mx-2 px-3" style={{ alignItems: "center" }}>
                                <button type="button" class="btn btn-light" onClick={handlelogout}>
                                    <img src={logout} alt="logout"></img>Log out
                                </button>
                            </li>}
                            {!user&&<li class="nav-item mx-2 px-3" style={{ alignItems: "center" }}>
                                <Link to="/auth/signin"><button type="button" class="btn btn-light">
                                    <img src={login} alt="login"></img>Sign in
                                </button>
                                </Link>
                            </li>}
                            
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
            <div class="row">
            <Outlet />
            </div>
            <div class="row">
            <div class="container-fluid  text-bg-dark p-3" data-bs-theme="dark">
                <div class="row ">
                    <div class="col-4"><h2>About Us</h2>
                        <p>At EMART, we're passionate about providing you with the latest and greatest in electronic gadgets and devices. Whether you're a tech enthusiast, a casual user, or a professional, we strive to offer a curated selection of high-quality products to meet your needs.</p></div>
                    <div class="col-4"><h2>Contact</h2>
                        <p><i class="fa-solid fa-address-book"></i>&nbsp; 123, ABC Street
                            City: Pune
                            State: Maharashtra
                            Pin Code: 411001
                            India</p>
                        <p><i class="fa-solid fa-phone"></i>&nbsp; +91 98765 43210</p>
                        <p><i class="fa-solid fa-envelope"></i>&nbsp; contact@emart.com</p>
                    </div>
                    <div class="col-2"><h2>Category</h2>
                    <p>SmartPhones</p>
                    <p>Laptops</p>
                    <p>Television</p>
                    <p>Earbuds</p></div>
                    <div class="col-2"><h2>Pages</h2>
                    <p>Home</p>
                    <p>About</p>
                    <p>Returns</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p></div>
                </div>
            </div>
        </div>
        </div>
    )
}