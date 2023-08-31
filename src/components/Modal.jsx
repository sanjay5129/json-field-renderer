import Modal from '@mui/material/Modal';

export default function ModalComponent({ isOpen, name, children, stateValue, handleModalClose, ...rest }) {
  return (
    <Modal
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        ...rest,
      }}
      onClose={handleModalClose(name)}
      name={name}
      open={typeof stateValue === Boolean ? stateValue : isOpen}
    >
      <>
        {children}
      </>
    </Modal>
  )
}