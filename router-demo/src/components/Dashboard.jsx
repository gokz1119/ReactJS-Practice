import { react } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";

const Dashboard = () => {
  return( 
    <>
    <h1>Dashboard</h1>
    <ul>
      <li>
        <Link to={""} >Profile</Link>
      </li>
      <li>
        <Link to={"orders"}>Orders</Link>
      </li>
      <li>
        <Link to={"quotes"}>Quotes</Link>
      </li>
    </ul>

    <div className="dashboard">
      <Routes>
        <Route path="/" element={<Profile />} ></Route>
        <Route path="orders" element={<Orders />} ></Route>
        <Route path="quotes" element={<Quotes />} ></Route>
        <Route path="order_details/:orderId" element={<OrderDetails />}></Route>
      </Routes>
    </div>
    </>
  );
};

export const Profile = () =>{
  return (
    <h2>Here are the profiles!</h2>
  )
}

export const Orders = () =>{
  const orderIds = ["1001","1002", "1003", "1004"]
  return (
    <>
    <h2>You are at orders!</h2>
    <ul className="orders">
      {orderIds.map(orderId => {
        return (
          <li key={orderId}>
            <Link to={`/dashboard/order_details/${orderId}`}>View order {orderId-1000}</Link>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export const Quotes = () =>{
  return (
    <h2>You are at quotes!</h2>
  )
}

export const OrderDetails = () => {
  const params = useParams();
  const navigate = useNavigate()
  const onBackClick = e => {
    e.preventDefault();

    navigate("/dashboard/orders")
  }

  return (<><h2>Details of {params.orderId}</h2>
  <a href="#" onClick={onBackClick}>Back</a></>)
} 

export default Dashboard;
