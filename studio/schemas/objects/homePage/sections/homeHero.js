export default {
  type: 'object',
  name: 'homeHero',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Hero Description'
    },
    {
      name: 'proposition',
      type: 'string',
      title: 'Hero Proposition'
    },
    {
      name: 'propositionList',
      type: 'array',
      title: 'Proposition List',
      of: [
        {
          name: 'propositionItem',
          type: 'string',
          title: 'Proposition Item'
        }
      ]
    },
    {
      name: 'heroBg',
      type: 'image',
      title: 'Hero background'
    },
    {
      name: 'heroVideoMob',
      type: 'file',
      title: 'Hero Video Mobile',
      description: 'upload video format "mp4" to this field'
    },
    {
      name: 'heroVideo',
      type: 'file',
      title: 'Hero Video',
      description: 'upload video format "webm" to this field'
    }
  ]
}
