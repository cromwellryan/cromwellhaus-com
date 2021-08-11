import { spaceId, environmentId, accessToken } from '../contentful';

/* Recent publications, including both External Content and Posts */
async function getPublications({ page = 1 }) {
  const pageSize = 15;
  const entriesToSkip = (page-1) * pageSize;

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&skip=${entriesToSkip}&limit=${pageSize}`;

  const res = await fetch(url)
  const data = await res.json()

  return data.items;
}


export default getPublications

