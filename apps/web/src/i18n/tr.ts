import type { Dict } from './types';

export const tr: Dict = {
  profile: {
    name: 'Özge Büyüktorun',
    role: 'Kıdemli QA & Test Otomasyon Mühendisi — SDET',
    location: 'Ankara, Türkiye · Uzaktan',
    email: 'ozgebuyuktorun@outlook.com',
    linkedin: 'https://linkedin.com/in/ozgebuyuktorun1',
    heroLine: 'Kaliteyi ölçülebilir — ve güvenilir — kılıyorum.',
    heroSub:
      'Yaklaşık on yıldır, ekiplerin çalışan şeyi bozmadan hızlı ilerlemesini sağlayan otomasyonu kuruyorum. Bugün bunu Toptal üzerinden Almanya merkezli ekipler için uzaktan yapıyorum.',
    availability: 'Kıdemli SDET & QA-mimarisi rollerine açığım',
  },

  about: {
    paragraphs: [
      'Yazılıma biyomedikal mühendisliğinden geldim; orada bir hata bir “ticket” değil, birinin güvenliği için bir risktir. Bu bakış hâlâ test etme şeklimi belirliyor: sistemin en çok nerede kırılacağını arar, tahmin etmek yerine ölçerek oraya giderim.',
      'Altı yılı aşkın QA deneyimimde çok farklı dünyalarda sıfırdan test mimarisi kurdum — kurumsal web platformları, ISO 13485 / MDR kapsamında medikal cihazlar ve Baykar’da gömülü savunma sistemleri. Alanlar değişiyor; disiplin değişmiyor.',
      'Son dönemde odağım AI destekli test: senaryo üretmek, kırılgan locator’ları kendi kendine onarmak ve hataları analiz etmek için LLM’ler ve MCP tabanlı ajanlar kullanıyorum — böylece suit hızlanıyor, insanlar zor vakalara odaklanıyor.',
    ],
    facts: [
      { label: 'Deneyim', value: '~10 yıl mühendislik · 6+ yıl QA' },
      { label: 'Konum', value: 'Ankara, Türkiye · Uzaktan' },
      { label: 'Odak', value: 'Playwright · TypeScript · CI/CD' },
      { label: 'Diller', value: 'Türkçe (ana dil) · İngilizce (B2–C1)' },
    ],
  },

  metrics: [
    { value: '%40 → %85', context: 'CyanGate’de sıfırdan yeniden kurduğum test kapsamı.' },
    { value: '−%60', context: 'Otomasyonla daha erken yakalanan kritik hatalar.' },
    { value: '500K', context: 'Lotec’te JMeter ile yük testi yaptığım eşzamanlı kullanıcı.' },
    { value: '~%40', context: 'AI destekli üretimle tekrarlayan script’lere harcanan sürede azalma.' },
  ],

  skillGroups: [
    { heading: 'Test Otomasyonu', items: ['Playwright', 'TypeScript', 'Cypress', 'Selenium WebDriver', 'Cucumber / BDD', 'PyTest', 'Robot Framework', 'Selenium Grid'] },
    { heading: 'API & Performans', items: ['REST', 'GraphQL', 'WebSocket', 'Postman', 'JMeter', 'Grafana K6', 'RestAssured', 'SoapUI'] },
    { heading: 'AI Destekli Kalite', items: ['GitHub Copilot', 'Claude', 'MCP Ajanları', 'Self-Healing Testler', 'Visual AI (Applitools)', 'Prompt Mühendisliği', 'Sentetik Veri'] },
    { heading: 'Backend & Veri', items: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'OracleDB', 'Apache Kafka'] },
    { heading: 'DevOps & Bulut', items: ['Jenkins', 'GitLab CI', 'Azure DevOps', 'Bitbucket', 'Docker', 'Kubernetes', 'AWS'] },
  ],

  experience: [
    {
      period: 'Ağu 2025 — Devam ediyor',
      role: 'Kıdemli QA Otomasyon Mühendisi',
      org: 'Toptal · uzaktan, Almanya merkezli müşteriler',
      current: true,
      bullets: [
        'Almanya merkezli ekiplerle uzaktan çalışarak büyük ölçekli uluslararası yazılımlar için uçtan uca otomasyonu mimarlıyor ve hayata geçiriyorum.',
        'Sensör ve donanım tabanlı bir üründe web ve mobil otomasyonu, API testlerini, regresyon ve smoke suit’lerini üstleniyorum.',
        'MCP (Model Context Protocol) tabanlı sistemlerle CI içinde testleri ve test ajanlarını koşuyor; CI/CD ve shift-left stratejisinde danışmanlık veriyorum.',
      ],
    },
    {
      period: 'Haz 2025 — Ağu 2025',
      role: 'Kıdemli QA Otomasyon Mühendisi',
      org: 'BilgeAdam Teknoloji · PTT Bilgi Teknolojileri',
      bullets: [
        'PTT Kart (MYS) ve TR Kart projelerinde manuel ve otomasyon testleri; Selenium + Java ile BDD / Gherkin script’leri.',
        'JMeter ile performans ve yük testleri; Postman ile API entegrasyon testleri; süreçler Jira ve Confluence’ta.',
        'Copilot ve Claude ile tekrarlayan script süresini ~%40 kısalttım; AI tabanlı log analiziyle regresyon false-positive’lerini azalttım.',
      ],
    },
    {
      period: 'Eki 2023 — Mar 2025',
      role: 'Kıdemli QA Otomasyon Mühendisi',
      org: 'CyanGate · OneTeg (DAM & PIM)',
      bullets: [
        'Playwright (Node.js) otomasyon projesini sıfırdan kurdum — Smoke, Regresyon ve E2E — ve kapsamı %40’tan %85’e çıkardım.',
        'CI/CD’ye (Jenkins, Bitbucket) entegre ettim; Allure raporlama ve Mockoon mock API’leri ekledim; paralel koşumla hızı optimize ettim.',
        'Hızlı ve düşük-gürültülü bir suit için visual regression ve self-healing locator stratejileri ekledim.',
      ],
    },
    {
      period: 'Nis 2023 — Ağu 2023',
      role: 'QA Otomasyon Mühendisi',
      org: 'Meva Avionics · Baykar Teknoloji',
      bullets: [
        'İlk kurulan test ekibinde yer aldım; İHA kokpit gömülü yazılımı için test mimarisini sıfırdan kurdum.',
        'Python ile QT / Tkinter; USB, Ethernet, RS232/422/485 ve CAN protokolleri.',
        'STM32 (ARM Cortex-M) ve TI Sitara (AM6442) üzerinde UART / SPI / I2C veri bütünlüğü analiziyle uçtan uca sistem testleri.',
      ],
    },
    {
      period: 'Şub 2022 — Oca 2023',
      role: 'QA Otomasyon Mühendisi',
      org: 'Lotec',
      bullets: [
        'IoT, akıllı aydınlatma (DALI) ve sınav-sistemi projelerinde Selenium WebDriver (Python) ile E2E, regresyon ve smoke otomasyonu.',
        'Apache JMeter ile 500.000 eşzamanlı kullanıcı için yük testleri tasarladım.',
        'AWS mikroservisleri (CloudWatch, DynamoDB, IoT Core, S3) üzerinde REST, GraphQL ve WebSocket API testleri.',
      ],
    },
    {
      period: 'Şub 2020 — Oca 2022',
      role: 'Kıdemli Medikal QA Uzmanı · Ekip Lideri',
      org: 'Proted · Protez ve Ortez',
      bullets: [
        'Tüm kalite mühendisleri ve test teknikerlerinin ekip lideriydim.',
        'ISO 13485, MDR/745, ISO 9001 ve ISO 14001 uyumunu sağladım.',
        'Sağlık Bakanlığı ÜTS sisteminde MDR teknik dosyaları, risk analizi ve cihaz ruhsatlandırmayı yönettim.',
      ],
    },
    {
      period: '2014 — 2018',
      role: 'Medikal Cihaz QA & Ürün Uzmanı',
      org: 'Eldaş · Okuman Medikal',
      bullets: [
        'IEC 60601-1 ve EN 61010-1’e göre elektriksel güvenlik testleri; ISO 14971 risk dosyaları ve test raporları.',
        'Anestezi ve yoğun bakım cihaz gruplarında ürün uzmanlığı — medikal cihaz temelimin başlangıcı.',
      ],
    },
  ],

  industries: [
    { title: 'Kurumsal BT', sub: 'DAM / PIM, kamu platformları, büyük ölçekli web' },
    { title: 'Medikal Cihazlar', sub: 'ISO 13485 · MDR · IEC 60601' },
    { title: 'Savunma & Avionik', sub: 'Baykar · gömülü İHA sistemleri' },
    { title: 'Bulut & IoT', sub: 'AWS · IoT Core · mikroservisler' },
  ],

  education: [
    { title: 'Lisans — Biyomedikal Mühendisliği', meta: 'Erciyes Üniversitesi, Kayseri · 2009–2013' },
  ],

  certifications: [
    { title: 'Node.js Backend Development Bootcamp', meta: 'Patika.dev / NewMind · 2025' },
    { title: 'Test Automation with Playwright', meta: 'Udemy · 2024' },
    { title: 'AWS Cloud Practitioner Essentials', meta: '2023' },
    { title: 'Agile Testing Certification', meta: '2022' },
  ],

  ui: {
    nav: { about: 'Hakkımda', impact: 'Etki', skills: 'Yetenekler', work: 'Deneyim', contact: 'İletişim' },
    sections: {
      aboutEyebrow: 'Hakkımda',
      aboutTitle: 'Kaliteye bakışım',
      impactEyebrow: 'Etki',
      impactTitle: 'Ölçülebilir sonuçlar',
      skillsEyebrow: 'Araç Kutusu',
      skillsTitle: 'Çalıştığım teknolojiler',
      workEyebrow: 'Deneyim',
      workTitle: 'Bunu nerede yaptım',
      industriesEyebrow: 'Alanlar',
      industriesTitle: 'Sektörler arası test',
      educationEyebrow: 'Temeller',
      educationTitle: 'Eğitim & sertifikalar',
      educationLabel: 'Eğitim',
      certsLabel: 'Sertifikalar',
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Kalite',
      titleAccent: 'konuşalım.',
      sub: 'Kıdemli SDET ve QA-mimarisi rollerine açığım — uzaktan ya da Ankara. Ne geliştirdiğinizi ve kalitenin nerede zorlandığını yazın.',
      name: 'Adınız',
      namePlaceholder: 'Ayşe Yılmaz',
      email: 'E-posta',
      emailPlaceholder: 'siz@firma.com',
      message: 'Mesaj',
      messagePlaceholder: 'Ne geliştiriyorsunuz ve kalite nerede zorlanıyor?',
      send: 'Mesaj gönder',
      sending: 'Gönderiliyor…',
      success: 'Teşekkürler — mesajınız bana ulaştı. En kısa sürede dönerim.',
      errorPrefix: 'Şu an gönderilemedi. Doğrudan e-posta atabilirsiniz:',
      emailLabel: 'E-posta',
      linkedinLabel: 'LinkedIn',
      current: 'Güncel',
    },
    footer: 'Tasarım & geliştirme: Özge Büyüktorun',
    switchTo: 'EN',
  },
};
