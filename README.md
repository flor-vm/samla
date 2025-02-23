# Samla - Aplicación de Solicitud de Créditos

Esta es una aplicación web responsiva desarrollada con **React 19** y **Vite 6**, que permite a los usuarios solicitar créditos proporcionando información personal y documentos.

## 🚀 Tecnologías Utilizadas

- **React 19** – Desarrollo de interfaces de usuario modernas.
- **Vite 6** – Entorno de desarrollo rápido y eficiente.
- **React Hook Form** – Manejo de formularios.
- **React Dropzone** – Subida de archivos.
- **React Router DOM** – Manejo de navegación.
- **Google Libphonenumber** – Validación de números de teléfono.
- **ESLint** – Linter para código limpio y estructurado.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: 18 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

Verifica la instalación con:

```sh
node -v
npm -v
```

## 📥 Instalación

Clona el repositorio:

```sh
git clone https://github.com/flor-vm/samla.git
```

Accede al directorio del proyecto:

```sh
cd samla
```

Instala las dependencias:

```sh
npm install
```

## ▶️ Ejecutar en Desarrollo

Para iniciar el servidor de desarrollo:

```sh
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

## 🏗️ Construcción para Producción

Si deseas generar una versión optimizada para producción:

```sh
npm run build
```

Los archivos se generarán en la carpeta `dist`.

Para previsualizar la aplicación en producción:

```sh
npm run preview
```

## 🔿️ Linter y Formateo

Para verificar y corregir errores de formato:

```sh
npm run lint
```

## 🛠️ Personalización

Si deseas modificar la configuración de Vite, puedes hacerlo en el archivo `vite.config.js`.