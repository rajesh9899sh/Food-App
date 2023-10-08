import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Card from "../Component/Card";

const Home = () => {
  const [foodCate, setFoodCate] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("CartData", JSON.stringify(cart));
  }, [cart]);

  const loadData = async () => {
    let foodData = await fetch("http://localhost:5000/test", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    foodData = await foodData.json();
    setFoodItem(foodData.myData);
  };

  const loadCategory = async () => {
    let foodCategory = await fetch("http://localhost:5000/testCategory", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    foodCategory = await foodCategory.json();
    setFoodCate(foodCategory?.myCategory);
  };

  useEffect(() => {
    loadData();
    loadCategory();
  }, []);
  return (
    <>
      {/* <Carousel /> */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "2" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="carousel-item active" style={{ opacity: "0.5" }}>
            <img
              src="https://source.unsplash.com/random/900x700/?barbeque"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" style={{ opacity: "0.5" }}>
            <img
              src="https://source.unsplash.com/random/900x700/?pastry"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" style={{ opacity: "0.5" }}>
            <img
              src="https://source.unsplash.com/random/900x700/?burger"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        {foodCate.map((category) => (
          <div className="row mb-3">
            <div key={category.CategoryID} className="fs-3 m-3">
              {category.CategoryName}
            </div>
            <hr />
            {foodItem
              .filter(
                (item) =>
                  item.CategoryName === category.CategoryName &&
                  item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((filterItem) => {
                return (
                  <div
                    key={filterItem._id}
                    className="col-12 col-md-6 col-lg-3 mb-2"
                  >
                    <Card
                      foodItem={filterItem}
                      options={filterItem.options[0]}
                      onClick={() => {
                        setCart((previous) => [...previous, { ...filterItem }]);
                      }}
                    />
                  </div>
                );
              })}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
