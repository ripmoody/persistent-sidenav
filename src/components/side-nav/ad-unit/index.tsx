import { useState } from 'react'
import * as S from './styled'

export const AdUnit = () => {
  const [show, setShow] = useState(true)

  const handleClose = () => {
    setShow(false)
  }

  if (!show) return null

  return (
    <S.AdUnit>
      <S.AdUnitInner>
        <S.AdUnitClose onClick={handleClose}>X</S.AdUnitClose>
        Test
      </S.AdUnitInner>
    </S.AdUnit>
  )
}
