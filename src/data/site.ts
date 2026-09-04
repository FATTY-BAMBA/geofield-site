// ─── Site content · 大域工程顧問有限公司 ───

export const company = {
  name: "大域工程顧問有限公司",
  nameEn: "GEOFIELD ENGINEERING CONSULTANTS CO., LTD",
  shortEn: "GEOFIELD",
  tagline: "為未來，打好基礎",
  taglineEn: "BUILDING FOUNDATIONS FOR THE FUTURE",
  founded: 1993,
  foundedRoc: 82,
  foundedLabel: "民國82年（1993年）",
  intro:
    "成立於民國82年（1993年），專注於土木、大地工程及水土保持相關技術服務，迄今已累積逾30年工程顧問經驗。",
  email: "geofield@ms17.hinet.net",
  hours: "週一至週五 08:00 ~ 17:00",
};

export const stats = [
  { value: 30, suffix: "+", label: "年專業經驗", labelEn: "YEARS OF EXPERIENCE", href: "/about" },
  { value: 500, suffix: "+", label: "工程實績", labelEn: "COMPLETED PROJECTS", href: "/projects" },
  { value: 9, suffix: "", label: "核心服務", labelEn: "CORE SERVICES", href: "/services" },
  { value: 3, suffix: "", label: "服務據點", labelEn: "OFFICES IN TAIWAN", href: "/location" },
];

export interface Service {
  id: string;
  title: string;
  english: string;
  desc: string;
  image: string;
  points: string[];
}

export const services: Service[] = [
  {
    id: "hydro",
    title: "地質鑽探與水文調查",
    english: "SITE & HYDROGEOLOGICAL INVESTIGATION",
    desc: "整合鑽探、現地試驗與地下水調查，建立設計所需的地層資料",
    image: "/images/service-cutouts/svc-hydro.webp",
    points: ["地質鑽探、取樣與地層判釋", "CPT 圓錐貫入及現地試驗", "地下水位觀測與抽水試驗", "施工降水與鄰近環境影響評估"],
  },
  {
    id: "tunnel",
    title: "隧道工程與檢測評估",
    english: "TUNNEL ENGINEERING & INSPECTION",
    desc: "涵蓋隧道規劃、調查設計，以及營運階段的檢測與安全評估",
    image: "/images/service-cutouts/svc-tunnel.webp",
    points: ["隧道路線地質調查與工程規劃", "開挖、支撐及襯砌設計評估", "營運隧道非破壞檢測與變形量測", "安全服務性能評估與維護補強建議"],
  },
  {
    id: "slope",
    title: "坡地防災設計",
    english: "SLOPE DISASTER PREVENTION",
    desc: "邊坡崩坍調查並設計修復方案",
    image: "/images/service-cutouts/svc-slope.webp",
    points: ["邊坡穩定分析與崩坍潛勢評估", "擋土牆、地錨與護坡設計", "落石防護網與攔石設施規劃", "崩坍地修復工程設計"],
  },
  {
    id: "excavation",
    title: "基礎開挖與鄰房安全",
    english: "EXCAVATION & FOUNDATION",
    desc: "地下結構與基礎開挖工法規劃，並評估施工對鄰近建物的影響",
    image: "/images/service-cutouts/svc-excavation.webp",
    points: ["深開挖擋土支撐與基礎工法設計", "基礎型式評估與承載力分析", "開挖引致鄰房沉陷與安全評估", "施工階段安全監測規劃"],
  },
  {
    id: "planning",
    title: "工程計畫與影響評估",
    english: "ENGINEERING PLANS & IMPACT ASSESSMENT",
    desc: "依開發與施工需求編製工程計畫，評估鄰近建物及交通設施影響",
    image: "/images/service-cutouts/svc-planning.webp",
    points: ["施工計畫書編製與技術文件整合", "雜項執照相關計畫編製", "捷運等鄰近設施影響評估", "施工風險、保護及監測方案規劃"],
  },
  {
    id: "design",
    title: "公共工程規劃設計",
    english: "PUBLIC WORKS PLANNING & DESIGN",
    desc: "整合現地條件、工程需求與施工可行性，完成公共工程規劃與設計",
    image: "/images/service-cutouts/svc-design.webp",
    points: ["現況調查與設計條件整理", "方案研擬與工程可行性評估", "細部設計、數量及預算編製", "施工界面與安全需求整合"],
  },
  {
    id: "monitoring",
    title: "安全監測分析",
    english: "SAFETY MONITORING",
    desc: "由儀器配置、資料收測到成果判讀，建立工程安全管理依據",
    image: "/images/service-cutouts/svc-monitoring.webp",
    points: ["全測站、水準測量與傾度盤佈設", "傾斜管、水壓計及自動化監測建置", "監測數據判讀、趨勢分析與預警管理", "監測成果安全評估與應變建議"],
  },
  {
    id: "conservation",
    title: "水土保持設計與監造",
    english: "SOIL & WATER CONSERVATION",
    desc: "坡地開發水土保持規劃設計、送審及施工監造",
    image: "/images/service-cutouts/svc-conservation.webp",
    points: ["水土保持計畫書編撰與送審", "滯洪沉砂設施規劃設計", "施工期間水保設施監造", "完工檢查與維護管理"],
  },
  {
    id: "supervision",
    title: "施工監造與品質管理",
    english: "CONSTRUCTION SUPERVISION",
    desc: "依設計圖說與契約要求辦理施工查驗、品質管理及完工確認",
    image: "/images/service-cutouts/svc-supervision.webp",
    points: ["施工進度與工項查驗", "材料設備與施工品質管理", "設計界面、變更及履約協調", "完工查驗與文件整理"],
  },
];

