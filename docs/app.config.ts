export default defineAppConfig({
  docus: {
    title: 'Luv',
    description: 'A positive vibes on social media platform.',
    image: 'https://docs.elk.zone/elk-screenshot.png',
    socials: {
      twitter: 'luvnft',
      github: 'blkluv',
      mastodon: {
        label: 'Mastodon',
        icon: 'IconMastodon',
        href: 'https://elk.zone/@elk@webtoo.ls',
      },
    },
    aside: {
      level: 0,
      exclude: [],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs',
        },
        {
          href: 'https://m.webtoo.ls/@luv',
          icon: 'IconMastodon',
        },
      ],
    },
  },
})
