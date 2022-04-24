import DynamicTable from '@atlaskit/dynamic-table';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DetailModal from './DetailModal';

const UserList = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDetail, setUserDetail] = useState([]);
  const dispatch = useDispatch();
  const headers = ['Name Surname', 'Company', 'Email', 'Date', 'Country', 'City'];

  const head = {
    cells: headers.map(header => ({
      key: header,
      content: header
    }))
  };

  const rows = users?.map(user => ({
    key: user.id,
    cells: user.map((content, index) => ({
      key: index,
      content
    })),
    onClick: () => {
      setIsOpen(true);
      setUserDetail(user);
    }
  }));

  return (
    <div>
      <DynamicTable caption='Employee List' head={head} rows={rows} rowsPerPage={15} defaultPage={1} loadingSpinnerSize='large' />
      <DetailModal setIsOpen={setIsOpen} userDetail={userDetail} isOpen={isOpen} />
    </div>
  );
};

export default UserList;
