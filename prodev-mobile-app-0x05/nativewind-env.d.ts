/// <reference types="nativewind/types" />

// This file is used to provide type definitions for NativeWind
// and should be referenced in your tsconfig.json under "include"

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// Add any other type declarations your project needs here
