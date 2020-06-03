Dentro de la carpeta de 'Docker':

- Run.bat -> ejecuta los comandos Docker-compose build y Docker-compose up

Dentro de la carpeta de'Kubernetes':

- Run.bat -> Inicializa Minikube, ejecuta Kubectl apply -f config.yaml & minikube service swagger-ui --url
- Stop.bat -> Para cerrar rapidamente el clustes de Kubernetes.

Dentro de la carpeta de 'Servicios':
- buildAll.bat -> Realiza un docker build de las api-mock de los servicios de nuestro sistema.
Dentro de las carpetas de cada servicio se encuentran la especificacion YAML/JSON de cada servicio y el Dockerfile para construir las imagenes para el mocking de dichos servicios.

Dentro de la carpeta de 'Implementacion':
- Código -> El código fuente de la implementacion de nuestro servicio.
- Docker - API SERVER -> Despliegue con Docker, tiene los mismos scripts que la carpeta Docker.
- Kubernetes - API SERVER -> Despliegue con Kubernetes, tiene los mismos scripts que la carpeta Kubernetes.

La justificacion, explicacion y realizacion de la practica 2 de AOS se incluye en la memoria adjunta.

Link de mega.nz: https://mega.nz/file/Fo5lURBa#EhcrPp_lTdUNoa4AeTwLnmvUukPlcCQ0KrVtif-ZYIQ
