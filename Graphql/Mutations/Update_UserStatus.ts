type Props = {
    id : any
    Userstatus: any
    UserRoles : any
}
export const Updtae_User_Status = async ({id , Userstatus , UserRoles} : Props)  => {
    try{
    const response = await fetch("http://localhost:4000/graphql",{
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       "query": `mutation { 
        UpdateUserStatus ( id: "${id}" , Userstatus : "${Userstatus}"  , UserRoles : "${UserRoles}" ) {     
       id   
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