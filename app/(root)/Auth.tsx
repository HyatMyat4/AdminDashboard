"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { Add_User } from "../../Graphql/Mutations/AddUser";
import { Delete_User } from "../../Graphql/Mutations/DeleteUser";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User_dataEngin, User_dataC } from "../../Redux/ActionSlice";
import { LoginUserdataC } from "../../Redux/ActionSlice";

function Auth() {
  const dispatch = useDispatch();

  const { userdata } = useSelector(LoginUserdataC);
  const userid = useSelector(User_dataC);
  const [count, setcount] = useState(0);
  const { data } = useSession();
  const handleAuth = async () => {
    try {
      if (data) {
        const result = await Add_User({
          name: data.user?.name,
          image: data.user?.image,
          email: data.user?.email,
        });
        dispatch(User_dataEngin({ ...result.data.addUser }));
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    localStorage.setItem("Role", userdata?.Login?.Userstatus);
    setcount(count + 1);  
    if (count === 1) {
      setcount(0);
      return;
    } else {
      handleAuth();
    }
  }, [data]);

  const HandleSignOut = async () => {
    localStorage.removeItem("Token");
    signOut();
  };

  return (
    <div
      onClick={
        data?.user?.image || userdata ? () => HandleSignOut() : () => signIn()
      }
      className="relative group mb-[10px] flexColCenter items-center  hover:scale-110 transition-all duration-75 ease-in ml-[10px]   "
    >
      <span
        id="linerColourtext"
        className={` text-[9px] sm:text-[13px] cursor-pointer font-extrabold inset-0 absolute ${
          data?.user?.image || userdata ? "hidden group-hover:flex" : "flex"
        }  flex-row items-center justify-center  `}
      >
        {data?.user?.image || userdata ? "Sing Out" : "Sing in"}
      </span>
      <img
        alt=""
        src={
          data?.user?.image || userdata
            ? userdata?.Login
              ? userdata.Login.userProfile
              : data?.user?.image
            : "/user.png"
        }
        id="linerColour"
        className="w-[40px] sm:w-[55px] h-auto rounded-full p-[1px] "
      />
      <span
        className={` text-[8px] sm:text-[11px] ${
          data?.user?.image || userdata?.Login?.name ? "" : "hidden"
        }
             text-center rounded absolute bottom-[-12px] sm:bottom-[-16px]`}
      >
        {data?.user?.image
          ? data.user.name
          : userdata?.Login?.name
          ? userdata?.Login?.name
          : ""}
      </span>
    </div>
  );
}

export default Auth;
