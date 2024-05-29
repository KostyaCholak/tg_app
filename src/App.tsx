
import { Carousel, CarouselContent, CarouselItem } from "./components/ui/carousel"

import { Skeleton } from "@/components/ui/skeleton"
import { useEffect } from "react"


export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[calc(100vh-100px)] w-[calc(100vw-30px)] rounded-xl" />
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
  if (scrollableEl !== null) {
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
  useEffect(() => {
    scrollableEl = document.querySelector('.scrollable-elt');
    setTimeout(() => {
    document.body.style.backgroundColor = 'hsl(0 10% 3.9%)';
    }, 10);
  }, []); 
  return (
    <div className="grid h-screen w-screen">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">TikTon</h1>
        </header>
        <main className="flex-1 gap-4 overflow-auto p-4">
          <div className="relative flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0">
          <Carousel orientation="vertical" className="scrollable-elt">
            <CarouselContent className="max-h-[calc(100vh - 120px)] max-w-[calc(100vw)]">
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

