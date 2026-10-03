# Yuanchang Zhou — Academic Homepage

英文个人学术主页模板，可直接部署到 GitHub Pages。页面包括 About Me、动态、论文、获奖信息和学术服务，研究方向与目标集中在 About Me，联系方式集中在顶部，适配电脑和手机。

此版本已放入六篇论文，均附原始配图。Flux 标注 NeurIPS 2026，提供会议页面，作者姓名以普通文字显示；MatRIS 提供官方代码链接。获奖信息按你提供的本科、研究生两个阶段填写，个人照片与微信二维码均已接入。身份和 About Me 按你确认的博士在读信息填写。

## 本地查看

直接双击 `index.html` 即可查看。不需要安装工具，也不需要构建。

## 修改资料

所有资料都在 `data.js` 中。用文本编辑器修改后保存，再刷新网页。

About Me 的段落位于 `profile.bio`，每个字符串对应一个段落。使用 `**文字**` 可以加粗重点词语。

| 修改内容 | 修改位置 |
| --- | --- |
| 姓名、身份、单位、简介 | `profile` |
| 动态 | `news` |
| 论文 | `publications` |
| 获奖信息 | `awards` |
| 审稿等学术服务 | `services` |

Services 列出的 NeurIPS 2026 和 ICLR 2027 审稿服务按你提供的信息填写。后续可以在 `services` 中继续添加 `year`、`venue`、`role`。

电子邮箱为 `zhouyuanchang23s@ict.ac.cn`。如需修改，请编辑 `profile.email`。身份以名字下方的普通文字展示。

### 个人照片与微信

1. 个人照片已配置为 `assets/profile.png`，可替换该文件更新照片。
2. 将 `profile.wechatId` 填成实际微信号，或把真实微信二维码放到 `assets/wechat.png`，再把 `profile.wechatQr` 改成 `"assets/wechat.png"`。
3. Google Scholar 已接入你的主页；填写 `profile.linkedin` 后，LinkedIn 占位会变成真实链接。
4. 可选地填写 `profile.cv`。例如，将简历放到 `assets/cv.pdf`，再填写 `cv: "assets/cv.pdf"`。

留空的 Scholar 和 LinkedIn 会显示灰色占位，未填入虚构链接。留空的 CV、论文 Code 和 Project 链接会自动隐藏。微信未填写时显示明确的占位提示，不生成假的二维码。

### 添加论文

将论文图片放到 `assets/publications/`。在 `publications: [` 后面复制并添加一条记录，记录之间用逗号分隔。较新的论文放在前面。

下面是字段模板，所有示例内容都需要替换成真实资料：

```javascript
{
  title: "Your paper title",
  authors: ["Yuanchang Zhou", "Coauthor Name"],
  venue: "Conference or journal name",
  year: "2026",
  preprint: false,
  abstract: "Original English abstract.",
  abstractSource: "Source URL",
  image: "assets/publications/your-paper.png",
  imageAlt: "A description of what the figure shows.",
  imageCaption: "Short figure caption",
  conferenceUrl: "",
  arxiv: "https://arxiv.org/abs/your-paper-id",
  pdf: "https://arxiv.org/pdf/your-paper-id",
  code: "",
  project: ""
},
```

预印本请设置 `venue: "arXiv preprint"` 和 `preprint: true`。没有的链接填 `""`。姓名与 `profile.name` 完全一致时，作者列表会自动加粗该姓名。作者最多显示一行，空间不足时省略中间作者，保留本人和最后一位作者；悬停可查看完整作者列表。预印本名称与年份显示在同一个标签内。论文配图使用完整缩略图，点击可查看大图；没有图片时自动显示占位。

可填写 `conferenceUrl` 来提供会议论文入口。可选的 `authorLinks` 是以作者姓名为键、个人资料链接为值的对象；没有填写的作者仍显示普通文字。Flux 作者姓名不设置跳转链接，当前使用会议页面入口，尚未填写公开 PDF 或代码链接。

### 添加获奖信息

在 `awards` 中添加或修改实际获奖记录。相同的 `stage` 会合并到同一个阶段，阶段按首次出现的顺序展示，当前研究生阶段在前、本科阶段在后。各阶段的奖项自动按年份从新到旧排列；没有提供年份的综合荣誉可将 `year` 留空，会放在阶段末尾，每条记录单独显示一行。以下字段仅为填写格式：

```javascript
awards: [
  {
    stage: "Graduate Studies",
    year: "Year",
    title: "Your actual award name",
    organization: "Awarding organization",
    description: "Optional details",
    url: ""
  }
]
```

没有获奖记录时保留 `[]`，页面显示 “Awards and honors will be added here.”。

## 部署到 GitHub Pages

