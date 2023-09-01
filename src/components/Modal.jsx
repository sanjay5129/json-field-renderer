import Modal from '@mui/material/Modal';

export default function ModalComponent({ isOpen, name, children, stateValue, handleModalClose, ...rest }) {
  return (
    <Modal
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        ...rest,
      }}
      onClose={handleModalClose(name)}
      name={name}
      open={stateValue === undefined ? isOpen : stateValue}
    >
      <>
        {children}
      </>
    </Modal>
  )
}