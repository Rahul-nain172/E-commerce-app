import { Itemcard } from './ItemCard';
import Itemstyle from "./Itemstyle.module.css"
import { useContext,useEffect } from 'react';
import { UserContext } from '../../contexts/usercontext';

export const Items = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const { handleSearch, filteredData,price,handlepricerange,handlecheckboxes,targetRef } = useContext(UserContext);
    return (
        <div class="container-fluid" ref={targetRef}>
            <div class="row my-1 py-3">
                <h1 className={Itemstyle.underline} >POPULAR PRODUCTS</h1>
            </div>
            <div class="row" style={{ height: "4rem" }}>
                <input type='text' placeholder='SEARCH FOR PRODUCTS' style={{ border: "none", height: "100%", textAlign: "center" ,fontSize:"1.7rem"}} onChange={handleSearch} />
            </div>
            <div class="row py-3">
                <div id={Itemstyle.filter} class="col-3 py-5 ">
                    <h2>FILTER</h2>
                    <form class="py-3">
                        <label for="price">
                            PRICE : {price}
                        </label>
                        <input className={Itemstyle.pricerange} type="range" name="price" min="1" max="20000" value={price}  step="100" style={{ width: "100%" }}  onChange={handlepricerange}/>

                        <h2>CATEGORIES</h2>
                        <div className={Itemstyle.category}>
                            <div >
                                <input type="checkbox" name="smartphones" onChange={handlecheckboxes}/>
                                <label for="smartphones">SmartPhones</label>
                            </div>
                            <div>
                                <input type="checkbox" name="laptops" onChange={handlecheckboxes}/>
                                <label for="laptops">Laptops</label>
                            </div>
                            <div >
                                <input type="checkbox" name="televisions" onChange={handlecheckboxes}/>
                                <label for="televisions">Television</label>
                            </div>
                            <div >
                                <input type="checkbox" name="earbuds" onChange={handlecheckboxes}/>
                                <label for="earbuds">Earbuds</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col">
                    {/* <div class="row " style={{ height: "4rem" }}>
                        <input type='text' placeholder='SEARCH FOR PRODUCTS' style={{ border: "none", height: "100%" }} onChange={handleSearch} />
                    </div> */}
                    <div class="row py-5">
                        {
                            filteredData.map((obj, ind) => {
                                return (
                                    <Itemcard
                                        obj={obj} ind={ind} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}