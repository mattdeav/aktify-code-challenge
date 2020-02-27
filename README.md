# Aktify Code Challenge

This repository is used for interviewing and technical screening purposes. However, the basic structure of this app can serve as an excellent basis for developing applications based on [Postgres](https://www.postgresql.org/), [Flask](https://flask.palletsprojects.com/en/1.1.x/) (Python), and [React](https://reactjs.org/) (ES6/Javascript).

_WARNING: This repository comes as-is. Aktify does not provide support or assume liability for the use of this code. It is highly recommended that you do **NOT** run a production environment based on this application scaffold, without significant review and changes._


## Table of Contents

- [Getting started](#getting-started)
- [Docker Compose](#docker-compose)
- [Architecture](#architecture)
    - [Database](#database)
    - [API](#api)
    - [UI](#ui)


## Getting started

The _Aktify Code Challenge_ is built on top of Docker and Docker Compose to ease the process of setting up multiple services and connecting them.

To get started, make sure that Docker and Docker Compose are installed correctly on your system. Then:

1. Fork and clone the repository
1. Add a `.env` file to the root of the repository and add `EMAIL_ADDRESS=<YOUR_EMAIL_ADDRESS>`, where `<YOUR_EMAIL_ADDRESS>` is replaced with any email address.
1. Run `docker-compose up -d`

_NOTE: Your OS may prompt you to allow Docker to access one of your volumes. You must grant those permissions to enable the development environment._

These commands will start, configure, and connect all of the services used in _Aktify Code Challenge_. These services include a database, database administration tool, API, and Web interface.


## Docker Compose

You'll benefit from a minimal knowledge of Docker and Docker Compose while using this repository.

- [Docker](https://docs.docker.com/develop/)
- [Docker Compose](https://docs.docker.com/compose/)

When we started the development environment we used the `-d` option. Use of the `-d` option makes Docker Compose run in the background. Without this option, the logging wouldn't be very helpful. To see the log output from any of the services, simply run `docker-compose logs -f <SERVICE_NAME>` (ex: `docker-compose logs -f api` or `docker-compose logs -f db`).

By default, Docker Compose will not rebuild a container on `docker-compose up` for performance reasons. If you feel the need to alter a service's configuration in [docker-compose.yml](docker-compose.yml) or in the service's Dockerfile, remember to rebuild the container using `docker-compose up -d --build --no-deps <SERVICE_NAME>` (ex: `docker-compose up -d --build api`).


## Architecture

The following section outlines the architecture of the _Aktify Code Challenge_ application. While this section provides a good overview, it's also important to understand how each service is built by inspecting [docker-compose.yml](docker-compose.yml) and the service's Dockerfile.


### Database

_Aktify Code Challenge_'s data persistence layer is built using Postgres. Additionally, a PG Admin service is provided to ease the burden of interacting with the database.

By default the Postgres database can be found at http://localhost:5432 and PG Admin can be accessed at http://localhost:5050. The default credentials for each of these services are defined in [docker-compose.yml](docker-compose.yml). The ports and credentials can be overridden by adding the appropriate environment variables to the [.env](.env) file that you created earlier, and in some cases by editing the [PG Admin configuration file](services/db-admin/servers.json).


### API

See [services/api/README.md](services/api/README.md) for more information.


### UI

See [services/ui/README.md](services/ui/README.md) for more information.