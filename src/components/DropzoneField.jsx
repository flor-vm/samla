import { useDropzone } from 'react-dropzone';
import { Controller } from 'react-hook-form';

export default function DropzoneField({ name, control, label, setValue }) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setValue(name, acceptedFiles);
    },
  });

  return (
    <div>
      <label>{label}</label>
      <div
        {...getRootProps()}
        className='dropzone'>
        <input {...getInputProps()} />
        <p>Arrastra y suelta las imágenes aquí</p>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ fieldState: { error } }) =>
          error && <p style={{ color: 'red' }}>{error.message}</p>
        }
      />
    </div>
  );
}
