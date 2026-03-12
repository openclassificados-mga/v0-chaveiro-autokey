import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://v0-chaveiro-autokey.vercel.app"),
  title: {
    default: "Chaveiro Autokey ABC | Atendimento 24h em São Paulo e ABC",
    template: "%s | Chaveiro Autokey ABC",
  },
  description:
    "Chaveiro Autokey ABC: atendimento domiciliar 24h em São Paulo e Grande ABC. Aberturas, cópia de chaves, instalação de fechaduras e controles. Garanta segurança com quem entende do assunto!",
  keywords: "chaveiro, chaveiro 24h, chaveiro são paulo, chaveiro abc, abertura de fechadura, cópia de chave, chave automotiva, fechadura digital, controle de portão, tag de acesso",
  authors: [{ name: "Chaveiro Autokey ABC" }],
  creator: "Chaveiro Autokey ABC",
  publisher: "Chaveiro Autokey ABC",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
