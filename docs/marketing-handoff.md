# BBQ Charcoal Export 网站营销交底文件

更新日期：2026-04-21  
网站：https://www.bbqcharcoalexport.com  
GitHub 仓库：harrison-chao/bbqcharcoal-website  
当前定位：面向海外进口商、经销商、餐饮集团、零售自有品牌的马来西亚 BBQ 木炭出口询盘站

## 1. 当前网站状态

网站已经从泛展示型页面调整为 B2B 出口询盘型网站，核心信任锚点是马来西亚工厂、第三方检测报告、可量化产能、质控流程、包装和出口支持。

已经上线的关键页面：

- 首页：`/`
- 产品页：`/products`
- 工厂检测页：`/factory-inspection`
- 关于页：`/about`
- 联系/询盘页：`/contact`
- 表单成功页：`/thank-you`
- 博客页：`/blog`

技术和追踪状态：

- 网站部署在 Vercel，正式域名为 `https://www.bbqcharcoalexport.com`
- 联系表单通过 Resend 发邮件到 `expo@arterki.com`
- GA4 Measurement ID 已接入：`G-L2JZ27GJGD`
- 表单成功后跳转 `/thank-you?submitted=1`
- `/thank-you` 设置为 `noindex,nofollow`，不进入 sitemap，用于有效询盘转化追踪
- GA4 事件已包含：
  - `generate_lead`：表单成功、邮件点击、WhatsApp 点击
  - `select_content`：关键 CTA 点击
  - `/thank-you` 页面访问：用于辅助核对有效询盘

营销团队需要在 GA4 后台把 `generate_lead` 标记为 Key event，并建立基于 `/thank-you` 的转化漏斗视图。

## 2. 网站核心卖点

不要把网站讲成“普通木炭供应商”。当前最强叙事是：

> A Malaysia BBQ briquette charcoal factory with documented third-party inspection evidence, 800 MT monthly capacity, OEM packaging, and export support for importers, distributors, restaurants, and private-label buyers.

推荐中文理解：

> 这是一个以第三方检测报告和真实工厂产能为核心信任资产的马来西亚 BBQ 炭出口询盘站，重点承接海外批发、进口商、餐饮集团和自有品牌订单。

核心数据必须反复出现在广告页、博客、FAQ、邮件跟进和销售话术中：

- Control Union (Malaysia) 工厂检测，日期：2025-10-16
- 检测 job：CUMAL/1880/25(10)
- 最大月产能：800 MT/month briquette charcoal
- 12 台 briquette machines
- 72 个 carbonization kilns
- 26,000 sq ft storage area
- 82,146 sq ft factory building area
- 80 MT weighbridge
- PEFC CoC certificate：CSIM-PEFC-CoC-0020，有效至 2027-07-18
- SGS laboratory testing several times per year
- 日常记录：raw material weighing、daily production、outgoing goods、quality checks、moisture testing、weight/density checks

## 3. 目标客户与广告分层

### A. 进口商 / 批发商

搜索意图：

- Malaysia charcoal supplier
- BBQ charcoal manufacturer Malaysia
- bulk BBQ charcoal import
- charcoal briquettes exporter
- private label BBQ charcoal supplier

落地页重点：

- 800 MT/month documented capacity
- FOB/CIF export support
- OEM packaging
- repeat container supply
- factory inspection evidence
- sample and quotation process

CTA：

- Request Export Quote
- Request Factory Documents
- Start Supplier Evaluation

### B. 餐饮集团 / 连锁餐厅

搜索意图：

- restaurant BBQ charcoal supplier
- bulk BBQ briquettes for restaurants
- commercial grilling charcoal
- long burning BBQ briquettes

落地页重点：

- consistent shape and heat
- long burn time
- low ash
- stable repeat supply
- trial order / container scale-up

CTA：

- Get Restaurant Supply Quote
- Request Product Specs

### C. 自有品牌 / 零售包装商

搜索意图：

- private label BBQ charcoal
- OEM charcoal packaging
- charcoal supplier for retail brand

落地页重点：

- OEM packing formats
- buyer label support
- cartons, bags, retail-ready packing
- product specification matching
- export documentation

CTA：

- Discuss OEM Packaging
- Request Private Label Quote

### D. 中东市场

搜索意图：

- BBQ charcoal supplier UAE
- charcoal briquettes Saudi Arabia
- charcoal import Dubai
- halal charcoal supplier

落地页重点：

- Middle East shipping support
- documentation
- packing options
- seasonal demand
- port routing

CTA：

- Get Middle East Export Quote

## 4. 广告 Landing Page 制作建议

