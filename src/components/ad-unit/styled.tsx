import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const AdUnit = styled.div`
  margin: 0 0 var(--space-4) 0;
  padding: 0 var(--space-3);
`

export const AdUnitInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-md);
  border: solid 1px var(--color-outline-variant);
  padding: var(--space-4) var(--space-3);
`

const AdUnitButtonBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-base);
  border: none;
  padding: var(--space-2) var(--space-3);
  font-weight: 500;
  font-size: var(--type-size-xs);
  line-height: 1;
  background-color: transparent;
`

export const AdUnitClose = styled.button`
  ${AdUnitButtonBase}
  position: absolute;
  top: var(--space-1_5);
  right: var(--space-1_5);
  padding: var(--space-1);
  color: var(--color-on-surface-variant);

  &:hover {
    background-color: var(--color-grey-50);
  }
`

export const AdUnitIcon = styled.div`
  height: var(--space-9);
  width: var(--space-9);
  margin: 0 0 var(--space-2) 0;
`

export const AdUnitTitle = styled.h3`
  font-weight: 600;
  line-height: 1;
  padding: 0;
  margin: var(--space-2) 0 var(--space-1_5) 0;
  color: var(--color-on-surface);
`

export const AdUnitDescription = styled.span`
  margin: 0;
  padding: 0;
  color: var(--color-on-surface-variant);
  font-size: var(--type-size-xs);
  line-height: 1.5;
`

export const AdUnitButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: var(--space-4) 0 0 0;
  gap: var(--space-2);
`

export const AdUnitButton = styled.button`
  ${AdUnitButtonBase}
  background-color: var(--color-grey-100);
  flex: 1;

  &:hover {
    background-color: var(--color-grey-200);
  }
`

export const AdUnitPrimaryButton = styled(AdUnitButton)`
  background-color: var(--color-yellow-400);

  &:hover {
    background-color: var(--color-yellow-500);
  }
`
