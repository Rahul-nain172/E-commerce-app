import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/usercontext"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Myorder = () => {
    const { User, OrderItems } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!User) {
            navigate("/auth/signin");
        }
    });
    let empty = (OrderItems ===undefined || OrderItems.length === 0);
    return (
        <div class="container" style={{width:"80vw",minHeight:"80vh"}}>
            <div class="row text-center"><h1 style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Your Orders</h1></div>
            <div class="row py-5">
            <div class="table-responsive">
                <table class="table" >
                    <thead>
                        <tr>
                            <th scope="col">ORDER ID</th>
                            <th scope="col">ORDERED ON</th>
                            <th scope="col">ITEM COUNT</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">BILL</th>
                        </tr>
                    </thead>
                    {!empty&&<tbody class="table-group-divider">
                    {
                            OrderItems.map((obj, ind) => {
                                return (
                                    <tr>
                                        <td>{obj.id}</td>
                                        <td>{obj.date}</td>
                                        <td>{obj.count}</td>
                                        <td>{obj.total}</td>
                                        <td>
                                            <Link to={`/bill/${ind}`} style={{color:"black"}}> 
                                            <i class="fa-solid fa-eye"></i>&nbsp;
                                            <span>View Invoice</span>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>}
                </table>
                </div>
            </div>
        </div>
    )
}