export type ProjectCategory = "鑽探" | "邊坡" | "監造" | "隧道";

/** 一張工程照片 */
export interface ProjectPhoto {
  src: string;
  caption?: string;
  /** 圖說類圖片請設為 "contain"，避免裁切；現場照片維持預設的 "cover"。 */
  fit?: "cover" | "contain";
}

/** 詳細內容中的一個技術段落 */
export interface ProjectSection {
  title: string;
  body: string;
  image?: string;
  /** 適合以網頁元件重建、而非直接使用簡報截圖的技術圖解。 */
  visual?: "maintenance-cycle";
  /** 圖說、剖面圖、模型截圖請設為 "contain"，避免邊緣被裁切。 */
  fit?: "cover" | "contain";
  bullets?: string[];
}

/**
 * 專案詳細內容。全部為選填；尚未整理詳細資料的專案
 * 仍會正常顯示於列表中，只是不會產生內頁連結。
 */
export interface ProjectDetail {
  /** 內頁主視覺。 */
  heroImage?: string;
  /** 列表卡片可使用與內頁不同的視覺，例如技術示意圖。 */
  cardImage?: string;
  cardImageFit?: "cover" | "contain";
  client?: string;
  location?: string;
  period?: string;
  summary: string;
  scope: string[];
  sections: ProjectSection[];
  photos?: ProjectPhoto[];
}

export interface Project {
  /** 網址代稱，例如 /projects/irrigation-tunnel */
  slug: string;
  title: string;
  category: ProjectCategory;
  photoCount: number;
  detail?: ProjectDetail;
}

export const categoryImages: Record<ProjectCategory, string> = {
  鑽探: "/images/service-cutouts/svc-hydro.webp",
  邊坡: "/images/service-cutouts/svc-slope.webp",
  監造: "/images/service-cutouts/svc-conservation.webp",
  隧道: "/images/service-cutouts/svc-tunnel.webp",
};

const IRRIGATION_TUNNEL_DIR = "/images/projects/irrigation-tunnel";

