Package.describe({
  name: 'drewy:datetimepicker',
  version: '1.0.3',
  // Brief, one-line summary of the package.
  summary: 'jQuery Date Time Picker',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/drew-y/meteor-datetimepicker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['jquery', 'momentjs:moment@2.8.4'], 'client');

  api.addFiles(['jquery.datetimepicker.js', 'jquery.datetimepicker.css'], 'client');
});
