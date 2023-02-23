type Props = {
    id: string  
    roles: any  
}
export const Delete_FoodProducts = async ( { id , roles }: Props)  => {  
    const response = await fetch("http://localhost:4000/graphql",{
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       "query":`mutation { 
        deleteProduct (  id: "${id}" roles : "${roles}"  ) {         
            id        
           }
         }        
           `       
     })
    })
    const data = await response.json()    
    return data
   }
