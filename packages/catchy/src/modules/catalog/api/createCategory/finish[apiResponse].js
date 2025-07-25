import { buildUrl } from '../../../../lib/router/buildUrl.js';
import { OK } from '../../../../lib/util/httpStatus.js';

export default async (request, response, delegate, next) => {
  const category = await delegate.createCategory;
  response.status(OK);
  response.json({
    data: {
      ...category,
      links: [
        {
          rel: 'categoryGrid',
          href: buildUrl('categoryGrid'),
          action: 'GET',
          types: ['text/xml']
        },
        {
          rel: 'view',
          href: buildUrl('categoryView', { uuid: category.uuid }),
          action: 'GET',
          types: ['text/xml']
        },
        {
          rel: 'edit',
          href: buildUrl('categoryEdit', { id: category.uuid }),
          action: 'GET',
          types: ['text/xml']
        }
      ]
    }
  });
};
