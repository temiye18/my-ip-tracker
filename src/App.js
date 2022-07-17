import React, { useState, useEffect } from "react";

import IpDetails from "./Components/IpDetails/IpDetails";
import InputIp from "./Components/IpInput/InputIp";
import IpMap from "./Components/IpMap/IpMap";

function App() {
  const [ipData, setIpData] = useState(null);

  const fetchUserIp = async () => {
    try {
      const resp = await fetch(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_YZeE0ZawmY4ZL8KvZxg4FdJduPrwD"
      );

      const data = await resp.json();
      // console.log(data);
      setIpData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserIp();
  }, []);

  const searchIpDomain = (ipInfo) => {
    setIpData(ipInfo);
  };

  return (
    <>
      <InputIp onSearch={searchIpDomain} />

      {ipData && <IpDetails ipData={ipData} />}
      {ipData && <IpMap ipData={ipData} />}
    </>
  );
}

export default App;
