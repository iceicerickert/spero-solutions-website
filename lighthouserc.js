module.exports = {
    ci: {
    collect: {
        url: ['http://localhost:8080/'],
        startServerCommand: 'npm run serve:prpl-server',
        },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };