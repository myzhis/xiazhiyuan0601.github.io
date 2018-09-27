/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/08/26/hexo便携版搭建github博客/index.html","dbb10873700b65625712d899c739c8d5"],["/2018/08/26/倒数/index.html","a2603f60eba505b7ec771a9c23be7b4d"],["/2018/08/30/如果时光/index.html","629a35affee4252a21ba561d62137858"],["/2018/09/09/换成hexo搭建博客/index.html","cc4cc87aa3ad840421b049e481cc827d"],["/2018/09/27/GEM/index.html","706daac1ac65f9e6ce9da68eac9a9646"],["/about.html","0ed9d4a45811a8bf696961adfa0ed3ce"],["/about/index.html","2973aded8811117dd5dee79329403cdd"],["/archives/2018/08/index.html","c78f12cbd62600e530700eb50a5d15bf"],["/archives/2018/09/index.html","ae7eed178210af5424325e2070bb23a5"],["/archives/2018/index.html","f279bb9244112774a30f82a7ad592f43"],["/archives/index.html","34377048eba72d6ef0d9db6bfb4e297c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/css/all.css","f9c762edbb109b610d0944c30babb515"],["/css/animate.css","dd31ab63f019867987fe3b0dec169ba9"],["/css/animsition.min.css","a0204d98578f4849e58b69688f9c950f"],["/css/bootstrap.min.css","cf22a64d2b4b5db8f79f57a928ed0a92"],["/css/custom.css","76d1e52466833e5055331b11f304111d"],["/css/flexslider.css","150ea42b481aa9e497cbdce184277b50"],["/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["/css/fonts/fontawesome-webfont.svg","b526f0637e912fae979bcfe9f0c9bd74"],["/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["/css/iconList.css","1c338ae864186364b70040571ee15f28"],["/css/ie8.css","b45b6ec10fee9447980b3f8d6efbfe3e"],["/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["/css/screen.css","d5835fc7cb073a51d33eb8cb54e90b1c"],["/css/slidebars.min.css","996e0520b43ec692aca841b1aa4d052c"],["/css/style.css","2c8425f5a1094be0f201ce912b792e03"],["/css/syntax.css","d85c8c00a077c6c0c0094a0a393e5b21"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/fonts/icons.eot","5b412b69a56cfe6e3380844419830d81"],["/fonts/icons.svg","8c24200901c66553cb876ad9948baf6c"],["/fonts/icons.ttf","4212c5a12a2d90c50f104c067ec632b6"],["/fonts/icons.woff","240623f03517e946a1dff2d22779cecd"],["/fonts/opensans.woff","316188e1f4aa01ff883901d19fb3a368"],["/highlightjs/arta.css","411a0016a0afcc40d6ba1a9215d224eb"],["/highlightjs/ascetic.css","29d8acdf168bdfab5f65017d97e44f2e"],["/highlightjs/brown_paper.css","2095be0391b3f191156f8c9c63a096c1"],["/highlightjs/brown_papersq.png","82cd9f5d6e9f0e3f3de24eaab6671d88"],["/highlightjs/dark.css","b8a60f0e8e78d13aac6acb05b78212c2"],["/highlightjs/default.css","1cc4c0f3321e5c58b3d5e2315a64026f"],["/highlightjs/docco.css","bf1839c704d00fdabf9cfe8ca29e85e2"],["/highlightjs/far.css","61d9fe8d695f447fb57b45958b0ddc73"],["/highlightjs/foundation.css","bc612d5ce8099a3db32265e312a105fa"],["/highlightjs/github.css","5de6fcb81cc7459ca8f33c3497eeeacb"],["/highlightjs/googlecode.css","fdb631b28e53a2030df9f7a703886dac"],["/highlightjs/idea.css","ce194f47da7b964abb9b223c7e0d3c08"],["/highlightjs/ir_black.css","52c475b3950fec315bff3a1e7c80762b"],["/highlightjs/magula.css","dc4bab48dabd56addf42220e0290d77c"],["/highlightjs/mono-blue.css","46c094eec6ebc59fb605bd07576a9d4d"],["/highlightjs/monokai.css","3bb49af9b5e545a98b0d1908745ca1d6"],["/highlightjs/monokai_sublime.css","8527568e28da29f09f098f24b47b13e2"],["/highlightjs/obsidian.css","384eb348df48ebeabce9e1bb623289f8"],["/highlightjs/pojoaque.css","705097869808fb9de96f2a1d1a0b1247"],["/highlightjs/pojoaque.jpg","8c391d520d67f644c146dcfaee1eb25f"],["/highlightjs/railscasts.css","7105469846f7f2a8b0664b8b67fd27c9"],["/highlightjs/rainbow.css","82c1684a70956cd7b10aca56b982e9f2"],["/highlightjs/school_book.css","edf00d604bc8415e39e3a9b6f3ebfc3e"],["/highlightjs/school_book.png","069f91d8694b98ca01fb750760f1563d"],["/highlightjs/solarized_dark.css","02cac686e543860a0ef31575e18f3b60"],["/highlightjs/solarized_light.css","708e0c11d9213f94d1ae1ef9306cff0e"],["/highlightjs/sunburst.css","4f693ba80534df1b540c1a48d2b6bf47"],["/highlightjs/tomorrow-night-blue.css","bb2ed03b7814daf02f59bc1c114889a0"],["/highlightjs/tomorrow-night-bright.css","79f82881cbc0a7b42211650bda9c4f9b"],["/highlightjs/tomorrow-night-eighties.css","551367fc79094f785cdc55ef5447c386"],["/highlightjs/tomorrow-night.css","10ee278d5619c579cd6401f840c90e05"],["/highlightjs/tomorrow.css","448d2f6cdd4c1c90843ba6ccdc8460b6"],["/highlightjs/vs.css","e76ad5f1f0f3cb65f92a6c24201c6092"],["/highlightjs/xcode.css","4d1f4dd74870bddcfeed06da8a432e2f"],["/highlightjs/zenburn.css","4392b536ac04ae13c16f4ce1dc706542"],["/img/1.jpg","04ddeb201d488410557c4c2bba8f2dcc"],["/img/3q.jpg","f8ad81afde257097e6e721e38260f5d3"],["/img/4e.jpg","e3895dbbbc2d5d4158123bb93158aa5a"],["/img/bg_img.jpg","04ddeb201d488410557c4c2bba8f2dcc"],["/img/close.png","1c593ab3eb11fb1bb87d35d85180cd90"],["/img/desk.jpg","6b666cf884268f1d26c1680792abbde7"],["/img/logo.png","a7fc1bb7ecafd97323d16fd964c37b77"],["/img/x2.png","d399f90e9c5eda549bb91df9623b6589"],["/img/xiazhiyuan.png","4fc3ac390d494e67179650fac5fcca2f"],["/index.html","8dc7580c4d991ba59f7d1f35465ae1f1"],["/js/html5shiv.min.js","3044234175ac91f49b03ff999c592b85"],["/js/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/jquery-1.11.1.min.js","8101d596b2b8fa35fe3a634ea342d7c3"],["/js/jquery.ajaxchimp.min.js","0e992843aa227b7b767c659f293b7dcb"],["/js/jquery.flexslider-min.js","9ec3c315b67f434aabc4da58eabc6c3a"],["/js/jquery.min.js","ccd0edd113b78697e04fb5c1b519a5cd"],["/js/plugins.min.js","492f6be6451e27256deb4ba54c9adc55"],["/js/respond.min.js","afc1984a3d17110449dc90cf22de0c27"],["/js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["/js/scripts.js","62ab71a9a5c563edce32ecd7644f94d7"],["/js/ziploader.js","1a16cac4a12aa673415240c08ea34f29"],["/sw-register.js","cc7a8c2b3f3cf95893363f6e40fb5fa0"],["/tags/GEM/index.html","7c68099d7d7f5ca548dc2da65ef8eb89"],["/tags/hexo/index.html","84e89255188466f9586655a11ddaefb7"],["/tags/时光/index.html","f574fe95c876566b96c6c5cd84e0d8e8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
