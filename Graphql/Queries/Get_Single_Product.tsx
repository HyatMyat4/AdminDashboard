type Props = {
    Product_id : string,
}
export const GET_Single_Products = async ({Product_id} : Props )  => {
    try{
    const response = await fetch("https://fastfoodbackend.onrender.com/graphql",{
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       "query": `{ FoodProduct (id: "${Product_id}")  {
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