不要把广告流量都导向首页。广告需要专门 landing page，每个页面只服务一个意图。

第一批建议制作 5 个 landing pages：

1. `/lp/bulk-bbq-briquettes`
2. `/lp/malaysia-charcoal-supplier`
3. `/lp/private-label-bbq-charcoal`
4. `/lp/restaurant-bbq-charcoal`
5. `/lp/middle-east-charcoal-export`

每个 landing page 的结构建议：

1. Above the fold
   - H1 直接命中搜索意图
   - 一句话说明供应对象、产品、国家、证据
   - 主要 CTA：Request Quote
   - 次要 CTA：View Factory Inspection

2. Trust proof bar
   - 800 MT/month
   - 12 briquette machines
   - 72 kilns
   - Control Union inspected
   - PEFC CoC

3. Buyer problem section
   - 供货不稳定
   - 批次质量不一致
   - 包装不匹配
   - 缺少文件
   - 供应商证据不足

4. Product/spec section
   - 重点讲 BBQ briquettes
   - lump charcoal / binchotan 作为 sourcing option，不要过度承诺为同一检测产线

5. Factory evidence section
   - 直接引用 `/factory-inspection` 的事实
   - 配工厂照片、生产线、窑炉、质检图片

6. Quote form section
   - company
   - email
   - country
   - product interest
   - quantity
   - destination port
   - packaging requirement
   - message

7. FAQ section
   - Can you support OEM packaging?
   - What is the MOQ?
   - Which product is factory-backed?
   - What documents are available?
   - How fast can samples be arranged?

8. Final CTA
   - Request Export Quote
   - WhatsApp / Email

Landing page 文案原则：

- H1 必须具体，不写空泛品牌口号
- 每屏都应回答买家的采购顾虑
- 首屏必须出现“Malaysia / BBQ briquettes / bulk / inspected factory / quote”中的 3-4 个关键词
- CTA 必须短、明确、可衡量
- 尽量避免 “best / top / world-class” 这类无证据形容词
- 多用数字、流程、文件、照片、检测报告事实

## 5. 表单与转化追踪要求

当前有效询盘判断：

- 只有 `/api/contact` 成功发邮件后才跳转 `/thank-you?submitted=1`
- `/thank-you` 触发 `generate_lead`
- WhatsApp 和 email 点击也触发 `generate_lead`，但应作为弱转化

GA4 后台建议配置：

- Key event 1：`generate_lead`
- Funnel：
  - landing page view
  - contact form view
  - form submit success
  - thank-you page view
- Segment：
  - country
  - product_interest
  - quantity
  - page path
  - traffic source / campaign

广告 UTM 命名建议：

```text
utm_source=google
utm_medium=cpc
utm_campaign=bbq_briquettes_importers
utm_content=capacity_inspection
utm_term=bulk_bbq_briquettes_supplier
```

不同 landing page 必须使用不同 campaign 或 content，便于判断页面质量。

## 6. SEO / GEO 内容战略

这里的 GEO 指生成式搜索优化，即让 Google AI Overviews、ChatGPT、Perplexity、Gemini、Claude 等更容易引用网站中的明确答案、事实和结构化内容。

核心策略：

- 以“可验证事实”建立主题权威
- 用 FAQ、定义、对比、清单、流程、采购指南承接长尾搜索
- 每篇文章都要有明确的 buyer intent
- 不写泛泛行业软文
- 不制造无法证明的数据
- 把检测报告事实拆成多个可引用 answer blocks

优先内容集群：

1. Supplier Evaluation
   - How to evaluate a BBQ charcoal supplier
   - Factory inspection checklist for charcoal importers
   - What documents should charcoal buyers request?

2. Product Specification
   - BBQ briquettes specifications explained
   - Calorific value, ash, moisture, volatile matter explained
   - Briquettes vs lump charcoal for restaurants

3. Country / Market Pages
   - BBQ charcoal supplier for UAE importers
   - BBQ charcoal supplier for Saudi Arabia
   - Importing BBQ charcoal to Australia
   - Bulk BBQ charcoal for US restaurant distributors

4. Packaging / OEM
   - Private label BBQ charcoal packaging guide
   - 5kg / 10kg / 20kg charcoal packaging options
   - How to prepare retail-ready BBQ charcoal packaging

5. Factory / Trust
   - What a charcoal factory inspection report should include
   - Why documented production capacity matters
   - How moisture testing affects charcoal quality

## 7. 高标准博客文章要求

文章目标不是“更新博客”，而是拿到搜索曝光、建立信任、辅助销售转化。

每篇文章必须满足以下标准：

