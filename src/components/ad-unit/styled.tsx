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
  border: solid 1px var(--color-grey-100);
  padding: var(--space-4) var(--space-3);
`

export const AdUnitClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: var(--space-1_5);
  right: var(--space-1_5);
  padding: var(--space-1);
  border: none;
  background-color: transparent;
  color: var(--color-grey-500);
  border-radius: var(--radius-base);

  &:hover {
    background-color: var(--color-grey-50);
  }
`

export const AdUnitIcon = styled.div`
  height: var(--space-8);
  width: var(--space-8);
  margin: 0 0 var(--space-2) 0;
`

export const AdUnitTitle = styled.h3`
  font-weight: 600;
  line-height: 1;
  padding: 0;
  margin: var(--space-2) 0 var(--space-1_5) 0;
  color: var(--color-grey-900);
`

export const AdUnitDescription = styled.span`
  margin: 0;
  padding: 0;
  color: var(--color-grey-600);
  font-size: var(--type-size-xs);
  line-height: 1.5;
  letter-spacing: 0.25px;
`
