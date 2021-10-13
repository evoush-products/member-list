import { useState, useEffect } from "react";
import { AllProduct } from "../../fetchs";
import { ProductLists, MemberList } from "../../components/Home";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <MemberList title="Evoush Leader" />
      </div>
    </div>
  );
};

export default Home;
