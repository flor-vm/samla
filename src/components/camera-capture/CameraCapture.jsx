import { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import * as faceapi from '@vladmandic/face-api';
import styles from './CameraCapture.module.css';

export default function CameraCapture({ name, message, control, rules, setValue }) {
  const [selfie, setSelfie] = useState(null);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const previewCanvasRef = useRef(null); 

  useEffect(() => { 
    // Carga face-api models
    const loadModels = async () => {
      await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
      await faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models');
    };

    loadModels().then(() => {
      navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
        setStream(mediaStream);
        videoRef.current.srcObject = mediaStream;

        // Canvas de la vista previa en espejo
        const updatePreview = () => {
          const previewCanvas = previewCanvasRef.current;
          const context = previewCanvas.getContext('2d');
          previewCanvas.width = videoRef.current.videoWidth;
          previewCanvas.height = videoRef.current.videoHeight;

          // Modo espejo
          context.translate(previewCanvas.width, 0);
          context.scale(-1, 1);
          context.drawImage(videoRef.current, 0, 0, previewCanvas.width, previewCanvas.height);
          context.setTransform(1, 0, 0, 1, 0, 0); 
        };

        const interval = setInterval(updatePreview, 100); 

        return () => clearInterval(interval);
      });
    });

    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const capturePhoto = async () => {
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

      // Detectar cara
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks();
      if (detections.length === 0) {
        alert('No se detectó ningún rostro. Por favor, intenta nuevamente.');
      }
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
                style={{ display: 'none' }} 
              />
              <canvas
                ref={previewCanvasRef}
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
