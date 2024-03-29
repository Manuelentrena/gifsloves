import { Link } from "wouter";
import React from "react";
import "./styles.css";
const Logo = () => {
  return (
    <Link to="/">
      <div className="container__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="176.1"
          height="150.8"
          overflow="visible"
          className="logo"
        >
          <path
            className="mymove"
            d="M31.4 27c-3.2 3.6-5.5 5.9-7.6 8.5-2.5 3-4.7 3-7.1-.1-1.5-1.9-3.2-3.5-5.2-5.5 3.6-3.8 6.9-7.2 11.2-11.7-4.1-3.1-8-6-11.9-8.9.4-.4.8-.8 1.3-1.2.1-.3.1-.7.3-1 7.2-8.8 7.2-8.8 15.3-.8 1.1 1.1 2.3 2.1 4.5 4.2 2.4-2.9 4.7-5.7 7-8.5 2-2.5 3.9-2.4 5.9 0 1 1.2 2.1 2.3 3.3 3.3 2.2 1.9 2.4 3.6.1 5.5-2.8 2.4-5.4 4.8-9.2 8.3 3.4 2.9 6.1 5.3 8.8 7.6 2.6 2.1 2.8 4.1.1 6.3-.8.6-1.6 1.4-2.2 2.2-2.4 3.1-4.8 3.5-7.4.1-2-2.6-4.3-5-7.2-8.3zm-11.3 6c.9-.8 1.6-1.3 2.2-1.9 8.8-8.5 8.9-8.6 17.7-.3 2.6 2.4 4 2.2 5.4-1.5-2.6-2.4-5.2-5-7.9-7.3-2.4-2.1-2.4-4-.1-6l8.4-7.5c-.4-.7-.8-1.5-1.1-2.2-1.5.3-3.3.1-4.5.9-1.8 1.2-3.4 3-4.8 4.7-2.7 3.3-5.1 3.7-7.8.1-2.1-2.7-4.5-5.1-6.7-7.7-.9.3-1.6.7-2.3 1 .2 1.5 0 3.4.8 4.5 1.6 2.2 3.8 4.1 5.8 5.9 2.3 2.1 2.5 4 .1 6.1-2.7 2.4-5.4 4.8-8.4 7.4 1.4 1.7 2.3 2.7 3.2 3.8zM142 27.3c-2.4 3-4.8 5.7-7 8.6-2 2.5-3.9 2.5-5.9 0-1-1.2-2.1-2.3-3.3-3.3-2.2-1.9-2.3-3.6-.1-5.6 2.7-2.4 5.4-4.9 9.4-8.5-3.5-3-6.4-5.4-9.3-7.8-2.2-1.8-2.4-3.6-.1-5.5 1.3-1.1 2.6-2.3 3.7-3.7 2-2.3 3.7-2 5.5.2 2.4 2.7 4.8 5.4 8.4 9.4 2.8-3.5 5-6.2 7.1-8.9 2.4-3.1 4.7-2.9 7.1.1 1.5 1.9 3.2 3.5 6.2 6.7-4.3 3-8.3 5.7-12.2 8.5.1.8.2 1.6.2 2.4 3.9 2.9 7.7 5.7 11.6 8.6-.4.4-.8.8-1.3 1.2 0 .2 0 .4-.1.5-6.4 9.3-7.4 9.4-15.1 1.6-1.2-1.1-2.5-2.3-4.8-4.5zM154 5c-.6.5-1.3 1.1-1.9 1.6-2.9 2.7-5.7 7.3-8.8 7.5-2.8.2-5.8-4.6-9-6.8-1.2-.9-3.1-.7-4.7-1-.3.7-.6 1.4-.9 2.2 2.6 2.3 5 4.7 7.7 6.9 3.1 2.5 2.8 4.8-.1 7.2-2.7 2.2-5.2 4.5-7.6 6.4 1.8 3.9 3.3 4.3 5.5 1.9 1.9-2.1 4-3.9 5.8-5.9 2.1-2.3 4-2.3 6 .1 2.4 2.9 4.9 5.7 7.1 8.3 4-2.2 3.8-3.7 1.7-5.8-2.7-2.6-7.1-5.8-6.9-8.4.2-3.1 4.3-6.2 7.1-8.9 2.2-2.5 1.7-3.9-1-5.3zM55 84.7h-8c-2.8-7.6-1.9-9 5.4-9h13.8c1.5 10.5-5 20.1-14.6 22.3-10.5 2.4-20.6-3.3-23.9-13.3-3.2-9.8 1.4-20.4 10.8-24.7 9.6-4.4 20.2-.9 25.6 8.6-2.3 1.7-4.6 3.4-6.8 5-7.8-6.7-13.3-7.5-17.7-2.6-3.8 4.2-3.7 11 .2 15.1 4.1 4 9.6 3.8 15.2-1.4zm3-2.5c-2.1 6.4-5.3 8.7-10.9 8.8-5.5.1-10.2-3.3-11.8-8.4-1.7-5.4.1-11.8 4.6-14.9 6.7-4.5 12.4-2 17.7 3 1.1-.9 2.1-1.6 3-2.4.2-.2.2-.6.3-.9-5.8-7.2-14.9-9.2-22.6-5-7.9 4.4-11.3 13.9-8.1 22.3 3 8.4 11.5 13.1 19.8 11.3 9-1.9 14.5-8.8 14.1-18.1-4.4 0-8.9-.1-13.3.1-1 .1-1.9 1.4-2.8 2.1.9.7 1.8 1.9 2.8 2 2.2.3 4.4.1 7.2.1z"
          />
          <path
            fill="aqua"
            d="M129.2 123.6H142.1v8.8h-12.9v7.2h11.7c3.4 0 3.3 2.3 3.3 4.6-.1 2.2.4 4.7-3.2 4.7-7-.1-14.1 0-21.5 0v-38.8h20.7v8.2c-3.6.4-7.3.8-10.9 1.4-.3.1-.1 2.3-.1 3.9zm13.2 19.8c-.4-.6-.7-1.1-1.1-1.7h-14.5c-.1-1.9-.2-3.3-.4-4.6-.8-5 .9-7.6 6.4-6.8 1.7.3 3.5.2 5.2-.2.8-.2 1.7-1.4 2-2.3.1-.3-1.2-1.6-1.9-1.7-2-.3-4.1-.3-6.2-.1-3.4.2-5.5-.3-5.5-4.7 0-4.1 1.7-5.1 5.3-4.8 1.4.1 2.9.3 4.1-.1 1.1-.3 1.9-1.4 2.8-2.2-.9-.8-1.7-2.2-2.7-2.3-3.6-.3-7.3 0-10.9-.2-3.1-.1-3.8 1.4-3.8 4.1.1 9 0 18 .1 27 0 1.1.5 2.3.8 3.7 5.8 0 11.3.2 16.8-.1 1.2 0 2.3-1.9 3.5-3zM172.6 115.1c-3 2.4-5.2 6.6-10.3 3.8-.5-.3-1.7.7-2.5 1.1.5.9.9 2 1.7 2.6.8.6 2 .6 3 .8 8.9 1.9 13.3 8.5 11 16.6-2.2 7.5-11.1 11.6-19 8.3-2.6-1.1-4.8-3-7.6-4.8 3.9-3.5 6.6-7.7 12.2-4.1.8.5 3-1.2 4.6-1.9-.8-1.5-1.5-3.1-2.6-4.4-.4-.5-1.6-.5-2.4-.7-6.8-1.6-10.5-5.1-10.9-10.7-.4-5.1 3-9.9 8.3-11.8 5.3-1.9 10.4-.2 14.5 5.2zm-3.3 1c-4.3-4.9-9.1-6.1-12.3-3.2-2.4 2.2-4.7 5.8-4.9 8.9-.2 4.8 3.5 7.6 8.3 8.3.7.1 1.3.4 2 .5 3.9 1 6.3 3.3 5.1 7.5-1.3 4.3-5 4.8-8.4 3.3-3.2-1.4-4.7-.5-6.2 2 5.2 4.4 10.3 5.2 15.2 2.3 4.3-2.5 6.3-7.2 5.1-12.5-1.4-6-6.1-7.3-11.3-8.1-2.9-.4-5.1-1.9-4.5-5.1.6-3.2 2.9-3.7 5.9-3.3 2.1.3 4.1-.4 6-.6z"
          />
          <path
            className="mymove"
            d="M144.8 64.3c-3.4 2-5.3 6.7-10.3 3.8-.5-.3-1.9.8-2.8 1.3.7.8 1.2 1.8 2.1 2.4.6.5 1.6.5 2.5.7 9.3 2 13.7 8.8 11.1 16.9-2.4 7.5-11.3 11.3-19.2 8-2.4-1-4.6-2.9-7.5-4.8 3.1-2.4 5.4-4.2 7.8-6.1.1.4.1.8.2 1.2 2.7.2 5.4.5 8.1.4.4 0 1.3-2.8 1-3-2.1-1.4-4.4-2.9-6.8-3.7-5.3-1.8-8.9-5.7-9.1-10.7-.2-4.9 3-9.5 8.1-11.5 5.1-2.2 10-.6 14.8 5.1zm-20 26.7c4 5.3 8.6 6.5 13.7 4.5 4.2-1.6 6.7-4.7 7-9.4.5-6.8-2.5-10-11.4-11.8-3.1-.6-5.4-2-4.6-5.5.8-3.1 3.2-3.4 6.2-2.9 1.8.3 3.8-.6 6.4-1.1-4.7-4.3-8.8-5.2-12.6-3.2-3.9 2-6.2 5.2-5.5 9.6.7 4.6 3.7 7.3 8.3 8l1.5.3c4 1 6.8 2.9 5.8 7.5-.8 3.7-4.1 4.7-8.9 3.5-1.8-.5-3.9.3-5.9.5z"
          />
          <path
            fill="rgb(255, 0, 221)"
            d="M94.1 150.8c-7.4-14.1-14.2-27-21-40.1 9.7-2 10.3-1.7 14.4 6.1 2.1 4.1 4.3 8.1 6.9 13l7.1-14.2c3.2-6.6 4.2-7 12.7-4.8-6.6 13-13 25.9-20.1 40zm-17.5-38.2c5.8 11 11.4 21.8 17.5 33.4 5.8-11.6 11.2-22.5 16.7-33.3-.6-.4-1.1-.8-1.7-1.1-9.2 4-8.1 15.9-15.2 22.2-3.3-6.4-6.7-12.4-9.6-18.6-1.7-3.5-3.9-4-7.7-2.6z"
          />
          <path
            className="mymove"
            d="M116.4 72.7v8.8h-13.5c0 3.9-.3 7.2.1 10.3.6 5-1.3 7.1-6.3 6.2-.8-.1-1.7-.2-3.1-.3V59.2h20.7v8.3h-10.4c-1.1 5-1.1 5 3.9 5 2.8.2 5.7.2 8.6.2zm-15.8 6.7c4 0 7.6.1 11.1-.1.8-.1 1.6-1.3 2.4-2.1-.8-.7-1.4-1.9-2.3-2-1.8-.3-3.8-.2-5.7-.1-3.5.2-5.9-.2-5.8-4.9.1-4.4 2.3-4.7 5.6-4.5 1.6.1 3.3.4 4.6-.2.9-.4 1.2-2.1 1.8-3.3-4.3-.4-8.7-1-13-1.1-1.3 0-2.7.9-3.8 1.7-.5.4-.3 1.6-.3 2.5 0 8.8.1 17.7 0 26.5 0 4.1 1.7 4.7 5.4 3.2V79.4z"
          />
          <path
            fill="rgb(21, 255, 0)"
            d="M0 128.7c0-5 .1-10 0-15-.1-3.9 2.3-3.9 5.1-3.9 2.7 0 5.2-.1 5.1 3.9-.2 7.1.1 14.2-.1 21.3-.1 3.7 1.2 5.1 4.8 4.7 1.5-.2 3.1.1 4.7 0 3.3-.2 5.4.2 5.5 4.6.1 4.7-2.3 4.9-5.8 4.8-5-.1-10-.2-15 0-3.2.1-4.3-1.1-4.3-4.2.1-5.4 0-10.8 0-16.2zm7.9 13.1c0-9.5.1-18.2-.1-26.8 0-1.1-1.4-2.8-2.3-2.9-1-.1-3 1.3-3.1 2.2-.2 10.7-.1 21.3-.1 32.1h19.8c.3-4.3.3-4.4-3.2-4.5-3.5-.1-6.9-.1-11-.1zM69.8 129.2c.1 11.3-8.6 20.1-19.8 20.3-11.2.2-20.2-8.6-20.3-19.7-.1-11.5 8.7-20.6 20-20.6 11.2-.1 20 8.8 20.1 20zm-37.9 0c0 10.1 8.1 18.3 18 18.2 9.8-.1 17.6-8.1 17.7-18 .1-10.3-7.6-18-18-17.9-10.2 0-17.7 7.5-17.7 17.7z"
          />
          <path
            className="mymove"
            d="M74.7 97.4V59.1c2-.1 3.7-.1 5.4-.3 3.2-.3 4.2 1.1 4.2 4.2-.1 9 0 18 0 27-.1 9-.1 9-9.6 7.4zm5.5-1.2c.5-.5 1.1-1 1.6-1.4 0-10.2.1-20.4-.1-30.5 0-1.1-1.4-2.2-2.1-3.3-1 1.1-2.8 2.1-2.9 3.2-.2 9.5-.3 19 0 28.5.1 1.2 2.3 2.3 3.5 3.5z"
          />
          <path
            fill="rgb(255, 94, 0)"
            d="M80 31.9c-8.3 1.3-8.5 1.2-8.5-6 0-5.3.1-10.7 0-16-.1-3.3 1.5-4.1 4.4-4.1 3.1 0 4.3 1.1 4.2 4.3-.2 7-.1 14.3-.1 21.8zM76.7 8.8h-1.4v20.6h1.6c.8-6.8 1.1-13.7-.2-20.6zM91.6 32C83 33 83 33 83 25.7c0-5.4.1-10.7 0-16.1-.1-3 1.3-4 4.1-3.9 2.7 0 4.7.3 4.7 3.8-.3 7.4-.2 14.8-.2 22.5zm-4.9-1.8c3.2-4.4 2.9-18.8 0-21.4v21.4zM102.6 6.7v25.1c-8 1.7-8.3 1.5-8.3-6.1V12.2c0-6.9 1-7.6 8.3-5.5zm-4.7 22.7h1.8c.7-6.9 1.2-13.8-.3-20.6h-1.6c.1 6.9.1 13.8.1 20.6zM49.7 142c-6.9 0-12.4-5.6-12.3-12.7 0-7 5.7-12.8 12.4-12.8s12.4 5.9 12.4 12.9c-.1 7-5.6 12.6-12.5 12.6zm.4-23.2c-5.8-.2-10.4 4.4-10.5 10.3-.1 5.7 4.3 10.5 9.7 10.7 5.6.3 10.5-4.5 10.5-10.4.1-5.7-4.2-10.4-9.7-10.6z"
          />
        </svg>
      </div>
    </Link>
  );
};

export default Logo;
