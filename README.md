
# Podcaster
Podcaster is a small app that allows the user to listen the 100 top podcasts of the moment. It's developed with React + Vite and ui.shadcn.com components are used to style.

## API limitations

There are certain aspects of the iTunes API that I believe are limited:

- Logically, to retrieve details about a podcast, the endpoint https://itunes.apple.com/lookup?id={podcastId} should be used. However, this endpoint provides certain data but lacks others, such as the podcast description itself. This information can only be obtained either through the XML of the RSS feed or by using the endpoint to retrieve all podcasts (https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json). Since I already had this data stored on the client, I used it to extract the details of a specific podcast.

- There is no way to obtain data for a specific episode of a podcast; the endpoint always returns an empty response (https://itunes.apple.com/lookup?id={episodeId}&media=podcast&entity=podcastEpisode). Although this data can be obtained by making a call to the details of a podcast, which will return its episodes (with their respective data).

- Regarding the previous point, it is not possible to obtain more than 200 episodes of a podcast, even when attempting to use the offset and limit parameters. It is impossible to obtain more than the 200 latest episodes in chronological order. Due to this limitation, in my case, I only retrieve at most the 50 latest episodes (the default value).

## Installation

Clone the project

```bash
  git clone git@github.com:alexvloure/podcaster.git
```

Go to the project directory

```bash
  cd podcaster
```

Install dependencies

```bash
  npm install
```
## Run development mode

This will run Podcaster in development mode.

```bash
  npm run dev
```
## Run production mode

This will run the production bundle of Podcaster.

```bash
npm run serve
```
