import { createMemo, VoidComponent } from 'solid-js'
import { useEntitiesStore, usePlayerStore } from '../../../stores/stores'
import { TracksList } from '../tracks-list/tracks-list'
import { formatTime } from '../../../utils'
import { MessageBanner } from '../../message-banner/message-banner'

export interface HistoryListProps {
  items: readonly string[]
}

export const HistoryList: VoidComponent<HistoryListProps> = (props) => {
  const [entities] = useEntitiesStore()
  const [playerState, playerActions] = usePlayerStore()

  // Filter tracks that have saved progress and sort by most recently played
  const historyItems = createMemo(() => {
    const { trackTimestamps } = playerState
    const { tracks } = entities

    // Get tracks that have saved progress (timestamps)
    const tracksWithProgress = Object.keys(trackTimestamps)
      .filter(trackId => tracks[trackId] && trackTimestamps[trackId] > 0)
      .map(trackId => ({
        id: trackId,
        timestamp: trackTimestamps[trackId],
        track: tracks[trackId]
      }))
      .sort((a, b) => b.timestamp - a.timestamp) // Sort by most recent progress

    return tracksWithProgress.map(item => item.id)
  })

  const getProgressText = (trackId: string) => {
    const timestamp = playerState.trackTimestamps[trackId]
    const track = entities.tracks[trackId]
    
    if (!timestamp || !track) return ''
    
    const progress = (timestamp / track.duration) * 100
    const timeRemaining = track.duration - timestamp
    
    return `${Math.round(progress)}% • ${formatTime(timeRemaining)} left`
  }

  const additionalMenuItems = (track: any) => [
    {
      name: 'Clear progress',
      action: () => {
        playerActions.clearTrackTimestamp(track.id)
      }
    }
  ]

  return (
    <TracksList
      items={historyItems()}
      additionalMenuItems={additionalMenuItems}
      fallback={
        <MessageBanner
          title='No listening history'
          message='Tracks you listen to will appear here with your progress.'
        />
      }
    />
  )
} 