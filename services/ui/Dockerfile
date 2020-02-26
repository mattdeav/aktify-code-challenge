ARG NODE_MODULES_PATH=/opt/node_modules

# [STAGE] base (build)
FROM node:13-alpine as base

WORKDIR /app

COPY package.json .
COPY yarn.lock .

# Install yarn packages to path outside of working directory to avoid overwrites of node_modules when
# mounting volumes with `docker-compose up`
ARG NODE_MODULES_PATH
RUN yarn install --modules-folder ${NODE_MODULES_PATH}

# Configure entrypoint script
ENV ENTRYPOINT=/entrypoint.sh
COPY entrypoint.sh $ENTRYPOINT
RUN chmod +x $ENTRYPOINT

# [STAGE] development (runtime)
FROM base as development

WORKDIR /app

# Create symbolic link from local node_modules folder to the installed node_modules path
ARG NODE_MODULES_PATH
RUN ln -s ${NODE_MODULES_PATH} node_modules

CMD $ENTRYPOINT