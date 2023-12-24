import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const typography = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Portfolio - Jardel Campos | Desenvolvedor Full Stack",
  description: "Explore o portfólio de Jardel Campos, desenvolvedor Full Stack e estudante de Engenharia de Software. Conheça seus projetos envolvendo websites, aplicações móveis, inteligência artificial, segurança, open source, automatização, DevOps e computação em nuvem.",
  keywords: [ "Desenvolvedor Full Stack", "Engenharia de Software", "Web Development", "Aplicações Móveis", "Inteligência Artificial", "Segurança de Software", "Open Source", "Automatização", "DevOps", "Computação em Nuvem", "Jardel Campos", "Portfólio" ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={typography.className}>{children}</body>
    </html>
  )
}
