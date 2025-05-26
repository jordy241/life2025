export type RegionType = 'city' | 'town' | 'village'

export interface Region {
  name: string
  type: RegionType
}

export interface Country {
  name: string
  regions: Region[]
}

export interface Location {
  country: string
  regionName: string
  regionType: RegionType
}