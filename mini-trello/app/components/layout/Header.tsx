"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/app/components/ui/switch"
import { Separator } from "@/app/components/ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover"

export default function Header() {
  return (
    <header className="rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30 backdrop-blur">
      <div className="p-6">
        <div className="flex flex-col gap-5">
          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-xl font-semibold tracking-tight">
                🛠️ Gestor de Incidencias — Gimnasio
              </h1>
              <p className="mt-1 text-sm text-white/65">
                Kanban 3 columnas · Auditoría con diff · Búsqueda avanzada · Modo Dios
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Badge className="border border-white/10 bg-black/30 text-white/80">
                localStorage
              </Badge>
              <Badge className="border border-white/10 bg-black/30 text-white/80">
                JSON import/export
              </Badge>
            </div>
          </div>

          <Separator className="bg-white/10" />

          {/* Search + actions */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full items-center gap-2 lg:max-w-2xl">
              <div className="relative w-full">
                <Input
                  aria-label="Búsqueda avanzada"
                  placeholder='Buscar…  tag:seguridad p:high est:<60 due:week'
                  className="h-11 border-white/10 bg-black/30 pr-10 text-white placeholder:text-white/40"
                />
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/45">
                  ⌘K
                </div>
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="secondary"
                    className="h-11 w-11 border border-white/10 bg-white/10 px-0 hover:bg-white/15"
                    aria-label="Ayuda de búsqueda"
                    title="Ejemplos de búsqueda"
                  >
                    ?
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-96 border-white/10 bg-zinc-950 text-white shadow-xl shadow-black/40">
                  <div className="space-y-2 text-sm">
                    <div className="font-medium">Búsqueda avanzada</div>
                    <div className="text-white/70">
                      Texto libre busca en <span className="text-white">título</span> y{" "}
                      <span className="text-white">descripción</span>.
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="text-xs text-white/55">Ejemplos</div>
                      <ul className="mt-2 space-y-1 text-white/80">
                        <li><span className="text-white">tag:seguridad</span></li>
                        <li><span className="text-white">p:high</span></li>
                        <li><span className="text-white">due:overdue</span> / <span className="text-white">due:week</span></li>
                        <li><span className="text-white">est:&lt;60</span> / <span className="text-white">est:&gt;=120</span></li>
                      </ul>
                    </div>
                    <div className="text-xs text-white/55">
                      Tip: luego activamos el atajo real <span className="text-white">Ctrl/Cmd + K</span>.
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="secondary"
                className="h-11 border border-white/10 bg-white/10 hover:bg-white/15"
              >
                Export JSON
              </Button>
              <Button
                variant="secondary"
                className="h-11 border border-white/10 bg-white/10 hover:bg-white/15"
              >
                Import JSON
              </Button>

              <div className="ml-0 flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-2 lg:ml-2">
                <div className="leading-tight">
                  <div className="text-xs text-white/55">Modo Dios</div>
                  <div className="text-sm font-medium text-white/85">OFF</div>
                </div>
                <Switch aria-label="Activar Modo Dios" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
