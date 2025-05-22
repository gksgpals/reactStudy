import React from 'react';
import MemoItem from './MemoItem';

function MemoList({ memos }) {
  return (
    <>
      {memos.map(memo => (
        <MemoItem key={memo.id} title={memo.title} content={memo.content} />
      ))}
    </>
  );
}

export default MemoList;
