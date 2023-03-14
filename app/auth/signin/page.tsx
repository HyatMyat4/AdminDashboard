import React from "react";
import { getProviders, signIn } from "next-auth/react";
import SigninComponent from "./SigninComponent";

async function page() {
  const providers = await getProviders() as any;
  return (
    <div className="w-full h-full">
      <SigninComponent providers={providers} />
    </div>
  );
}

export default page;
