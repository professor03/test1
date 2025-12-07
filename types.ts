export interface TarotCard {
  id: number;
  name: string;
  nameEn: string;
  image: string; // Emoji or URL
  desc: string;
  gradient: string; // Background color gradient for the card face
}

export enum GameState {
  IDLE = 'IDLE',
  ANIMATING = 'ANIMATING',
  REVEALED = 'REVEALED'
}