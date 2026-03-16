import axios from "axios"
import React,{ useState } from "react"

const AddProducts = () => {
    const [product_name, setproduct_name] = useState("")
    const [product_description, setproduct_description] = useState("")
    const [product_cost, setproduct_cost] = useState("")
    const[product_photo,setproduct_photo]=useState("")
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const submit = async (e) => {
        e.preventDefault()
        setLoading('please wait...')
        try {
            const data = new FormData()
            data.append('product_name', product_name)
            data.append('product_description', product_description)
            data.append('product_cost', product_cost)
            data.append('product_photo',product_photo)
            const response = await axios.post('https://philipswala.alwaysdata.net//api/add_product', data)
            setLoading('')
            setproduct_name('')
            setproduct_description('')
            setproduct_cost('')
            setSuccess(response.data.message)
        } catch (error) {
            setLoading('')
            setError(error.message)

        }
    }
    return (
        <div className="d-flex justify-content-center row">
            <div className="col-md-6 p-2 mt-4 card shadow">
                {success}
                {loading}
                {error}
                <h1 className="display-4 text-center"><b>Upload Products</b></h1>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Enter product name" className="form-control" required value={product_name} onChange={(e) => setproduct_name(e.target.value)} /> <br />{product_name}
                    <textarea type="text" placeholder="Describe your products" className="form-control" required value={product_description} onChange={(e) => setproduct_description(e.target.value)}></textarea><br />{product_description}
                    <input type="number" placeholder="Enter Product Cost" className="form-control" required value={product_cost} onChange={(e) => setproduct_cost(e.target.value)} /> <br />{product_cost}
                    <b>Browse/Upload Product Images</b>
                    <input type="file" className="form-control"required accept="images/*" onChange={(e)=>setproduct_photo(e.target.files[0])}/> <br />
                    <button type="submit" className="btn btn-primary">Upload Product</button>
                </form>
            </div>
        </div>
    )
}
export default AddProducts