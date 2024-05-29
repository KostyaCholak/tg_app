import {
  Triangle
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "./components/ui/carousel"

import { Skeleton } from "@/components/ui/skeleton"


export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[425px] w-[300px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

let ts: number | undefined
const onTouchStart = (e: TouchEvent) => {
  ts = e.touches[0].clientY;
  e.preventDefault();
}
let scrollableEl: HTMLElement | null = null;
const onTouchMove = (e: TouchEvent) => {
  if (scollableEl !== null) {
    const scroll = scrollableEl.scrollTop
    const te = e.changedTouches[0].clientY
    if (scroll <= 0 && ts! < te) {
      e.preventDefault()
    }
  } else {
    e.preventDefault();
  }
}
document.documentElement.addEventListener('touchstart', onTouchStart, { passive: false })
document.documentElement.addEventListener('touchmove', onTouchMove, { passive: false })


export default function App() {
  const carousel = (
    <Carousel orientation="vertical">
      <CarouselContent className="max-h-[500px] max-w-[350px]">
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
  );

  scrollableEl = carousel;

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
            { carousel }
          </div>
        </main>
      </div>
    </div>
  )
}