# Aktify Code Challenge API

The API for _Aktify Code Challenge API_ is built using Python and the popular Flask web framework.

By default, the API can be accessed at http://localhost:5051.


## Table of contents

- [Architecture](#architecture)
    - [Patterns](#patterns)
    - [Data access](#data-access)
- [Testing](#testing)
- [Best practices](#best-practices)


## Architecture

_Aktify Code Challenge API_ is built on the Flask and SQLAlchemy ecosystem. An understanding of those technologies is beneficial for working in this repository.


### Patterns

The API makes use of a couple of Flask patterns for decomposition and testing.

The first is the [Blueprint Pattern](https://flask.palletsprojects.com/en/1.1.x/blueprints/). Blueprints are found under [src/blueprints](src/blueprints). Blueprints allow us to break down our code base into smaller, related chunks.

The second pattern is the [Application Factory Pattern](https://flask.palletsprojects.com/en/1.1.x/patterns/appfactories/). The factory allows us to provide configuration to our application on demand and offers a cleaner bootstrapping process (see [src/__init__.py](src/__init__.py)) and greater control over configuration during unit testing.

The final pattern is the [Service Layer Pattern](https://www.oreilly.com/library/view/architecture-patterns-with/9781492052197/ch04.html). This pattern enables co-reuse and greater control over automated testing.


### Data access

_Aktify Code Challenge API_ accesses the database using [SQLAlchemy](https://docs.sqlalchemy.org/en/13/), a popular ORM for Python, and the Flask extension [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/). Database schema migrations are managed by [Flask-Migrate](https://flask-migrate.readthedocs.io/en/latest/).

Before the application starts, Flask-Migrate migrations are executed to ensure that the database schema is in sync with the models defined in the API.

You should test Flask-Migrate migrations before making commits. You can do this by running the following commands from an interactive terminal inside the API container. To start the interactive terminal, run `docker-compose exec api <COMMAND>`, where `<COMMAND>` is one of the following:

- `flask db revision -m "Create Campaign table"` to generate a new migration. You can find the new file under [migrations/versions/](migrations/versions).
- `flask db upgrade` to run all migrations up to the latest revision
- `flask db downgrade` to undo the last revision

 
 ## Testing

_Aktify Code Challenge API_ uses [PyTest](https://docs.pytest.org/en/latest/) and [PyTest-watch](https://github.com/joeyespo/pytest-watch) for automated testing. The test suite is run immediately before the API is initialized. If the tests are not passing, the API server will not start.

To automatically run the test suite when a file changes, start PyTest-watch with the following commands:

1. `docker-compose exec api sh`
1. `ptw`
 
 
 ## Best practices
 
 Pay special attention to the following best practices:
 
 - **_Test_** All routes should be feature tested (actually accessing a database). Feel free to manipulate the database to achieve the state you need. _See the files under [test/](test/blueprints) for examples._
 - **_Understand your queries_** SQLAlchemy is a powerful ORM, but "with great power comes great responsibility". Understand what queries are actually executed when using SQLAlchemy models.
 