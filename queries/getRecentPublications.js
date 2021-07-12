import { spaceId, environmentId, accessToken } from '../contentful';

/* Recent publications, including both External Content and Posts */
async function getRecentPublications(count = 5) {
  const limit = count < 25 ? count : 25;

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&limit=${count}`;
  const res = await fetch(url)
  const data = await res.json()

  return data.items;
}


export default getRecentPublications
