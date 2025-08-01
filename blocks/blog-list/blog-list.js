import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  const indexResponse = await fetch('/../sitemap.json');
  if (!indexResponse.ok) {
    console.error('Failed to fetch sitemap.json:', indexResponse.statusText);
    return;
  }

  const index = await indexResponse.json();

  const container = document.createElement('ul');

  index.data
    .forEach((post) => {
      // If the post is not from Blog category, skip it
      if (post.category !== 'blog') {
        return;
      }

      const eager = false;
      const title = '';
      const li = document.createElement('li');
      const picture = createOptimizedPicture(post.image, post.title || title, eager, [{ width: '300' }]);
      const pictureTag = picture.outerHTML;

      li.innerHTML = `
      <a href="${post.path}">
        ${pictureTag}
        <h5>${post.title}</h5>
        
      </a>
    `;
      container.append(li);
    });

  block.append(container);
}
