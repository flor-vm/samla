import { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import styles from './CameraCapture.module.css';

export default function CameraCapture({ name, message, control, rules, setValue }) {
  const [selfie, setSelfie] = useState(null);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
      setStream(mediaStream);
      videoRef.current.srcObject = mediaStream;
    });

    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL('image/png');
      setSelfie(imageDataUrl);
      setValue(name, imageDataUrl);
    }
  };

  const retakePhoto = () => {
    setSelfie(null);
    navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    });
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ fieldState }) => (
        <div className={styles.container}>
          <h2>{message}</h2>
          {selfie ? (
            <div className={styles.previewContainer}>
              <img
                src={selfie}
                alt='Selfie'
                className={styles.previewImage}
              />
              <button
                type='button'
                className={styles.retakeButton}
                onClick={retakePhoto}
              />
            </div>
          ) : (
            <div className={styles.videoContainer}>
              <video
                ref={videoRef}
                autoPlay
                playsInline
              />
              <button
                type='button'
                className={styles.captureButton}
                onClick={capturePhoto}
              />
            </div>
          )}
          <canvas
            ref={canvasRef}
            style={{ display: 'none' }}
          />
          {fieldState.error && (
            <span className={styles.error}>{fieldState.error.message}</span>
          )}
        </div>
      )}
    />
  );
}
