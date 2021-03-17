const sizes = {
  mobile: '320px',
  mobileL: '480px',
  tablet: '481px',
  tabletL: '768px',
  laptop: '769px',
  laptopL: '1024px',
  desktop: '1025px'
}

const breakpoints = {
  mobile: `@media only screen and (min-width: ${sizes.mobile})`,
  mobileL: `@media only screen and (min-width: ${sizes.mobile}) and (max-width: ${sizes.mobileL})`,
  tablet: `@media only screen and (min-width: ${sizes.tablet})`,
  tabletL: `@media only screen and (min-width: ${sizes.tablet}) and (max-width: ${sizes.tabletL})`,
  laptop: `@media only screen and (min-width: ${sizes.laptop})`,
  laptopL: `@media only screen and (min-width: ${sizes.laptop}) and (max-width: ${sizes.laptopL})`,
  desktop: `@media only screen and (min-width: ${sizes.desktop})`
}

export default breakpoints
