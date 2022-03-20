1. extension:
	* run `./build.sh` to build
	* install to browser (make sure development mode is turnning on)
	* update js/background.js (line 6) to add more allowed domains:
	```
	allowed_hosts = ['aca.eye-labs.com', 'ident.me'];
	```
2. [tinyproxy](https://tinyproxy.github.io/)
	* build: `docker build . -t eyevpn --no-cache`
	* run tinyproxy at port 6666: `docker run -dp 6666:8888 eyevpn`
	* check if local ip has been changed: `curl -x <PROXY_SERVER_IP>:6666` https://ident.me

3. TODO:
* [ ] add basic auth for proxy
* [ ] OTA update for allowed domains
* [ ] switching on/off mode support for extension