// app/layout.tsx
import "./globals.css"

export const metadata = {
  title: "Mini Trello Kanban",
  description: "Kanban + Auditoría + Búsqueda avanzada + Modo Dios",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
