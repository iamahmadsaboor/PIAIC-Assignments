import { Asset, Entry } from "contentful";

export interface BlogEntry {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    image: Asset | string | any;
    description: string;
    publishat: string;
    author: string;
    tags: string;
    slug?: string; // Optional if you use it, remove '?' if it's always present
  };
}
