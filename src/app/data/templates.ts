import { IntegrationData } from "./integration";

export interface TemplateData {
  id: string;
  name: string;
  description: string;
  tag: string;
  images: string[];
  props: { name: string, value: string }[];
  integration: IntegrationData;
}

export type TemplateCategory = {
  code: string;
  name: string;
  image: string;
  description: string;

  templates: TemplateData[];

  planner: {
    company?: string,
    instance?: string,
    start?: { guid: string, clone?: boolean }
  }
}


