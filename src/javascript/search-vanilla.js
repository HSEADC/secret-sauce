import { getPostTeasers } from './Search-data';

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    update(data);
  });
});

function update(content) {
  const container = document.querySelector('.S_Content');

  content.forEach((contentItemData) => {
    const contentItem = document.createElement('a');
    contentItem.classList.add('O_ContentItem');
    contentItem.href = contentItemData.url;

    const contentItemCover = document.createElement('img');
    contentItemCover.classList.add('A_ContentItemCover');
    contentItemCover.src = contentItemData.images;

    const contentItemTitle = document.createElement('h3');
    contentItemTitle.classList.add('A_ContentItemTitle');
    contentItemTitle.innerText = contentItemData.title;

    const contentItemDescription = document.createElement('p');
    contentItemDescription.classList.add('A_ContentItemDescription');
    contentItemDescription.innerText = contentItemData.description;

    const contentItemTags = document.createElement('div');
    contentItemTags.classList.add('C_ContentItemTags');

    contentItemData.tags.forEach((tag) => {
      const contentItemTag = document.createElement('div');
      contentItemTag.classList.add('A_ContentItemTag');
      contentItemTags.innerText = tag;
      contentItemTags.appendChild(contentItemTag);
    });

    contentItem.appendChild(contentItemCover);
    contentItem.appendChild(contentItemTags);
    contentItem.appendChild(contentItemTitle);
    contentItem.appendChild(contentItemDescription);

    container.appendChild(contentItem);
  });
}
