import styled from '@emotion/styled'

export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: var(--space-72);
  background-color: white;
  border-right: solid 1px var(--color-grey-100);
  padding: var(--space-3);
`

/**
 * The fixed header portion of the side nav
 */
export const SideNavHeader = styled.div`
  border-bottom: solid 1px var(--color-grey-100);
`

/**
 * The fixed footer portion of the side nav that stays fixed to the bottom
 */
export const SideNavFooter = styled.div`
  border-top: solid 1px var(--color-grey-100);
`

/**
 * The main content portion of the side nav that overflow, scrolls, expands, and collapses
 */
export const SideNavMain = styled.div`
  flex: 1;
`

/**
 * A generic unordered list for the side nav
 */
export const SideNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`