### 选题标准

文章必须对应一个明确搜索意图：

- 信息型：What is / How to / Guide / Checklist
- 商业调研型：Best supplier / Compare / Evaluation / Specifications
- 采购型：Bulk supplier / Manufacturer / Exporter / Private label
- 市场型：UAE / Saudi / Australia / USA 等区域进口需求

禁止选题：

- 过宽泛的行业新闻
- 没有采购意图的科普
- 无法连接到产品或询盘的内容
- 只为了凑字数的趋势文章

### 文章结构

推荐结构：

1. TL;DR answer
   - 80-120 words
   - 直接回答搜索问题
   - 包含目标关键词和采购结论

2. Buyer context
   - 谁需要读这篇文章
   - 采购时为什么会遇到这个问题

3. Main answer sections
   - 每个 H2 解决一个子问题
   - 每个 H2 下要有明确结论
   - 段落短，便于 AI 摘要引用

4. Evidence / data section
   - 引用工厂检测报告事实
   - 必须写清楚“报告支持的是 briquette charcoal production”
   - 不把 lump/binchotan 说成同一检测产线

5. Comparison / checklist / table
   - 至少包含一个表格或清单
   - 帮助买家做决策

6. FAQ
   - 5-8 个问题
   - 每个答案 40-80 words
   - 适合 FAQ schema

7. CTA
   - 根据文章意图引导到 `/contact` 或对应 landing page
   - 可引导到 `/factory-inspection`

### 质量硬指标

每篇文章建议：

- 1,500-2,500 words
- 至少 6 个 H2
- 至少 1 个对比表格
- 至少 1 个 buyer checklist
- 至少 5 个 FAQ
- 至少 3 个内部链接
- 至少 1 个指向 `/factory-inspection`
- 至少 1 个指向 `/products`
- 至少 1 个指向 `/contact` 或对应 landing page
- 标题不超过 60 characters
- meta description 不超过 155 characters
- URL slug 简短、英文小写、连字符

### 事实边界

必须严格遵守：

- 可明确说：检测报告记录了 800 MT/month briquette charcoal capacity
- 可明确说：报告记录了 12 briquette machines 和 72 kilns
- 可明确说：报告记录了 moisture testing、SGS testing several times per year、daily records
- 不要说：所有产品都由同一检测产线生产
- 不要说：lump charcoal 和 binchotan 的产能同样是 800 MT/month
- 不要说：ISO/FDA/HALAL 等没有当前证据支撑的认证，除非后续提供证书
- 价格只能作为 indicative / subject to confirmation，不要写死

## 8. 内容生产工作流 Loop

建议每周循环一次，每月做一次复盘。

### Step 1: Keyword intake

输入来源：

- Google Search Console 查询词
- Google Ads 搜索词报告
- GA4 高转化页面
- 客户询盘邮件中的真实问题
- 销售团队 WhatsApp 高频问题
- 竞争对手页面标题

输出：

- 10-20 个候选关键词
- 标注 intent、国家、产品、买家阶段

### Step 2: Prioritization

每个选题打分：

- 搜索意图强度：1-5
- 采购相关性：1-5
- 是否可用工厂报告支撑：1-5
- 是否可内链到 landing page：1-5
- 内容差异化空间：1-5

优先写总分最高的 3-5 篇。

### Step 3: Brief creation

每篇文章开写前必须有 brief：

- Primary keyword
- Secondary keywords
- Search intent
- Target buyer
- Core answer
- Required evidence
- Required internal links
- FAQ list
- CTA
- Schema type

### Step 4: Draft

作者按 brief 写初稿，不允许边写边改方向。

写作要求：

- 先回答问题，再展开解释
- 不写空泛营销话
- 每个段落只表达一个意思
- 关键数据必须可追溯
- 采购建议要具体

### Step 5: Expert review

审核重点：

- 是否有过度承诺
- 是否混淆产品线
- 是否和检测报告事实一致
- 是否能帮助买家做采购决策
- 是否有明确 CTA

### Step 6: SEO / GEO review

检查：

- H1 是否唯一
- H2 是否覆盖主要子问题
- 是否包含 TL;DR
- 是否包含 FAQ
- 是否有 schema
- 是否有内部链接
- 是否适合 AI 摘要引用
- 是否有明确发布日期和更新日期

### Step 7: Publish

发布后动作：

- 提交 sitemap
- 用 Google Search Console 请求索引
- 检查页面移动端显示
- 检查结构化数据
- 检查 GA 是否记录 page_view

### Step 8: Monitor

发布后 7 / 14 / 30 天检查：

