import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



function HeaderMin() {

  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.webp" />
      </Link>

    

      <NavMenu>
        <Link to="/">
          <span>HOME</span>
        </Link>
        <Link to="/about">
          <span>ABOUT</span>
        </Link>
      </NavMenu>
    </Nav>
  )
}

export default HeaderMin;

const Searchb = styled.img`
  width: 30px;
  height: 30px;
`;

const Nav = styled.div`
  height: 70px;
  background-color: #fffff;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
  font-weight: 700;
  border-bottom: 1px solid black;
`;

const Logo = styled.img`
  width: 130px;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-content: flex-end;

  a {
    text-decoration : none;
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin: 0 20px;
    width: 100px;
    justify-content: center;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    text-decoration: none;
    color: rgb(15, 15, 15);
    span {
      font-size: 16px;
      letter-spacing: 2px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #7d7d7d;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -3px;
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
      padding: 2px;
      color: #7d7d7d;
      border-radius: 5px;
      padding: 5px;
      letter-spacing: 3px;
    }
  }
`;

