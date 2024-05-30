
import { Carousel, CarouselContent, CarouselItem } from "./components/ui/carousel"

// import { Skeleton } from "@/components/ui/skeleton"
import { useEffect } from "react";
import './App.css';


export function SkeletonCard(props: { id?: string }) {
  return (
    <div className="flex flex-col">
      <div className="h-[calc(100vh-53px)] w-[calc(100vw)] border-b-red-400 border-b-2">
        <canvas 
          id={`canvas-${props.id}`}
        />
      </div>
    </div>
  )
}

let ts: number | undefined
const onTouchStart = (e: TouchEvent) => {
  if (window.scrollY === 0) {
    window.scrollTo(0, 1);
  }
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

    const video = document.getElementById('video1') as HTMLVideoElement;
    // render video on canvas
    const canvas = document.getElementById('canvas-0') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    const draw = () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(draw);
    }
    video.onloadeddata = () => {
      // canvas.width = video.videoWidth;
      // canvas.height = video.videoHeight;
      draw();
    }
    // video.onplay = () => {
    //   draw();
    // }
    video.play();

  }, []); 
  return (
    <div className="grid h-screen w-screen">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">TikTon</h1>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="relative flex-col items-start gap-0 md:flex" x-chunk="dashboard-03-chunk-0">
          <video playsInline={true} width={500} height={720} id="video1" muted={true} autoPlay={false} src="https://videos.pexels.com/video-files/20770858/20770858-hd_1080_1920_30fps.mp4" preload="metadata">
            {/* <track kind="metadata" label="cuepoints" data-removeondestroy=""/> */}
          </video>
          <Carousel orientation="vertical" className="scrollable-elt">
            <CarouselContent className="max-h-[calc(100vh-53px)] max-w-[calc(100vw)] -mt-0">
              <CarouselItem className="pt-0">
                <SkeletonCard id="0" />
              </CarouselItem>
              <CarouselItem className="pt-0">
                <SkeletonCard id="1" />
              </CarouselItem>
              <CarouselItem className="pt-0">
                <SkeletonCard id="2" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          </div>
        </main>
      </div>
    </div>
  )
}

