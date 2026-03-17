import axios from "axios"
import { useEffect, useState } from "react"
const GetProducts = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")
    //path to images 
    const img_url='https://malombeswala.alwaysdata.net/static/images/'
    // function to get all the products
    const getproducts = async () => {
        setLoading('please wait....')
        try {
            //connection to back end Api
            const response = await axios.get('https://philipswala.alwaysdata.net/api/get_product_details')
            // update the products hook with data from Api
            setProducts(response.data)
            setLoading("")

        } catch (error) {
            setLoading("")
            setError('something went wrong')
        }
    }
    useEffect(() => {
        getproducts()
    },[])//empty dependancy to ensure get products function runs when component mounts
    return (
        <div className="row">
             <h1 className="display-4 mt-3"><b>Available Products</b></h1>
             {loading}
             {error}
             {products.map((product)=>(

                 <div className="col-md-3 mb-4 text-center">
                <div className="card shadow">
                    <img src={img_url + product.product_photo} alt="" className="producy_img mt-4" />
                    <div className="card-body">
                        <h5 className="mt-2">{product.product_name}</h5>
                        <p className="text-muted">{product.product_description}</p>
                        <b className="text-warning">{product.product_cost}</b>
                        <button className="btn btn-dark w-100">Purchase Now</button>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
    )
}
export default GetProducts