type Props = {
    name: string;
    Price: string;
    FoodImage: string;
    Foodinfo: string;
    CanOrder: boolean;
    Outofstock: string;
    update_id : string;
  };
  export const Update_Promote_FoodProducts = async ({
    name,
    Foodinfo,
    Outofstock,
    CanOrder,
    FoodImage,
    Price,
    update_id 
  }: Props) => {

    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query: `mutation { 
            UpdatePromoteProduct (
          id : "${update_id}",     
          name: "${name}",   
          Outofstock: "${Outofstock}", 
          Foodinfo: "${Foodinfo}",            
          Price:"${Price}"   
          CanOrder:${CanOrder}         
          FoodImage:"${FoodImage}"
   
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
             `,
        }),
      });
      const data = await response.json();    
      return data;
    } catch (err) {
      console.warn(err, "Here is an error");
    }
  };