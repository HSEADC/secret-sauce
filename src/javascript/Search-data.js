import Airtable from 'airtable';

const token =
  'patODIAqZ8BWqGyc7.6b8587b44164c42c937290f703ffb49c87e299d3e1412bf1b8a1b3f03ecd7a4c'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token,
});
var base = Airtable.base('appEs79kzebIvzpyQ');

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = [];

    base('Table 1')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['Description'],
            tags: record.fields['Tags'],
            images: record.fields['Images'],
            url: record.fields['URL'],
            classes: record.fields['Classes'],
          });
        });

        resolve(content);
      });
  });
}

export { getPostTeasers };
