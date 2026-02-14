'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ExternalLink, Play, Headphones } from 'lucide-react';
import NavigationBar from '@/app/components/NavigationBar';

const musicTracks = [
  {
    id: 'MV_3Dpw-BRY',
    title: 'Nightcall',
    artist: 'Kavinsky',
    genre: 'Synthwave / Electronic',
    description: 'Iconic synthwave track with that perfect retro vibe',
    year: '2011',
    mood: 'Atmospheric',
  },
  {
    id: 'qUuvTpU0hWE',
    title: 'Forever In My Heart',
    artist: 'CMA',
    genre: 'Electronic / Melodic',
    description: 'Emotional and uplifting electronic melody',
    year: '2015',
    mood: 'Emotional',
  },
  {
    id: 'WNeLUngb-Xg',
    title: 'In The End (Mellen Gi & Tommee Profitt Remix)',
    artist: 'Linkin Park',
    genre: 'Rock / Electronic Remix',
    description: 'Epic cinematic remake of the classic',
    year: '2018',
    mood: 'Epic',
  },
  {
    id: 'v5jmn1MKbPo',
    title: 'Drive',
    artist: 'Jai Wolf feat. Chain Gang of 1974',
    genre: 'Electronic / Indie Dance',
    description: 'Nostalgic electronic track perfect for late night drives',
    year: '2016',
    mood: 'Nostalgic',
  },
];

export default function MusicHighlights() {
  return (
    <>
      <div className="min-h-screen">
        <NavigationBar />
        <div className="space-y-8 dark:bg-stone-900 min-h-screen p-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="flex justify-center">
              <Badge className="bg-teal-500 text-white px-4 py-1 text-sm">🎵 Music I Love</Badge>
            </div>
            <p className="font-bold text-lg text-gray-700 dark:text-gray-300">
              Music is my constant companion while coding, gaming, or just relaxing. Here are some
              tracks that have been on repeat:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {musicTracks.map((track) => (
              <Card
                key={track.id}
                className="overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] dark:bg-stone-800 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{track.title}</CardTitle>
                      <p className="text-lg font-semibold text-teal-500 dark:text-amber-300 mt-1">
                        {track.artist}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">{track.description}</p>
                    </div>
                    <Badge variant="secondary" className="bg-teal-500 text-white font-bold">
                      {track.genre}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* YouTube Video Embed */}
                  <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden border">
                    <iframe
                      src={`https://www.youtube.com/embed/${track.id}?rel=0&modestbranding=1`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${track.title} by ${track.artist}`}
                    />
                  </AspectRatio>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 font-bold items-center gap-2 bg-stone-900 dark:bg-amber-300 hover:bg-stone-800 dark:hover:bg-amber-400 text-white dark:text-gray-900"
                    >
                      <a
                        href={`https://youtu.be/${track.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Listen on YouTube
                      </a>
                    </Button>
                  </div>

                  {/* Music Tags */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-500 text-white font-bold">
                      <Headphones className="mr-1 h-3 w-3" />
                      {track.year}
                    </Badge>
                    <Badge variant="outline" className="bg-blue-500 text-white font-bold">
                      Mood: {track.mood}
                    </Badge>
                    <Badge variant="outline" className="bg-teal-500 text-white font-bold">
                      Electronic
                    </Badge>
                  </div>

                  {/* Mini player note */}
                  <p className="text-xs text-muted-foreground text-center italic">
                    Click play above or listen directly on YouTube 🎧
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
