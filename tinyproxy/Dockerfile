FROM alpine:3.10

RUN apk add --no-cache \
	bash \
	tinyproxy \
	openvpn \
	curl

COPY . /opt/docker-tinyproxy

RUN chmod +x /opt/docker-tinyproxy/*.sh

entrypoint "/opt/docker-tinyproxy/run.sh"
