import image from "../assets/image.jpeg";

export default function ImageSection() {
  return (
    <div className="image-section">
      <img className="image" src={image} alt="Equipo trabajando" />
    </div>
  );
}
