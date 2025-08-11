# Module Federation Demo
The purpose of this repository is to explore webpack's Module Federation.
Especially the focus is on lazy loading in React project.

## Tested Environment
- node v24.2.0
- React v19
- webpack v5
- babel v7
- tailwindcss v4
- macOS v14.6.1

## Project's structure
The structure is monorepo, which contains 2 frontends - `shell` and `remote`. `shell` is a host app which loads `remote` at runtime:
```
module-federation-demo/
├── shell/
│   ├── public/
│   ├── src/
│   └── webpack.config.js
└── remote/
    ├── public/
    ├── src/
    └── webpack.config.js
```

## Run
Firstly at `remote` folder, build and start dev server:   
```shell
npm run build
npm run start
```
The contents of `remote` should be shown at `localhost:3001`. 

Then at `shell` folder build and start dev server as well:  
```shell
npm run build
npm run start
```
The contents of both `shell` and `remote` should be shown at `localhost:3000`.