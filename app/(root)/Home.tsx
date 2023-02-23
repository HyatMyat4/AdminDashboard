"use client";
import React from "react";
import SwiperComponent from "./SwiperComponent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Promote_ProductEngin } from "../../Redux/ActionSlice";
type Props = {
  data: any;
};

const Home = ({ data }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Promote_ProductEngin(data));
  }, []);


  return (
    <div>
      <section id="Home">
        <SwiperComponent data={data} />
      </section>
    </div>
  );
};

export default Home;
