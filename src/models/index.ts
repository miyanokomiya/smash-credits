export interface Credits {
  blockStyle: BlockStyle;
  titleBlock: TitleBlock;
  endBlock: EndBlock;
  creditBlock: CreditBlock;
}

export interface BlockBase {
  blockStyle?: BlockStyle;
}

export interface TitleBlock extends BlockBase {
  title: string;
}

export interface EndBlock extends BlockBase {
  title: string;
}

export interface CreditBlock extends BlockBase {
  name: string;
  contributors: Contributor[];
}

export interface Contributor {
  role: string;
  name: string;
}

export interface BlockStyle {
  textStyle?: TextStyle;
}

export interface TextStyle {
  fill?: Color;
  stroke?: Color;
  fontSize?: number;
}

export interface Color {}
