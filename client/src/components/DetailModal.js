import Button from '@atlaskit/button/standard-button';
import Modal, { ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition } from '@atlaskit/modal-dialog';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/actions/userAction';

const DetailModal = ({ setIsOpen, isOpen, userDetail }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteUserHandler = () => {
    dispatch(deleteUser(userDetail[2]));
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <ModalTransition>
          <Modal onClose={closeModal}>
            <ModalHeader>
              <ModalTitle>User Detail</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p>{userDetail[0]}</p>
              <p>{userDetail[1]}</p>
              <p>{userDetail[2]}</p>
              <p>{userDetail[3]}</p>
              <p>{userDetail[4]}</p>
              <p>{userDetail[5]}</p>
            </ModalBody>
            <ModalFooter>
              <Button appearance='subtle' onClick={closeModal}>
                Cancel
              </Button>
              <Button appearance='danger' onClick={deleteUserHandler} autoFocus>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        </ModalTransition>
      )}
    </div>
  );
};

export default DetailModal;
