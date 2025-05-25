import type { Job } from './Job'
import type { Item } from './Item'
import type { Location } from './Location'

export interface Stats {
  health: number
  happiness: number
  money: number
  // (we’ll expand this later with your other mental/physical/etc stats)
}

export interface Character {
  /** Unique ID for lookups, routing, etc. */
  id: string

  /** The character’s given name */
  name: string

  /** Age in weeks (or years) */
  age: number

  /** Core stats for now; you can add more fields to this object in Stats above */
  stats: Stats

  /** Optional—set when they pick up a job */
  job?: Job

  /** Total weeks (or years) of experience in their current line of work */
  experience: number

  /** Highest education tier completed (0 = none, 1 = high school, 2 = bachelor, etc.) */
  educationLevel: number

  /** Items they own */
  inventory: Item[]

  /** Where they live right now (country + city) */
  currentLocation: Location

  isActive: boolean
}
