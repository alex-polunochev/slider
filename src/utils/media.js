export const MEDIA_QUERIES = {
  PHONE: { type: 'max-width', size: 823 },
  SMALL_SCREEN: { type: 'max-width', size: 1024 }
};

export const media = Object.keys(MEDIA_QUERIES).reduce((acc, key) => {
  const { type, size } = MEDIA_QUERIES[key];
  acc[key] = (style) => `
      @media (${type}: ${size}px) {
        ${style};
      }
    `;
  return acc;
}, {});
