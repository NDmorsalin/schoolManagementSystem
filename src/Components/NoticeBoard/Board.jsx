import React from 'react';
import Notice from './Notice';

const notices = [
  {
    time: '12 feb 22',
    sender: 'Savannah Nguyen',
    notice: 'Amet minim mollit non deserunt ullamco est sit aliqua'
  },
  {
    time: '13 feb 12',
    sender: 'Nguyen Savannah',
    notice: 'deserunt Amet minim mollit ullamco est sit aliqua'
  },
  {
    time: '13 feb 12',
    sender: 'Nguyen Savannah',
    notice: 'deserunt Amet minim mollit ullamco est sit aliqua'
  },
  {
    time: '13 feb 12',
    sender: 'Nguyen Savannah',
    notice: 'deserunt Amet minim mollit ullamco est sit aliqua'
  }
];
function Board() {
  return (
    <>
      {notices.map((notice, index) => (
        <Notice notice={notice} key={`${notice + index}`} />
      ))}
    </>
  );
}

export default Board;
