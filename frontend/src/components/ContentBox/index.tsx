import { SxProps, Theme } from '@mui/material'
import { Box } from '@mui/system'
import { ReactNode } from 'react'

interface ContentBoxProps {
  title?: string
  children?: ReactNode
  sx?: SxProps<Theme>
}

export default function ContentBox(props: ContentBoxProps) {
  const sx = (props.sx || {
    p: 2,
    mb: 2
  }) as any
  return (
    <Box sx={sx}>
      {props.title ? (
        <Box>
          <h3>{props.title}</h3>
        </Box>
      ) : (
        <></>
      )}
      {props.children ? <Box>{props.children}</Box> : <></>}
    </Box>
  )
}
