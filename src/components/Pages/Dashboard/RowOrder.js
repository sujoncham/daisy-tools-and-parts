import React from "react";
import { Link } from "react-router-dom";

const RowOrder = ({ order, index, setDeletingOrder }) => {
  const {date, customer, name, price, purchaseValue } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{date} </td>
      <td>{customer}</td>
      <td>{name}</td>
      <td>${(price/100)*purchaseValue}</td>
      <td>{purchaseValue}</td>
      <td>
      {(order.price && !order.paid) && <Link className="btn btn-primary btn-sm" to={`/dashboard/payment/${order._id}`}>Pay</Link>}
        {(order.price && order.paid) && <>
          <p className="text-success">paid</p>
          <p className="text-success">({order.transactionId.slice(-4)})</p>
        </>}
      </td>
      <td>
        <label
          onClick={() => setDeletingOrder(order)}
          htmlFor="order-Deleting-Modal"
          className="btn btn-sm"
        >
          Delete Order{" "}
        </label>
      </td>
    </tr>
  );
};

export default RowOrder;
