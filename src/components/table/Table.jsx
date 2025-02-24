import { useState } from "react";
import styles from "./Table.module.css";

export default function Table({ users, onSelectUser }) {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    const pageNumbers = [];

    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }

    return pageNumbers;
  };



  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Historial de Registro</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.fixedColumn}>Nombres y apellidos</th>
              <th className={styles.hideOnSmall}>Correo electrónico</th>
              <th className={styles.hideOnMedium}>Número telefónico</th>
              <th className={styles.fixedColumn}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.document_number}>
                <td className={styles.fixedColumn}>{`${user.name} ${user.last_name}`}</td>
                <td className={styles.hideOnSmall}>{user.email}</td>
                <td className={styles.hideOnMedium}>{user.phone}</td>
                <td className={styles.fixedColumn}>
                  <button className={styles.detailButton} onClick={() => onSelectUser(user)}>
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className={styles.ellipsis}>...</span>
            ) : (
              <button
                key={index}
                className={currentPage === page ? styles.activePage : styles.pageButton}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            className={styles.pageButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
