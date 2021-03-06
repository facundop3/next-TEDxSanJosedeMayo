import React from "react";
import Link from "next/link";
import logo from "./assets/tedxSmall.png";
const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <img alt="Tedx san Jose de mayo" src={logo} />
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a> Oradores </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a> Sponsors </a>
          </Link>
        </li>

        <li>
          <Link href="/talks/[year]" as="/talks/2019">
            <a> 2019 </a>
          </Link>
        </li>
        <li>
          <Link href="/talks/[year]" as="/talks/2018">
            <a> 2018 </a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          padding-left: 1em;
          background-color: white;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
        }
        img {
          height: 55px;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: rgb(244, 67, 54);
          text-decoration: none;
          font-size: 16px;
          font-family: sans-serif;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
