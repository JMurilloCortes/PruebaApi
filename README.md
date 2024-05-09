# Prueba Api Propiedades

Este proyecto es una aplicación web desarrollada con React y Vite que permite filtrar propiedades inmobiliarias y mostrarlas en tarjetas. Utiliza una API para obtener los datos de las propiedades.

## Funcionalidades

- **Filtrado de Propiedades:** Los usuarios pueden filtrar las propiedades según diferentes criterios, como tipo de propiedad (apartamento, casa, comercial, oficinas) y rango de precios.
- **Visualización de Propiedades:** Las propiedades filtradas se muestran en tarjetas con información detallada, como imagen, precio, ubicación y tipo.
- **Interfaz Intuitiva:** La interfaz de usuario es sencilla y fácil de usar, lo que permite a los usuarios navegar por las propiedades de forma intuitiva y encontrar la información que necesitan rápidamente.
- **Actualización en Tiempo Real:** Los cambios en los filtros de propiedades se reflejan instantáneamente en la lista de propiedades mostradas, sin necesidad de recargar la página.

## Características

- **React y Vite:** Utiliza React como biblioteca principal para construir la interfaz de usuario y Vite como herramienta de desarrollo rápida.
- **Gestión del Estado con Zustand:** Utiliza el paquete Zustand para gestionar el estado de la aplicación de manera eficiente y sencilla.
- **API Externa:** La aplicación consume datos de una API externa para obtener información actualizada sobre las propiedades inmobiliarias.
- **Filtrado Dinámico:** Los usuarios pueden aplicar múltiples filtros de forma dinámica y ver los resultados instantáneamente en la pantalla.
- **Diseño Responsivo:** El diseño de la aplicación es completamente responsive, lo que garantiza una experiencia de usuario óptima en dispositivos de diferentes tamaños, desde móviles hasta ordenadores de escritorio.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

<img src="https://res.cloudinary.com/dtarklm7p/image/upload/v1715234172/Screenshot_2024-05-09_005442_tsx1du.png">

## Dependencias

El proyecto utiliza las siguientes dependencias y devDependencies:

- **axios** (^1.6.8)
- **react** (^18.2.0)
- **react-dom** (^18.2.0)
- **zustand** (^4.5.2)

Para las devDependencies:

- **@types/react** (^18.2.66)
- **@types/react-dom** (^18.2.22)
- **@vitejs/plugin-react** (^4.2.1)
- **autoprefixer** (^10.4.19)
- **eslint** (^8.57.0)
- **eslint-plugin-react** (^7.34.1)
- **eslint-plugin-react-hooks** (^4.6.0)
- **eslint-plugin-react-refresh** (^0.4.6)
- **postcss** (^8.4.38)
- **tailwindcss** (^3.4.3)
- **vite** (^5.2.0)

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:
   
  npm install

## Uso

1. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

  npm run dev

2. Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

## Comentarios sobre el proceso de desarrollo

En el proceso de desarrollo me encontre con varias situaciones, la primera fue que la API externa tiene una reestriccion de CORS, por lo cual no pude conectar mi localhost al server donde esta alojada la API, es por esa razón que tuve que copiarla directamente en un archivo .json en la raiz de mi carpeta de trabajo dentro de la carpeta app y consumirla desde ahí, pues practicamente es lo mismo, se esta haciendo el consumo al endpoint que ahora esta alojado en mi localhost.

Por otra parte, adicinal a las instrucciones del modelo en Figma, agregue un filtro por rango de precio, lo cual hace que la pagina principal de la prueba cambie ligeramente al tener incluido dicho filtro debajo de los botones de la parte superior.

Por ultimo, el componente de filtros de la parte superior donde esta el titulo y eslogan, lo alinie con el resto de la pagina ya que para cumplir con el ancho especificado y por temas de estetica no era adecuado dejarlo como se ve en el figma.


