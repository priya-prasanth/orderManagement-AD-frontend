import React from "react";
import { Link } from "react-router-dom";

const LatestOrder = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Latest orders</h5>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <b>User</b>
              </td>
              <td>user@gmail.com</td>
              <td>Rs.345</td>
              <td>
                <span class="badge rounded-pill text-bg-danger p-2 col-12">
                  Paid Today at 10:13 AM
                </span>
              </td>
              <td>Today at 10:13 AM</td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/order`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
            {/* Not Paid */}
            <tr>
              <td>
                <b>User</b>
              </td>
              <td>user@gmail.com</td>
              <td>Rs.345</td>
              <td>
                <span className="badge rounded-pill text-bg-success p-2 col-12">
                  {/* <span className="badge rounded-pill alert-danger"> */}
                  Created Today at 10:13 AM
                </span>
                {/* </span> */}
              </td>
              <td>Today at 10:13 AM</td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/orders`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrder;
