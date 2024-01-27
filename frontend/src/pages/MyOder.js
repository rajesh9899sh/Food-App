import React from "react";
import Footer from "../Component/Footer";
import { useSelector } from "react-redux";

const MyOrder = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  let totalPrice = cartData.reduce(
    (total, cartItem) => total + cartItem.price,
    0
  );

  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">My Orders</h2>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            {cartData.length === 0 ? (
              <p className="text-center">Your cart is empty.</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>#</th>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Size</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.foodItem.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.size}</td>
                        <td>${item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="text-end mt-4">
              <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyOrder;
