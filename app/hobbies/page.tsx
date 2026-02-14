'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Play } from 'lucide-react';
import NavigationBar from '@/app/components/NavigationBar';

const musicTracks = [
  {
    id: 'MV_3Dpw-BRY',
    title: 'Nightcall',
    artist: 'Kavinsky',
    genre: 'Synthwave',
    description: 'Iconic synthwave track with that perfect retro vibe',
    year: '2011',
  },
  {
    id: 'qUuvTpU0hWE',
    title: 'Forever In My Heart',
    artist: 'CMA',
    genre: 'Electronic',
    description: 'Emotional and uplifting electronic melody',
    year: '2015',
  },
  {
    id: 'WNeLUngb-Xg',
    title: 'In The End (Mellen Gi & Tommee Profitt Remix)',
    artist: 'Linkin Park',
    genre: 'Rock Remix',
    description: 'Epic cinematic remake of the classic',
    year: '2018',
  },
  {
    id: 'v5jmn1MKbPo',
    title: 'Drive',
    artist: 'Jai Wolf feat. Chain Gang of 1974',
    genre: 'Indie Dance',
    description: 'Nostalgic electronic track perfect for late night drives',
    year: '2016',
  },
];

export default function MusicHighlights() {
  return (
    <>
      <div className="min-h-screen dark:bg-stone-900">
        <NavigationBar />

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              Music I Love
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Music is my constant companion while coding, gaming, or just relaxing.
            </p>
          </div>

          {/* Music Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {musicTracks.map((track) => (
              <Card
                key={track.id}
                className="dark:bg-stone-800 border-gray-300 dark:border-stone-700 hover:scale-[1.02] transition-transform"
              >
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-gray-700 dark:text-gray-300">
                      {track.title}
                    </CardTitle>
                    <p className="text-teal-500 font-semibold">{track.artist}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{track.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* YouTube Embed */}
                  <AspectRatio ratio={16 / 9} className="rounded-md overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${track.id}?rel=0&modestbranding=1`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${track.title} by ${track.artist}`}
                    />
                  </AspectRatio>

                  {/* Listen Button */}
                  <Button
                    asChild
                    className="w-full border-2 border-teal-500 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-teal-500 hover:text-white transition-all duration-300"
                  >
                    <a
                      href={`https://youtu.be/${track.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Listen on YouTube
                    </a>
                  </Button>

                  {/* Tags */}
                  <div className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>{track.genre}</span>
                    <span>•</span>
                    <span>{track.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
