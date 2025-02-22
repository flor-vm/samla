import { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';

export default function CameraCapture({ name, control, rules, setValue }) {
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

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ fieldState }) => (
        <div>
          <h2>Captura tu Selfie</h2>
          {selfie ? (
            <div>
              <img
                src={selfie}
                alt='Selfie'
                width='300'
              />
              <button onClick={() => setSelfie(null)}>Tomar otra</button>
            </div>
          ) : (
            <div>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                width='300'
              />
              <button onClick={capturePhoto}>Capturar Foto</button>
            </div>
          )}
          <canvas
            ref={canvasRef}
            style={{ display: 'none' }}
          />
          {fieldState.error && <span>{fieldState.error.message}</span>}
        </div>
      )}
    />
  );
}
