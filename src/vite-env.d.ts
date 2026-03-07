/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string;
  // readonly VITE_OTHER_VAR?: string;   // add your other VITE_ vars here for better types
  // [key: string]: string | undefined;  // optional: allow unknown VITE_ vars loosely
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}