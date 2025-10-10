# EcomReact — Documento de proyecto

**Descripción**  
EcomReact es una aplicación de ejemplo en **React** (front-end) que implementa un pequeño e-commerce con las funcionalidades básicas: mostrar productos, agregarlos al carrito y finalizar la compra. Está pensada para usarse como proyecto de portfolio o plantilla para ampliar con más features (pagos, usuarios, inventario, etc.).

---

# Tabla de contenido
1. [Funcionalidades](#funcionalidades)  
2. [Tecnologías / Dependencias](#tecnologías--dependencias)  
3. [Instalación y arranque](#instalación-y-arranque)  
4. [Estructura sugerida de archivos](#estructura-sugerida-de-archivos)  
5. [Descripción de componentes principales y rutas](#descripción-de-componentes-principales-y-rutas)  
6. [Formato de datos de ejemplo](#formato-de-datos-de-ejemplo)  
7. [Integración con Firebase (breve)](#integración-con-firebase-breve)  
8. [Enlaces a documentación oficial](#enlaces-a-documentación-oficial)  
9. [Buenas prácticas y próximos pasos](#buenas-prácticas-y-próximos-pasos)

---

## Funcionalidades
- Listado de productos (página principal / `/`)  
- Página de detalle de producto (`/product/:id`)  
- Carrito (añadir, quitar, ver total) (`/cart`)  
- Checkout / finalizar compra (guardar orden en Firebase) (`/checkout`)  
- Navegación con React Router  
- Componentes visuales con React-Bootstrap  
- Persistencia mínima del carrito (localStorage)  
- Mensajes/alertas para acciones (producto agregado, compra finalizada, errores)

---

## Tecnologías / Dependencias
- [`react`](https://react.dev/)  
- [`react-dom`](https://react.dev/reference/react-dom)  
- [`react-router-dom`](https://reactrouter.com/) (React Router)  
- [`react-bootstrap`](https://react-bootstrap.github.io/) (React-Bootstrap)  
- [`bootstrap`](https://getbootstrap.com/) (CSS)  
- [`firebase`](https://firebase.google.com/docs) (FireStore / Auth / Realtime DB si hace falta)  

Ejemplo de instalación (npm):
```bash
npm install react react-dom react-router-dom react-bootstrap bootstrap firebase
