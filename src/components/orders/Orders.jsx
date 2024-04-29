import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../Redux/Actions/ProductActions";
import { listOrders } from "../../Redux/Actions/OrderActions";

const Orders = (props) => {
  const { orders } = props;
  // const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // useEffect(() => {
  //   if (userInfo && userInfo.isAdmin) {
  //     dispatch(listProducts());
  //     dispatch(listOrders());
  //   }
  // }, [dispatch, userInfo]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Total</th>
          <th scope="col">Paid</th>
          <th scope="col">Date</th>
          <th>Status</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>
              <b>{order.user.name}</b>
            </td>
            <td>{order.user.email}</td>
            <td>${order.totalPrice}</td>
            <td>
              {/* format("MMM Do YY") */}

              {order.isPaid ? (
                <span className="badge rounded-pill text-bg-success p-2 col-12">
                  Paid At {moment(order.paidAt).calendar()}
                </span>
              ) : (
                <span className="badge rounded-pill text-bg-danger p-2 col-12">
                  Not Paid
                </span>
              )}
            </td>
            <td>{moment(order.createdAt).format("MMM Do YYYY")}</td>
            <td>
              {order.isDelivered ? (
                <span className="badge rounded-pill text-bg-success p-2 col-12">
                  Delivered
                </span>
              ) : (
                <span className="badge rounded-pill text-bg-dark p-2 col-12">
                  Not Delivered
                </span>
              )}
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}

        {/* Not paid Not Delivered  */}
        {/* <tr>
          <td>
            <b>Velcro Sneakers For Boys & Girls (Blue)</b>
          </td>
          <td>user@example.com</td>
          <td>Rs.45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not Paid</span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
            
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Orders;
