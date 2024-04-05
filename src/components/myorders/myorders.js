import { Link } from "react-router-dom";
import ordertyle from "./myorders.module.css"
import { UserContext } from "../../contexts/usercontext"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import download from "../../assets/images/downloads.png"
import Bill from "../Bill/Bill";


export const Myorder = () => {
    const { User, OrderItems } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!User) {
            navigate("/auth/signin");
        }
    })
    let empty = (OrderItems == undefined || OrderItems.length == 0);
    console.log(OrderItems);
    return (<>
        <div className={ordertyle.Orders}>
            <h1> Your Orders </h1>
            <div className={ordertyle.order_details}>
                <table>
                    <thead>
                        <tr>
                            <th>ORDER ID</th>
                            <th>ORDERED ON</th>
                            <th>ITEM COUNT</th>
                            <th>PRICE</th>
                            <th>BILL</th>
                        </tr>
                    </thead>
                    {!empty && <tbody>
                        {
                            OrderItems.map((obj, ind) => {
                                return (
                                    <tr>
                                        <td>{obj.id}</td>
                                        <td>{obj.date}</td>
                                        <td>{obj.count}</td>
                                        <td>{obj.total}</td>
                                        <td>
                                            <div> 
                                            <img src={download} alt="downloadicon"></img>
                                            <PDFDownloadLink className={ordertyle.downloadlink} document={<Bill data={obj}/>}
                                                fileName="Bill.pdf">Download Invoice</PDFDownloadLink>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    }
                </table>
            </div>
            <a href="https://www.flaticon.com/free-icons/save" title="save icons">Save icons created by Bharat Icons - Flaticon</a>
        </div>

    </>);
}
