// ─── Site content · 大域工程顧問有限公司 ───

export const company = {
  name: "大域工程顧問有限公司",
  nameEn: "GEOFIELD ENGINEERING CONSULTANTS CO., LTD",
  shortEn: "GEOFIELD",
  tagline: "為未來，打好基礎",
  taglineEn: "BUILDING FOUNDATIONS FOR THE FUTURE",
  founded: 1993,
  intro:
    "成立於1993年，營運時間已逾30年。為土木、大地工程、水土保持業務技術顧問機構，提供專業的工程顧問服務。",
  email: "geofield@ms17.hinet.net",
  hours: "週一至週五 08:00 ~ 17:00",
};

export const stats = [
  { value: 30, suffix: "+", label: "年專業經驗", labelEn: "YEARS OF EXPERIENCE" },
  { value: 500, suffix: "+", label: "工程實績", labelEn: "COMPLETED PROJECTS" },
  { value: 6, suffix: "", label: "專業領域", labelEn: "AREAS OF EXPERTISE" },
  { value: 2, suffix: "", label: "服務據點", labelEn: "OFFICES IN TAIWAN" },
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
    title: "水文地質探查",
    english: "HYDROGEOLOGICAL SURVEY",
    desc: "地下水文地質特性探查評估及施工影響分析",
    image: "/images/svc-hydro.png",
    points: ["地下水位觀測與水力特性評估", "抽水試驗與含水層參數分析", "施工降水對鄰近建物影響評估", "地下水資源與補注調查"],
  },
  {
    id: "tunnel",
    title: "隧道檢測評估",
    english: "TUNNEL INSPECTION",
    desc: "營運隧道檢測調查與安全服務性能評估",
    image: "/images/svc-tunnel.png",
    points: ["襯砌裂縫、滲漏水與劣化調查", "非破壞檢測與斷面變形量測", "隧道安全服務性能評估", "維護補強優先順序建議"],
  },
  {
    id: "slope",
    title: "坡地防災設計",
    english: "SLOPE DISASTER PREVENTION",
    desc: "邊坡崩坍調查並設計修復方案",
    image: "/images/svc-slope.png",
    points: ["邊坡穩定分析與崩坍潛勢評估", "擋土牆、地錨與護坡設計", "落石防護網與攔石設施規劃", "崩坍地修復工程設計"],
  },
  {
    id: "excavation",
    title: "開挖基礎工法",
    english: "EXCAVATION & FOUNDATION",
    desc: "地下結構與基礎開挖工法規劃及鄰房安全維護",
    image: "/images/svc-excavation.png",
    points: ["深開挖擋土支撐工法設計", "基礎型式評估與承載力分析", "開挖引致鄰房沉陷預測", "施工階段安全監測規劃"],
  },
  {
    id: "monitoring",
    title: "安全監測分析",
    english: "SAFETY MONITORING",
    desc: "坡地滑移與土木工程安全監測系統規劃與執行",
    image: "/images/svc-monitoring.png",
    points: ["傾斜管、水壓計等儀器佈設", "自動化監測系統建置", "監測數據判讀與預警管理", "坡地滑移潛勢分析"],
  },
  {
    id: "conservation",
    title: "水保計畫監造",
    english: "SOIL & WATER CONSERVATION",
    desc: "坡地開發水保計畫及現場監造",
    image: "/images/svc-conservation.png",
    points: ["水土保持計畫書編撰與送審", "滯洪沉砂設施規劃設計", "施工期間水保設施監造", "完工檢查與維護管理"],
  },
];

export type ProjectCategory = "鑽探" | "邊坡" | "監造";

export interface Project {
  title: string;
  category: ProjectCategory;
  photoCount: number;
}

export const categoryImages: Record<ProjectCategory, string> = {
  鑽探: "/images/hero-strata.png",
  邊坡: "/images/svc-slope.png",
  監造: "/images/svc-conservation.png",
};

export const projects: Project[] = [
  { title: "永鑫能源關廟太陽光電廠地基調查工作", category: "鑽探", photoCount: 30 },
  { title: "高雄市彌陀區彌海段地基調查工作", category: "鑽探", photoCount: 16 },
  { title: "國道3號南下373k+300 邊坡修復工程", category: "邊坡", photoCount: 8 },
  { title: "台九線 攔石網工程", category: "邊坡", photoCount: 2 },
  { title: "台九線461K+200 石籠・掛網噴植", category: "邊坡", photoCount: 4 },
  { title: "台九線470K+593 加勁護堤", category: "邊坡", photoCount: 3 },
  { title: "110年度高雄市大寮區基層建設小型道路路面整修工程（AC）", category: "監造", photoCount: 5 },
  { title: "高雄市西子灣風景區整建工程", category: "監造", photoCount: 12 },
  { title: "101年度金獅湖滯洪池周邊地景環境改造工程", category: "監造", photoCount: 12 },
];

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
    address: "105609 台北市松山區南京東路四段1號8樓828室",
    tel: "(02) 2713-5922",
    fax: null,
    mapQuery: "台北市松山區南京東路四段1號",
  },
];

export const aboutTabs = [
  {
    key: "intro",
    label: "公司簡介",
    content:
      "大域工程顧問有限公司成立於1993年，營運時間已逾30年；為土木、大地工程、水土保持業務技術顧問機構。我們以專業的技術團隊、嚴謹的分析方法、可靠的品質保證，為客戶提供最完善的工程顧問服務。",
  },
  {
    key: "philosophy",
    label: "經營理念",
    content:
      "秉持「專業、誠信、創新、服務」的經營理念，以精確的技術分析與豐富的實務經驗，為每一個工程項目提供最適切的解決方案。我們重視每一位客戶的需求，致力於建立長期的合作夥伴關係。",
  },
  {
    key: "expertise",
    label: "專業特性",
    content:
      "本公司在水文地質探查、隧道檢測評估、坡地防災設計、開挖基礎工法、安全監測分析、水保計畫監造等六大專業領域具有深厚的技術能力。專業團隊由資深工程師及技師組成，具備豐富的現場實務經驗。",
  },
];

export const milestones = [
  { year: "1993", title: "公司成立", desc: "於高雄成立，深耕大地工程與水土保持顧問業務" },
  { year: "2000s", title: "服務擴展", desc: "承接國道、公路邊坡與公共工程，實績遍及全台" },
  { year: "2010s", title: "台北據點", desc: "設立北部辦公室，強化全台服務能量" },
  { year: "今日", title: "持續精進", desc: "累積500件以上工程實績，六大專業領域全方位服務" },
];

export const heroPhotos = [
  { src: "/images/hero-1.jpg", alt: "大域工程 CPT 試驗車" },
  { src: "/images/hero-2.jpg", alt: "大域工程 CPT 試驗車 · 落羽松" },
  { src: "/images/hero-3.jpg", alt: "大域工程 CPT 試驗車 · 現場作業" },
  { src: "/images/hero-4.jpg", alt: "大域工程 CPT 試驗車 · 工地" },
];

export const navItems = [
  { key: "home", label: "首頁", path: "/" },
  { key: "about", label: "關於我們", path: "/about" },
  { key: "services", label: "服務項目", path: "/services" },
  { key: "projects", label: "工程實績", path: "/projects" },
  { key: "news", label: "最新消息", path: "/news" },
  { key: "location", label: "交通位置", path: "/location" },
];
