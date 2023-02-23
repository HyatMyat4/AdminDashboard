type Props = {
  Order_id : any,
}
export const Get_Single_Order = async ( Order_id  : any)  => {  
    try{
    const response = await fetch("http://localhost:4000/graphql",{
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       "query": `{ User_Order (id: "${Order_id}") {
        id       
        email              
        name            
        amount         
          phone         
        city  
        country
        town
        postal_code  
        state   
        Order_data  {
           quantity         
            Price            
            name
            description
            images

       }
  }

}`
  })
    })
    const data = await response.json()
    return data
   } catch (err) {
     console.warn(err,'Here is an error');
   }
   }