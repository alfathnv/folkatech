import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(1);
  const { id } = useParams();

  function formatPriceInIDR(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  }

  useEffect(() => {
    const apiUrl = `http://localhost:5000/products/${id}`;
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: token,
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product list:", error);
      });
  }, []);

  return (
    <div className="detail-container">
      <div className="image-container">
        <img
          src={`http://localhost:5000/${product.image}`}
          alt={product.name}
        ></img>
      </div>
      <div className="detail">
        <div className="name">{product.name}</div>
        <div className="store">{product.store}</div>
        <div className="rating">
          <div className="star">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_1_521)">
                <path
                  d="M17.9531 6.90471C17.8353 6.54023 17.512 6.28136 17.1296 6.24689L11.9343 5.77515L9.8799 0.966728C9.72843 0.614332 9.38345 0.386223 9.00015 0.386223C8.61686 0.386223 8.27188 0.614332 8.1204 0.967552L6.06604 5.77515L0.869924 6.24689C0.488139 6.28219 0.165682 6.54023 0.0471639 6.90471C-0.0713542 7.26919 0.0380999 7.66897 0.32691 7.92097L4.25394 11.365L3.09595 16.4659C3.01121 16.841 3.15679 17.2287 3.46798 17.4536C3.63525 17.5745 3.83095 17.636 4.0283 17.636C4.19845 17.636 4.36724 17.5901 4.51871 17.4995L9.00015 14.8211L13.4799 17.4995C13.8078 17.6967 14.221 17.6787 14.5315 17.4536C14.8428 17.228 14.9883 16.8402 14.9035 16.4659L13.7455 11.365L17.6726 7.92166C17.9614 7.66897 18.0717 7.26988 17.9531 6.90471Z"
                  fill="#FFC107"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_521">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_1_521)">
                <path
                  d="M17.9531 6.90471C17.8353 6.54023 17.512 6.28136 17.1296 6.24689L11.9343 5.77515L9.8799 0.966728C9.72843 0.614332 9.38345 0.386223 9.00015 0.386223C8.61686 0.386223 8.27188 0.614332 8.1204 0.967552L6.06604 5.77515L0.869924 6.24689C0.488139 6.28219 0.165682 6.54023 0.0471639 6.90471C-0.0713542 7.26919 0.0380999 7.66897 0.32691 7.92097L4.25394 11.365L3.09595 16.4659C3.01121 16.841 3.15679 17.2287 3.46798 17.4536C3.63525 17.5745 3.83095 17.636 4.0283 17.636C4.19845 17.636 4.36724 17.5901 4.51871 17.4995L9.00015 14.8211L13.4799 17.4995C13.8078 17.6967 14.221 17.6787 14.5315 17.4536C14.8428 17.228 14.9883 16.8402 14.9035 16.4659L13.7455 11.365L17.6726 7.92166C17.9614 7.66897 18.0717 7.26988 17.9531 6.90471Z"
                  fill="#FFC107"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_521">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_1_521)">
                <path
                  d="M17.9531 6.90471C17.8353 6.54023 17.512 6.28136 17.1296 6.24689L11.9343 5.77515L9.8799 0.966728C9.72843 0.614332 9.38345 0.386223 9.00015 0.386223C8.61686 0.386223 8.27188 0.614332 8.1204 0.967552L6.06604 5.77515L0.869924 6.24689C0.488139 6.28219 0.165682 6.54023 0.0471639 6.90471C-0.0713542 7.26919 0.0380999 7.66897 0.32691 7.92097L4.25394 11.365L3.09595 16.4659C3.01121 16.841 3.15679 17.2287 3.46798 17.4536C3.63525 17.5745 3.83095 17.636 4.0283 17.636C4.19845 17.636 4.36724 17.5901 4.51871 17.4995L9.00015 14.8211L13.4799 17.4995C13.8078 17.6967 14.221 17.6787 14.5315 17.4536C14.8428 17.228 14.9883 16.8402 14.9035 16.4659L13.7455 11.365L17.6726 7.92166C17.9614 7.66897 18.0717 7.26988 17.9531 6.90471Z"
                  fill="#FFC107"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_521">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_1_521)">
                <path
                  d="M17.9531 6.90471C17.8353 6.54023 17.512 6.28136 17.1296 6.24689L11.9343 5.77515L9.8799 0.966728C9.72843 0.614332 9.38345 0.386223 9.00015 0.386223C8.61686 0.386223 8.27188 0.614332 8.1204 0.967552L6.06604 5.77515L0.869924 6.24689C0.488139 6.28219 0.165682 6.54023 0.0471639 6.90471C-0.0713542 7.26919 0.0380999 7.66897 0.32691 7.92097L4.25394 11.365L3.09595 16.4659C3.01121 16.841 3.15679 17.2287 3.46798 17.4536C3.63525 17.5745 3.83095 17.636 4.0283 17.636C4.19845 17.636 4.36724 17.5901 4.51871 17.4995L9.00015 14.8211L13.4799 17.4995C13.8078 17.6967 14.221 17.6787 14.5315 17.4536C14.8428 17.228 14.9883 16.8402 14.9035 16.4659L13.7455 11.365L17.6726 7.92166C17.9614 7.66897 18.0717 7.26988 17.9531 6.90471Z"
                  fill="#FFC107"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_521">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_1_521)">
                <path
                  d="M17.9531 6.90471C17.8353 6.54023 17.512 6.28136 17.1296 6.24689L11.9343 5.77515L9.8799 0.966728C9.72843 0.614332 9.38345 0.386223 9.00015 0.386223C8.61686 0.386223 8.27188 0.614332 8.1204 0.967552L6.06604 5.77515L0.869924 6.24689C0.488139 6.28219 0.165682 6.54023 0.0471639 6.90471C-0.0713542 7.26919 0.0380999 7.66897 0.32691 7.92097L4.25394 11.365L3.09595 16.4659C3.01121 16.841 3.15679 17.2287 3.46798 17.4536C3.63525 17.5745 3.83095 17.636 4.0283 17.636C4.19845 17.636 4.36724 17.5901 4.51871 17.4995L9.00015 14.8211L13.4799 17.4995C13.8078 17.6967 14.221 17.6787 14.5315 17.4536C14.8428 17.228 14.9883 16.8402 14.9035 16.4659L13.7455 11.365L17.6726 7.92166C17.9614 7.66897 18.0717 7.26988 17.9531 6.90471Z"
                  fill="#FFC107"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_521">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="rating-count">{`(${product.rating_count})`}</div>
        </div>
        <div className="price">
          <h2>{formatPriceInIDR(product.price)}</h2>
          <p>Tersedia</p>
        </div>
        <div className="buy-container">
          <div className="counter">
            <button
              className="decrease"
              onClick={() => {
                if (counter > 1) {
                  setCounter((prev) => prev - 1);
                }
              }}
            >
              <p>-</p>
            </button>
            <input
              className="count"
              type="text"
              value={counter}
              disabled
            ></input>
            <button
              className="increase"
              onClick={() => setCounter((prev) => prev + 1)}
            >
              <p>+</p>
            </button>
          </div>
          <div className="basket">
            <p>TAMBAH KE KERANJANG</p>
          </div>
          <div className="favorite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.3987 2.91093C18.319 2.52961 19.3054 2.33334 20.3015 2.33334C21.2977 2.33334 22.2841 2.52961 23.2044 2.91093C24.1245 3.29218 24.9605 3.85095 25.6646 4.55532C26.369 5.25946 26.9282 6.09585 27.3094 7.01596C27.6907 7.93625 27.887 8.92264 27.887 9.9188C27.887 10.915 27.6907 11.9014 27.3094 12.8216C26.9281 13.7418 26.3693 14.5779 25.6648 15.2821C25.6648 15.2822 25.6649 15.282 25.6648 15.2821L15.3515 25.5954C14.8959 26.051 14.1572 26.051 13.7016 25.5954L3.38824 15.2821C1.9658 13.8597 1.16669 11.9304 1.16669 9.9188C1.16669 7.90718 1.9658 5.97794 3.38824 4.55551C4.81067 3.13308 6.7399 2.33396 8.75153 2.33396C10.7632 2.33396 12.6924 3.13308 14.1148 4.55551L14.5265 4.96722L14.938 4.55571C14.938 4.55577 14.9381 4.55564 14.938 4.55571C15.6422 3.85124 16.4785 3.29221 17.3987 2.91093ZM20.3015 4.66667C19.6119 4.66667 18.929 4.80255 18.2919 5.06654C17.6548 5.33053 17.0759 5.71746 16.5883 6.20523L15.3515 7.44209C14.8959 7.89771 14.1572 7.89771 13.7016 7.44209L12.4649 6.20543C11.4801 5.22058 10.1443 4.6673 8.75153 4.6673C7.35874 4.6673 6.023 5.22058 5.03815 6.20543C4.0533 7.19028 3.50002 8.52602 3.50002 9.9188C3.50002 11.3116 4.0533 12.6473 5.03815 13.6322L14.5265 23.1206L24.0149 13.6322C24.5027 13.1446 24.8898 12.5656 25.1538 11.9285C25.4178 11.2913 25.5537 10.6084 25.5537 9.9188C25.5537 9.22916 25.4178 8.54627 25.1538 7.90915C24.8898 7.27202 24.5029 6.69316 24.0151 6.20562C23.5276 5.71785 22.9483 5.33053 22.3112 5.06654C21.6741 4.80255 20.9912 4.66667 20.3015 4.66667Z"
                fill="#EB3F36"
              />
            </svg>
          </div>
        </div>
        <div className="description">{product.description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
