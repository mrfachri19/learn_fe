import { Button, Modal } from "antd";
import { useState } from "react";
const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>1. Berkenalan dengan HTML</p>
        <p>Halaman Soal Modul 1 Soal 1</p>
        <p>Halaman Soal Modul 1 Soal 2</p>
        <p>Halaman Soal Modul 1 Soal 3</p>
        <p>Halaman Soal Modul 1 Soal 4</p>
        <p>Halaman Soal Modul 1 Soal 5</p>
      </Modal>
    </>
  );
};
export default Modal;
