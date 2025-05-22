import React, { useState } from 'react';
import styled from 'styled-components';

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  height: 100px;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  background: ${props => props.theme.palette.primary};
  color: white;
  font-weight: bold;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #339af0;
  }
`;

function MemoForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = () => {
    if (!title || !content) return;
    onAdd(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <FormBlock>
      <Input placeholder="제목" value={title} onChange={e => setTitle(e.target.value)} />
      <TextArea placeholder="내용" value={content} onChange={e => setContent(e.target.value)} />
      <Button onClick={onSubmit}>추가</Button>
    </FormBlock>
  );
}

export default MemoForm;
