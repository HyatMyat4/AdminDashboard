import React from "react";
import { GET_User } from "../../../../Graphql/Queries/User";
import User_Component from "./User_Component";
type Props = {
  params: {
    update: string;
  };
};
async function page({ params: { update } }: Props) {
  const { data } = await GET_User(update);
  return (
    <div className="w-full h-[93vh] flexColCenter justify-center">
      <User_Component data={data.User} id={update} />
    </div>
  );
}

export default page;
