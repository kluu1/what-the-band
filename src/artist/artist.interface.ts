export interface BaseArtist {
  id: number;
  name: string;
  url: string;
  image_url: 'string';
  thumb_url: string;
  facebook_page_url: string;
  mbid: string;
  tracker_count: number;
  upcoming_event_count: number;
}

export interface Artist extends BaseArtist {
  id: number;
}
