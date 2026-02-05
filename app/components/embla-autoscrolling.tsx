'use client'

import React from 'react'
import { ExternalLink } from 'lucide-react'
import AutoScroll from 'embla-carousel-auto-scroll'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

interface ShowcaseItem {
  id: string
  title: string
  description: string
  image: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: '1',
    title: 'Password Input',
    description: 'Secure password input component',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'ZETR Hero Scroll',
    description: 'Dynamic hero section with scroll',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Dia Browser',
    description: 'Modern browser interface',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=400&fit=crop&q=80',
  },
  {
    id: '4',
    title: 'Collins Carousel',
    description: 'Beautiful product showcase',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=400&fit=crop&q=80',
  },
  {
    id: '5',
    title: 'Business Switcher',
    description: 'Smooth business transition UI',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop&q=80',
  },
  {
    id: '6',
    title: 'Motion Studio',
    description: 'Advanced animation tool',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop&q=80',
  },
  {
    id: '7',
    title: 'Scroll Animation',
    description: 'Smooth scroll effects',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=400&fit=crop&q=80',
  },
  {
    id: '8',
    title: 'Interactive UI',
    description: 'Dynamic user interface',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop&q=80',
  },
]

export default function ShowcaseCarousel() {
  const plugin = React.useRef(
    AutoScroll({
      speed: 1, // Adjust speed: 0.5 = slower, 2 = faster
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      {/* Header */}
      <div className="mb-8 text-center max-w-2xl">
        <div className="text-sm font-semibold text-gray-400 mb-4 tracking-widest">
          SHOWCASE
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Made with Motion
        </h1>
        <p className="text-gray-400 text-lg">
          Everything's possible with Motion. Here are some of the best
          creations from our expert Motion+ community.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl mb-12 overflow-hidden">
        <Carousel
          opts={{
            align: 'start',
            dragFree: true,
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {showcaseItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4"
              >
                <div className="h-full">
                  <div className="group relative overflow-hidden rounded-lg bg-gray-900 h-64 flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-full w-full overflow-hidden bg-gray-800">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute top-3 right-3 bg-blue-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Left Gradient Overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent dark:from-black" />

        {/* Right Gradient Overlay */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent dark:from-black" />
      </div>

      {/* CTA Button */}
      <Button
        variant="outline"
        className="bg-white text-black hover:bg-gray-100 font-medium px-6 py-2 rounded-full"
      >
        Start making with Motion
      </Button>
    </div>
  )
}