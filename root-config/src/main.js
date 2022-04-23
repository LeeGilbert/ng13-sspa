System.import('single-spa').then(({ registerApplication, start }) => {
    registerApplication({
      name: 'main',
      app: () => System.import('main'),
      activeWhen: () => true,
    });
  
    start();
  });
  
