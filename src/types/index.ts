export type zkrItem = {
  AUDIO_URL: string;
  ID: number;
  TEXT: string;
  TITLE: string;
};

export interface zkrListItem {
  ID: number
  ARABIC_TEXT: string
  LANGUAGE_ARABIC_TRANSLATED_TEXT: string
  TRANSLATED_TEXT: string
  REPEAT: number
  AUDIO: string
}

export interface singleZkrProps {
  text:string,
  count: number,
  audio: string
}

