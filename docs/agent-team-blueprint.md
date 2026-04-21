# BBQ Charcoal Export 主动开发智能体团队蓝图

更新日期：2026-04-21  
目标：为 BBQ Charcoal Export 搭建一支可持续运行的 AI 增长与主动开发团队，用于线索发现、市场研究、Landing Page 开发、SEO/GEO 内容生产、销售材料生成、数据复盘和持续迭代。

## 1. 能力蒸馏参考

参考对象：TradeWind / TradeWind DocuMaster 公开信息中呈现的能力逻辑。

可蒸馏的核心能力不是某个具体界面，而是这些工作流：

- 多来源全球客户/进口商/分销商发现
- 通过产品描述匹配潜在客户
- 用 AI 做相关性筛选，减少人工筛选
- 周期性发现新客户并更新旧客户信息
- 展会、名录、搜索引擎、地图、黄页、海关/贸易数据、社媒等渠道交叉验证
- WhatsApp / 邮件等多渠道触达
- 客户资料、产品资料、模板资料一次录入，多次复用
- 把非结构化输入转成报价、发票、装箱单等贸易文档
- 把客户附件、名片、产品资料解析成可复用字段
- 报价单、PI、CI、packing list 之间一键转换，减少重复录入
- 自动计算金额、重量、体积、多币种
- 周期性内容营销和线索回收

对于 BBQ Charcoal Export，应该把这些能力转化为：

> 搜索潜在买家 → 验证买家相关性 → 生成触达素材 → 制作对应 Landing Page → 发布高质量 SEO 内容 → 收集询盘 → 生成销售文档 → 复盘转化 → 继续扩市场。

## 2. 主动开发团队总架构

建议设置 10 个智能体角色：

1. Market Radar Agent
2. Lead Discovery Agent
3. Lead Qualification Agent
4. Outreach Strategist Agent
5. Landing Page Dev Agent
6. SEO/GEO Content Agent
7. Trade Docs Agent
8. CRM Memory Agent
9. Analytics Loop Agent
10. DevOps & QA Agent

最小可运行版本可以先启用 5 个：

- Market Radar Agent
- Lead Discovery + Qualification Agent
- Landing Page + Content Agent
- Trade Docs Agent
- Analytics Loop Agent

## 3. 角色定义

### 3.1 Market Radar Agent

定位：全球市场雷达，主动发现可进入市场、买家行业、展会和采购趋势。

输入：

- 当前产品：BBQ briquettes、lump charcoal sourcing option、binchotan sourcing option
- 重点证据：Control Union inspection、800 MT/month briquette capacity、PEFC CoC、SGS testing
- 目标区域：UAE、Saudi Arabia、Kuwait、Qatar、USA、Australia、EU
- Google Search Console 查询词
- Google Ads 搜索词
- 销售团队反馈

职责：

- 每周发现新市场机会
- 识别国家、行业和渠道
- 找出适合投放广告和 SEO 内容的采购意图
- 监控竞争对手页面、广告话术和产品定位
- 输出下周优先开发市场

技能：

- B2B export market research
- SERP analysis
- trade show discovery
- importer/distributor segmentation
- buyer intent mapping
- competitive positioning

输出：

- Weekly Market Radar Brief
- Target country list
- Buyer segment map
- Market-entry hypothesis
- Landing page opportunity list

质量标准：

- 每个市场机会必须说明 buyer type
- 必须说明为什么与 BBQ charcoal 有关
- 必须给出可执行下一步：写文章、做页面、找线索、跑广告

### 3.2 Lead Discovery Agent

定位：潜在客户发现智能体，主动找进口商、分销商、餐饮供应链、零售品牌和相关展会名单。

输入：

- 目标国家
- 产品关键词
- 买家类型
- 排除条件
- 已有客户/线索库

职责：

- 从搜索引擎、地图、黄页、展会目录、行业协会、B2B 平台、社媒和公开网站中寻找潜在客户
- 识别 importer、distributor、wholesaler、restaurant supply、private label brand
- 抽取公司名、网站、国家、联系人线索、邮箱、WhatsApp、LinkedIn、业务描述
- 标记来源 URL
- 去重

技能：

