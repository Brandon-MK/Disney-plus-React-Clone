import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a href="/Search">
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a href="Watchlist">
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a href="/Originals">
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a href="/Movies">
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a href="/Series">
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  width: 100%;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: #f4f4f4;
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
