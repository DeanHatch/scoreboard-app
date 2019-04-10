import { Team } from './team';

export class Grouping {
  //id: number
  _id: number
  name: string
  variety: string
  scheduleable: boolean
  standingsable: boolean
  bracketable: boolean
//  subgroupings: []
  subgroupings: Array<Grouping>
  teams: Array<Team>
}
