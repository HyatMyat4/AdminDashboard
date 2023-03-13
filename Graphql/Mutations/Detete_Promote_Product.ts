type Props = {
  id: string;
};
export const Delete_Promote_Product = async (id: Props) => {
  const response = await fetch("https://fastfoodbackend.onrender.com/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation { 
        deletePromoteProduct (  id: "${id}"  ) {         
            id        
           }
         }        
           `,
    }),
  });
  const data = await response.json();
  return data;
};
