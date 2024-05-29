import {
  Triangle
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "./components/ui/carousel"

import { Skeleton } from "@/components/ui/skeleton"
 

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[425px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}


export default function App() {
  return (
    <div className="grid h-screen w-screen pl-[53px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Playground</h1>
        </header>
        <main className="flex-1 gap-4 overflow-auto p-4">
          <div className="relative flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0">
            <Carousel orientation="vertical">
              <CarouselContent className="max-h-[500px]">
                <CarouselItem>
                  <SkeletonCard />
                </CarouselItem>
                <CarouselItem>
                  <SkeletonCard />
                </CarouselItem>
                <CarouselItem>
                  <SkeletonCard />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </main>
      </div>
    </div>
  )
}