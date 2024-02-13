import { type ClientConfig, createClient } from "next-sanity";

export const clientConfig: ClientConfig = {
  projectId: "b071ypz4",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-23",
  perspective: "published",
};

export const client = createClient(clientConfig);
