import styled from '@emotion/styled'

export const AdUnit = styled.div`
  margin: 0 0 var(--space-4) 0;
`

export const AdUnitInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-md);
  border: solid 1px var(--color-grey-200);
  padding: var(--space-4) var(--space-3);
`

export const AdUnitClose = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: var(--color-grey-500);
`

export const AdUnitIcon = styled.div``

export const AdUnitTitle = styled.h3``

export const AdUnitDescription = styled.span``
