type Props = {
  name: string | null | undefined;
  image: string | null | undefined;
  email: string | null | undefined;
  Password: any;
  PhoneNumber?: string;
  TotalBuyingPrice?: number;
  Userstatus: any;
};
export const Register_User = async ({
  name,
  image,
  email,
  TotalBuyingPrice = 0,
  Password,
  PhoneNumber,
  Userstatus,
}: Props) => {
  const FoodImage = "";
  const Price = "";
  const id = "";
  const Foodname = "";

  try {
    const response = await fetch("https://fastfoodbackend.onrender.com/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation { 
        registerUser (
          name: "${name}",   
          userProfile: "${image}", 
          email: "${email}",  
          TotalBuyingPrice: ${TotalBuyingPrice}  
          Password: "${Password}"
          PhoneNumber: "${PhoneNumber}"
          Userstatus: ${Userstatus}  
          UserBuyingProduct: {}
       ) {         
        name     
        id
        userProfile
        email        
        Userstatus
        TotalBuyingPrice 
        Password
        PhoneNumber
        UserBuyingProduct {
         id
         FoodImage
         Price
         name
       }          
         }
    }`,
      }),
    });
    const result = await response.json(); 
    return result;
  } catch (err) {
    console.warn(err, "Here is an error");
  }
};
