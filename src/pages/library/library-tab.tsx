import { createMemo, VoidComponent } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { sortByKey } from '../../utils'
import { useEntitiesStore, useLibraryStore } from '../../stores/stores'
import { BaseMusicItem, MusicItemType, Track } from '../../types/types'
import { LibraryPageConfig } from './config'
import { ScrollContainer } from '../../components/scroll-container/scroll-container'
import * as styles from './library.css'

export const LibraryPage: VoidComponent<LibraryPageConfig> = (props) => {
  const [dataState] = useEntitiesStore()
  const [libraryState] = useLibraryStore()

  const itemsSelector = () => {
    switch (props.type) {
      case MusicItemType.ALBUM:
        return dataState.albums
      case MusicItemType.ARTIST:
        return dataState.artists
      case MusicItemType.PLAYLIST:
        return dataState.playlists
      case MusicItemType.HISTORY:
        return {} // History component generates its own items from player store
      default:
        throw new Error('Wrong item type')
    }
  }

  const itemIds = createMemo(() => {
    const itemsArray = sortByKey(
      [...Object.values<BaseMusicItem>(itemsSelector() as { [key: string]: BaseMusicItem })],
      libraryState.sortKeys[props.type] as keyof BaseMusicItem,
    ) as unknown as BaseMusicItem[]

    return itemsArray.map((item) => item.id)
  })

  return (
    <ScrollContainer class={styles.libraryPageContainer} observeScrollState>
      {props.actions && <div class={styles.actions}>{props.actions}</div>}
      <Dynamic component={props.component} items={itemIds()} />
    </ScrollContainer>
  )
}
