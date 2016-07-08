# cordova-plugin-spawnsync
A simple Cordova plugin to patch Node `child_process` with `spawnSync()` (for Node version &lt;0.11.12).


## Installation

For Cordova:

```bash
$ cordova plugin add https://github.com/ghybs/cordova-plugin-spawnsync.git
```

For Meteor: (needs Git URL with exact commit SHA)

```bash
$ meteor add cordova:cordova-plugin-spawnsync@https://github.com/ghybs/cordova-plugin-spawnsync.git#6ef15ee8ba258a0f678dd18bf9bec1e94e4ba0af
```


## Description

[`child_process.spawnSync()`](https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options) has been introduced in Node version 0.11.12.
Unfortunately, some hosts and framework still use earlier Node versions (typically, Meteor 1.3 is still using Node 0.10.43).

Use this plugin to bring compatibility with other Cordova plugins that use `spawnSync`, typically to install npm dependencies.
For example, [cordova-universal-links-plugin](https://github.com/nordnet/cordova-universal-links-plugin).

You can safely install this plugin even if you have a modern Node version.
It will check whether `child_process.spawnSync()` is available or not, and patch it only when necessary.


## License

cordova-plugin-spawnsync is distributed under the [MIT License](http://choosealicense.com/licenses/mit/) (Expat type).
