import { useState } from 'react'
import { Close } from '../icons'
import { AdIcon } from './ad-icon'
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
        <S.AdUnitClose onClick={handleClose}>
          <Close size="16" />
        </S.AdUnitClose>
        <S.AdUnitIcon>
          <AdIcon />
        </S.AdUnitIcon>
        <S.AdUnitTitle>Discover new apps</S.AdUnitTitle>
        <S.AdUnitDescription>
          Enable earned wage access and direct deposit with employee cards.
        </S.AdUnitDescription>
        <S.AdUnitButtonGroup>
          <S.AdUnitPrimaryButton>Sign up</S.AdUnitPrimaryButton>
          <S.AdUnitButton>Learn more</S.AdUnitButton>
        </S.AdUnitButtonGroup>
      </S.AdUnitInner>
    </S.AdUnit>
  )
}
