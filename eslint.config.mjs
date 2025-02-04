import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  compat.config({
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Desactivar la regla de "any"
      "@typescript-eslint/no-vars-unused": "off", // Desactivar advertencias por variables no usadas
      "react-hooks/exhaustive-deps": "warn", // Habilitar advertencia para dependencias faltantes en useEffect
    },
  }),
];

export default eslintConfig;

