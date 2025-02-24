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

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: async (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        alert('Solo se permiten imágenes.');
        return;
      }

      // Convertir a base64
      const base64Files = await Promise.all(
        acceptedFiles.map(async (file) => ({
          name: file.name,
          image: await toBase64(file),
        }))
      );

      setValue(name, base64Files);
      setUploadedFiles(base64Files);
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
              <li key={file.name} className={styles.fileItem}>
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
