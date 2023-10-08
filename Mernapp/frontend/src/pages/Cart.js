import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  if (cartData.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>
      </div>
    );
  }
  let totalPrice = cartData.reduce(
    (total, cartItem) => total + cartItem.price,
    0
  );

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((cartItem, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td style={{ color: "white" }}>{cartItem.foodItem.name}</td>
                <td style={{ color: "white" }}>{cartItem.qty}</td>
                <td style={{ color: "white" }}>{cartItem.size}</td>
                <td style={{ color: "white" }}>{cartItem.price}</td>
                <td style={{ color: "white" }}>
                  <button type="button" className="btn-p-0">
                    <img
                      src="trash.jpg"
                      alt="delete"
                      width="20px"
                      height="20px"
                      onClick={() => handleRemoveFromCart(index)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
