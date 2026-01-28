// app/components/audit/AuditPlaceholder.tsx
"use client"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Badge } from "@/app/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"

export default function AuditPlaceholder() {
  return (
    <div className="space-y-4">
      {/* filtros */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Select defaultValue="ALL">
            <SelectTrigger className="h-10 w-[180px] border-white/10 bg-black/30">
              <SelectValue placeholder="Acción" />
            </SelectTrigger>
            <SelectContent className="border-white/10 bg-zinc-950 text-white">
              <SelectItem value="ALL">ALL</SelectItem>
              <SelectItem value="CREATE">CREATE</SelectItem>
              <SelectItem value="UPDATE">UPDATE</SelectItem>
              <SelectItem value="DELETE">DELETE</SelectItem>
              <SelectItem value="MOVE">MOVE</SelectItem>
            </SelectContent>
          </Select>

          <Input
            className="h-10 w-[260px] border-white/10 bg-black/30"
            placeholder="Filtrar por taskId…"
            aria-label="Filtrar auditoría por taskId"
          />

          <Button variant="secondary" className="h-10 border border-white/10 bg-white/10">
            Limpiar
          </Button>
        </div>

        <Button className="h-10 border border-white/10 bg-white/10 text-white hover:bg-white/15" variant="secondary">
          Copiar resumen
        </Button>
      </div>

      {/* tabla fake */}
      <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Log de auditoría</div>
          <Badge variant="secondary" className="border border-white/10">
            0 eventos
          </Badge>
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-6 text-center">
          <div className="text-base font-medium">Sin eventos todavía.</div>
          <p className="mt-2 text-sm text-white/60">
            Cuando crees/edites/muevas tareas, aparecerán aquí con timestamp,
            acción y diff.
          </p>
        </div>
      </div>
    </div>
  )
}
