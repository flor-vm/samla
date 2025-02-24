import { useState } from "react";
import Table from "../../components/table/Table.jsx";
import Modal from "../../components/modal/Modal.jsx";
import { useFormContext } from "../../context/FormContext";
import SideBanner from "../../components/side-banner/SideBanner.jsx";
import styles from './RegistrationHistory.module.css';

const RegistrationHistory = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { history } = useFormContext();

  return (
    <div className={styles.container}>
      <SideBanner step={3} />
      <Table users={history} onSelectUser={setSelectedUser} />
      <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
};

export default RegistrationHistory;
