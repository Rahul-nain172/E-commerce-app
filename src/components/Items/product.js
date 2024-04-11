import productstyle from "./product.module.css"
import store from "../../assets/store"
import { useParams } from "react-router-dom";
import { useContext,useEffect } from "react";
import { UserContext } from "../../contexts/usercontext";
import { Carousel } from "./Carousel";
import { useNavigate } from "react-router-dom";
import Itemstyle from "./Itemstyle.module.css"

export const Product = () => {
    const {User,handleAddtoCart} = useContext(UserContext);
    const navigate=useNavigate();
    let { name } = useParams();
    let ind = store.findIndex((item)=>item.Name===name);
    const obj = store[ind];
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [name])
      useEffect(() => {
        window.scrollTo(0, 0)
      })
    
    return (<>
        <div class="container my-5" >
            <div class="row">
                <div class="col-6 ">
                    <div class="card" style={{ width: "100%", height: "28rem", border: "none", justifyContent: "center", alignItems: "center" }}>
                        <img style={{ width: "60%", height: "auto", objectFit: "cover" }} src={obj.Image} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div className={productstyle.Productinfo}>
                        <div className={productstyle.details}>
                            <p>{obj.Details}</p>
                            <p style={{fontSize:"1.7rem"}}>$&nbsp; {obj.Price} &nbsp;<button type="button" class="btn btn-warning" style={{width:"20rem",fontSize:"1.5rem"}} onClick={()=>{(User)?handleAddtoCart(obj):navigate("/auth/signin")}}><b>ADD TO CART</b></button></p>
                        </div>
                        <div className={productstyle.specdiv}>
                            <b style={{ fontSize: "1.7rem" }}>SPECIFICATIONS:</b>
                            <ul className={productstyle.specs}>
                                {
                                    Object.entries(obj.Specs).map(([key, value]) => (
                                        <div key={key}>
                                            <li> <strong>{`${key}`}</strong>: {`${value}`}</li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
            <h1 className={Itemstyle.underline} >Related Products</h1>
            <Carousel Category={obj.Category}/>
            </div>
            </div>        
    </>)
}