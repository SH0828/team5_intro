import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import TeamMemberList from './components/TeamMemberList';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background: linear-gradient(to right, #e2e2e2, #c9d6ff);
    color: #333;
    margin: 0;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

const AppContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const App = () => {
  const teamName = '35%';
  const teamIntroduction = '저희 팀 MBTI가 I, N, T, P가 각각 3명씩 존재하는 것을 표현한 3과 5(조)를 뜻하는 로마 숫자를 결합하여 만들어진 팀이라는 뜻의 35%입니다';
  const members = [
    { id: 1, name: '육종범', role: '팀장', mbti: 'ISFP', region: '대전', image: '/member1.png' },
    { id: 2, name: '백두현', role: '발표', mbti: 'INTJ', region: '서울', image: '/member2.png' },
    { id: 3, name: '박수연', role: '팀원', mbti: 'ESFP', region: '서울', image: '/member3.png' },
    { id: 4, name: '조승현', role: '팀원', mbti: 'ENTJ', region: '경기도 구리', image: '/member4.png' },
    { id: 5, name: '김남언', role: '팀원', mbti: 'INTP', region: '부산', image: '/member5.png' },
  ];

  const topRowMembers = members.slice(0, 3);
  const bottomRowMembers = members.slice(3);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header teamName={teamName} teamIntroduction={teamIntroduction} />
        <TeamMemberList members={topRowMembers} />
        <TeamMemberList members={bottomRowMembers} />
      </AppContainer>
    </>
  );
};

export default App;