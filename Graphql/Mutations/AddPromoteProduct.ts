type Props = {
    name: string
    Price:string
    FoodImage: string   
    Foodinfo:string     
    CanOrder: boolean,    
    Outofstock: string 
}
export const Add_Promote_FoodProducts = async ({name, Foodinfo , Outofstock , CanOrder ,FoodImage , Price }: Props)  => { 
 const RATING = 5
 const PopularPopular = "0"
 const _id ="4dqrUEfFAylo7TVBuzZo"
 const Rating = 5
 const Reviewe = `Beast ${name}` 
 const ReviewerName = "Hyat Myat"
 const ReviewerProfile = "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=554844826701391&height=50&width=50&ext=1677850526&hash=AeSSQ8xv4Qp4NY60yVo"
   try{
  const response = await fetch("http://localhost:4000/graphql",{
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       "query":`mutation { 
        addPromoteProduct (
          name: "${name}",   
        Outofstock: "${Outofstock}", 
        Foodinfo: "${Foodinfo}",            
        Price:"${Price}"   
        CanOrder:${CanOrder} 
        Rating: {
            RATING: ${RATING}
          }                
        Popular:"${PopularPopular}"
        FoodImage:"${FoodImage}"
        FoodReviews: {
            _id: "${_id}"
            Rating : ${Rating}
            Reviewe: "${Reviewe}"
            ReviewerName: "${ReviewerName}"
            ReviewerProfile: "${ReviewerProfile}"
          }
       ) {         
         name     
         id
         Outofstock    
         Foodinfo         
         Price
         CanOrder
         Rating{
             RATING
         }
         Popular
         FoodImage
         FoodReviews{
           _id
           ReviewerName
           ReviewerProfile
           Reviewe
           Rating
                
             }
           }
         }        
           `

       
     })
    })
    const data = await response.json()  
    return data
  } catch (err) {
    console.warn(err,'Here is an error');
    
  }
   }