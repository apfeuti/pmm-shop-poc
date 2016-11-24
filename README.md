# pmm-shop-poc

## Installation
### Install prerequisites (depending what you have already installed on your computer, not all steps are required)
0.1) Install utilities
$ sudo apt install curl

0.2) Install nodejs
```sh
$ sudo apt-get install nodejs
```
or for v4
```sh
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

0.3) Install npm
```sh
$ sudo apt-get install npm
```

0.4) Install git
```sh
$ sudo apt-get install git
```

### Install product-configurator (for proof-of-concept)
1) Clone repository
```sh
git clone https://github.com/apfeuti/pmm-shop-poc.git
```

2) Install dependencies
```sh
$ pmm-shop-poc
$ npm install
```

3) Launch application
```sh
$ nodejs httpserver
```

4) Launch your webbrowser and type in URL: http://localhost:5000
