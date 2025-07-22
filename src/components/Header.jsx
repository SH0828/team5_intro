import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 25px;
`;

const HeaderText = styled.div`
  h1 {
    font-size: 2em;
    color: #000000; /* 검정색으로 변경 */
    margin: 0;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1em;
    color: #666;
    margin: 0;
  }
`;

const Header = ({ teamName, teamIntroduction }) => {
  return (
    <HeaderContainer>
      <Logo src="/logo.png" alt="Team Logo" />
      <HeaderText>
        <h1>{teamName}</h1>
        <p>{teamIntroduction}</p>
      </HeaderText>
    </HeaderContainer>
  );
};

export default Header;