#!/usr/bin/env bash
npm config get registry
npm  config set registry=http://registry.npmjs.org
echo '请登录'
npm login
npm publish
npm config set registry=https://registry.npm.taobao.org
echo '发布完成'
exit