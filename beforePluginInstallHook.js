module.exports = function (ctx) {
  
  var cp = require("child_process"),
      spawnSync = cp.spawnSync;

  if (typeof spawnSync !== "function") {
    
    // Adapted from http://stackoverflow.com/questions/31290828/install-node-dependencies-for-cordova-plugin
    var shell = ctx.requireCordovaModule("shelljs");
    
    shell.cd(ctx.opts.plugin.dir);

    console.log("\nInstalling npm package 'spawn-sync' to patch Node child_process...\n");

    // shelljs should already work synchronously…
    shell.exec("npm install");

    cp.spawnSync = require("spawn-sync");
  }
  
};
