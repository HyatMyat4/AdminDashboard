import React from "react";
import { GET_Single_Products } from "../../../../Graphql/Queries/Get_Single_Product";
import EditComponent from "./EditComponent";
type Props = {
  params: {
    Edit: string;
  };
};
async function page({ params: { Edit } }: Props) {
  const Product_id = Edit;
  const { data } = await GET_Single_Products({ Product_id });

  return (
    <div className="w-full h-[93vh]  ">
      <EditComponent data={data.FoodProduct} Product_id={Product_id} />
    </div>
  );
}

export default page;
