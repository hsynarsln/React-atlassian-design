import SectionMessage from '@atlaskit/section-message';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_NOTIFICATION } from '../redux/constants/constants';

const Notification = () => {
  const dispatch = useDispatch();
  const { message, success } = useSelector(state => state.notification);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch({ type: CLEAR_NOTIFICATION });
      }, 5000);
    }
    return () => {
      clearTimeout();
    };
  }, [success]);

  return (
    <div className='notification'>
      {message !== null && success && <SectionMessage appearance='success' title={message} />}
      {message !== null && !success && <SectionMessage appearance='error' title={message} />}
    </div>
  );
};

export default Notification;
