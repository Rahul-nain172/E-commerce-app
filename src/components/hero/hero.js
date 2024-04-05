import emart1 from "../../assets/images/emart1.webp"
import herostyle from "./herostyle.module.css"
import { Items } from "../Items/Items.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/usercontext";
export const Hero = () => {
     const{scroll}=useContext(UserContext);
    return (
        
        <>
        <div className={herostyle.hero}>
            <div class="container my-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5">
                    <div class=" col-10 mx-auto col-sm-8 col-lg-6">
                        <img id="image" src={emart1} alt="" loading="lazy" style={{height:"100%",width:"100%"}}></img>
                    </div>
                    <div class="col-lg-6">
                        <div class="lc-block mb-3">
                            <div editable="rich">
                                <h2 class="fw-bold display-5">EMART</h2>
                               <p class="fst-italic"> Empower Your Shopping Experience, Anywhere, Anytime.</p>
                            </div>
                        </div>

                        <div class="lc-block mb-3">
                            <div editable="rich">
                                {/* <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                            </p> */}
                            </div>
                        </div>

                        <div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                            <button class="btn btn-primary px-4 me-md-2"   onClick={scroll}>Shop Now</button>
                            <button class="btn btn-outline-secondary px-4" >Read More</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Items/>
        </>

    );
}