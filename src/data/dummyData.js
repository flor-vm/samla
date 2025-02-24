import document from '../assets/document.png';
import selfie from '../assets/selfie.png';

const names = ["Juan Carlos", "María Fernanda", "José Luis", "Ana Sofía", "Carlos Alberto", "Laura Beatriz"];
const lastNames = ["Pérez López", "González Ramírez", "Rodríguez Mendoza", "Fernández Castro", "Ramírez Solís", "Vargas Jiménez"];
const emails = ["ejemplo1@gmail.com", "ejemplo2@gmail.com", "ejemplo3@gmail.com", "usuario4@hotmail.com", "correo5@yahoo.com"];
const phones = ["+506766778975", "+506789456123", "+506754123698", "+506701234567", "+506782569314"];
const departments = ["San Salvador", "La Libertad", "Santa Ana", "San Miguel", "Usulután"];
const municipalities = ["San Jacinto", "Antiguo Cuscatlán", "Metapán", "Chalatenango", "Soyapango"];
const documentTypes = ["DUI", "Pasaporte", "NIT"];

export const users = Array.from({ length: 60 }, (_, i) => ({
  name: names[i % names.length],
  last_name: lastNames[i % lastNames.length],
  email: `${emails[i % emails.length].split("@")[0]}${i + 1}@${emails[i % emails.length].split("@")[1]}`,
  phone: phones[i % phones.length],
  document_type: documentTypes[i % documentTypes.length],
  document_number: `1234567-${i}`,
  department: departments[i % departments.length],
  municipality: municipalities[i % municipalities.length],
  address: `Calle principal, casa #${i + 1}, ${municipalities[i % municipalities.length]}`,
  monthly_income: `$${((i % 30) + 1) * 150}.00`,
  document_images: [document, document],
  selfie: selfie
}));