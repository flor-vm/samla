import { useDropzone } from 'react-dropzone';
import { Controller } from 'react-hook-form';
import media from '../../assets/media.svg';
import styles from './DropzoneField.module.css';
import ErrorHelper from '../error-helper/ErrorHelper';

export default function DropzoneField({
  name,
  title,
  control,
  rules,
  setValue,
  required = false,
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setValue(name, acceptedFiles);
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
        <p>Arrastrar aquí</p>
        <div className={styles.separator}>o</div>
        <button
          type='button'
          className={styles.button}>
          Seleccionar archivo
        </button>
      </div>

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
