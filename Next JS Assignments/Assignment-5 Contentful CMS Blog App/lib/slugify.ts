// libs/slugify.ts

export const slugify = (title: string): string => {
  return title
    .toLowerCase() // Convert title to lowercase
    .replace(/[^a-z0-9]/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/-+/g, "-") // Replace consecutive hyphens with a single hyphen
    .replace(/^-|-$/g, ""); // Remove leading and trailing hyphens
};
