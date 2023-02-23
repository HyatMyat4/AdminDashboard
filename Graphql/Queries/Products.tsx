
export const GET_FoodProducts = async ()  => {
 try{
 const response = await fetch("http://localhost:4000/graphql",{
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    "query": `{FoodProducts {
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
























































/*
import { gql } from '@apollo/client';


  const GET_FoodProducts = gql`
  query getFoodProducts {
    FoodProducts {
        name
        Rating
        Price
        Popular
        Outofstock
        Foodinfo
        FoodImage
        CanOrder
        FoodReviews{   
          _id
          ReviewerName
          ReviewerProfile
          Reviewe
          Rating
        }
    
      }
  }
`;
export { GET_FoodProducts };
*/