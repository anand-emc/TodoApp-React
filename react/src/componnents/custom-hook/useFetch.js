import { useEffect } from "react"

function useFetch(){
    let [products,setProducts] = useState( [] )
    let [error,setError] = useState( "" )
    let [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        let fetchApi = async()=>{
            try{
               let respones = await fetch()

               if(respones.ok){

                   let data = await respones.json()
                   setProducts(data)  
               }
               else{
                   throw new Error ("Data Not Found")
               }

            }
            catch(error){
                   setError(error.message)
            }
            finally{
                   setIsLoading(false)
            }
        }
    },[])
}

export default useFetch