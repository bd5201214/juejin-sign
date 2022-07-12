# juejin-auto-mining
本项目使用`Github Action`来部署自动签到程序和自动挖矿，无需自己购买服务器，安全可靠且方便。

## 使用方式

###  1.fork本项目

![image-20220111130947435](./static/img/1.png)

### 2.依次点击【Setting】、【Secrets】、【New repository secret】

![image-20220111131101303](./static/img/2.png)

### 3.把 Name 设置为`COOKIE`这个字符串，Value 设置为`自己掘金的Cookie`

![](./static/img/3.png)

### 4. 设置TOKEN

需要到海底掘金的页面查看

![image-20220111131432067](./static/img/4.png)

### 5.允许 Github Actions 工作流。

![image-20220111131659411](./static/img/5.png)

### 6.消息通知

#### server酱

依次点击【Setting】、【Secrets】、【New repository secret】，添加SERVERID的名称和值即可

![image-20220111131800050](./static/img/6.png)
