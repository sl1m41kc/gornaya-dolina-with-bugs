"use client";

import React, { useEffect, useState } from "react";
import platform from "platform";

const Testversion = () => {
  const [state, setState] = useState([""]);
  useEffect(() => {
    setState(
      [
        // window.navigator.userAgent,
        // // @ts-ignore
        // window.navigator.userAgentData.brands[0].brand,
        // // @ts-ignore
        // window.navigator.userAgentData.platform,
        platform.name,
        platform.description,
        platform.os.family,
        platform.os.version,
        platform.manufacturer,
      ]
    );
  }, []);

  if (state)
    return (
      <div>
        {state.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );

  return <div>no state</div>;
};

export default Testversion;
