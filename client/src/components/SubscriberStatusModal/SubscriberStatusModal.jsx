import { useState } from "react";
import Modal, { ModalBody, ModalFooter } from '../Modal'
import ErrorModal from "../ErrorModal";
import PropTypes from 'prop-types';

// Components
import Button, { SecondaryButton } from '../Button';

// Services
import { updateSubscriber } from "../../services/subscriber";

const SubscriberStatusModal = (props) => {
  const { isOpen, onSuccess, onClose, subscriberId, active } = props;
  const [isDeleting, setIsDeleting] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onOpenErrorModal = () => {
    setShowErrorModal(true)
  }

  const onCloseErrorModal = () => {
    setShowErrorModal(false)
  }

  const onUpdate = () => {
    console.log(active)
    const payload = {
      active: active === '1' ? '0' : '1'
    }

    setIsDeleting(true)
    updateSubscriber(subscriberId, payload)
    .then(() => {
      onSuccess()
    })
    .catch((payload) => {
      onOpenErrorModal()
      const error = payload?.response?.data?.message || 'Something went wrong'
      console.error(error)
      //TODO Make error message more specific
      setErrorMessage(error)
    })
    .finally(() => {
      setIsDeleting(false)
    })
  }

  const modalTitleText = active === '1' ?
    "Unsubscribe" : "Resubscribe"
  const messageBodyText = active === '1' ?
    "Are you sure you'd like to unsubscribe this subscriber?" :
    "Are you sure you'd like to resubscribe this subscriber?"
  const buttonText = active === '1' ?
    "Unsubscribe" : "Resubscribe"

  return (
    <Modal modalTitle={modalTitleText} showModal={isOpen} onCloseModal={onClose}>
      <>
        <ModalBody>
          {messageBodyText}
          <ErrorModal isOpen={showErrorModal} onClose={onCloseErrorModal} errorMessage={errorMessage}>
          </ErrorModal>
        </ModalBody>
        <ModalFooter>
          <SecondaryButton
            className="mx-2"
            onClick={onClose}
          >
            Cancel
          </SecondaryButton>
          <Button
            type="primary"
            loading={isDeleting}
            onClick={onUpdate}
          >
            {buttonText}
          </Button>
        </ModalFooter>
      </>
    </Modal>
  );
};

SubscriberStatusModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSuccess: PropTypes.func,
  subscriberId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // TODO: Make this numeric
  active: PropTypes.string
}

export default SubscriberStatusModal;
