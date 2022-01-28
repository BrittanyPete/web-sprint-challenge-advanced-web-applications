import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <HeaderStyle>
      <p>Blogger Pro</p>
      <MenuStyle>
        <li>
          <Link to="/">Login</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="view">View</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="logout">Logout</Link>
          </li>
        )}
      </MenuStyle>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
    padding: 1em;
    background-color: #daa1ac;
    display:flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-weight: bold;
        font-size: 1.5em;
    }
`

const MenuStyle = styled.ul`
  li {
        display: inline-block;
        padding: 0.3rem 1rem;
        
        a {
            text-decoration: none;
            color: black;
            font-size: 1em;
        }
    }
`