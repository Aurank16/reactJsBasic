import React from "react";
import { data, data1 } from "./App";

function ClassC() {
  return (
    <>
      <data.Consumer>
        {(userName) => {
          return (
            <data1.Consumer>
              {(gender) => {
                return (
                  <h1>
                    {" "}
                    my name is {userName} and gender is {gender}
                  </h1>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
}

export default ClassC;
