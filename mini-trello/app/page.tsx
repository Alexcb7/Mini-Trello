// app/page.tsx
import Header from "@/app/components/layout/Header"
import AppTabs from "@/app/components/layout/AppTabbs"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <Header />
        <div className="mt-6">
          <AppTabs />
        </div>
      </div>
    </main>
  )
}
