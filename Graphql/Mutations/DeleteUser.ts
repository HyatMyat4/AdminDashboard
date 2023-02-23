type Props = {
    id: any  
    roles: any  
}
export const Delete_User = async ({ id , roles} : Props)  => { 
  
    const response = await fetch("http://localhost:4000/graphql",{
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       "query":`mutation { 
        deleteUser (  id: "${id}" roles: "${roles}" ) {         
            id        
           }
         }        
           `       
     })
    })
    const result = await response.json()    

    return result
   }