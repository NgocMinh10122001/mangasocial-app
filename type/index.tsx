export interface IMangaDetail {
  id: string | undefined;
  title: string | undefined;
  thumbnail: string | undefined;
  chapter: string | undefined;
  urlManga: string | undefined;
  urlChapter: string | undefined;
  chapterNew: string | undefined;
  rate: string | undefined;
}

export interface Item {
  id: number | string;
  title: string;
  subtitle: string;
  illustration: string;
}

export interface IManga {
  chapter_new: string;
  description_manga: string;
  id_manga: string;
  image_poster_link_goc: string;
  path_segment_chapter: string;
  path_segment_manga: string;
  title_manga: string;
  url_chapter: string;
  url_manga: string;
}

export interface IServer {
  sv: number;
  name: string;
  status: string;
}
