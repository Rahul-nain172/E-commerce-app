import { createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState ,useRef} from "react";
import {db, app } from "../firebaseInit";
import { setDoc ,doc,getDoc} from "firebase/firestore"; 
import data from "../assets/store";
import { toast } from 'react-toastify';
import { Spinner } from "../components/spinners";
export const UserContext = createContext();

export default function CustomUserContext({ children }) {
    const [User, setUser] = useState(null);
    const [CartItems,setCartItems]=useState([]);
    const [OrderItems,setOrderItems]=useState([]);
    const [total,settotal]=useState(0);
    const [nitems,setnitems]=useState(0);
    const [filteredData,setfilteredData]=useState([]);
    const [option,setoption]=useState(0);
    const addressref=useRef(null);
    const phoneref=useRef(null);
    const billref=useRef(null);
    const [billloader,setbillloader]=useState(false);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(User);

  const handleopChange = (event) => {
    setoption(event.target.value);
  };
    const [checkboxes,setcheckboxes]=useState({
        smartphones:false,laptops:false,televisions:false,earbuds:false
    })
    const targetRef = useRef(null);

    const [price,setprice]=useState(10000);
    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);

        });        
        return () => unsubscribe();
    }, [auth]);
    useEffect(()=>{
        setfilteredData(data);
    },[]);
    const handlepricerange=(event)=>{

        let curr_price=event.target.value
        curr_price=parseInt(curr_price);
        setprice(curr_price);
        let check=false;
        for(let i in checkboxes)
        {
            check=check|checkboxes[i];
        }

        let newdata=data.filter(item=>((!check||checkboxes[item.Category.toLowerCase()]===true)&&item.Price<=curr_price));
        setfilteredData(newdata);
    }
    const handlecheckboxes=(event)=>{

        let curr=checkboxes;
        const {name,checked}=event.target;
        curr[name]=checked;
        let mn=1e9;
        for(let i of filteredData)
        {
            mn=Math.min(mn,i.Price);
        }


        let newdata=data.filter(item=>(curr[item.Category.toLowerCase()]===true&&item.Price<=price));
        setcheckboxes(curr);
        setfilteredData(newdata)
    }
    useEffect(()=>{
        const fillmycart =async ()=>{
            
            const cartRef = doc(db, 'carts', User.uid);
            const cartSnapshot = await getDoc(cartRef);
            if(cartSnapshot.exists())
            {
                setCartItems(cartSnapshot.data().items);
                if(cartSnapshot.data().items!==undefined)
                {
                    let currt=0,currn=0;
                    for(let i=0;i<cartSnapshot.data().items.length;i++)
                    {
                        currt+=parseInt(cartSnapshot.data().items[i].Count)*parseInt(cartSnapshot.data().items[i].Price);
                        currn+=parseInt(cartSnapshot.data().items[i].Count);
                    }
                    settotal(currt);
                    setnitems(currn);
                }
            }
        };
        const fillmyorders=async()=>{
            const OrderRef = doc(db, 'orders', User.uid);
            const OrderSnapshot = await getDoc(OrderRef);
            if(OrderSnapshot.exists())
            setOrderItems(OrderSnapshot.data().items);
           
           
        };
            if(User){
            setIsLoading(true);
            fillmyorders();
            fillmycart();
            setIsLoading(false);
        }
    },[User]);
    const handleAddtoCart = async (obj) => {
        setIsLoading(true);
        const cartRef = doc(db, 'carts', User.uid);
        let cartSnapshot = await getDoc(cartRef);
        const newEntry = {
            Name: obj.Name,
            Image: obj.Image,
            Price: obj.Price,
            Count: 1,
        }
        if (cartSnapshot.exists()) {
            const oldItems = cartSnapshot.data().items || [];
            const ind = oldItems.findIndex((item) => item.Name === newEntry.Name);
            if (ind !== -1) {
                oldItems[ind].Count += newEntry.Count;
            } else {
                oldItems.push(newEntry);
            }
            await setDoc(doc(db, 'carts', User.uid), {
                items: oldItems
            });
            setCartItems([...oldItems]); // Update state with a new array
        } else {
            await setDoc(doc(db, 'carts', User.uid), {
                items: [newEntry]
            });
            setCartItems([newEntry]); // Update state with a new array
        }
        cartSnapshot = await getDoc(cartRef);
        if(cartSnapshot.data().items!==undefined)
        {
            let currt=0,currn=0;
            for(let i=0;i<cartSnapshot.data().items.length;i++)
            {
                currt+=parseInt(cartSnapshot.data().items[i].Count)*parseInt(cartSnapshot.data().items[i].Price);
                currn+=parseInt(cartSnapshot.data().items[i].Count);
            }
            toast.success('ITEM ADDED TO CART !!');
            setIsLoading(false);
            settotal(currt);
            setnitems(currn);
        }
    }
    const handlechangeinCart=async (event,obj,f)=>{
        setIsLoading(true);
        let val=event.target.value;
        const cartRef = doc(db, 'carts', User.uid);
        const cartSnapshot = await getDoc(cartRef);
        if(!cartSnapshot.exists())
        {
            setIsLoading(false);
            return;
        }
        let curr=cartSnapshot.data().items;
        let ind=curr.findIndex((item)=>item.Name===obj.Name);
        if(f)
        {
            curr[ind].Count=0;
        }
        else if(val!==undefined){
            curr[ind].Count=val;
            
        }
        if(curr[ind].Count<=0)
        {
            curr=curr.filter((item)=>item.Name!==obj.Name); 
        }
        await setDoc(doc(db, 'carts', User.uid), {
            items: curr
        });
        let currt=0,currn=0;
        for(let i=0;i<curr.length;i++)
        {
            currt+=parseInt(curr[i].Count)*parseInt(curr[i].Price);
            currn+=parseInt(curr[i].Count);
        }
       
        settotal(currt);
        setnitems(currn);
        setCartItems(curr);
        setIsLoading(false);
    }
    const handleAddtomyorders=async (obj)=>{
        setIsLoading(true);
        const OrderRef = doc(db, 'orders', User.uid);
        const OrderSnapshot = await getDoc(OrderRef);
        const cartRef = doc(db, 'carts', User.uid);
        const cartSnapshot = await getDoc(cartRef);
        if(cartSnapshot.exists())
        {
            await setDoc(doc(db, 'carts', User.uid), {
                items: []
            });
            settotal(0);
            setnitems(0);
            setCartItems([]);
        }
        if(OrderSnapshot.exists())
        {
            const oldOrders=OrderSnapshot.data().items||[];
            oldOrders.push(obj);
            await setDoc(doc(db, 'orders', User.uid), {
                items: oldOrders
            });
            setOrderItems([...oldOrders]);
        }
        else
        {
            await setDoc(doc(db, 'orders', User.uid), {
                items: [obj]
            });
            setOrderItems([obj]);
        }
        setIsLoading(false);
    }
    const handleSearch=(event)=>{
        const pre=event.target.value.toLowerCase();
        const temp=filteredData.filter(item=>item.Name.toLowerCase().startsWith(pre));
        setfilteredData(temp);
    }
    const scroll=()=>{
        targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isLoading) {
        return(
        <div className="container text-center">
        <Spinner/>
        <p>Loading</p>
        </div>);
      }
    return (
        <UserContext.Provider value={{ User, setUser,handleAddtoCart,CartItems,total,nitems,handleAddtomyorders,OrderItems,handlechangeinCart,filteredData,handleSearch,price,handlepricerange,checkboxes,handlecheckboxes,targetRef,scroll,option,handleopChange,addressref,phoneref,billloader,setbillloader,billref}}>
            {children}
        </UserContext.Provider>
    )
}