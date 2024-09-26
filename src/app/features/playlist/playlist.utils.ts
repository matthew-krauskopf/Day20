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

export function markPlaylistDeleted(
  playlists: Playlist[],
  selectedPlaylist: number | undefined
) {
  const toEditPlaylist = playlists.find((p) => p.id == selectedPlaylist);
  if (!toEditPlaylist) return playlists;

  return [
    ...playlists.filter((p) => p.id != selectedPlaylist),
    {
      ...toEditPlaylist,
      deleted: true,
    },
  ];
}

export function createNewPlaylist(playlists: Playlist[], userId: number) {
  return {
    id:
      playlists.map((p) => p.id).reduce((max, a) => (max > a ? max : a), 0) + 1,
    title: 'New Playlist',
    createdBy: userId,
    tracks: [],
  };
}
