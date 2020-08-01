import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "./TradeCard.scss";

const TradeCard = ({ order, userId }) => {
  const {
    id,
    bchAmount,
    fiatAmount,
    createdAt,
    username,
    isBuying,
    complete,
    cancelled,
  } = order;
  return (
    <div className="trade-card-ctn">
      <div>
        <p>Date opened</p>
        <p>{moment(createdAt).format("D MMM YYYY")}</p>
      </div>
      <div>
        <p>Type</p>
        <p>{userId === order.makerId && isBuying ? "Buying" : "Selling"}</p>
      </div>
      <div>
        <p>BCH</p>
        <p>{bchAmount}</p>
      </div>
      <div>
        <p>Amount</p>
        <p>{fiatAmount}</p>
      </div>
      <div>
        <p>Trade partner</p>
        <Link to={`/user-profile/${username}`}>{username}</Link>
      </div>
      <div>
        <p>State</p>
        <p>{cancelled ? "Cancelled" : complete ? "Complete" : "Active"}</p>
      </div>
      <div>
        <Link to={`/trade/${id}`}>View</Link>
      </div>
    </div>
  );
};

export default TradeCard;
