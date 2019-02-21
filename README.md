# THE Hack 2019 tech department recruit task
For the recruiment of THE Hack 2019 Tech Department

## Tech Dept. Organizers 的工作

1. Web Developing / 运维
    - 主页
    - 选手报名portal
    - 硬件追踪的平台
2. 赛前/赛中的技术向教程
    - Hackathon常用的Open API
    - 常用的框架/库

## 关于这次 Recruitment Task

### 测试的能力
- 基础Web开发
- 运用Git的代码协同、版本管理
- 运用docker-compose部署服务的能力

### 测试内容
写一个简单的 To-do List

> Tips:Tech Dept.中负责开发的可分为四个方向：前端/后端/运维/安全测试；  
  根据你选择的不同的方向，在阅读代码的时候我们会有不同的侧重点

**最低功能需求**：
- 用户注册/登录/更新个人信息
- 添加/编辑/删除 to-do item
- 标记 to-do item 为已完成

**可选（加分项）**：
- 为 to-do item 添加 deadline
- 对 to-do item 进行顺序显示（按照deadline，按照添加顺序，正序，倒序）

要求：
- 架构不限（前后端是否分离都OK）  
- 技术栈不限（用什么框架都可以，从头手写也是你的自由）  
- 完成时间不限
- 唯一的强制要求是**使用docker-compose部署**  
  因为我们的部署工作将通过docker-compose进行，可以极大地方便运维工作和production版本的上线
- 在代码目录下包含一个README.md文档，简述：
    - 你会的技术栈
    - 你最熟悉的技术栈
    - 你想要在Tech Dept.中担任的方向（前端/后端/运维/安全测试）

> Tips: 方向可以多选  
  选择前端方向且没有选择后端方向的可以**只写出静态页面**

### 我们关注的东西
- 代码能不能跑起来（废话
- 代码可读性
    - 注释
    - 代码逻辑
- 代码冗余度 / 代码复用程度
- 文档
    - 对架构的大致描述
    - 对数据库表格结构的描述
    - 对部署的tips（需要的ENVIRONMENT变量，用户名密码的存储位置）
    - ……

### 代码提交
 1. fork这个repository
 2. 新建一个以你的GitHub用户名为名字的目录
 3. 你的代码将放在这个目录下
 4. 完成代码后，提交Pull Request
