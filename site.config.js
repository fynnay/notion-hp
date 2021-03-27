module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '64aadb5345cf48309a47b54b6a54b694',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'FYNN - code & VFX',
  domain: 'fynn-notion-hp.vercel.app',
  author: 'Fynn Laue',

  // open graph metadata (optional)
  description: 'code & vfx',
  socialImageTitle: 'Fynn Laue',
  socialImageSubtitle: 'code & vfx 💥',
  fontFamily: 'Lato', // Quicksand | Roboto

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/image-distortion-in-p5js': '0c2c04bb481447c9bf925e42cfc99a2b',
    '/revlum-v1-0': '2cd9f8f145de48b4bf6e76a114844af4',
    '/ikrot-gizmo-for-nuke': 'db1d047190ff4bb3a9887fd3e0ab8bce',
    '/nuke-reconnect-nodes': '0246c578d94846d395145c3bddbd34c5',
    '/nuke-preferences-manager': '3b8c20657d7e471797e42b8462745345',
    '/dodge-button': '3c7fdb9af1224f788101caf3be1b09d7',
    '/syncfontattributes': '54da15f055ec42c3b256587cf2223577',
    '/neatlog': 'd45416c0bc3241ccb2c2cb67daaa414e',
    '/ppos-mapping': 'f3d814dcde174ac696e88c102a9cadc5',
    '/automated-vfx-pipeline': '065fa379b4c34e9fb2c18bbf33dd8398',
    '/nuke-studio-comp-cleaner': '3086d97aaaa44f1eab5f1faa2569910e',
    '/deleteviewers': '38629797b30c4a2798ee8abe1b5b059c',
    '/dr3-bestemmer': '30700e8617094a24a80c962bf2611a81'
  }
}
