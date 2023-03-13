
export const GET_Users = async ()  => {
    try{
    const response = await fetch("https://fastfoodbackend.onrender.com/graphql",{
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       "query": `{ Users {
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
    }`})
    })
    const data = await response.json()    
    return data
   } catch (err) {
     console.warn(err,'Here is an error');
   }
   }