你的账号是 `galaxy-zyc`，个人网站仓库名请使用 `galaxy-zyc.github.io`，地址将为 `https://galaxy-zyc.github.io/`。

1. 在 GitHub 创建公开仓库 `galaxy-zyc.github.io`。如果仓库已经存在，先确认现有文件后再上传。
2. 解压模板包，将**模板文件夹中的内容**上传到仓库根目录：`index.html`、`styles.css`、`data.js`、`site.js`、`.nojekyll` 和 `assets`。保持 `assets` 中的文件夹结构。不要把整个 `yuanchang-homepage` 文件夹嵌套在仓库里。
3. 保存到 `main` 分支。
4. 进入仓库 **Settings → Pages**：Source 选择 **Deploy from a branch**，Branch 选择 **main**，文件夹选择 **/ (root)**，点击 **Save**。
5. 等待发布完成，在 Pages 页面点击 **Visit site**。官方说明更新可能需要最多 10 分钟。

官方文档：[快速开始](https://docs.github.com/en/pages/quickstart)、[配置发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

本次仅生成模板和本地预览，没有向 GitHub 上传或发布。

## 核对来源

布局参考 [Ruirui Lin 的学术主页](https://lrr-rachel.github.io/)。字体采用参考主页同款 Open Sans（400、700），通过 Google Fonts 加载。页面样式独立编写，没有复制参考作者的个人资料或照片。

| 论文 | 文献信息与发表状态 | 配图 |
| --- | --- | --- |
| Exploring Landscapes for Better Minima along Valleys | [NeurIPS 2025 官方论文集](https://papers.nips.cc/paper_files/paper/2025/hash/fa84d72c79e28d4bf58f6c7ac92cd51c-Abstract-Conference.html)、[OpenReview](https://openreview.net/forum?id=XxRKqFsvoK)；Yuanchang Zhou 为第三作者 | [论文 Fig. 1 左图](https://arxiv.org/html/2510.27153v1/12.png) |
| DPA3 | [npj Computational Materials 2026](https://www.nature.com/articles/s41524-026-02146-2)，本人为第五作者；[代码](https://github.com/deepmodeling/deepmd-kit) | 期刊论文 Fig. 1 |
| Flux | [NeurIPS 2026 官方名单](https://neurips.cc/Downloads/2026)、[会议页面](https://neurips.cc/virtual/2026/poster/151170)；作者顺序按提供的信息填写 | 用户提供的 `Flux_nips.pdf`，Fig. 2 |
| FastCHGNet | [arXiv 2412.20796](https://arxiv.org/abs/2412.20796)，页面注明 IPDPS 2025 | [论文 Fig. 1](https://arxiv.org/html/2412.20796v2/workflow.png) |
| MatRIS | [arXiv 2603.02002](https://arxiv.org/abs/2603.02002)、[ICLR 2026 官方论文集](https://proceedings.iclr.cc/paper_files/paper/2026/hash/8cd1080c50e15e72414666c2f7637506-Abstract-Conference.html)、[官方代码](https://github.com/HPC-AI-Team/MatRIS) | [论文 Fig. 1](https://arxiv.org/html/2603.02002v3/F1_time.png) |
| Breaking the Training Barrier… | [arXiv 2604.15821](https://arxiv.org/abs/2604.15821)，按提供的信息标为预印本 | [论文 Fig. 5](https://arxiv.org/html/2604.15821v1/benchmark_result.png) |

论文配图属于对应论文作者，仅作为上述论文的展示缩略图。其他未提供的个人资料不作推测。

## 明暗模式与访客地图

右上角的太阳/月亮按钮切换明暗模式，首次跟随系统，手动选择保存在浏览器。`theme.js` 必须一并部署。

访客地图参考 MapMyVisitors。已接入主页所有者提供的专属 MapMyVisitors 嵌入代码。在 https://mapmyvisitors.com/ 注册并为正式网站获取地图嵌入代码，将其中 script 的完整 src URL 填入 `data.js` 的 `visitorMapUrl`。请使用自己的代码，不能复用参考网站的统计 ID。配置信息可包含颜色和宽度参数，建议宽度 325 或自适应。地图接通后由第三方服务记录和展示访问统计。

访客地图位于 Services 下方，无独立标题，采用白底、浅灰地图和蓝色访问点。

## 论文展示规则

所有论文均显示配图，采用左图右文布局，不显示图下注释。论文不显示短简介，ABS 按钮展开/收起 `abstract` 原始英文摘要；资源栏仅显示 ABS、PDF、Code，缺少链接时不显示对应按钮。标题仍链接论文页面。Flux 摘要取自提供的 PDF，其余摘要取自 arXiv 原始摘要（只去除排版标记），`abstractSource` 记录来源。

桌面端论文图片框自适应右侧标题、作者与按钮的总高度；展开摘要独占下一行。手机端保留上下排列。
