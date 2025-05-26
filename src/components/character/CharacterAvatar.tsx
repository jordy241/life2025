import React from 'react'
import Avatar from 'avataaars'

interface Props {
  config: Partial<React.ComponentProps<typeof Avatar>>
  size?: number
}

const CharacterAvatar: React.FC<Props> = ({ config, size = 192 }) => (
  <div className="rounded-full overflow-hidden shadow-lg" style={{ width: size, height: size }}>
    <Avatar {...config} style={{ width: size, height: size }} />
  </div>
)

export default CharacterAvatar