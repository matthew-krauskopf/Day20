import { FormGroup } from '@angular/forms';
import { Playlist } from './playlist.entity';

export function removeTrackFromPlaylist(
  playlists: Playlist[],
  selectedPlaylist: number | undefined,
  trackId: number
) {
  const toEditPlaylist = playlists.find((p) => p.id == selectedPlaylist);
  if (!toEditPlaylist) return playlists;

  return [
    ...playlists.filter((p) => p.id != selectedPlaylist),
    {
      ...toEditPlaylist,
      tracks: toEditPlaylist.tracks.filter((t) => t != trackId),
    },
  ];
}

export function updatePlaylistDetails(
  playlists: Playlist[],
  selectedPlaylist: number | undefined,
  title: string,
  description: string
) {
  const toEditPlaylist = playlists.find((p) => p.id == selectedPlaylist);
  if (!toEditPlaylist) return playlists;

  return [
    ...playlists.filter((p) => p.id != selectedPlaylist),
    {
      ...toEditPlaylist,
      title: title,
      description: description,
    },
  ];
}
