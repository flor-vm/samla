import styles from "./Modal.module.css";

export default function Modal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>x</button>
        <div className={styles.modalContainer}>
          {user.selfie && <img src={user.selfie} alt="Selfie" className={styles.selfie} />}
          <div>
            <h1 className={styles.userName}>{user.name} {user.last_name}</h1>
            <div className={styles.userInfo}>
              <div className={styles.halfContainer}>
                <p><strong>Correo electrónico</strong> {user.email}</p>
                <p><strong>Número de teléfono</strong> {user.phone}</p>
                <p><strong>Tipo de documento</strong> {user.document_type}</p>
                <p><strong>Número de documento</strong> {user.document_number}</p>
              </div>
              <div className={styles.halfContainer}>
                <p><strong>Departamento</strong> {user.department}</p>
                <p><strong>Municipio</strong> {user.municipality}</p>
                <p><strong>Dirección</strong> {user.address}</p>
                <p><strong>Ingresos mensuales</strong> {user.monthly_income}</p>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.documentSection}>
          <div className={styles.separator} />
          <h3>Documento de identidad</h3>
          <div className={styles.documentImages}>
            {user.document_images?.map((doc, index) => (
              <img key={index} src={doc} alt={`Documento ${index + 1}`} className={styles.documentImage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}