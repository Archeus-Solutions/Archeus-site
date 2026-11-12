FROM caddy:alpine
WORKDIR /srv
COPY . /srv
COPY Caddyfile /etc/caddy/Caddyfile
