type Props = {
    name: string | null | undefined 
    image: string | null | undefined 
    email: string | null | undefined    
    phone?: string     
    TotalBuyingPrice?: number
}
export const Add_User = async ({name, image , email , TotalBuyingPrice = 0  }: Props)  => {
  const FoodImage = ""
  const Price= ""
  const id = ""
  const Foodname =""
   try{
  const response = await fetch("http://localhost:4000/graphql",{
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       "query":`mutation { 
        addUser (
          name: "${name}",   
          userProfile: "${image}", 
          email: "${email}",  
          TotalBuyingPrice:${TotalBuyingPrice}  
          Userstatus: New  
          UserBuyingProduct: {}
       ) {         
        name     
        id
        userProfile
        email        
        Userstatus
        TotalBuyingPrice  
       UserBuyingProduct {
         id
         FoodImage
         Price
         name
       }          
         }
    }`

       
     })
    })
    const result = await response.json()  
    return result
  } catch (err) {
    console.warn(err,'Here is an error');    
  }
   }