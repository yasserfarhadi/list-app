import PodcastItem from "@/components/podcast-item";
import RecentPodcastEpisode from "@/components/recent-podcast-episode";
import { getPodcasts } from "@/data/podcast";

export default async function Home({
  searchParams: { filter },
}: {
  searchParams: { filter: string };
}) {
  const podcasts = await getPodcasts(filter || "All");
  if (!podcasts) throw new Error("no record");
  return (
    <div className="space-y-7 px-7 py-5 text-foreground duration-500">
      <div className="grid grid-cols-2 gap-4">
        {podcasts.map((pod) => (
          <RecentPodcastEpisode
            key={pod.id}
            image={pod.imageUrl}
            host={pod.title}
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus, magni, fuga eaque maxime impedit ab ullam quia facilis id quidem pariatur doloremque minima provident! Ipsum, temporibus! Labore voluptatum dolore rerum delectus mollitia laboriosam debitis veritatis, facere libero minima nihil."
            brandColor={pod.brand_color}
            episode={130}
            id={pod.id}
          />
        ))}
      </div>
      <div className="mt-4 space-y-3">
        <h3 className="text-2xl font-bold">For You</h3>
        <div className="h-no-scrollbar overflow-x-auto">
          <div className="mb-2 flex items-start gap-4 py-2">
            {podcasts.map((pod, i) => (
              <PodcastItem
                key={pod.id}
                image={pod.imageUrl}
                title={pod.title}
                host={pod.host}
                id={pod.id}
                hasNewPost={i % 2 === 0}
              />
            ))}
            {podcasts.map((pod, i) => (
              <PodcastItem
                key={pod.id}
                image={pod.imageUrl}
                title={pod.title}
                host={pod.host}
                id={pod.id}
                hasNewPost={i % 2 === 0}
              />
            ))}
            {podcasts.map((pod, i) => (
              <PodcastItem
                key={pod.id}
                image={pod.imageUrl}
                title={pod.title}
                host={pod.host}
                id={pod.id}
                hasNewPost={i % 2 === 0}
              />
            ))}
            {podcasts.map((pod, i) => (
              <PodcastItem
                key={pod.id}
                image={pod.imageUrl}
                title={pod.title}
                host={pod.host}
                id={pod.id}
                hasNewPost={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold">Recently Played</h3>
        <div className="h-no-scrollbar overflow-x-auto">
          <div className="mb-2 flex items-center gap-4 py-2">
            {podcasts.map((pod) => (
              <PodcastItem
                key={pod.id}
                image={pod.imageUrl}
                title={pod.title}
                host={pod.host}
                id={pod.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
