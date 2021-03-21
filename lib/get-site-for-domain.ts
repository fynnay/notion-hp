import * as config from './config'
import * as types from './types'

export const getSiteForDomain = async (
  domain: string
): Promise<types.Site | null> => {
  return {
    domain,
    name: config.name,
    rootNotionPageId: config.rootNotionPageId,
    rootNotionSpaceId: config.rootNotionSpaceId,
    fontFamily: config.fontFamily,
    description: config.description
  } as types.Site
}
