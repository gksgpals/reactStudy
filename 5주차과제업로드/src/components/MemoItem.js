import React from 'react';
import styled from 'styled-components';

const MemoBlock = styled.div`
  border: 1px solid ${props => props.theme.palette.gray};
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const Content = styled.p`
  margin: 0;
`;

function MemoItem({ title, content }) {
  return (
    <MemoBlock>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </MemoBlock>
  );
}

export default MemoItem;
