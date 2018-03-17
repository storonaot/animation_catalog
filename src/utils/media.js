const sizes = {
  mobile: 640,
  tablet: 960,
  laptop: 1280,
  desktop: 1600,
  giant: 1920
}

const media = {
  mobile: `only screen and (min-width: ${sizes.mobile}px)`,
  tablet: `only screen and (min-width: ${sizes.tablet}px)`,
  laptop: `only screen and (min-width: ${sizes.laptop}px)`,
  desktop: `only screen and (min-width: ${sizes.desktop}px)`,
  giant: `only screen and (min-width: ${sizes.giant}px)`
}

export default media
