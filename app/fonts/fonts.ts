import localFont from 'next/font/local';

export const Philosopher = localFont({
  src: [
    {
      path: './PhilosopherBold.woff2',
      weight: '700',
      style: 'normal',  
    },
  ],
});

export const PTSAns = localFont({
  src: [
    {
      path: './PTSansRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './PTSansBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
