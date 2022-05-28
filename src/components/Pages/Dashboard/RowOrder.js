import React from "react";
import { Link } from "react-router-dom";

const RowOrder = ({ order, index, setDeletingOrder }) => {
  const {_id, date, customer, name, price, purchaseValue } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{date} </td>
      <td>{customer}</td>
      <td>{name}</td>
      <td>${price*purchaseValue}</td>
      <td>{purchaseValue}</td>
      <td>
        {(order.price || !order.paid) && <Link to={`/dashboard/payment/${_id}`}>
          <button className="btn btn-sm btn-warning">Pay</button>
          </Link>}
        {(order.price && order.paid) && <span className="btn btn-sm btn-success">Paid</span>}
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
