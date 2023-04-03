import { React, Component } from "react";

function WithListLoading(Component) {
  return function WithLoadingComponents({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Hold on, fetching data may take some time
      </p>
    );
  };
}

export default WithListLoading;
