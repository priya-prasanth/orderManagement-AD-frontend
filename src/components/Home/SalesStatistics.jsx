import React from "react";
import statistics2img from "../../assets/images/statistics2";

const SalesStatistics = () => {
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="card mb-8 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sales & Products Statistics</h5>
          <img
            style={{ width: "100%", height: "500px", objectFit: "contain" }}
            src={statistics2img}
          />
        </article>
      </div>
    </div>
  );
};

export default SalesStatistics;