export const projects: Project[] = [
  {
    slug: "irrigation-tunnel-inspection",
    title: "水圳隧道檢測安全評估",
    category: "隧道",
    photoCount: 5,
    detail: {
      heroImage: `${IRRIGATION_TUNNEL_DIR}/site-context.webp`,
      cardImage: categoryImages.隧道,
      cardImageFit: "contain",
      summary:
        "早年為農業灌溉興建的磚砌水圳隧道，部分歷經百年仍持續供水。本案例整合現況巡查、襯砌探查、三維掃描與重點異狀監測成果，用於辨識需要持續追蹤或優先處置的區段，作為後續維護、補修與補強規劃的依據。",
      scope: [
        "隧道與開渠段現況巡查",
        "襯砌表面異狀記錄",
        "13 通道透地雷達探查",
        "三維點雲模型建置",
        "重點異狀量測與追蹤",
      ],
      sections: [
        {
          title: "維護管理策略架構",
          body: "以巡檢與檢測資料為基礎，串聯功能評估、設施監測及後續處置。需要立即處理的異狀納入主動管理；其餘項目保留基準資料並定期追蹤，讓維護資源集中在風險較高的區段。",
          visual: "maintenance-cycle",
          bullets: ["日常巡檢", "定期檢測", "功能評估", "設施監測", "應對策略（補修／補強／更新）"],
        },
        {
          title: "現場檢測評估",
          body: "工程人員沿線進行目視與近接檢查，記錄襯砌裂縫、滲水痕跡、材料劣化及斷面狀況，並同步巡查相連的開渠段。現場影像與位置資料共同建立後續判讀基準。",
          image: `${IRRIGATION_TUNNEL_DIR}/lining-inspection.webp`,
        },
        {
          title: "襯砌結構透地雷達探查",
          body: "以 13 通道透地雷達陣列沿隧道縱向探查襯砌。不同通道的量測資料可協助辨識襯砌界面、局部空洞，以及襯砌背後可能的疏鬆或破碎區域，提供後續處置範圍的判讀依據。",
          image: `${IRRIGATION_TUNNEL_DIR}/gpr-interpretation.webp`,
          fit: "contain",
        },
        {
          title: "點雲掃描與數位模型建置",
          body: "三維掃描將隧道現況轉換為可量測的點雲模型，用於檢視線形與斷面差異，並可將現場發現的異狀對應至模型位置，形成後續複查可沿用的數位基準。",
          image: `${IRRIGATION_TUNNEL_DIR}/point-cloud-model.webp`,
          fit: "contain",
        },
        {
          title: "結構異狀點雲追蹤",
          body: "利用點雲掃描記錄頂拱襯砌鋼筋裸露、鏽蝕等異狀的位置與尺度，建立可供後續比較的基準。不同時期的資料可依相同位置比對，判斷異狀範圍是否持續變化。",
          image: `${IRRIGATION_TUNNEL_DIR}/change-tracking.webp`,
          fit: "contain",
        },
        {
          title: "重點異狀量測與追蹤",
          body: "在已辨識的重點位置進行近接量測並留下基準紀錄。後續可使用相同位置與量測方式複查，將現場觀察、尺寸記錄及監測結果一起比較，判斷異狀是否持續發展。",
          image: `${IRRIGATION_TUNNEL_DIR}/surface-condition-survey.webp`,
        },
      ],
      // 僅收錄未在上方技術段落出現過的照片，避免重複
      photos: [
        { src: `${IRRIGATION_TUNNEL_DIR}/site-survey.webp`, caption: "隧道內部襯砌與滲水痕跡巡查" },
        { src: `${IRRIGATION_TUNNEL_DIR}/brick-arch.webp`, caption: "磚砌拱圈與通水環境", fit: "contain" },
        { src: `${IRRIGATION_TUNNEL_DIR}/temporary-support.webp`, caption: "局部區段支撐及現況" },
        { src: `${IRRIGATION_TUNNEL_DIR}/open-channel.webp`, caption: "桃園大圳開渠段現場巡查", fit: "contain" },
        { src: `${IRRIGATION_TUNNEL_DIR}/measurement-closeup.webp`, caption: "重點位置近接量測" },
      ],
    },
  },
  { slug: "guanmiao-solar-borehole", title: "永鑫能源關廟太陽光電廠地基調查工作", category: "鑽探", photoCount: 30 },
  { slug: "mituo-mihai-borehole", title: "高雄市彌陀區彌海段地基調查工作", category: "鑽探", photoCount: 16 },
  { slug: "n3-373k-slope-repair", title: "國道3號南下373k+300 邊坡修復工程", category: "邊坡", photoCount: 8 },
  { slug: "tai9-rockfall-net", title: "台九線 攔石網工程", category: "邊坡", photoCount: 2 },
  { slug: "tai9-461k-gabion", title: "台九線461K+200 石籠・掛網噴植", category: "邊坡", photoCount: 4 },
  { slug: "tai9-470k-reinforced-embankment", title: "台九線470K+593 加勁護堤", category: "邊坡", photoCount: 3 },
  {
    slug: "daliao-road-resurfacing",
    title: "110年度高雄市大寮區基層建設小型道路路面整修工程（AC）",
    category: "監造",
    photoCount: 5,
  },
  { slug: "sizihwan-scenic-area", title: "高雄市西子灣風景區整建工程", category: "監造", photoCount: 12 },
  { slug: "jinshihu-detention-pond", title: "101年度金獅湖滯洪池周邊地景環境改造工程", category: "監造", photoCount: 12 },
];

/** 依 slug 取得專案；找不到時回傳 undefined。 */
export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);

