import React from "react";
import Container from "../UI/Container.styled";
import classes from "./IpDetails.module.css";

const IpDetails = ({ ipData }) => {
  const {
    ip,
    location: { country, region, timezone, postalCode },
    isp,
  } = ipData;

  return (
    <main>
      <Container>
        <div className={classes.ip__details}>
          <div className={classes.ip__detailsBox}>
            <div className={`${classes.ip__address} ${classes.details__item}`}>
              <p>IP ADDRESS</p>
              <h4>{ip}</h4>
            </div>
            <div className={`${classes.location} ${classes.details__item}`}>
              <p>LOCATION</p>
              <h4>
                {region}, {country} {postalCode}
              </h4>
            </div>
            <div className={`${classes.time__zone} ${classes.details__item}`}>
              <p>TIME ZONE</p>
              <h4>{timezone}</h4>
            </div>
            <div className={`${classes.isp} ${classes.details__item}`}>
              <p>ISP</p>
              <h4>{isp}</h4>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default IpDetails;
