/**
 * px / frame
 */
export type Speed = number;

export interface Credits {
  blockStyle: BlockStyle;
  speed: Speed;
  blockList: BlockBase[];
}

export const BLOCK_TYPE = {
  text: "text",
  credit: "credit",
} as const;
export type BlockType = typeof BLOCK_TYPE[keyof typeof BLOCK_TYPE];

export interface BlockBase {
  type: BlockType;
  blockStyle?: BlockStyle;
  speed?: Speed;
}

export interface TextBlock extends BlockBase {
  type: "text";
  title: string;
}

export interface CreditBlock extends BlockBase {
  type: "credit";
  title: string;
  contributors: Contributor[];
}

export interface Contributor {
  role?: string;
  name: string;
}

export interface BlockStyle {
  title?: TextStyle;
  role?: TextStyle;
  name?: TextStyle;
}

export interface TextStyle {
  fill?: Color;
  stroke?: Color;
  fontSize?: number;
}

export interface Color {}
