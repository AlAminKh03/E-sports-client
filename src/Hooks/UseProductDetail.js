import { useEffect, useState } from "react"

const UseProductDetail = (productId) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `https://lit-chamber-03250.herokuapp.com/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    return [product, setProduct]

}
export default UseProductDetail