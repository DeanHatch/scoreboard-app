import { Grouping } from './grouping';
import { Venue } from './venue';

export class Competition {
  //id: number
  _id: number
  name: string
  sport: string
  variety: string
  organization_id: number
  grouping: Grouping
  venues: Array<Venue>
}