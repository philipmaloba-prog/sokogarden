import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const MpesaPayment = ()=>{
    const[message,setmessage]=useState("")
    const[phone,setPhone]=useState("")
    const{product}=useLocation().state || {}
    const img_url='https://malombeswala.alwaysdata.net/static/images/'
     const submit= async (e) => {
        e.preventDefault()
        setmessage('please wait...')
        try {
            const data=new FormData()
            data.append('phone',phone)
            data.append('amount',product.product_cost)
            //connection to back end Api
            const response = await axios.post('https://philipswala.alwaysdata.net/api/get_product_details',data)
            // update the products hook with data from Api
            setmessage(response.data.message)

        } catch (error) {
        
        }
    }
    return(
        <div className="row">
          <div className="container col-md-6 mt-5">
            <div className="card p-3 mx-auto">
                <h1 className="display text-bold" >Lipa Na M-pesa </h1>
                <img src={img_url + product.product_photo} alt="product" className="img_fluid mb-2" />
                <p class="mb-1"><strong>product :</strong>{product.product_name}</p>
                <p class="mb-2"><strong>Price :</strong>KES {product.product_cost}</p>
               <form onSubmit={submit}>
                <input type="text" placeholder="Enter your phone number,254..." className="form-control"required value={phone} onChange={(e)=>setPhone(e.target.value)}/> <br /> {phone}
                <button type="submit" className="btn btn-primary w-100">Pay Now</button> <br /> 
                </form>
                <p className="text-center mt-2">{message}</p>
            </div>
        </div>
        </div>
    )
}
export default MpesaPayment