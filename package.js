Package.describe({
    name: 'mojtabakaviani:bootstrap.rtl',
    summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
    version: '4.5.0',
    git: 'https://github.com/mojtabakaviani/bootstrap-rtl.git'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');
    api.use('jquery', 'client');
    api.addFiles([
        'src/bootstrap.css',
        'src/bootstrap.js',
        'dist/bootstrap.min.css',
        'dist/bootstrap.min.js'
    ], 'client');
});