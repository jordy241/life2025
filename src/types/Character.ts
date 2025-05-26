import type { ComponentProps } from 'react'
import type { Money } from './Money'
import type { Location } from './Location'
import type { Avatar } from 'avataaars'

export interface Character {
  /** Unique ID */
  id: string
  /** Character’s name */
  first_name: string
  last_name: string
  middle_name?: string

  /** Age in years (or weeks) */
  age: number
  /** Personal finances */
  money: Money
  /** Which one is active in UI */
  isActive: boolean
  currentLocation: Location
  avatarConfig: Partial<ComponentProps<typeof Avatar>>
}