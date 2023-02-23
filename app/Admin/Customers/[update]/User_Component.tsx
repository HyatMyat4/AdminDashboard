"use client";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Updtae_User_Status } from "../../../../Graphql/Mutations/Update_UserStatus";
import { useSelector } from "react-redux";
import { LoginUserdataC } from "../../../../Redux/ActionSlice";
import { useRouter } from "next/navigation";
type PageProps = {
  data: All_Users;
  id: string;
};
function User_Component({ data, id }: PageProps) {
  const router = useRouter();

  const { userdata } = useSelector(LoginUserdataC);
  const [Status, setStatus] = useState<string>();
  const [GivenMenager, setGivenMenager] = useState<boolean>(false);
  const [GivenSure, setGivenSure] = useState<boolean>(false);

  const Update = async () => {
    if (Status === "Manager" && GivenMenager === false && GivenSure === false) {
      return setGivenMenager(true);
    }
    const { data } = await Updtae_User_Status({
      id: id,
      Userstatus: Status,
      UserRoles: userdata?.Login?.Userstatus,
    });
    if (data.UpdateUserStatus) {
      router.push("/Admin/Customers/");
    }
  };
  const Not_yet = () => {
    setGivenMenager(false);
    setStatus("NewUser");
  };
  const Yes_sure = async () => {
    const { data } = await Updtae_User_Status({
      id: id,
      Userstatus: Status,
      UserRoles: userdata?.Login?.Userstatus,
    });
    setGivenSure(true);
    setGivenMenager(false);
    if (data.UpdateUserStatus) {
      setGivenSure(false);
      router.push("/Admin/Customers/");
    }
  };
  return (
    <div className="w-[100%] 400:w-[400px] relative h-auto bg-white dark:bg-black rounded-[5px] p-[13px] ">
      <div
        className={`w-full h-full bg-white dark:bg-black ${
          GivenMenager ? "" : "hidden"
        } absolute rounded-[5px] inset-0 z-50 flexColCenter justify-center `}
      >
        <span className="text-[12px]">Are you Sure , </span>
        <span className="text-[12px] mb-[15px]">
          {" "}
          Given Menager can be Attack your dashboard information{" "}
        </span>
        <div className="py-[13px] px-[20px] text-white flexRowCenter justify-center bg-[#e8e8e8]  dark:bg-[#1c1c1c] rounded">
          <div
            onClick={Yes_sure}
            className="px-[30px] py-[8px] rounded bg-orange-500 font-bold cursor-pointer hover:scale-110 trasition"
          >
            Yes
          </div>
          <span className="mx-[10px] text-black dark:text-white font-bold">
            or
          </span>
          <div
            onClick={Not_yet}
            className="px-[30px] py-[8px] rounded bg-teal-500 font-bold cursor-pointer hover:scale-110 trasition"
          >
            {" "}
            No
          </div>
        </div>
      </div>
      <div className="w-full h-auto">
        <img
          src={data.userProfile}
          className="w-[50px] h-auto m-auto rounded"
        />
      </div>
      <div className=" w-[100%]  flexColCenter pt-[10px]  text-black dark:text-white ">
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            outline: "none",
            margin: 0,
            marginbottom: 0,
          }}
          className="w-full m-0 text-black dark:text-white "
          size="small"
        >
          <span className="flexRowCenter items-center  justify-start text-[14px]  select-none  ">
            Can Order💻
          </span>
          <Select
            displayEmpty
            value={`${Status}`}
            inputProps={{ "aria-label": "Without label" }}
            className="w-full rounded-[5px] outline-none  bg-slate-200 dark:bg-[#3B3B3B] text-black dark:text-white  mb-0 "
          >
            <MenuItem onClick={(e) => setStatus("NewUser")} value="NewUser">
              NewUser
            </MenuItem>
            <MenuItem onClick={(e) => setStatus("TopFan")} value="TopFan">
              TopFan
            </MenuItem>
            <MenuItem onClick={(e) => setStatus("Manber")} value="Manber">
              Manbar
            </MenuItem>
            <MenuItem onClick={(e) => setStatus("Manager")} value="Manager">
              Manager
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="w-[100%] h-[50px] m-auto mt-[15px]">
        <Button
          id="cursive"
          className="w-[100%] h-[100%] bg-sky-600 font-bold "
          variant="contained"
          size="large"
          // disabled={false}
          onClick={Update}
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default User_Component;
