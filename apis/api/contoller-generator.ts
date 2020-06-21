import { registeredModels } from "@helium/api-shared";
import Mustache from "mustache";
import { modelControllerTemplate } from "./controller-template";
import fs from "fs";
const fsEx = require("fs-extra");
const allModels = registeredModels;

fsEx.emptyDir("./src/generated-controllers/", (err: any) => {
  if (err) {
    console.error(err);
    process.exit();
  }

  console.log("models cleared!");
  allModels.map(templateData => {
    const template: string = modelControllerTemplate;
    const completedDoc = Mustache.render(template, templateData);
    console.log(`created ${templateData}`);
    fs.writeFile(
      `./src/generated-controllers/${templateData.objModel}-controller.ts`,
      completedDoc,
      err => {
        if (err) {
          console.error(err);
          throw new Error("see logged error");
        }
      }
    );
  });
});
