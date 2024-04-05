
import { UserContext } from "../../contexts/usercontext"
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import emart from "../../assets/images/emart-high-resolution-logo.png";
import billstyle from "./Bill.module.css";

export const Bill = () => {
    const navigate = useNavigate();
    const { User, OrderItems, billloader, setbillloader, billref } = useContext(UserContext);
    let { ind } = useParams();
    ind = parseInt(ind);
    const obj = OrderItems[ind];
    useEffect(() => {
        console.log("yes");
        if (!User) {
            navigate("/auth/signin");
            return;
        }

    }, [User, navigate]);
    const DownloadPDF = async () => {
        setbillloader(true);
        const capture = document.querySelector('.container');
        const canvas = await html2canvas(capture);
        const imgdata = canvas.toDataURL('img/png');
        const pdf = new jsPDF('l', 'mm', 'a4');
        const componentHeight = pdf.internal.pageSize.getHeight();
        const componentWidth = pdf.internal.pageSize.getWidth();
        pdf.addImage(imgdata, 'PNG', 0, 0, componentWidth, componentHeight);   
        setbillloader(false);
        pdf.save(`bill${obj.id}.pdf`);
    }
    return (

        <div class="container-fluid text-center">
            {User && <div class="row">
                <div class="container my-5" style={{ width: "60vw" }} ref={billref}>
                    <div class="row">
                        <div class="col-5" style={{ textAlign: "left" }}>
                            <p><img alt="logo" src={emart} style={{ width: "20%", height: "auto" }} /></p>
                            <p><h1><strong>Invoice</strong></h1></p>
                        </div>
                        <div class="col-1">
                        </div>
                        <div class="col" style={{ textAlign: "right" }}>
                            <p style={{ margin: "0" }}><h3>EMART</h3></p>
                            <p style={{ margin: "0" }}>123, ABC Street City: Pune State: Maharashtra Pin Code: 411001 India</p>
                            <p style={{ margin: "0" }}>+91 98765 43210</p>
                            <p style={{ margin: "0" }}>contact@emart.com</p>
                        </div>
                    </div>
                    <div className={billstyle.divider}></div>
                    <div class="row py-3">
                        <div class="col-8" style={{ textAlign: "left" }}>
                            <p style={{ margin: "0" }}>Bill to:</p>
                            <p style={{ margin: "0" }}><h2>{User.displayName}</h2></p>
                            <p style={{ margin: "0" }}>{obj.address}</p>
                            <p style={{ margin: "0" }}>{obj.phone}</p>
                        </div>
                        <div class="col " style={{ textAlign: "right" }}>
                            <p style={{ margin: "0" }}><b>INVOICE #</b></p>
                            <p style={{ margin: "0" }}>{obj.id}</p>
                            <p style={{ margin: "0" }}><b>DATE</b></p>
                            <p style={{ margin: "0" }}>{obj.date}</p>
                        </div>
                    </div>
                    <div className={billstyle.divider}></div>
                    <div class="row">
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th scope="col">ITEMS</th>
                                    <th scope="col">DESCRIPTION</th>
                                    <th scope="col">QUANTITY</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">TAX</th>
                                    <th scope="col">AMOUNT</th>

                                </tr>
                            </thead>
                            <tbody>
                                {obj.order.map((item, ind) => {
                                    return (<tr>
                                        <td>{ind + 1}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Count}</td>
                                        <td>$&nbsp;{item.Price}</td>
                                        <td>0%</td>
                                        <td>$&nbsp;{item.Price * item.Count}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className={billstyle.divider} style={{ marginTop: "30px", marginBottom: "30px" }}></div>
                    <div class="row">
                        <div class="col-8" style={{ textAlign: "left" }}>
                            <b>NOTE:</b>
                            <p>Thank you for shopping with us! Your satisfaction is our priority. For any inquiries or assistance, please don't hesitate to contact us at our customer support </p>
                        </div>
                        <div class="col" style={{ textAlign: "right" }}>
                            <p>Total:</p>
                            <h3>$ &nbsp;{obj.total}</h3>
                        </div>
                    </div>

                </div>
            </div>}
            {User&&
            <div class="row" style={{justifyContent:"center"}}>
                <button type="button" class="btn btn-primary" disabled={!(billloader === false)} onClick={DownloadPDF} style={{maxWidth:"200px"}}>
                    {billloader ? (<span>Downloading</span>) : (<span>Download PDF</span>)}
                </button>
            </div>
            }
            
        </div>
    )
}