- web research
- multilingual keyword expansion
- company enrichment
- contact discovery
- data normalization
- deduplication

输出字段：

- company_name
- website
- country
- city
- buyer_type
- product_fit
- evidence_url
- contact_email
- whatsapp_or_phone
- linkedin
- source_type
- notes

质量标准：

- 不允许只输出公司名
- 每条线索必须有来源 URL
- 每条线索必须给出 product_fit 理由
- 不确定的邮箱/电话要标记 confidence

### 3.3 Lead Qualification Agent

定位：线索评分和筛选智能体，把 Lead Discovery 的粗线索变成可触达名单。

评分维度：

- 产品相关性：1-5
- 进口/批发可能性：1-5
- 国家优先级：1-5
- 订单规模可能性：1-5
- 联系方式完整度：1-5
- 网站活跃度：1-5
- 是否可能需要 OEM/private label：1-5

职责：

- 剔除无关公司
- 识别高价值客户
- 标记触达优先级
- 分配推荐话术方向
- 判断应该导向哪个 landing page

技能：

- B2B lead scoring
- buyer persona matching
- web credibility review
- relevance classification
- lead routing

输出：

- Qualified lead list
- Priority tier: A / B / C
- Recommended outreach angle
- Recommended landing page
- Required follow-up question

质量标准：

- A 类线索必须有明确采购可能性
- 不把普通餐厅消费者当作批发客户
- 不把非木炭行业公司误判为客户

### 3.4 Outreach Strategist Agent

定位：外联策略智能体，负责邮件、WhatsApp、LinkedIn 或展会预热话术。

输入：

- Qualified lead
- 目标国家
- buyer_type
- 产品兴趣
- landing page URL
- 工厂证据

职责：

- 为不同客户生成首封邮件
- 生成 WhatsApp 首句和跟进节奏
- 生成 LinkedIn 连接语
- 设计 3-5 步 follow-up sequence
- 生成 A/B 测试版本

技能：

- cold email
- WhatsApp B2B outreach
- personalization
- objection handling
- sequence design
- deliverability awareness

标准触达结构：

1. 说明为什么联系对方
2. 说明产品和供应能力
3. 放入一个可信证据
4. 提出一个低门槛问题
5. 附 landing page 或 factory inspection 链接

禁止：

- 一上来发长篇公司介绍
- 群发感太强
- 未经确认直接报价
- 夸大认证和产能

输出：

- Email sequence
- WhatsApp sequence
- Follow-up calendar
- Objection responses

### 3.5 Landing Page Dev Agent

定位：广告落地页开发智能体，负责从市场机会到页面上线。

输入：

- Market Radar Brief
- Keyword cluster
- Buyer persona
- Lead Qualification insights
- Current site components

职责：

- 生成 landing page brief
- 设计页面信息架构
- 写英文页面文案
- 复用现有网站组件
- 添加 GA 事件和表单跳转
- 保持 SEO/canonical/noindex 策略正确

技能：

- Next.js App Router
- conversion copywriting
- B2B landing page structure
- Tailwind CSS
- GA event tracking
- schema basics

第一批页面：

- `/lp/bulk-bbq-briquettes`
- `/lp/malaysia-charcoal-supplier`
- `/lp/private-label-bbq-charcoal`
- `/lp/restaurant-bbq-charcoal`
- `/lp/middle-east-charcoal-export`

页面必须包含：

- H1 对应广告意图
- 可信数据条
- buyer pain
- product/spec section
- factory evidence
- FAQ
- quote form
- final CTA

质量标准：

- 首屏必须可在 5 秒内说明“卖什么、给谁、凭什么可信、下一步做什么”
- 每页只能有一个主要转化目标
- 不能把 lump/binchotan 写成已由检测报告证明的自产产线

### 3.6 SEO/GEO Content Agent

定位：高质量文章与生成式搜索优化智能体。

职责：

- 根据 keyword 和 buyer question 写高标准文章
- 生成 TL;DR answer block
- 生成表格、清单、FAQ
- 加内部链接
- 输出 meta title/description
- 准备 Article/FAQ schema

技能：

