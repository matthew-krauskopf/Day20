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
  album: string
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
    },
  ];
}
