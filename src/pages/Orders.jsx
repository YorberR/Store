import React from "react";
import OrderItem from "../components/OrderItem";
import '../styles/Orders.scss'
import arrow from '../assets/icons/flechita.svg';

const Orders = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>
                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
