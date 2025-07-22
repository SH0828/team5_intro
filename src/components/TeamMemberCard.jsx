import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex-shrink: 0;
  width: 280px;
  transition: all 0.3s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const MemberImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MemberInfo = styled.div`
  width: 100%;
  margin-bottom: 10px;
  font-size: 1.1em;
  text-align: left;

  strong {
    display: inline-block;
    width: 80px;
    margin-right: 10px;
    color: #555;
  }
`;

const TeamMemberCard = ({ member }) => {
  return (
    <Card>
      <MemberImage src={member.image} alt={member.name} />
      <MemberInfo>
        <strong>이름:</strong> {member.name}
      </MemberInfo>
      <MemberInfo>
        <strong>역할:</strong> {member.role}
      </MemberInfo>
      <MemberInfo>
        <strong>MBTI:</strong> {member.mbti}
      </MemberInfo>
      <MemberInfo>
        <strong>지역:</strong> {member.region}
      </MemberInfo>
    </Card>
  );
};

export default TeamMemberCard;