- SEO writing
- GEO answer design
- B2B procurement writing
- fact-grounded content
- internal linking
- schema-oriented structure

文章硬标准：

- 1,500-2,500 words
- 至少 6 个 H2
- 至少 1 个表格
- 至少 1 个 buyer checklist
- 5-8 个 FAQ
- 必须链接 `/factory-inspection`
- 必须链接 `/products`
- 必须链接 `/contact` 或对应 landing page

质量标准：

- 先回答问题，再展开解释
- 每个 H2 都要有明确结论
- 不写泛泛行业软文
- 不制造没有证据的认证或价格
- 每篇都要能服务销售跟进

### 3.7 Trade Docs Agent

定位：贸易文档和销售资料生成智能体，蒸馏 TradeWind DocuMaster 的“资料一次录入，多文档复用”逻辑。

职责：

- 从询盘表单和销售补充信息生成报价草案
- 生成产品规格单
- 生成 sample request follow-up
- 生成 PI / CI / packing list 草稿
- 生成客户回复邮件
- 维护常用模板字段

输入字段：

- buyer company
- country
- destination port
- product
- quantity
- packaging
- incoterm
- target spec
- requested documents

可生成文档：

- quotation
- proforma invoice draft
- commercial invoice draft
- packing list draft
- product specification sheet
- factory inspection summary
- sample arrangement email
- follow-up email

技能：

- international trade documents
- quotation logic
- Incoterms basics
- template filling
- unit conversion
- packing / weight / volume calculation
- bilingual business writing

质量标准：

- 所有价格必须标记为 draft / subject to confirmation
- 必须保留人工审核步骤
- 不自动发送正式报价
- 不生成超出已确认规格的承诺

### 3.8 CRM Memory Agent

定位：客户记忆和知识库智能体。

职责：

- 维护客户资料
- 合并重复线索
- 记录客户国家、产品兴趣、数量、包装、沟通状态
- 把客户问题沉淀成 FAQ 和内容选题
- 给销售提醒跟进

技能：

- CRM structuring
- lead lifecycle tracking
- deduplication
- conversation summarization
- task generation

客户状态建议：

- New lead
- Qualified
- Contacted
- Replied
- Sample requested
- Quotation sent
- Negotiating
- Dormant
- Won
- Lost

输出：

- Lead profile
- Conversation summary
- Next action
- Follow-up reminder
- Buyer questions

### 3.9 Analytics Loop Agent

定位：数据闭环智能体。

职责：

- 每周读取 GA4、Search Console、Ads、表单和销售反馈
- 识别高转化页面
- 识别低转化广告页
- 识别高曝光低点击文章
- 识别高点击低询盘文章
- 生成下周开发和内容任务

技能：

- GA4 analysis
- Search Console analysis
- UTM analysis
- conversion funnel diagnosis
- content refresh planning
- lead quality feedback loop

核心指标：

- page_view
- CTA click
- form submission
- `/thank-you` views
- `generate_lead`
- source / medium / campaign
- country
- product_interest
- quantity
- lead quality

输出：

- Weekly Growth Report
- Top opportunities
- Pages to improve
- Blogs to refresh
- Landing pages to build
- Campaign recommendations

### 3.10 DevOps & QA Agent

定位：上线质量与技术 SEO 智能体。

职责：

- 检查 build
- 检查页面 200/404
- 检查 sitemap
- 检查 robots
- 检查 canonical
- 检查 noindex 页面
- 检查 GA tag 和事件
- 检查表单提交和 thank-you 跳转

技能：

- Next.js QA
- Vercel deployment
- technical SEO
- structured data validation
- browser smoke test
- form testing

每次上线前检查：

- `npm run build`
- 目标页面 HTTP 200
- 表单 API 成功
- `/thank-you` noindex
- sitemap 不含 thank-you
- canonical 正确
- 关键 CTA 有 GA event

输出：

- Deployment checklist
- QA report
- Issues and fixes

## 4. 工作流 Loop

### Weekly Growth Loop

