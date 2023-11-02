import { Tag } from "./Tag";

export interface Bike {
  id: number,
  name:string,
  description: string,
  tags: Array<Tag>
}