export const offices = [
  {
    name: "總公司（高雄）",
    nameEn: "HEAD OFFICE · KAOHSIUNG",
    address: "800306 高雄市新興區中正二路182號6樓之3",
    tel: "(07) 229-5922",
    fax: "(07) 229-6922",
    mapQuery: "高雄市新興區中正二路182號",
  },
  {
    name: "北部辦公室（台北）",
    nameEn: "TAIPEI OFFICE",
    address: "10472臺北市中山區中吉里松江路200號12樓之5",
    tel: "(02) 2713-5922",
    fax: null,
    mapQuery: "臺北市中山區松江路200號12樓之5",
  },
  {
    name: "宜蘭辦公室",
    nameEn: "YILAN OFFICE",
    address: "260 宜蘭縣宜蘭市復興路三段207號2樓",
    tel: null,
    fax: null,
    mapQuery: "宜蘭縣宜蘭市復興路三段207號",
  },
];

export const aboutTabs = [
  {
    key: "intro",
    label: "公司簡介",
    content:
      "大域工程顧問有限公司成立於民國82年（1993年），為土木、大地工程及水土保持技術顧問機構。服務內容涵蓋現地調查、分析設計、施工監造及安全監測，並依各案的地質條件與工程需求提出技術建議。",
  },
  {
    key: "philosophy",
    label: "經營理念",
    content:
      "我們重視現地資料、工程判讀與可執行的設計成果。從調查規劃到成果交付，團隊以專業、誠信、創新與服務為工作原則，並與業主、設計及施工單位保持清楚溝通。",
  },
  {
    key: "expertise",
    label: "專業特性",
    content:
      "服務由地質鑽探與水文調查延伸至隧道工程與檢測、坡地防災、基礎開挖、工程計畫、公共工程設計、施工監造、安全監測及水土保持。團隊以現地試驗、非破壞檢測與監測資料支援工程判讀。",
  },
];

export const milestones = [
  { year: "民國82年", title: "公司成立", desc: "1993年於高雄成立，投入大地工程與水土保持顧問服務" },
  { year: "30+ 年", title: "工程顧問經驗", desc: "累積現地調查、設計分析、施工監造及安全監測經驗" },
  { year: "9 項服務", title: "專業服務範圍", desc: "由現地調查延伸至規劃設計、施工監造、檢測與安全評估" },
  { year: "3 處據點", title: "全台服務", desc: "高雄總公司與台北、宜蘭辦公室支援各地工程需求" },
];

export const industryLinks = [
  { label: "中國工程師學會", href: "https://www.cie.org.tw/" },
  { label: "地工技術研究發展基金會", href: "https://www.geotech.org.tw/" },
  { label: "岩盤工程暨工程地質學會", href: "https://tsrmeg.geo.org.tw/" },
  { label: "中華民國隧道協會", href: "https://ctta.org/zh-TW" },
  { label: "中華民國大地工程學會", href: "https://www.tgs.org.tw/" },
  { label: "中華民國大地工程技師公會", href: "https://www.pgea.org.tw/" },
  { label: "高雄市土木技師公會", href: "https://www.kpcea.org.tw/" },
  { label: "中華水土保持學會", href: "https://cswcs.org.tw/" },
];

export const cptMedia = {
  fleetPrimary: {
    src: "/images/equipment/cpt/cpt-truck-blue.webp",
    alt: "大域工程藍色車載式 CPT 圓錐貫入試驗車",
    title: "車載式 CPT 現地試驗",
    titleEn: "Truck-mounted CPT testing",
  },
  fleetSecondary: {
    src: "/images/equipment/cpt/cpt-truck-field.webp",
    alt: "大域工程白色車載式 CPT 圓錐貫入試驗車於現地部署",
    title: "CPT 試驗車現地部署",
    titleEn: "CPT field deployment",
  },
  liveData: {
    src: "/images/equipment/cpt/cpt-live-data.webp",
    alt: "CPT 試驗車內即時資料擷取螢幕與深度剖面曲線",
    title: "即時資料擷取與深度剖面判讀",
    titleEn: "Real-time data acquisition",
  },
  rods: {
    src: "/images/equipment/cpt/cpt-rods.webp",
    alt: "CPT 圓錐貫入試驗使用的貫入桿件與連接設備",
    title: "CPT 貫入桿件與試驗設備",
    titleEn: "CPT rods and testing equipment",
  },
};

export const heroPhotos = [cptMedia.fleetPrimary, cptMedia.liveData, cptMedia.rods];

export const navItems = [
  { key: "home", label: "首頁", path: "/" },
  { key: "about", label: "關於我們", path: "/about" },
  { key: "services", label: "服務項目", path: "/services" },
  { key: "technology", label: "監測技術", path: "/technology" },
  { key: "projects", label: "工程實績", path: "/projects" },
  { key: "news", label: "最新消息", path: "/news" },
  { key: "location", label: "交通位置", path: "/location" },
];
