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
  id: string;
  thumbNail: string;
  chapter: string;
  title: string;
  rate: string;
  author: string;
  view: string;
}
