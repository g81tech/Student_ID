import React from "react";
import { Loading } from "../styles/components.Styles";

export default function LoadingScreen() {
  return (
    <Loading>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Loading>
  );
}
