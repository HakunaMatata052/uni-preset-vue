# 环境安装
全局安装vue-cli（若已安装，请跳过）
```
npm install -g @vue/cli
```

# 创建ulink 模版
```
vue create -p hakunamatata052/ulink project
```

# 选择ulink模版

# package.json中的script替换为以下这段
```
"scripts": {
    "serve": "npm run dev:h5",
    "build": "npm run build:h5",
    "build:app-plus": "cross-env NODE_ENV=production UNI_PLATFORM=app-plus vue-cli-service uni-build",
    "build:custom": "cross-env NODE_ENV=production uniapp-cli custom",
    "build:h5": "cross-env NODE_ENV=production UNI_PLATFORM=h5 UNI_OUTPUT_DIR=../html vue-cli-service uni-build",
    "build:mp-360": "cross-env NODE_ENV=production UNI_PLATFORM=mp-360 vue-cli-service uni-build",
    "build:mp-alipay": "cross-env NODE_ENV=production UNI_PLATFORM=mp-alipay vue-cli-service uni-build",
    "build:mp-baidu": "cross-env NODE_ENV=production UNI_PLATFORM=mp-baidu vue-cli-service uni-build",
    "build:mp-kuaishou": "cross-env NODE_ENV=production UNI_PLATFORM=mp-kuaishou vue-cli-service uni-build",
    "build:mp-qq": "cross-env NODE_ENV=production UNI_PLATFORM=mp-qq vue-cli-service uni-build",
    "build:mp-toutiao": "cross-env NODE_ENV=production UNI_PLATFORM=mp-toutiao vue-cli-service uni-build",
    "build:mp-weixin": "cross-env NODE_ENV=production UNI_PLATFORM=mp-weixin UNI_OUTPUT_DIR=../mini vue-cli-service uni-build",
    "build:quickapp-native": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-native vue-cli-service uni-build",
    "build:quickapp-webview": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview vue-cli-service uni-build",
    "build:quickapp-webview-huawei": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview-huawei vue-cli-service uni-build",
    "build:quickapp-webview-union": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview-union vue-cli-service uni-build",
    "dev:app-plus": "cross-env NODE_ENV=development UNI_PLATFORM=app-plus vue-cli-service uni-build --watch",
    "dev:custom": "cross-env NODE_ENV=development uniapp-cli custom",
    "dev:h5": "sudo cross-env NODE_ENV=development UNI_PLATFORM=h5 vue-cli-service uni-serve",
    "dev:mp-360": "cross-env NODE_ENV=development UNI_PLATFORM=mp-360 vue-cli-service uni-build --watch",
    "dev:mp-alipay": "cross-env NODE_ENV=development UNI_PLATFORM=mp-alipay vue-cli-service uni-build --watch",
    "dev:mp-baidu": "cross-env NODE_ENV=development UNI_PLATFORM=mp-baidu vue-cli-service uni-build --watch",
    "dev:mp-kuaishou": "cross-env NODE_ENV=development UNI_PLATFORM=mp-kuaishou vue-cli-service uni-build --watch",
    "dev:mp-qq": "cross-env NODE_ENV=development UNI_PLATFORM=mp-qq vue-cli-service uni-build --watch",
    "dev:mp-toutiao": "cross-env NODE_ENV=development UNI_PLATFORM=mp-toutiao vue-cli-service uni-build --watch",
    "dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin UNI_OUTPUT_DIR=../mini vue-cli-service uni-build --watch",
    "dev:quickapp-native": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-native vue-cli-service uni-build --watch",
    "dev:quickapp-webview": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview vue-cli-service uni-build --watch",
    "dev:quickapp-webview-huawei": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview-huawei vue-cli-service uni-build --watch",
    "dev:quickapp-webview-union": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview-union vue-cli-service uni-build --watch",
    "info": "node node_modules/@dcloudio/vue-cli-plugin-uni/commands/info.js",
    "serve:quickapp-native": "node node_modules/@dcloudio/uni-quickapp-native/bin/serve.js",
    "test:android": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=android jest -i",
    "test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
    "test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i",
    "test:mp-baidu": "cross-env UNI_PLATFORM=mp-baidu jest -i",
    "test:mp-weixin": "cross-env UNI_PLATFORM=mp-weixin jest -i"
  },
```