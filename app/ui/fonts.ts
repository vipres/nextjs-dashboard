import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Pesos 400 (normal) y 700 (negrita)
  style: ["normal", "italic"], // Estilos normal e itálico
});
