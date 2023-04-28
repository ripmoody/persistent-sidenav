import styled from '@emotion/styled'

/**
 * The side nav component container
 */
export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: var(--space-72);
  background-color: white;
  border-right: solid 1px var(--color-grey-100);
  padding: var(--space-4) var(--space-3);
`

/**
 * The fixed header portion of the side nav. Contains offboard, hire, home
 */
export const SideNavHeader = styled.div`
  border-bottom: solid 1px var(--color-grey-100);
  padding: 0 0 var(--space-4) 0;
`

/**
 * The fixed footer portion of the side nav that stays fixed to the bottom.
 * Contains support, appshop
 */
export const SideNavFooter = styled.div`
  border-top: solid 1px var(--color-grey-100);
  padding: var(--space-4) 0 0 0;
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
  gap: var(--space-0_5);
`
