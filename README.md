# LUG Pub - Landing Page

## Website

[lug.pub](https://www.lug.pub)

## Development Guide

### Prerequisite

- Node.js
- Yarn Package Manager

### Set up

1. Use command `yarn` to install all required Node modules.
2. You're up!

*Recommand IDE: Web Storm*

#### Deploy

You can either use the already existed `Run Configuration` in WebStorm, or use command `yarn start`.
Everything in the `main` branch will be built and deployed to production environment by Netlify bot, and every PR will trigger the bot to build a preview website.

#### Build

Use command `yarn build` to build. The built product is in directory `dist`.

### Project structure

- `src/`: Most of the source code.
- `static/`: Most of the static website files.
- `dist/`: Locally built product.
- `.parcelrc`: Parcel configuration file.
- `.parcel_cache`: Cache files for Parcel. If something goes wrong, you might need to delete the directory and try again.
