import { PAGE_TITLE_DEFAULT } from '../../constants'
import { menu } from './menu'

const daoPageTitle = (daoId?: string, subpath?: string, subpathId?: string, ...args: string[]): string | undefined => {
  if (!daoId) return PAGE_TITLE_DEFAULT
  if (subpath) {
    switch (subpath) {
      case 'projects':
        return 'Projects'
      default:
        return undefined
    }
  }
  return undefined
}

export const getTitleFromPath = (pathname: string): string => {
  const parts = pathname.split('/')
  const [, group, , subpath] = parts
  switch (group) {
    case 'dao':
      const matches = menu.filter(({ link }) => link === subpath)

      if (matches && matches.length) {
        return matches[0].label
      }

      return daoPageTitle(...parts.slice(1)) || PAGE_TITLE_DEFAULT
    default:
      return PAGE_TITLE_DEFAULT
  }
}
