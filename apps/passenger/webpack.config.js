const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const shareAll = mf.shareAll;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "passenger",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

        name: "passenger",
        filename: "remoteEntry.js",
        exposes: {
            './module': './apps/passenger/src/app/passenger/passenger.module.ts',
        },

        shared: /* share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
 */
        {
          ...shareAll(
            {
              singleton: true,
              strictVersion: true,
              requiredVersion: 'auto',
              includeSecondaries: {
                skip: [
                  '@angular/http/testing'
                ]
              },
            },
            [
              '@angular-architects/module-federation',
              '@angular-architects/module-federation-runtime',
              '@angular-architects/module-federation-tools'
            ]
          ),
          ...sharedMappings.getDescriptors()
        }

    }),
    sharedMappings.getPlugin()
  ],
};
