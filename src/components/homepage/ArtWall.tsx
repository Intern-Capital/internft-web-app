import SampleInterns from "../utilities/SampleInterns"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import styled from "styled-components"
import { ArtWallRow } from "./ArtWallRow"

const TweenStyled = styled.div`
  .tween {
    margin: 0 !important;
    position: relative;
  }
`

export function ArtWall() {
  return (
    <div className='artwall overflow-visible whitespace-nowrap'>
      <ArtWallRow startNumber={0} direction={"left"} />
      <ArtWallRow startNumber={8} direction={"right"} />
      <ArtWallRow startNumber={16} direction={"left"} />
    </div>
  )
}
