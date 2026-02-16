import { Module } from "./types";
import { variablesModule } from "./modules/variables";
import { dataTypesModule } from "./modules/datatypes";
import { operatorsModule } from "./modules/operators";
import { stringsModule } from "./modules/strings";
import { objectsModule } from "./modules/objects";
import { arraysModule } from "./modules/arrays";
import { controlFlowModule } from "./modules/controlflow";
import { loopsModule } from "./modules/loops";
import { functionsModule } from "./modules/functions";
import { domModule } from "./modules/dom";

export const modules: Module[] = [
  variablesModule,
  dataTypesModule,
  operatorsModule,
  stringsModule,
  objectsModule,
  arraysModule,
  controlFlowModule,
  loopsModule,
  functionsModule,
  domModule,
];

export function getModuleById(id: string): Module | undefined {
  return modules.find(m => m.id === id);
}
