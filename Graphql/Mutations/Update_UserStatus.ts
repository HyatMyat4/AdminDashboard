type Props = {
    id : any
    Userstatus: any
    UserRoles : any
}
export const Updtae_User_Status = async ({id , Userstatus , UserRoles} : Props)  => {
    try{
    const response = await fetch("https://fastfoodbackend.onrender.com/graphql",{
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