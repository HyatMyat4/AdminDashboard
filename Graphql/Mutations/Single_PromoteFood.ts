type Props = {
  id: any;
};
export const Single_Promote_FoodProducts = async ({ id }: Props) => {
  try {
    const response = await fetch("https://fastfoodbackend.onrender.com/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation { 
        SinglePromoteProduct ( id: "${id}" ) {         
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
           `,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err, "Here is an error");
  }
};
