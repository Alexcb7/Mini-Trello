// app/components/board/BoardPlaceholder.tsx
"use client"

import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"

function Column({
  title,
  count,
  hint,
}: {
  title: string
  count: number
  hint: string
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-black/20">
      <div className="flex items-center justify-between gap-2 border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="text-sm font-semibold">{title}</div>
          <Badge variant="secondary" className="border border-white/10">
            {count}
          </Badge>
        </div>
        {title === "Todo" ? (
          <Button
            size="sm"
            className="border border-white/10 bg-white/10 text-white hover:bg-white/15"
            variant="secondary"
          >
            + Nueva tarea
          </Button>
        ) : (
          <span className="text-xs text-white/60">DnD listo luego</span>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-10 text-center">
        <div className="text-base font-medium">{hint}</div>
        <p className="mt-2 text-sm text-white/60">
          Aquí aparecerán las cards con prioridad, tags, estimación y fecha límite.
        </p>
      </div>
    </div>
  )
}

export default function BoardPlaceholder() {
  return (
    <div className="space-y-4">
      {/* resumen rápido */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="border border-white/10">
          Todo: 0 min
        </Badge>
        <Badge variant="secondary" className="border border-white/10">
          Doing: 0 min
        </Badge>
        <Badge variant="secondary" className="border border-white/10">
          Done: 0 min
        </Badge>

        <div className="ml-auto text-sm text-white/60">
          (Luego: alert si WIP alto)
        </div>
      </div>

      {/* columnas */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Column title="Todo" count={0} hint="No hay tareas todavía." />
        <Column title="Doing" count={0} hint="Arrastra aquí cuando empieces." />
        <Column title="Done" count={0} hint="Aquí verás lo completado." />
      </div>
    </div>
  )
}
