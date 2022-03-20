#!/bin/sh

echo "Start script"
sleep 2

sh /opt/docker-tinyproxy/ovpn.sh &
sh /opt/docker-tinyproxy/tinyproxy.sh

echo "End script"