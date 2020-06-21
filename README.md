# helium
Typescript Open Api generated API (TSOA https://github.com/lukeautry/tsoa) Mono Repo with Shared object definition library, generated Open Api SDKs and react/react-native app.

## What I This For
I want to be able to use this package to spin up new applications and projects at high speed. This particular repo is a project tracker for my boat. Side note, I am transitioning to living on a big ol sail boat. Wish me luck!

## Goal
This package is my best implementation of a "enterprise" typescript API system with React apps integrated into the mono repo. The package makes use of TSOA and Open Api SDK generators to due as much work for you as possible. The API currently runs on Mongo, but is abstracted behind a database controller that I plan to expand to other platforms. The generator uses the "Registered Models" in apis/shared/registeredModels.ts to generator controllers. When you want to add a new model, simply add it to the "models" folder and then register it in registeredModels.ts.

## Getting Started
Clone this repo and build all of the packages
```
yarn && yarn bootstrap && yarn build
```

To run the API server


## Adding New Models
Add your model to the `apis/shared/models` folder and then include it in `apis/shared/registeredModels.ts`. Then run `yarn build` from the root of the project.

Tada! You now have a new model added, the API spec is updated, the SDK is updated, and the API will now process requests on the new model.

## Customizing Controllers
You will likely find yourself in need of cusotm controllers. authentication systems. special requests... what ever. Follow the examples from the auto generated models and have at it. consult the TSOA package for details on the model.

## Contibuting
Sharing is caring right? 


### No Hoist & Workspaces with Create React App
You might notice quiet a few packages on the no-hoist list. That is on account of Create React App not playing nicely with mono repos. This is by intent. If you run into similar conflicts, you can add the appropriate packages to the no-hoist at the root.

### Security Note
JWT keys are currently stored in the api/src/env.ts file - these should be moved to an actual environment variable if you are deploying this to production (and changes!).