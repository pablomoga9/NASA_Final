import { useState, useEffect } from 'react';
import axios from 'axios'


const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState([])

    useEffect(()=>{
        async function doFetch(){
            try{
                const response = await axios.get(url)
                setTimeout(() => {
                    setResult(response.data)
                    setLoading(false)
                }, 1000);
            } catch (err) {
                console.log(err)
            }      
        }
       doFetch();
    }, [url])
    
    return { loading, result }
}

export default useFetch;