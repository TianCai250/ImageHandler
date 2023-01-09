# ImageHandler

> 一个前端图像处理工具类，支持将彩色图像黑白化，支持下载转换后的图像，还能用自定义的 dom 元素绘制图片。

## 使用方法

```js
const el = document.createElement('div');
el.setAttribute('class', 'circle');

// 调用方法
const imageHandler = new ImageHandler('./dragon.png', {
    // target（可选）:转换后的图片显示容器，未传则不显示图片
    target: document.querySelector('#target'),
    width: document.querySelector('#target').clientWidth,
    height: document.querySelector('#target').clientHeight,
});

// 黑白转化
imageHandler.blackWhite().then(img => {
    // 下载黑白转换后的图片
    imageHandler.downloadImg('黑白');
    // 利用元素绘制图片
    imageHandler.paintByElement(img, document.querySelector('#container'), {
        // 必填，填充元素
        element: el,
        // 以下皆为可选
        // 绘制的宽高
        width: document.querySelector('#container').clientWidth,
        height: document.querySelector('#container').clientHeight,
        // 元素之间的间距
        gap: 6,
        // 元素放大倍数
        scale: 1,
        // 元素宽
        elSize: 5,
    });
});
```
