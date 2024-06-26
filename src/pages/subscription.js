import React from "react";
import Style from "../styles/subscription.module.css";
import Subscription from "../../Subscription/Subscription";

const subscription = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$5/mo",
      popular: "",
      service: ["Automated Reporting", "Faster Processing"],
      info: "Literally you probably havent heard of them",
    },
    {
      plan: "BASIC",
      price: "$7/mo",
      popular: "Popular",
      service: ["Automated Reporting", "Faster Processing", "Customization"],
      info: "Literally you probably havent heard of them",
    },
    {
      plan: "PRO",
      price: "$10/mo",
      popular: "Most Popular",
      service: ["Automated Reporting", "Faster Processing", "Customization"],
      info: "Literally you probably havent heard of them",
    },
  ];
  return (
    <div className={Style.subscription}>
      <div className={Style.subscription_box}>
        <div className={Style.subscription_box_info}>
          <h1> Subscription</h1>
          <p>Pricing to fit the needs of any one</p>
        </div>
        <div className={Style.subscription_box_box}>
          {subscriptionArray.map((el, i) => (
            <Subscription key={i + 1} i={1} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default subscription;
