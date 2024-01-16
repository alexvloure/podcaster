export const fetchPodcastDetail = async (podcastId: string) => {
  const results = await fetch(
    `https://corsproxy.io/?${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode`
    )}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return results;
};
