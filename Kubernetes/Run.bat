minikube start
kubectl apply -f config.yaml
minikube service swagger-ui-facturacion --url
minikube service swagger-ui-logging --url
minikube service swagger-ui-pollitorex-pedidos --url
minikube service swagger-ui-productos --url
