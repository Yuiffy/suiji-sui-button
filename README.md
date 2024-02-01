# 岁己SUi Button
[![Last Commit](https://img.shields.io/github/last-commit/Yuiffy/suiji-sui-button)]()
[![Website](https://img.shields.io/website?url=https://button.suiji.site)](https://button.suiji.site)

[点击这里访问岁己按钮：button.suiji.site](https://button.suiji.site)

## Related Links:

* [岁己SUI's Bilibili homepage](https://space.bilibili.com/1954091502)

* [岁己SUI's Bilibili live channel](https://live.bilibili.com/25788785)

* [岁己SUI's Weibo](https://weibo.com/u/7785772638)

## 支持

请fork本项目，完成修改后提一个Pull Request到这个项目，我就可以一键把你的修改加入啦！

### 增加语音

1. 先去截一个声音文件，有本地录播的话用剪映可以截取导出，没有的话可以下载录播，或者直接开个OBS之类的直播录像，开个网页把视频声音录下来；
2. 把声音文件扔到项目的[public/voices](public/voices)里
3. 修改[src/voices.json](src/voices.json) ，照着里面的格式，配一下你新增的语音的信息。要注意path要写对文件名、后缀名。
4. 可以本地运行来测试网页上播放是否正常，具体如何运行看下面的`Deploying a local development environment`。

## Contributing

Please fork this project for modification, and after completing the modification, initiate a Pull Request in this project.

### Add or modify voice

**Description**: All voice meta information is stored in [src/voices.json](src/voices.json). To add or modify these voices, you need to modify this file accordingly.

Voice is always in mp3 format and stored in [public/voices](public/voices). The corresponding URL is `voices/`.

For new voice, please use software such as MP3GainGUI for volume standardization. Currently the volume standardized value is 80.

Please note that for this project, we specifically categorize the voices by this pattern: `CATEGORY_VOICENAME.mp3`. Example for a proper filename is `EN_ICookTheSubaru.mp3` where `EN` represents the `Nanolish` Category while `ICookTheSubaru` represents the voice name. It doesn't have to fully transcribe the line as long as it describes it for easy locating. Please check [voices.json](src/voices.json) for more information.

Because this site uses a strong cache strategy, except for `index.html`, files with the same filename, even if modified, will **NEVER** be refreshed by the client. Therefore, the filename of the newly voice, whatever it is new or modified, **MUST** be different from any previous filename.

If you are modifying voice, delete the original file after modification.

### Participate in translation

Please help us translate to the available languages! (EN/JP/TW/MY)

The language files for the main program are in three .js files named the language name in [src/locales](src/locales).

The language files for voices are in [src/voices.json](src/voices.json).

The country flags are located in [src/App.vue](src/App.vue) just in case a new language is implemented.

The corresponding modification can be recognized by the program as a valid translation.

## Deploying a local development environment

This site is developed using Vue + jQuery + Bootstrap 3.

To deploy a local development environment, first install the latest version of Node. Then follow these steps:

1. Clone the code.

2. Go to the code directory and run `npm install`.

3. Run `npm run serve`. During the code modification process, this local development server can immediately reflect the results of the modification.

4. To compile the files for deployment, run `npm run build`, which will generate the `dist` directory. This site is completely static, you can directly deploy the entire `dist` directory.

> To contribute your code to this project, you don't have to compile locally. After passing the test in the development server and pushing it to Github, you can directly require a Pull Request to this project.

## LICENSE
[![LICENSE](https://img.shields.io/github/license/monoai/luna-button)](LICENSE)

Program: MIT

This project is a work of fans and is not related to the official VirtuaReal.

## Special Thanks

This project is modified based on monoAI's [Luna button](https://github.com/monoai/luna-button).

This project is modified based on zyzsdy's [Aqua button](https://github.com/zyzsdy/aqua-button).
