/**
 * Breakpoints for the responsive behavior of the sidenav. The sidenav expanded inline is 352px.
 * This is added to the breakpoint to determine when the sidenav should be collapsed for the main content.
 */
export const breakpoints = {
  sm: 564, // 500 (current content container width) + 64 (side nav collapsed expanded inline)
  md: 1565, // 1200 (current content container width) + 352 (side nav expanded inline)
  lg: 1920, // 1568 (current content container width) + 352 (side nav expanded inline)
}
