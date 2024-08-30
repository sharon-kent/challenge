import PropTypes from 'prop-types'
import Button from '../Button'
import Modal, { ModalBody, ModalFooter } from '../Modal'

const ErrorModal = (props) => {
  const { isOpen, onClose, errorMessage} = props

  return (
    <Modal modalTitle="Error" showModal={isOpen} onCloseModal={onClose}>
      <>
        <ModalBody>
            <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                {errorMessage}
            </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold uppercase"
            type="button"
            onClick={onClose}
          >
            Ok
          </Button>
        </ModalFooter>
      </>
    </Modal>
  );
}

ErrorModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSuccess: PropTypes.func,
  errorMessage: PropTypes.string
}

export default ErrorModal