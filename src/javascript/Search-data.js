import Airtable from 'airtable';

const token =
  'patODIAqZ8BWqGyc7.bb700c7eae3abb2607a52d12d04b3249c9ab33df7d538e29ae961cb70d1c0bd9';

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
