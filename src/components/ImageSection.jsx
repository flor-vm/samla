import image from '../assets/image.jpeg';
import thunderbolt from '../assets/thunderbolt.png';

export default function ImageSection() {
  return (
    <div className='image-section'>
      <img
        className='image'
        src={image}
        alt='Imagen ilustrativa'
      />
      <div className='icon-overlay'>
        <img
          className='icon'
          src={thunderbolt}
          alt='Ícono de rayo'
        />
      </div>
    </div>
  );
}
