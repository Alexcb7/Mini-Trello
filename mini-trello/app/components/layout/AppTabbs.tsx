// app/components/layout/AppTabs.tsx
"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import BoardPlaceholder from "@/app/components/board/BoardPlaceholder"
import AuditPlaceholder from "@/app/components/audit/AuditPlaceholder"

export default function AppTabs() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <Tabs defaultValue="board">
        <div className="flex items-center justify-between gap-4">
          <TabsList className="border border-white/10 bg-black/20">
            <TabsTrigger value="board">Tablero</TabsTrigger>
            <TabsTrigger value="audit">Auditoría</TabsTrigger>
          </TabsList>

          <div className="text-sm text-white/60">
            Estado vacío bien diseñado (por ahora)
          </div>
        </div>

        <TabsContent value="board" className="mt-5">
          <BoardPlaceholder />
        </TabsContent>

        <TabsContent value="audit" className="mt-5">
          <AuditPlaceholder />
        </TabsContent>
      </Tabs>
    </section>
  )
}
