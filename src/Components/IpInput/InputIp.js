import React, { useState } from "react";
import arrowRight from "../../assets/icon-arrow.svg";
import Container from "../UI/Container.styled";
import classes from "./InputIp.module.css";

const InputIp = (props) => {
  const [enteredIp, setEnteredIp] = useState("");

  const ipMatch = `^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$`;

  const handleIpChange = (e) => {
    setEnteredIp(e.target.value);
  };

  const handleIpSubmit = async (e) => {
    e.preventDefault();
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_YZeE0ZawmY4ZL8KvZxg4FdJduPrwD&domain=${enteredIp}`;
    if (enteredIp.match(ipMatch)) {
      url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_YZeE0ZawmY4ZL8KvZxg4FdJduPrwD&ipAddress=${enteredIp}`;
    }

    try {
      const resp = await fetch(`${url}`);
      const data = await resp.json();
      props.onSearch(data);
    } catch (error) {
      console.log(error);
    }
    setEnteredIp("");
  };
  return (
    <section className={classes.input__section}>
      <Container>
        <h1 className={classes.title}>IP address Tracker</h1>
        <form onSubmit={handleIpSubmit}>
          <div className={classes.ip__input}>
            <input
              type="text"
              name="ip"
              value={enteredIp}
              placeholder="Search for any IP address or domain"
              onChange={handleIpChange}
            />
            <button>
              <img src={arrowRight} alt="arrow_icon" />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default InputIp;
