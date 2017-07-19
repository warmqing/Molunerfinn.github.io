title: 网站更新日志-1
tags:
  - 更新日志
id: 174
categories:
  - WordPress日常
  - 日志
date: 2015-06-06 14:20:44
---

##更改主题
&emsp;&emsp;之前的那个主题 [《BioPaul》](http://bropaul.com/biopaul "http://bropaul.com/biopaul") ,确实觉得挺好的。不过全站AJAX给我带来了不少困扰。全局播放背景音乐是很不错但是在体验上却有所欠缺。音乐播放器的一些细节还有待改进，不过遗憾的是作者已经停止了维护。并且网站的加载速度始终很慢。因为是动态内容所以会在用户体验上从速度方面影响。为了不影响网站的体验遂而更换了原先的主题。并且现有的主题能够相当好的支持Markdown语法。现在的主题虽然没有全站AJAX，但是这个主题可以拿来二次开发，最近我便会着手。
</br>
##更换插件
&emsp;&emsp;插件换了一批又一批,现在总算是调整到了速度和实用性并存的阶段。首先网站主题更换了以后轻量了许多，反应速度也快了不少。然后最近也成功从七牛云那边认证了，接入了它的CDN加速。并且WP这边也删去了不必要的插件若干，并加入了WP-SUPER-CACHE这个插件，让网站的响应速度得到进一步的提高。现在的速度体验相比上个月刚建站的时候是有天壤之别的。相当不错。**不过有一点要注意，更新了页面的小工具等插件后，必须在WP-SUPER-CACHE里将原先的缓存给删去，然后再加载缓存才能在页面上看到效果。否则将会是自己能看到更新后的效果而游客看不到。**
</br>
##网站静态化
&emsp;&emsp;Wordpress网站伪静态，要做到完全静态化虽然理论上可行，但是用了cos-html-cache这个插件后发现对首页会出现一点问题。所以暂时抛弃。采用命名伪静态的方法（在文章页后+.HTML）以及用插件删去catagory目录在网页中的显示。发现WP NO CATAGORY插件能够和WP-SUPER-CACHE兼容的时候也是相当开心。静态化后访问速度再次得到提高。
</br>
##近期目标
&emsp;&emsp;因为想要做一个自己的主题，发现没有良好的PHP语言基础是不行的。最近正在学习PHP，并且搜罗了一些我觉得可以拿来参考的主题。到时候可以整合成自己想要的东西。暑假期间争取能把自己的这个主题的第一个版本做出来。