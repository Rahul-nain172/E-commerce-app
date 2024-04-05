
import { Link } from "react-router-dom";
export const Itemcard = (props) => {

    return (

        <Link to={`/products/${props.obj.Name}`} class="card mx-3 my-3" style={{ width: "20rem", height: "33rem", justifyContent: "center" ,fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>
            <img src={props.obj.Image} class="card-img" alt="..." style={{ height: "auto", width: "100%", objectFit: "cover" }} />
            <div class="card-body position-absolute bottom-0 " >
                <p class="card-text">{props.obj.Name}</p>
                <p class="card-text">$ {props.obj.Price}</p>
            </div>
        </Link>
    );
}