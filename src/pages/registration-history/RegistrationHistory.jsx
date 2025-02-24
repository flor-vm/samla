import { useState } from "react";
import Table from "../../components/table/table";
import Modal from "../../components/modal/modal";
import { useFormContext } from "../../context/FormContext"; // Importa el contexto
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
