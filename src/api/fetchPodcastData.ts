export const fetchPodcastData = async () => {
  const response = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return response;
};