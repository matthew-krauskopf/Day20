import { Track } from './track.entity';

export function markTrackDeleted(tracks: Track[], trackId: number) {
  const toEditTrack = tracks.find((p) => p.id == trackId);
  if (!toEditTrack) return tracks;

  return [
    ...tracks.filter((p) => p.id != trackId),
    {
      ...toEditTrack,
      deleted: true,
    },
  ];
}

export function updateTrackInfo(
  tracks: Track[],
  trackId: number | undefined,
  title: string,
  artist: string,
  album: string,
  year: number
) {
  const toEditTrack = tracks.find((p) => p.id == trackId);
  if (!toEditTrack) return tracks;

  return [
    ...tracks.filter((p) => p.id != trackId),
    {
      ...toEditTrack,
      title: title,
      artist: artist,
      album: album,
      year: year,
    },
  ];
}

export function createNewTrack(tracks: Track[]): Track {
  return {
    id: tracks.map((t) => t.id).reduce((max, a) => (max > a ? max : a), 0) + 1,
    title: 'New Track',
    artist: 'Unknown Artist',
    album: 'Unknown Album',
    year: 2024,
    length: 0,
    img: 'assets/new.png',
  };
}
