import { ReactNode } from "react";
import { Modal } from "react-bootstrap";

const ModalApp = ({ title, body, show, onHide }: { title: string, body: ReactNode, show: boolean, onHide: () => void }) => {
  return (
    <>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onHide={onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body}
        </Modal.Body>
      </Modal>
    </>
  )
};

export default ModalApp
