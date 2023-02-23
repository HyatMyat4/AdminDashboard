type Props = {
  roles: string;
  name: string;
  Price: string;
  FoodImage: string;
  Foodinfo: string;
  CanOrder: boolean;
  Outofstock: string;
};
export const Add_FoodProducts = async ({
  roles ,
  name,
  Foodinfo,
  Outofstock,
  CanOrder,
  FoodImage,
  Price,
}: Props) => { 
  const RATING = 5;
  const PopularPopular = "0";
  const _id = "4dqrUEfFAylo7TVBuzZo";
  const Rating = 5;
  const Reviewe = `Beast ${name}`;
  const ReviewerName = "Hyat Myat";
  const ReviewerProfile =
    "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=554844826701391&height=50&width=50&ext=1677850526&hash=AeSSQ8xv4Qp4NY60yVo";
  try {
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation { 
         addProduct (
          roles : "${roles}",
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
           `,
      }),
    });
    const data = await response.json();    
    return data;
  } catch (err) {
    console.warn(err, "Here is an error");
  }
};

/*
import { gql } from '@apollo/client';

export const Add_FoodProducts = gql`
  mutation AddProduct(
        name: String!   
        Outofstock: String! 
        Foodinfo:  String!           
        Price:   String!
        CanOrder: Boolean!
        Rating: {
          RATING: Float!
        }  
        PopularPopular: String!
        FoodImage: String!
        FoodReviews: {
          _id: ID!
          Rating : Float!
          Reviewe: String!
          ReviewerName: String!
          ReviewerProfile: String!
        }
  ) {
    addProduct(
      name: $name   
      Outofstock: $Outofstock  
      Foodinfo: $Foodinfo            
      Price:   $Price
      CanOrder: $CanOrder
      Rating: {
        RATING: $RATING
      }  
      PopularPopular: $PopularPopular
      FoodImage: $FoodImage
      FoodReviews: {
        _id: $_id
        Rating : $Rating
        Reviewe: $Reviewe
        ReviewerName: $ReviewerName
        ReviewerProfile: $ReviewerProfile
      }
    ) {
      name     
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
`;


   */
