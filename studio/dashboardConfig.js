export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f870721ccbc8c0089a6fb6f',
                  title: 'Sanity Studio',
                  name: 'nextjs-blog-studio',
                  apiId: 'e3759283-d323-4217-b338-31fa24a856c9'
                },
                {
                  buildHookId: '5f87072155152600dec4d07d',
                  title: 'Landing pages Website',
                  name: 'nextjs-blog-web',
                  apiId: '5c78c0ea-eaab-40ae-9212-d8378e0f554f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JohnnyStein/nextjs-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-blog-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
