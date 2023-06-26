# Techcamp#1 Project

## Commands

Capture screenshots of website

```bash
pnpm capture
```

Output will be in `./public/assets/screenshots/`

## Running locally

run with docker

```bash
docker build -t techcamp-project .
docker run -p 3000:3000 --name techcamp-project techcamp-project
```

run with node

```bash
# Install pnpm if you haven't
npm i -g pnpm
# Install all dependencies
pnpm i
# Start the development server
pnpm dev
```

---

Created at : 16 June 2023 [@SornchaiTheDev](https://github.com/SornchaiTheDev)
Modified by [@Qu1etboy](https://github.com/qu1etboy)
