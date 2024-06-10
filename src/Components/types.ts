export enum GroupColors {
  purple = "#B38BFA",
  pink = "#FF79F2",
  skyblue = "#43E6FC",
  brown = "#F19576",
  blue = "#0047FF",
  lightblue = "#6691FF",
}

export interface IGroup {
  id: string;
  title: string;
  color: GroupColors;
  notes: INote[];
}

export interface INote {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  groupId: string;
}
