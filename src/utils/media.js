export const MEDIA_QUERIES = {
  PHONE: { type: 'max', size: 650 },
  NOT_PHONE: { type: 'min', size: 651 },
  TABLET: { type: 'max', size: 940 },
  SMALL_DESKTOP: { type: 'max', size: 1200 },
  DESKTOP: { type: 'min', size: 941 }
};

export const media = Object.keys(MEDIA_QUERIES).reduce((acc, key) => {
  const { type, size } = MEDIA_QUERIES[key];
  acc[key] = (style) => `
      @media (${type}-width: ${size}px) {
        ${style};
      }
    `;
  return acc;
}, {});