- impressions
- clicks
- average position
- landing page engagement
- CTA click
- form view
- generate_lead
- thank-you page view

### Step 9: Refresh

根据数据优化：

- impressions 高、CTR 低：改 title/meta
- clicks 高、lead 低：强化 CTA 和信任证据
- 排名 8-20：补 FAQ、表格、内链、图
- 排名无增长：重新判断 intent 是否错配

## 9. 第一批博客选题建议

优先级 P0：

1. How to Evaluate a BBQ Charcoal Supplier: Factory Inspection Checklist
2. Malaysia BBQ Briquette Charcoal Supplier: What Importers Should Verify
3. BBQ Briquettes Specifications Explained for Bulk Buyers
4. Private Label BBQ Charcoal Packaging Guide for Importers
5. BBQ Briquettes vs Lump Charcoal for Restaurants and Distributors

优先级 P1：

6. What Does 800 MT Monthly Charcoal Capacity Mean for Importers?
7. Charcoal Moisture Content: Why It Matters for BBQ Briquettes
8. How to Source BBQ Charcoal from Malaysia
9. BBQ Charcoal Supplier for UAE Importers: Buyer Guide
10. What Documents Should Charcoal Importers Request from a Supplier?

优先级 P2：

11. FOB vs CIF for BBQ Charcoal Imports
12. How to Compare BBQ Charcoal Samples Before Container Orders
13. BBQ Charcoal Storage and Packaging Requirements
14. Low Ash BBQ Briquettes: What Buyers Should Know
15. How SGS Testing Supports Charcoal Quality Control

## 10. Landing Page 与博客的内链规则

每个 landing page 至少链接：

- `/factory-inspection`
- `/products`
- `/contact`
- 2-3 篇强相关博客

每篇博客至少链接：

- 1 个 landing page
- `/factory-inspection`
- `/products`
- `/contact`
- 1-2 篇相关博客

推荐锚文本：

- factory inspection evidence
- documented 800 MT monthly capacity
- bulk BBQ briquette charcoal
- Malaysia BBQ charcoal supplier
- private label BBQ charcoal packaging
- request an export quote

## 11. 销售跟进话术方向

表单字段已经能收集：

- company
- email
- country
- product
- quantity
- message

收到询盘后的第一封回复建议包含：

- 感谢询盘
- 复述客户国家、产品、数量
- 询问 destination port、packaging size、target spec、timeline
- 提供可发送的支持材料清单：
  - product specification
  - factory inspection summary
  - packaging options
  - sample process
  - indicative quote basis

销售不要一上来只报价。先确认规格、包装和目的港，否则很容易产生无效报价。

## 12. 后续技术待办

建议后续由技术团队逐步实现：

- 新增 `/lp/...` landing page 模板
- 表单增加 `destination_port` 和 `packaging_requirement`
- GA4 增加表单开始填写事件 `form_start`
- GA4 增加 landing page CTA click 细分事件
- 表单提交邮件中加入 UTM 参数和 landing page 来源
- 建立 blog content 数据结构，支持更容易发布文章
- 为博客文章增加 Article schema、FAQ schema 的自动化生成
- 建立每月 SEO report 页面或自动导出表

## 13. 营销部门交付物清单

广告 landing page 团队：

- 5 个第一批 landing page 文案
- 每个页面的 H1、meta title、meta description
- 每个页面的 FAQ
- 每个页面的表单字段需求
- 每个页面的 UTM campaign 命名

内容团队：

- 每周 3 篇高质量 SEO/GEO 文章 brief
- 每周至少发布 2 篇
- 每月复盘并更新旧文
- 建立关键词、URL、发布日期、目标意图、排名、询盘数据表

销售团队：

- 每周反馈询盘真实问题
- 标记哪些文章或页面带来更有效询盘
- 提供客户常问问题用于 FAQ 和博客更新

数据团队：

- 配置 GA4 Key event
- 建立 landing page dashboard
- 建立 source / campaign / lead quality 报告
- 每周输出投放和 SEO 转化数据

## 14. 成功标准

短期 2-4 周：

- 5 个广告 landing page 上线
- GA4 能看到 `generate_lead`
- 表单询盘能区分来源页面
- 发布 6-8 篇高质量博客

中期 2-3 个月：

- 主要长尾词开始有 impressions
- 工厂检测页成为高信任入口
- landing page 有稳定询盘
- 内容能反哺销售问答

长期 6 个月：

- 形成“广告投放 + SEO 内容 + 销售反馈 + 页面优化”的闭环
- 核心关键词进入前 20
- 高意图文章持续带来自然询盘
- 采购型页面和博客形成主题权威
