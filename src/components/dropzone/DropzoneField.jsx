import { useDropzone } from 'react-dropzone';
import { Controller } from 'react-hook-form';
import media from '../../assets/media.svg';
import styles from './DropzoneField.module.css';
import ErrorHelper from '../error-helper/ErrorHelper';
import { useState } from 'react';

export default function DropzoneField({
  name,
  title,
  control,
  rules,
  setValue,
  required = false,
}) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [] // Solo imágenes
    },
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        alert('Solo se permiten imagenes.');
      }
      setValue(name, acceptedFiles);
      setUploadedFiles(acceptedFiles);
    },
  });

  return (
    <>
      {title && <h1>{title}</h1>}
      <div
        {...getRootProps()}
        className={styles.dropzone}>
        <input {...getInputProps()} />
        <img
          src={media}
          alt='Upload Icon'
          className={styles.icon}
        />
        <p>{isDragActive ? 'Suelta para subir el archivo' : 'Arrastrar aquí'}</p>
        <div className={styles.separator}>o</div>
        <button
          type='button'
          className={styles.button}>
          Seleccionar archivo
        </button>
      </div>

      {uploadedFiles.length > 0 && (
        <div className={styles.uploadedFiles}>
          <h2>Archivos subidos:</h2>
          <ul className={styles.fileList}>
            {uploadedFiles.map((file) => (
              <li
                key={file.name}
                className={styles.fileItem}>
                {file.name} 
              </li>
            ))}
          </ul>
        </div>
      )}

      <Controller
        name={name}
        control={control}
        rules={{ ...(required && { required: 'Completa este campo.' }), ...rules }}
        render={({ fieldState: { error } }) =>
          error && <ErrorHelper message={error.message} />
        }
      />
    </>
  );
}
