/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/0tolearnfe/index.html","6b2173566ac18d8f1f3d07a1846a28a8"],["/2016/index.html","72a2d2f01114bdd8bf1bf07731d5a8a1"],["/2017-summary/index.html","32b7f78bd8a5337b02cf7b7a13b43aaa"],["/2018-summary/index.html","0b4009fcab6f25a20d0d41af091229a9"],["/Electron-vs-nwjs-part2/index.html","5bccd1331177a54581a88ae9b09fa609"],["/Electron-vs-nwjs/index.html","fbf43d174d9e59ad4728a1c2d9c737d3"],["/FullScreenBackground(css)/index.html","4b29efd8b6b40678545a8011906a50b2"],["/PC-Chrome-PWA/index.html","9b4316e0c313391e042ebc9c57fe5ec9"],["/PerfectMoviePerWeek3/index.html","843378c45e0debcf9368d439dec1f858"],["/PerfectMoviePerWeek4/index.html","a13cb907e83e47d9caef53f04b136a35"],["/PerfectMoviePerWeek5/index.html","a3a38a6e933235658dbfb678c0a02037"],["/Use-Jest-To-Test-Vue-Koa/index.html","f8e143200b2528ddfbb736ca4bb384d6"],["/Vue+Koa/index.html","3d888a468aa70536e04791b5bc150eeb"],["/WEEK89/index.html","6eae7d1c35d903abb2df801f7f2969d3"],["/WEEK90/index.html","a0f6fa6d924616b98e4665eb2b7152c3"],["/WEEK91/index.html","6d2d399580fa725b006510996dd78d14"],["/WEEK92/index.html","29401502de33757652a76da241e504fe"],["/WEEK93/index.html","5b97091a1a5f78d70be2c0a1f82417ed"],["/Webpack-Optimize/index.html","e0a1744da4be62233661d3d6a7368fd2"],["/about/index.html","e61abbe611d294e0b7effde015e5c5b3"],["/archives/2015/05/index.html","afda2b88594f6675c33b2485a8bffff0"],["/archives/2015/06/index.html","4ebc7303e81e5446b090e46828cb71bf"],["/archives/2015/06/page/2/index.html","066158f8933ce751f5e5fc9b2f1aa545"],["/archives/2015/08/index.html","240e8c3a1c548105490a9ecae8316ec6"],["/archives/2015/09/index.html","c1b9472a16d7acaa840bf37be3ce4def"],["/archives/2015/11/index.html","38a09d81d52b72daec69050e07d48332"],["/archives/2015/12/index.html","63bb465e8f71b518096c70418a9a8d8d"],["/archives/2015/index.html","4cbccb4bec9fd36b02887049c1f31eff"],["/archives/2015/page/2/index.html","b8e2f73965edc20e0ee6933cf5f9f2b0"],["/archives/2015/page/3/index.html","9e4a87357deb9aa9058a3cc92fb6271a"],["/archives/2015/page/4/index.html","fa0da0368e84295f5a33fe899434f682"],["/archives/2016/02/index.html","5f93447d40c4b1df18831f82a5166056"],["/archives/2016/03/index.html","520f779f1c9d359121bbc5f7f61a46d9"],["/archives/2016/04/index.html","e05c20e2ba9f2edd1fab8ab8ab0f0443"],["/archives/2016/05/index.html","b045ad69daaf8c0d1ada7d9e080b13ba"],["/archives/2016/06/index.html","36045b6327f8c42774aaebe78c1b9b81"],["/archives/2016/07/index.html","e7be0c94db38e10d7c9bead4f49ac5c8"],["/archives/2016/08/index.html","88980ee25ba3d11a047633765185c49e"],["/archives/2016/11/index.html","2748c5f0dd577b9a6e9080bf580acec6"],["/archives/2016/12/index.html","585fed1edb0bb6b7aa3657bf351c33a9"],["/archives/2016/index.html","5f9d08d48283e6afd44eb6596757f7ae"],["/archives/2016/page/2/index.html","c91f2f4f8ef68ccba5f8efe54e8c762f"],["/archives/2017/01/index.html","f113e2345ad199281a2734ec4e0aab44"],["/archives/2017/04/index.html","626143035fc789529e11aa3dbacf16ff"],["/archives/2017/05/index.html","c19c17ae62abcd9d2381cbc6e472ff8c"],["/archives/2017/06/index.html","38c879d6b71b0b443d1a429e5be5d875"],["/archives/2017/07/index.html","182e24db11e4dff0b72816c0be7a1b56"],["/archives/2017/09/index.html","37e4f45f3fe0b594479c0a25475b5d90"],["/archives/2017/10/index.html","280603b9b20b226695428a0ff2a67713"],["/archives/2017/11/index.html","ea9fbb113b57900c0080f195b830dab3"],["/archives/2017/12/index.html","60ed401365bbf6ee89163891f4842789"],["/archives/2017/index.html","5c7d7e50327ae8f5465028ee324e17d3"],["/archives/2017/page/2/index.html","9435acaf56638df18ae8b51b0f412087"],["/archives/2018/01/index.html","903adf9a9cb576b94c42a2b1060460f8"],["/archives/2018/02/index.html","6f7e73c8e0b7c21175b6e8f1be43ec38"],["/archives/2018/03/index.html","0485d0c5937a932a749579a2bf541c81"],["/archives/2018/04/index.html","07d6488c7fa5bcf707875b01aeaf445c"],["/archives/2018/05/index.html","77a3fdb396240789704e9bbc8295908d"],["/archives/2018/06/index.html","e8fea750ee0efb795bf5d3930ad9aca6"],["/archives/2018/11/index.html","2d2b9e7db0989ed5f601b027d815211a"],["/archives/2018/index.html","eb20e7c7e55f1a7d090f73e1a2a5e78b"],["/archives/2018/page/2/index.html","831713ff3bb7ae02d6ac7d319864877a"],["/archives/2018/page/3/index.html","fa1f7be5058fcfa276ad0c94de4db274"],["/archives/2019/01/index.html","4161f43153538c60ba629f6148ee3a32"],["/archives/2019/02/index.html","d049e74ad4875245b3da8e8c94b5bf47"],["/archives/2019/03/index.html","d7a9fe1a30d49c879c4b1cec8c233009"],["/archives/2019/index.html","5cf9c49de8f2ebf2abbc8a6ee2eed0e1"],["/archives/index.html","399d993e430852bebf6284681d6c736a"],["/archives/page/10/index.html","26bf67ba2b3bff5d211a826abc2dc085"],["/archives/page/11/index.html","3ed6b0211f3caf54aa26f546593d5a5a"],["/archives/page/2/index.html","e577bde16bf44efa2e5ed5fb6d3f3baf"],["/archives/page/3/index.html","897d12a6fee41d6c2e25a531624ca97b"],["/archives/page/4/index.html","4ebd4a0e239ddfcc61a9137e9e19bb8f"],["/archives/page/5/index.html","5f5cf923b232f9e6ad33e1275fd70efe"],["/archives/page/6/index.html","b51643604d91a5ab97870e104cb80373"],["/archives/page/7/index.html","f40500b4b42179bfe94071d51090f0dd"],["/archives/page/8/index.html","774e6f9be4314d60f22fea48db356347"],["/archives/page/9/index.html","8aa3b08b25e9d2707560dc8d88e4e4b8"],["/atom.xml","3aa5f89bb18f7d6008d43288caf13dc7"],["/categories/HEXO日常/index.html","eb3c4a5d928114ffa3b1d2ee35377b33"],["/categories/HEXO日常/日志/index.html","9dc739e587187a3a1f3f0e04df337aec"],["/categories/Linux/index.html","50a9e47e910c9b654a89f2921c6623d6"],["/categories/Linux/日志/index.html","0ff400c99daca0e6073c2ef08c3a1f3a"],["/categories/Web/index.html","c2899e57dde481419783488434a4d605"],["/categories/Web/page/2/index.html","7823e0a363803caf04827ec65fe5e76c"],["/categories/Web/page/3/index.html","2863f4fe8eb208bb6c2ceaede4986b87"],["/categories/Web/page/4/index.html","6af2db8db58a085441b70ceec7e72fd1"],["/categories/Web/page/5/index.html","f51b64149ecbb86a85cc8d111d36d89e"],["/categories/Web/page/6/index.html","4cb551eb51e8d97ebe3acb4f2a680103"],["/categories/Web/开发/Nodejs/index.html","cdc893be55f7c585b8fafaddd72d7003"],["/categories/Web/开发/TypeScript/index.html","4073e32f871455d10192f47a42f92edf"],["/categories/Web/开发/electron/index.html","af5bbdf5926cf1fc7851b2a185019614"],["/categories/Web/开发/index.html","4989abf8aff8c80a8fb5fc05124c9d90"],["/categories/Web/开发/page/2/index.html","f2130dad852e9f560863fb3ffabdabce"],["/categories/Web/开发/page/3/index.html","fc30d4a540c320683fc48aff4d270e7a"],["/categories/Web/开发/page/4/index.html","6c734666e9fae1c110bb942cc9b22230"],["/categories/Web/开发/page/5/index.html","82bb23427dbeacb2d629a81774cdfb9c"],["/categories/Web/日志/index.html","4e6a512a50576974bc230b83a9ccea72"],["/categories/Web/日志/翻译/index.html","6bb073a5c3dca092a064553c02c968ca"],["/categories/Web/日志/随笔/index.html","f3f835036d3a671f19757614768995a2"],["/categories/WordPress日常/index.html","28eb0cdb5205159843a4ab090b784d9b"],["/categories/WordPress日常/page/2/index.html","973f7c83b63ab1ceec8bf0f70f9941ea"],["/categories/WordPress日常/日志/index.html","7e61fb126f7103734119dcb2af4c9018"],["/categories/WordPress日常/日志/page/2/index.html","d89a877638575ff7d92ac8fe9ab26fd5"],["/categories/hexo/index.html","af22ac8a12402c731eec71954a327453"],["/categories/index.html","a6543893637ad2fb86e57ad8984e9556"],["/categories/其他/index.html","0948a1f5da77eda2ce73b42b81d56bc1"],["/categories/其他/极客/index.html","f48e07d67b0cd426a131012aa92a5fe5"],["/categories/周电/index.html","5cbe43b33d31402aa4457745aa3c7013"],["/categories/周电/日志/index.html","188318202456116c6c09111021117053"],["/categories/日志/index.html","e0849cd92ce1858e6ec2288074910ba2"],["/categories/日志/page/2/index.html","5e209a934d47c059352a09a3804700cb"],["/categories/日志/周电/index.html","99ae624aa8f6fda1a0942413912b44a5"],["/categories/日志/随笔/index.html","35f4470a5e87013662f1b37782cc139b"],["/categories/笔记/index.html","acdf6b7d2fa1973b050adedd171dc743"],["/centos-1/index.html","9b3a417c0d3dda6de92159bfa6d029c4"],["/centos7-1inwin8-1/index.html","db5a67c8a5781943c7d87f1b2989817b"],["/css/index.css","6dd28045e5084cb83a27b5b72a425fbc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/electron-vue-1/index.html","ceb5a769a28f74f013169d212f22b1ea"],["/electron-vue-2/index.html","7ee37130b3e79410f1ac330692203284"],["/electron-vue-3/index.html","b54e47204bdcc67d04e78a137491b3ad"],["/electron-vue-4/index.html","0dd7cada6dc79d6505351f6371449d52"],["/electron-vue-5/index.html","a176271757dbfd50ec0901fbe1142f41"],["/electron-vue-6/index.html","a1045b60c02987bf854328f9c50c3191"],["/electron-vue-7/index.html","e03e2a7f6140a1f83a723f9464a72369"],["/element-default-theme/index.html","2b8dc4b7c5afe26c4d0e77bd79aad980"],["/fe-be-router-render/index.html","9798dd799a8de89d04da80eef57c6cd8"],["/fethefirst-2/index.html","026fdb3dffbe12fb3290e191c177cc7e"],["/fethefirst/index.html","6fadd41dcfe468811bfab179dc9df5f1"],["/gear-system/index.html","0772596a8413cadc13c9806ef9dce05a"],["/git-ssh2https/index.html","26504de266e2d0821ff929228512ec2e"],["/hello-world-1/index.html","1b6cc53d8bd4f57c7e67c47a03848bbe"],["/hexo-travisci-https/index.html","3d5e0dde3e3d7991440f3c157f9e5b0b"],["/hexodaily-1/index.html","ecd64faa71f9670089019a1ef1becdcd"],["/iTerm2-lrzsz/index.html","6e85a602f69518805bdd046cd6cdd54a"],["/images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["/images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["/images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["/images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["/images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["/images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","d173728e4bc315556b967e728aa27618"],["/jquery-1/index.html","305a6c9d64d730fe3b5de38500bffee0"],["/js/copy.js","1cbaa5a8eed187110b79b523bebb597e"],["/js/fancybox.js","ee0be6a35548fe934306d9ff7288c837"],["/js/fireworks.js","f6da66de730cc068efd0d0b0a9ec64ae"],["/js/head.js","802d516f90b4e87c40edc27d3eb4ba79"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","ba21174ad3619148cda89475756b053b"],["/js/search/algolia.js","2dd585bf72ab790662bd614ccf026d9c"],["/js/search/local-search.js","4442b4a1efe05dd05ec7dcc6d132a182"],["/js/sidebar.js","e3308924d89861ff54f17f8de0f864f0"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","3e9daf655da50b0eda5324a81a2b9720"],["/js/utils.js","8250feefdfa7ac2e0bc56194a507580b"],["/koa2-wechatpay/index.html","868f5eef28db22edac1ef2ca974ee8be"],["/make-a-hexo-theme/index.html","29428e0aff0e6fa404119ef82b7309af"],["/make-a-picgo/index.html","06e1c2b515b0c7e2e6bbc80f5557b627"],["/manifest.json","1ae58b354c872862c45f7b8eaa5c935f"],["/markdown-wordpress/index.html","0230d3fe0d99bdbb04c1d6028ba6b213"],["/marklinejs/index.html","d440e84f34986a850e044b859d4b9779"],["/myfe/index.html","4b178b32b1e75f7d44982ca4086b9531"],["/nodejs-1/index.html","ee58b61a2d7d18dc47bd09e5b775b321"],["/nodejs-2/index.html","bad52606fcc1d64d8bec048fb85e9c16"],["/nodejs-3/index.html","e7fc01880b6ad64d0327321e9f36d888"],["/nokian1-root/index.html","537379e33d0b38ac2ca2989fdd0688c5"],["/note-for-picgo/index.html","46adb10b88c8bdcc821e486bf35fd371"],["/notebook2016/index.html","61a8fae97ef9d9aabdda5f035c253780"],["/observer-vs-pubsub-pattern/index.html","595e6581fb540c8ca2a5ba0de6b32679"],["/page/10/index.html","66ff640918111b668c0ff988b760752f"],["/page/11/index.html","f3bfbdf9e24e2955dea283ce9afea821"],["/page/2/index.html","6b8bb18f421e8b696fa506517467dd45"],["/page/3/index.html","c4ca08e19995c1bf4211cceee8854390"],["/page/4/index.html","8b35a5b0d6ea1a03295cdee6a8545e65"],["/page/5/index.html","b2ea39c5a6333245891c30d2d337f690"],["/page/6/index.html","e801f20f0f040537c088060e402a6d73"],["/page/7/index.html","ed57024528ea151fb4dce58a435619b6"],["/page/8/index.html","efac93bc21a59d85abe7cdfe80d47a47"],["/page/9/index.html","513d9f79bb4c107625f034439536c6ab"],["/picgo-v1.5-update/index.html","22ccc0a7fb2c1f6918d5697ecd433d24"],["/picgo-v2.0-update/index.html","3a387fbc60cb1733fe6dbc6e2b7540cd"],["/process-thread-coroutine/index.html","7b3596e049ef99c23d264ccf6f1b9360"],["/sitemap.xml","ffdbcfb09e83def96b2c4e1b866b5324"],["/slide-support/index.html","521ca68a7dffa7573d959616f68312bf"],["/slides/index.html","69935b1d2c07181c7deac0f45754f8e5"],["/something-about-settimeout/index.html","66f117efc43e9f7aa41c2ce30084694b"],["/somethingAndNothing/index.html","a965d3aea44fc70d19de64d3693d3ff2"],["/tags/Electron-vue/index.html","b81d74ab3a08ab7e17c2cccb92dbad03"],["/tags/Electron-vue/page/2/index.html","6435e643835cdbf28b181c7fb9764db5"],["/tags/Electron/index.html","2ff8d39857f2f03af7f6d27c136ce582"],["/tags/Electron/page/2/index.html","4773b96757d01919b14198f08f654947"],["/tags/JS/index.html","147a2d06440ecef7897f4586b222cfc6"],["/tags/Koa/index.html","42ea7e9b3887da308d4855f76a7ea768"],["/tags/Mac/index.html","7118ada78068be968324ce31eafb974f"],["/tags/Nodejs/index.html","e5bf977dcb882a56cfa3f6f69df52195"],["/tags/Nodejs/page/2/index.html","350654e6c4e2074c516749bd5a8b5937"],["/tags/NokiaN1/index.html","3a812de4fde890e6ff992539b0d50721"],["/tags/PWA/index.html","6e95ffcb50eddc8649e5b88fe680adbb"],["/tags/TypeScript/index.html","0521e47e5887d9fae1a9082331805de7"],["/tags/VSCode/index.html","d3221e25e2d9b17e5e162fa31611f5f7"],["/tags/Vue/index.html","3aaa3a2ed1c7f616a31917aec39f1cd2"],["/tags/Vue/page/2/index.html","8af818b7c3ea34e9d8d9ebaec9751d94"],["/tags/Webpack/index.html","168191f3a204e742d4631bcff1de0a3d"],["/tags/electron/index.html","6c8adefc0978e9198702cf48434c4d14"],["/tags/git/index.html","ea93dd49d546fab611d47b353953db8e"],["/tags/hexo/index.html","1b76b4edab6be9fc12fba08e30bb61cd"],["/tags/index.html","83526b89560389f0d8087e0de4d763f2"],["/tags/note/index.html","92ba6b270b5a019d961ffc375f2ba2bf"],["/tags/vue/index.html","42c931541a586321ca7a8333e239d383"],["/tags/web/index.html","776fc5efd695c93fb4c8ae932ad697cf"],["/tags/前端/index.html","640faff850ce5fcf9c4e8d526b1b4d94"],["/tags/前端/page/2/index.html","80d990b531d19b1a3394b199edc902a5"],["/tags/前端/page/3/index.html","f06f98121814d329d4eb79d4c9d05907"],["/tags/前端/page/4/index.html","dd9f30ac61fc2b23ea6a9094529c1077"],["/tags/前端/page/5/index.html","efc2e7ba14a8da8840d82d74f98458a2"],["/tags/后端/index.html","69657ad9f9ea522a1e09d010a667b68f"],["/tags/更新日志/index.html","fb9e331915c0a0270c5d9eeaca4a670b"],["/tags/电影/index.html","5c2977641c5a14c49e68e0f4012757eb"],["/tags/电影/page/2/index.html","1d4403fab95cb7e2a3a0dcea773dc252"],["/tags/笔记/index.html","2442f8768573760299df2cbc8af371cf"],["/tags/随笔/index.html","f60960d67ff290cdc58a30d8214405cc"],["/thinkself-1/index.html","13b739dae6de5c1d3e30765826c3fa6a"],["/vscode-extension-develop-1/index.html","6b6e40781d73a8cf2d10239aa28a1b93"],["/vue-components/index.html","d90bc64548b8640f5e7ae68b66c9ae55"],["/vuejs-1/index.html","2d1fa54e7a8d1cd63e079de80fc38535"],["/wdinst3/index.html","baf52934c72970730fec34aa21ed4bb0"],["/wordpress-theme-setup-record/index.html","b33e0ebcce8f02e25407c3d8fe679ab5"],["/wpdaily-0616/index.html","02093db5c0e7cde32cb74fbb37f67811"],["/wpdaily-0618/index.html","8358a17552fc9a52bbd5470516b8b8fc"],["/wpdaily0606-1/index.html","01d421a50484d2cab9ea7e1d5e4b9d8a"],["/wpdaily0611/index.html","28ad5b57d22d93a6d7a3d84284d1bd2c"],["/wpdaily0613/index.html","5978c18b75ba646fdfd93cc3a7c4231a"],["/wpdaily0620/index.html","6446d4c16c677d2f4878730d58020ba4"],["/wpdaily0808/index.html","e4344014cf73d955296a5d4cfab3753a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcss.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"molunerfinn.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"ws1.sinaimg.cn"});




