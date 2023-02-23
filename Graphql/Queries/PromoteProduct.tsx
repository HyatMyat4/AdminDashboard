
export const GET_PromoteProducts = async ()  => {
    console.log("🍤🍤")
    try{
    const response = await fetch("http://localhost:4000/graphql",{
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       "query": `{ PromoteProducts{
         name
         id
         Foodinfo
         Outofstock
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