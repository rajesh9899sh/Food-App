import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let options = props.options;
  let finalPrice = qty * parseInt(options[size]);
  const priceRef = useRef();
  let priceOptions = Object.keys(options);

  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        foodItem: props.foodItem,
        price: finalPrice,
        qty: qty,
        size: size,
      })
    );
  };

  const handleQty = (e) => {
    setQty(e.target.value);
  };
  const handleOptions = (e) => {
    setSize(e.target.value);
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <>
      <div className="card" style={{ width: "16rem", maxHeight: "400px" }}>
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="loading"
          style={{ height: "180px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className="container w-100">
            <select
              className="m-2 h-100  bg-success"
              onClick={handleClick}
              onChange={handleQty}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className=" h-100 bg-success rounder"
              onClick={handleClick}
              onChange={handleOptions}
              ref={priceRef}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5 ms-1">₹{finalPrice}/- </div>
            <hr />
            <button
              className="btn btn-success justify-center ms-2"
              onClick={(props.onClick, handleAddToCart)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
