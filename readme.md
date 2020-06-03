Dentro de la carpeta de 'Docker':

- Run.bat -> ejecuta los comandos Docker-compose build y Docker-compose up

Dentro de la carpeta de'Kubernetes':

- Run.bat -> Inicializa Minikube, ejecuta Kubectl apply -f config.yaml & minikube service swagger-ui --url
- Stop.bat -> Para cerrar rapidamente el clustes de Kubernetes.

Dentro de la carpeta de 'Servicios':
- buildAll.bat -> Realiza un docker build de las api-mock de los servicios de nuestro sistema
Dentro de las carpetas nombradas por los servicios se encuentran la especificacion .yaml o .json de cada servicio y el Dockerfile para inicializar las api-mocks de cada servicio

Dentro de la carpeta de 'Implementacion':
- Codigo -> El codigo fuente de la implementacion de nuestro servicio
- Docker - API SERVER -> Despliegue con Docker, tiene los mismos .bat que la carpeta Docker
- Kubernetes - API SERVER -> Despliegue con Kubernetes, tiene los mismos .bat que la carpeta Kubernetes

La justificacion, explicacion y realizacion de la practica 2 de AOS se incluye en el Word adjunto.

link de mega.nz: https://mega.nz/file/Fo5lURBa#EhcrPp_lTdUNoa4AeTwLnmvUukPlcCQ0KrVtif-ZYIQ
