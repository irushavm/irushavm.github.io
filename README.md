# React Static Site
> React-based static site to be deployed using docker-compose

This repository contains the development envrionment for developing and publishing a static site built using React and SASS.

## Compatibility
This repo has only been tested on UNIX systems. Windows is untested.

## Project Layout

```sh
├── app/                        # Application space
│   ├── package.json            # NodeJS project dependencies
│   ├── src
│   │   ├── app
│   │   │   ├── comp/           # React components
│   │   │   ├── const/          # Configurable fields
│   │   │   └── index.jsx       # App entrypoint
│   │   └── scss/               # App styles
│   ├── static/
│   │   ├── img/                # Static images
│   │   └── index.html          # HTML Boilerplate
│   └── webpack.config.js       # Webpack build configuration
|
├── build/
│   ├── certbot/                # AUTO-GENERATED; Used by certbot service to populate SSL certificates
│   ├── dist/                   # AUTO-GENERATED; Application production bundle
│   └── nginx/
│       └── app.conf            # Reverse proxy configuration
|
├── docker-compose.yml          # Production stack configuration
├── Dockerfile.dev              # CONTAINER: Development in container
├── Dockerfile.prod             # CONTAINER: Building production buncle
├── init.prod.sh                # PROD-SCRIPT: Initialize prod stack with SSL certificates
├── run.dev.sh                  # DEV-SCRIPT: Run dev envrionment in container
└── update.prod.sh              # PROD-SCRIPT: Update already-running stack

```


## Development setup
Development is performed within a docker container that isolates all the projects dependencies needed:

```sh
./run.dev.sh
```

## Releasing to Production
The production build for this project involves:
* Building a production bundle of the site using webpack
* Hosting the generated static site using NGINX
* Periodically generating SSL certificates using certbot


When SSL certificates have not been pulled down yet for this machine, run the following command:

```sh
./init.prod.sh
```

Then run the production update script:


```sh
./update.prod.sh
```

Now both users will be able to access the site on HTTPS(443)


## Release History
See [CHANGELOG](./CHANGELOG)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


## Maintainers

Irusha Vidanamadura – irusha@vidanamadura.net

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/irushavm](https://github.com/irushavm)
