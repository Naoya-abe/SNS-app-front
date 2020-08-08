import React from 'react';
import DMList from './DM/DMList';
import RequestList from './Friends/RequestList';

const SidebarColumn = () => {
  return (
    <div className='sidebar-column'>
      <DMList />
      <RequestList />
    </div>
  );
};

export default SidebarColumn;