1. Analytics Loop Agent 输出上周数据
2. CRM Memory Agent 输出销售反馈和客户问题
3. Market Radar Agent 发现市场机会
4. Lead Discovery Agent 找新名单
5. Lead Qualification Agent 打分
6. Growth owner 决定本周优先级
7. Landing Page Dev Agent 做新页面或优化旧页面
8. SEO/GEO Content Agent 写文章
9. Outreach Strategist Agent 生成触达序列
10. Trade Docs Agent 支持销售回复和文档生成
11. DevOps & QA Agent 检查并上线
12. 数据回流到 Analytics Loop Agent

### Daily Sales Loop

1. 新询盘进入邮箱
2. CRM Memory Agent 建档
3. Lead Qualification Agent 判断质量
4. Trade Docs Agent 生成回复草稿
5. 销售人工确认并发送
6. CRM Memory Agent 更新状态
7. Sales questions 回流给 Content Agent

### Content Loop

1. Market / Search / Sales 提供问题
2. SEO/GEO Content Agent 生成 brief
3. Writer 输出文章
4. Editor fact-check
5. DevOps & QA 发布
6. Analytics 监控表现
7. 低表现内容进入 refresh queue

### Landing Page Loop

1. Ads / Search terms 发现新意图
2. Landing Page Dev Agent 出页面
3. DevOps & QA 上线
4. Ads 导入 UTM
5. Analytics 监控 CTA、form、thank-you
6. CRO 修改首屏、FAQ、CTA、表单字段

## 5. 智能体之间的交接格式

### Market Opportunity Brief

```yaml
market:
country:
buyer_type:
primary_keyword:
secondary_keywords:
buyer_pain:
recommended_offer:
recommended_landing_page:
required_evidence:
next_action:
```

### Qualified Lead Record

```yaml
company_name:
website:
country:
buyer_type:
product_fit:
priority: A/B/C
evidence_url:
contact_email:
whatsapp_or_phone:
recommended_angle:
recommended_landing_page:
next_action:
confidence:
```

### Landing Page Brief

```yaml
url:
target_keyword:
buyer_persona:
h1:
proof_points:
sections:
faq:
primary_cta:
secondary_cta:
internal_links:
tracking_events:
do_not_say:
```

### Article Brief

```yaml
slug:
primary_keyword:
search_intent:
target_buyer:
core_answer:
outline:
required_factory_facts:
tables_or_checklists:
faq:
internal_links:
cta:
schema:
do_not_say:
```

### Weekly Growth Report

```yaml
period:
traffic_summary:
lead_summary:
best_pages:
weak_pages:
best_queries:
new_opportunities:
lead_quality_notes:
recommended_next_actions:
owner:
deadline:
```

## 6. 权限边界

智能体可以自动做：

- 搜索公开信息
- 生成候选线索
- 写 brief
- 写文章初稿
- 写 landing page 初稿
- 生成邮件草稿
- 生成报价草稿
- 生成周报
- 提出优化建议

必须人工确认后才能做：

- 发送正式报价
- 承诺价格、交期、认证、产能
- 批量发送 cold email / WhatsApp
- 修改广告预算
- 发布重大页面改版
- 删除数据
- 上传客户隐私数据到外部工具

## 7. 第一阶段实施建议

### 第 1 周

- 建立 CRM 字段表
- 配置 GA4 key event
- 建立 5 个 landing page brief
- 选择 2 个国家市场做 Market Radar
- 输出 50 条候选线索

### 第 2 周

- 上线 1-2 个 landing page
- 发布 2 篇 P0 SEO/GEO 文章
- 生成第一批 outreach sequence
- 测试 UTM 和 thank-you 追踪

### 第 3 周

- 扩展线索到 100-200 条
- 启动小预算 Google Ads 测试
- 按国家/买家类型细分 landing page
- 建立销售回复模板

### 第 4 周

- 输出月度复盘
- 判断最高质量来源
- 更新表现最好的页面
- 规划下一批国家页和文章

## 8. 最关键的组织原则

这个团队的核心不是“多写内容”或“多找线索”，而是形成闭环：

> 市场信号 → 线索发现 → 页面承接 → 内容增强信任 → 表单询盘 → 销售反馈 → 数据复盘 → 下一轮开发。

所有智能体的输出都必须能进入这个闭环。不能进入闭环的内容、页面、线索和报告，都应降级或停止。
