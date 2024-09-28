"use client";

import PodcastItem from "@/components/podcast-item";
import RecentPodcastEpisode from "@/components/recent-podcast-episode";
import { usePlayer } from "@/context/player";

export default function Home() {
  const player = usePlayer();
  return (
    <div className="space-y-7 px-7 py-5 text-foreground duration-500">
      <div className="grid grid-cols-2 gap-4">
        <RecentPodcastEpisode
          image="/images/theo.png"
          host="past weekend"
          summary="dwakdpoakwdpoakwpokaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawddddddddddddddddddddwdawdawd"
          brandColor="#FF0000"
          episode={130}
          onClick={() => player?.setItem("1")}
        />
        <RecentPodcastEpisode
          image="/images/theo.png"
          host="past weekend"
          summary="dwakdpoakwdpoakwpokaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawddddddddddddddddddddwdawdawd"
          brandColor="#FF0000"
          episode={130}
          onClick={() => player?.setItem("1")}
        />
        <RecentPodcastEpisode
          image="/images/theo.png"
          host="past weekend"
          summary="dwakdpoakwdpoakwpokaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawddddddddddddddddddddwdawdawd"
          brandColor="#FF0000"
          episode={130}
          onClick={() => player?.setItem("1")}
        />
        <RecentPodcastEpisode
          image="/images/theo.png"
          host="past weekend"
          summary="dwakdpoakwdpoakwpokaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawddddddddddddddddddddwdawdawd"
          brandColor="#FF0000"
          episode={130}
          onClick={() => player?.setItem("1")}
        />
      </div>
      <div className="mt-4 space-y-3">
        <h3 className="text-2xl font-bold">For You</h3>
        <div className="h-no-scrollbar overflow-x-auto">
          <div className="mb-2 flex items-start gap-4 py-2">
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold">Recently Played</h3>
        <div className="h-no-scrollbar overflow-x-auto">
          <div className="mb-2 flex items-center gap-4 py-2">
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
            <PodcastItem
              image="/images/bastards.png"
              title="The Joe Rogan Experience"
              host="bastards"
              onClick={() => player?.setItem("1")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
