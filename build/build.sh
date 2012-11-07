#!/bin/bash
path="/Library/WebServer/Documents"
project="mobile-app"
build="build"
release="release"
project_path=$path/$project
build_path=$project_path/$build
release_path=$project_path/$release
assets_path=$project_path/assets



#delete release folder
rm -Rf $release

#Build the project using r.js
node $build_path/r.js -o $build_path/build.js

#copy index.html from the build folder to the release folder
cp $build_path/index.html $release_path/

#copy require.js from the assets/js/libs folder to the release folder
#cp $assets_path/js/libs/require.js $release_path/js/

#Compile sass files
compass compile $project_path

#copy assets (css, img) to the release folder
mkdir $release_path/assets
mkdir $release_path/assets/css
mkdir $release_path/assets/img
cp -R $assets_path/css/ $release_path/assets/css
cp -R $assets_path/img/ $release_path/assets/img

#zip release folder content




