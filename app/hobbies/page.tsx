"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from "lucide-react";
import NavigationBar from "@/app/components/NavigationBar";

const highlights = [
  {
    id: "cBDV34CIkRU",
    title: "Ace with AWP sniper in CS2",
    game: "Counter Strike 2",
    rank: "Premiere",
    description: "Trying to win the round single-handedly with AWP",
  },
  {
    id: "0QIrWYREY54",
    title: "Another Ace with AWP in CS2",
    game: "Counter Strike 2",
    rank: "Premiere",
    description: "I thought i would lose this round but managed to clutch it!",
  },
];

export default function GamingHighlights() {
  return (
    <>
      <div className="min-h-screen">
        <NavigationBar />
        <div className="space-y-8 dark:bg-stone-900 min-h-screen p-6">
          <p className="text-center max-h-min font-bold flex mx-auto justify-center max-w-5xl text-lg text-gray-700 dark:text-gray-300">
            I enjoy competitive gaming, particularly Apex Legends and
            Counter-Strike 2, where teamwork and quick decision-making are
            essential. Here are some of my memorable gaming highlights:
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((highlight) => (
              <Card
                key={highlight.id}
                className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-stone-800"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">
                        {highlight.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {highlight.description}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-teal-500 text-white font-bold"
                    >
                      {highlight.game}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <AspectRatio
                    ratio={16 / 9}
                    className="rounded-lg overflow-hidden border"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${highlight.id}?rel=0&modestbranding=1`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={highlight.title}
                    />
                  </AspectRatio>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex font-bold items-center gap-2 bg-stone-900 dark:bg-amber-300 hover:bg-stone-800 dark:hover:bg-amber-400 text-white dark:text-gray-900"
                    >
                      <a
                        href={`https://youtu.be/${highlight.id}`}
                        target="nothing"
                        rel="Musabbir"
                      >
                        <ExternalLink className="mr-2 h-4 w-45" />
                        Watch on YouTube
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="bg-teal-500 text-white font-bold"
                    >
                      Rank: {highlight.rank}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-teal-500 text-white font-bold"
                    >
                      Competitive
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-teal-500 text-white font-bold"
                    >
                      Team Play
                    </Badge>
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
