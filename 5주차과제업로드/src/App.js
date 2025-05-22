import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import MemoForm from './components/MemoForm';
import MemoList from './components/MemoList';

const AppBlock = styled.div`
  width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
`;

function App() {
  const [memos, setMemos] = useState([]);

  const addMemo = (title, content) => {
    setMemos([...memos, { id: Date.now(), title, content }]);
  };

  return (
    <ThemeProvider theme={{ palette: { primary: '#228be6', gray: '#495057' } }}>
      <AppBlock>
        <MemoForm onAdd={addMemo} />
        <MemoList memos={memos} />
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
