### My portfolio

Hey everyone, I'm Luigi Sanchez. This will be my porfolio website (SPA) built with react.js

#### Inspiration

- Design
- Maths
- Patterns
- Cats
- Salsa (Music)
- Simple

#### Interested links

- [Square gif](https://www.pinterest.es/pin/403424079119628492/)
- [Cube gif](https://www.pinterest.es/pin/421860690098676535/)
- [Square spiral](https://www.pinterest.es/pin/299489443949254243/)
- [Impossible triangle](https://www.pinterest.es/pin/219409813081129343/)
- [Pattern rotation](https://www.pinterest.es/pin/416512665510732757/) _rotate on scroll_
- [Cube rotation](https://www.pinterest.es/pin/142215300716710341/)
- [Waves](https://www.pinterest.es/pin/711779916093646577/)

#### Project stages

- [ ] Design
- [ ] Development
- [ ] Deploy

#### Design tools

- Figma

#### Development tools

- Styled Components
- Styled System
- Animation Library: Spring, Anime.js, GreenSock.js

#### Development Process

- [ ] Use Test Driven Development
- [ ] Manage nginx and certbot in server
- [ ] Setup certbot autorenewal

## Deployment

Setup certbot autorenewal as a CRON job in the server:

For this porpouse we are going to use certbot option `--keep-until-expiring` and remove `--force-renewal`.

Problem: develop a deployment workflow because files only exists in local host.

#### Old hack when cert expires.

Use this line and comment the existing one in case certificate gets outdated in `docker-compose.yml` certbot service.

```bash
command: certonly --webroot --webroot-path=/var/www/html --email luigi.prodesign@gmail.com --test-cert --dry-run -d luigiderson.dev -d www.luigiderson.dev
```

After that run

```bash
docker-compose --context remote up cerbot
```

If it works we can remove the test certificate code line and uncomment the original one. Finally run.

```bash
docker-compose --context remote up -d cerbot
```

And restart nginx service (app)

```bash
docker-compose --context remote restart -d app
```