FROM oven/bun

LABEL org.opencontainers.image.source=https://github.com/realtpowell/agarden

# Ensure `bun install -g` works correctly
ARG BUN_INSTALL_BIN=/usr/local/bin/
ENV BUN_INSTALL_BIN=${BUN_INSTALL_BIN}

RUN [ "bun", "install", "-g", "nuekit" ]

COPY . .

RUN [ "nue", "build", "-p" ]
EXPOSE 8083/tcp
CMD [ "nue", "-p" ]
