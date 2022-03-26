import { ArtWallRow } from "./ArtWallRow"

export function ArtWall() {
  return (
    <div className='artwall overflow-visible whitespace-nowrap'>
      <ArtWallRow startNumber={0} direction={"left"} />
      <ArtWallRow startNumber={8} direction={"right"} />
      <ArtWallRow startNumber={16} direction={"left"} />
    </div>
  )
}
