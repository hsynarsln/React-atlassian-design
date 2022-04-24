import Spinner from '@atlaskit/spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notification from '../components/Notification';
import UserList from '../components/UserList';
import { clearErrors, loadUsers } from '../redux/actions/userAction';

const Home = () => {
  const dispatch = useDispatch();
  const { users, error, loading, isDeleted } = useSelector(state => state.users);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(loadUsers());
  }, []);

  return (
    <div>
      <Notification />
      <div className='user-list'>{loading ? <Spinner size='xlarge' /> : <UserList users={users} isDeleted={isDeleted} />}</div>
    </div>
  );
};

export default Home;
