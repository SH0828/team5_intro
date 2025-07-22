import React from 'react';
import styled from 'styled-components';
import TeamMemberCard from './TeamMemberCard';

const TeamList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0;
  margin-top: 20px;
`;

const TeamMemberList = ({ members }) => {
  return (
    <TeamList>
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </TeamList>
  );
};

export default TeamMemberList;