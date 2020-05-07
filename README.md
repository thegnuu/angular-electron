# Repo to reproduce Ivy issue "Cannot read property 'bindingStartIndex' of null"

This repo contains both, the non-Ivy and Ivy library which I am trying to load from an external source.

By default the not working Ivy version is enabled.
To test the working version disable Ivy in `src/tsconfig.app.json` and switch line 22/23 in `src/app/home/home.component.ts`.

To start the electron app use `npm start`.
