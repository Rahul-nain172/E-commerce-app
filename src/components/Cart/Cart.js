import cartstyle from "./Cart.module.css";
import { toast } from 'react-toastify';
import { UserContext } from "../../contexts/usercontext"
import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const { User, CartItems, total, nitems, handleAddtomyorders, handlechangeinCart,option,handleopChange,addressref,phoneref } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!User) {
            navigate("/auth/signin");
        }
    });
    const genid = () => {
        const min = 10000;
        const range = 90001;
        const randomNum = Math.floor(Math.random() * range) + min;
        return randomNum;
    }
    const AddtoOrders = () => {
        let f=1;
        if(!addressref||!addressref.current||addressref.current.value==="")
        {
            toast.warning('ENTER YOUR ADDRESS FOR THE DELIVERY!');
            f=0;
        }
        if(!phoneref||!phoneref.current||phoneref.current.value==="")
        {
            toast.warning('ENTER YOUR PHONE FOR THE DELIVERY!');
            f=0;
        }
        
        if(!f)
        {
            return;
        }
        

        let items = CartItems;
    
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        let new_obj = {
            date: `${day}-${month}-${year}`,
            order: items,
            id: genid(),
            count: nitems,
            total: total+(option==="1"?20:5),
            phone:phoneref.current.value,
            address:addressref.current.value
        }
        toast.success('ITEMS ORDERED SUCCESSFULLY!!');
        handleAddtomyorders(new_obj);
        navigate("/orders");
    }
    let empty = (CartItems === undefined || CartItems.length === 0);
    return (
        <div class="container py-5  " >

            <div class="row py-3" >
                <div class="col-9 text-center border-end border-4" style={{ height: "70vh", overflow: "scroll" }}><h1 style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} >Shopping Cart</h1>
                    <table class="table align-middle"  >
                        <thead>
                            <tr>
                                <th scope="col">Product Details</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        {!empty && <tbody class="table-group-divider">
                            {
                                CartItems.map((item) => {
                                    return (
                                        <tr >
                                            <td ><img src={item.Image} alt="Product" style={{ width: "100%", height: "auto", maxWidth: "200px" }} /></td>
                                            <td>
                                                <div class="quantity-input">
                                                    <input type="number" class="quantity"  value={item.Count} min="0" style={{width:"100px",textAlign:"center"}} onChange={(event)=>handlechangeinCart(event,item,0)}/>
                                                </div>
                                            </td>
                                            <td>${item.Price}</td>
                                            <td>${item.Count * item.Price}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>}
                    </table>
                </div>
                <div class="col border-end border-4"><h1 style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Order Summary</h1>
                    <div className={cartstyle.divider}></div>
                    <div class="row my-3">
                        <div class="col">Initial Cost</div>
                        <div class="col">${total}</div>

                    </div>
                    <div class="row">
                            <fieldset >
                                <legend>Shipping Info</legend>
                                <div class="mb-3">
                                    <label for="address" class="form-label" required>Enter Your Address</label>
                                    <textarea type="address" class="form-control" id="address" aria-describedby="address" ref={addressref} />

                                </div>
                                <div class="mb-3">
                                <label for="phone" class="form-label" required>Enter Your Phone No.</label>
                                    <input type="address" class="form-control" id="phone" aria-describedby="phone" ref={phoneref}/>
                                </div>
                                <div class="mb-3">
                                    <label for="Select" class="form-label" required>Select Delivery type</label>
                                    <select value={option }id="Select" class="form-select" onChange={(event)=>handleopChange(event)} disabled={empty}>
                                        <option value="0">Standard Delivery 5$</option>
                                        <option value="1">Faster Delivery 20$</option>
                                    </select>
                                </div>
                                <div class="row my-3 mb-3">
                                    <div class="col"><strong>Final Cost </strong></div>
                                    <div class="col"><strong>${total +(option==="1"?20:5)}</strong></div>
                                </div>

                                <button type="submit" class="btn btn-primary" id={cartstyle.button} disabled={empty} onClick={AddtoOrders}>Checkout</button>
                            </fieldset>
                    </div>

                </div>
            </div>
        </div>
    )
}