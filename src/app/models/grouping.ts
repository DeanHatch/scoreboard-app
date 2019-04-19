import { Team } from './team';

export class Grouping {
  //id: number
  _id: number
  name: string
  variety: string
  scheduleable: boolean
  standingsable: boolean
  bracketable: boolean
  parent_id: number
//  subgroupings: []
  subgroupings: Array<Grouping>
  teams: Array<Team>
}
