Package.describe({
  summary: "Amazon Web Services SDK for Meteor",
  version: '0.0.1',
  name: 'gkrizek:aws',
  git: 'https://github.com/gkrizek/aws.git',
  documentation: 'README.md'
});

Npm.depends({
  'aws-sdk': '2.6.6'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4');
  api.use(['underscore', 'ecmascript']);

  api.export('AWS');

  api.addFiles([
    'server.js'
  ], 'server');

  api.addFiles([
    'aws-sdk.min.js',
    'client.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('gkrizek:aws');
  api.addFiles('server-test.js', 'server');
  api.addFiles('client-test.js', 'client');
});