
  export const Get_All_Order = async ()  => {  
      try{
      const response = await fetch("https://fastfoodbackend.onrender.com/graphql",{
       next : { revalidate : 60}, 
       method: 'POST',
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify({
         "query": `{ User_Orders {
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