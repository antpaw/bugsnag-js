module.exports = () => console.log(`
  bugsnag-expo - a tool to help integrate @bugsnag/expo with an Expo project

  usage
    bugsnag-expo <command>

  commands
    init            integrates Bugsnag with an Expo project
                    (this command runs all of the other commands)
    install         installs @bugsnag/expo
    insert          inserts @bugsnag/expo into an app
    set-api-key     inserts a provided api key into app.json
    add-hook        configures the Bugsnag postPublish hook in app.json
    help            prints this text

  options
    --vebose -v     switch on verbose logging
    --project-root  set the path to the expo project
                    (defaults to the current working directory)
`)