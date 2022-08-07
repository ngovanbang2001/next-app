import { forwardRef } from 'react'

// next
import NextLink from 'next/link'

// @mui
import { Box } from '@mui/material'

// import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

const Logo = forwardRef(({ disabledLink = false, sx }, ref) => {
  // const theme = useTheme()

  // const PRIMARY_LIGHT = theme.palette.primary.light

  // const PRIMARY_MAIN = theme.palette.primary.main

  // const PRIMARY_DARK = theme.palette.primary.dark

  // OR
  // const logo = '/logo/logo_single.svg';

  const logo = (
    <Box ref={ref} sx={{ width: 60, height: 40, cursor: 'pointer', ...sx }}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1219.88 514.69'>
        <defs>
          <style>{'.cls-1{fill:#ffc530;}'}</style>
        </defs>
        <g id='Layer_2' data-name='Layer 2'>
          <g id='Layer_1-2' data-name='Layer 1'>
            <path
              className='cls-1'
              d='M54.89,247.65l18.42-18.44a6,6,0,0,0,1.78-4.28V198.88a5.64,5.64,0,0,0-1.78-4.28L54.89,176a6,6,0,0,0-4.28-1.78h-26A5.63,5.63,0,0,0,20.32,176L1.78,194.48A6,6,0,0,0,0,198.76v26.05a5.64,5.64,0,0,0,1.78,4.28L20.2,247.65a6,6,0,0,0,4.28,1.78h26A5.89,5.89,0,0,0,54.89,247.65Z'
            />
            <path
              className='cls-1'
              d='M241.18,3H228.59c-28.4-.24-50.73,7.14-66.42,21.65-17.46,16.3-26.26,40.2-26.26,71.13l-.35,344.12c0,8.09-1.78,13.92-5.11,17.25-2.85,2.73-7.13,4.52-12.71,5.23h-76v52h59.77c4,.24,8.08.36,11.88.36,22.57,0,39.92-4.05,51.8-12.13,17-11.42,25.55-32.6,25.55-62.69V232.07H321.27v-52.7H190.21V95.75c0-13.8,3.33-24.15,10-30.69s16.64-9.63,29.94-9.51h12c21.63,0,79.25.23,82.11.35l3.92.36V3.45l-3.33-.24C322.33,3.09,283.13,3.09,241.18,3Z'
            />
            <path
              className='cls-1'
              d='M401.11,188.65c3.33-17.6,11.29-31.4,23.53-41.63s27.68-15.23,46.21-15.23c16.28,0,30.54,4.76,42.78,14.39s20,23.79,23.29,42.59H401.11ZM471.33,86.47q-53.64,0-87.8,34.85T349.31,208c0,35.09,11.52,64.23,34.69,87.19s53.47,34.49,91,34.49q67,0,101.11-50.43l-41.11-24c-13.18,19.15-33.15,28.67-59.52,28.67-19.13,0-35.29-4.64-48.48-14.16s-21.74-22.84-25.42-40.44h183.8a164.48,164.48,0,0,0,1.9-20.82q0-50.85-32.55-86.47T471.33,86.47Z'
            />
            <path
              className='cls-1'
              d='M687.69,27.71l-49.9,14.75v50H595.25v48.06h42.54v111q0,45.33,25,62.21c16.63,11.31,44.08,14.52,82.22,10V278.81a314.8,314.8,0,0,1-31.61.24c-8.43-.47-14.85-2.73-19.13-6.9s-6.41-11.06-6.41-20.58v-111H745V92.42H687.69Z'
            />
            <path
              className='cls-1'
              d='M916.19,271a71.17,71.17,0,0,1-36.72,9.76q-30.48,0-51.09-20.82t-20.55-51.74q0-31,20.55-51.75c13.67-13.91,30.77-20.81,51.09-20.81,13.9,0,26.14,3.21,36.72,9.51A59,59,0,0,1,940,171.28l43-25c-9.27-18.19-23.05-32.71-41.59-43.41S902.4,86.71,880,86.71q-52.23,0-87.09,34.85C769.57,144.88,758,173.78,758,208.28q0,51.37,34.82,86.47T880,329.84c22.45,0,43-5.35,61.42-16.17a111,111,0,0,0,42.54-43.9L940.9,245A63.19,63.19,0,0,1,916.19,271Z'
            />
            <path
              className='cls-1'
              d='M1195.29,111.93C1179,95,1157.62,86.48,1131.13,86.48q-49,0-71.65,35.56V0h-49.9V323.66h49.9V199.72q0-33.74,16.16-50.2c10.82-10.94,24.95-16.42,42.54-16.42,16,0,28.63,4.64,37.9,13.92s13.9,22.48,13.9,39.73V323.66h49.9V181.75C1219.77,152.14,1211.69,128.82,1195.29,111.93Z'
            />
          </g>
        </g>
      </svg>
    </Box>
  )

  if (disabledLink) {
    return <>{logo}</>
  }

  return <NextLink href='/'>{logo}</NextLink>
})

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
}

export default Logo