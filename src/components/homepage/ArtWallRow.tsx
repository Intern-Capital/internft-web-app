import SampleInterns from "../utilities/SampleInterns"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"

interface Props {
  startNumber: number
  direction: string
}

export function ArtWallRow({ startNumber, direction }: Props) {
  const directionSetting = direction === "left" ? { left: "-500px" } : { right: "-500px" }

  return (
    <Controller>
      <Scene
        key={"scene-" + startNumber}
        triggerElement={"#trigger-" + startNumber}
        duration={3000}
      >
        {(progress) => (
          <Tween to={directionSetting} ease='Strong.easeOut' totalProgress={progress} paused>
            <div
              className='relative -mb-3'
              style={direction === "right" ? { marginLeft: "-500px" } : {}}
              id={"trigger-" + startNumber}
            >
              {Array.apply(null, Array(8)).map((_, i) => {
                return (
                  <div
                    key={"row-" + startNumber + "-" + i}
                    className='relative m-0 inline-block w-[20] border-y-8 border-r-8 first:border-l-8 border-purple-900 shadow-inner'
                  >
                    <img
                      className='w-96 shadow-lg'
                      src={SampleInterns[startNumber + i]}
                      alt='Sample InterNFT'
                    />
                  </div>
                )
              })}
            </div>
          </Tween>
        )}
      </Scene>
    </Controller>
  )
}
