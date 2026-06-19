import type { Dict } from './types';

export const tr: Dict = {
  profile: {
    name: 'Özge Büyüktorun',
    role: 'Kıdemli Kalite Güvence & Test Otomasyon Mühendisi — SDET',
    location: 'Ankara, Türkiye · Uzaktan',
    email: 'ozgebuyuktorun@outlook.com',
    linkedin: 'https://linkedin.com/in/ozgebuyuktorun1',
    heroLine: 'Analitik düşünme stratejimle kaliteyi ölçülebilir ve güvenilir kılıyorum.s',
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
      { label: 'Deneyim', value: '~13 yıl mühendislik · 7+ yıl QA' },
      { label: 'Konum', value: 'Ankara, Türkiye · Uzaktan' },
      { label: 'Focus', value: 'Playwright · TypeScript · CI/CD · Selenium ·Apache Jmeter ·Postman ·Graphana K6 ·AWS Microservices ·Confluence ·Jira ·Bitbucket ·VS Code ·LoadRunner ·RestAssured ·Cypress ·Katalon Studio' },
      { label: 'Diller', value: 'Türkçe (Ana Dil) · İngilizce (B2–C1) · German (A2–B1)' },
    ],
  },

  metrics: [
    { value: '%40 → %85', context: 'CyanGate’de sıfırdan yeniden kurduğum test kapsamı.' },
    { value: '−%60', context: 'Otomasyonla daha erken yakalanan kritik hatalar.' },
    { value: '500K', context: 'Lotec’te JMeter ile yük testi yaptığım eşzamanlı kullanıcı testleri.' },
    { value: '~%40', context: 'AI destekli üretimle tekrarlayan script’lere harcanan sürede azalma.' },
  ],

  skillGroups: [
    { heading: 'Test Otomasyonu', items: ['Playwright (İleri)', 'Cypress (Orta)', 'Selenium WebDriver', 'Selenium Grid', 'Cucumber / Gherkin', 'PyTest', 'Robot Framework', 'QT Framework', 'Tkinter'] },
    { heading: 'API & Performans', items: ['RESTful API', 'GraphQL', 'WebSocket', 'Postman', 'SoapUI', 'JMeter', 'Grafana K6', 'RestAssured', 'Mockoon'] },
    { heading: 'AI Destekli Kalite', items: ['GitHub Copilot', 'Claude AI', 'ChatGPT', 'MCP Ajanları', 'Self-Healing Testler', 'Visual AI (Applitools)', 'Predictive Test Analytics', 'Prompt Mühendisliği', 'Sentetik Veri'] },
    { heading: 'Test Yönetimi & Yöntemler', items: ['Jira', 'X-RAY', 'Confluence', 'BDD', 'Gherkin', 'Shift-Left Testing', 'UAT', 'Regresyon', 'Smoke', 'E2E', 'Load & Stress'] },
    { heading: 'Backend & Veri', items: ['JavaScript (İleri)', 'TypeScript', 'Node.js', 'Python', 'Java', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'OracleDB', 'Apache Kafka'] },
    { heading: 'DevOps & Bulut', items: ['Jenkins', 'GitLab CI', 'Bitbucket Pipelines', 'Azure DevOps', 'Git', 'SVN', 'Docker', 'Kubernetes', 'AWS (CloudWatch, DynamoDB, IoT Core, S3, Cognito)'] },
  ],

  experience: [
    {
      period: 'Ağustos 2025 — Devam ediyor',
      role: 'Kıdemli Kalite Güvence Otomasyon Mühendisi',
      org: 'Toptal · Almanya merkezli müşterilerle uzaktan · Ankara, Türkiye',
      current: true,
      summary:
        'Almanya merkezli mühendislik ekipleriyle uzaktan işbirliği yaparak büyük ölçekli uluslararası yazılımlar için uçtan uca otomasyon stratejilerini mimarlandırıyor ve hayata geçiriyorum.',
      bullets: [
        'Sensör ve donanım tabanlı bir projede web ve mobil kısımda otomasyon, API testleri, regresyon ve smoke testlerinin planlanması, hazırlanması ve sürdürülmesi.',
        'MCP (Model Context Protocol) tabanlı sistemlerde otomatik testlerin ve test ajanlarının koşulması; otomasyon ajanlarının ve test süreçlerinin CI entegrasyonu.',
        'Yüksek performanslı web uygulamaları için Playwright ve TypeScript kullanarak ölçeklenebilir test framework’leri geliştirme.',
        'CI/CD entegrasyonu ve shift-left testing yaklaşımları konusunda teknik danışmanlık sağlama.',
        'Rutin bakımı otomatize etmek ve akıllı sentetik veri üretimi ile test kapsamını genişletmek için AI destekli test araçlarının entegrasyonuna öncülük etme.',
      ],
      tags: ['Playwright', 'TypeScript', 'MCP', 'Web & Mobil', 'API', 'CI/CD', 'Shift-Left'],
    },
    {
      period: 'Haziran 2025 — Ağustos 2025 (3 ay)',
      role: 'Kıdemli Kalite Güvence Otomasyon Mühendisi',
      org: 'Bilge Adam Teknoloji · PTT Bilgi Teknolojileri bünyesinde · Ankara · Hibrit',
      bullets: [
        'PTT Kart - MYS ve TR Kart projelerinde kapsamlı manuel ve otomasyon testleri gerçekleştirme.',
        'Selenium ve Java dilinde BDD / Gherkin kullanarak test otomasyon scriptleri geliştirme.',
        'JMeter ile performans ve yük testleri yürütme; Postman ile API entegrasyon testleri.',
        'Jira ve Confluence araçlarıyla test süreçlerini yönetme ve dokümante etme.',
        'Risk analizi ve hata önceliklerine göre test planlaması yapma.',
      ],
      groups: [
        {
          label: 'AI Destekli İyileştirmeler',
          items: [
            'GitHub Copilot ve Claude AI kullanarak tekrarlayan test script geliştirme süresini ~%40 kısaltma.',
            'LLM tabanlı prompt mühendisliği ile test veri setleri ve edge-case senaryolarını otomatik üretme.',
            'AI-powered log analizi ile regresyon testlerindeki false-positive oranlarını azaltma.',
          ],
        },
      ],
      tags: ['Selenium', 'Java', 'BDD / Gherkin', 'JMeter', 'Postman', 'Jira', 'Confluence'],
    },
    {
      period: 'Ekim 2023 — Mart 2025 (1 yıl 6 ay)',
      role: 'Kıdemli Kalite Güvence Otomasyon Mühendisi',
      org: 'CyanGate · OneTeg Projesi (DAM & PIM Entegrasyonları) · Ankara · Hibrit',
      summary:
        'OneTeg Projesi’ne, web kullanıcı arayüzü otomasyonu ve API testlerine odaklanan bir Kalite Güvence Mühendisi olarak katkıda bulundum.',
      bullets: [
        'Gereksinim analizi, test senaryosu tasarımı, test yürütme, hata raporlama ve regresyon testleri.',
        'Playwright (Node.js / JavaScript) ile sıfırdan test otomasyon projesi kurgulanması; Smoke, Regression ve E2E senaryolarının yapılandırılması ve test kapsamının %40’tan %85’e çıkarılması.',
        'Nightly Build süreçlerini takiben rapor analizleri ve erken hata tespiti; HTML ve Allure Report entegrasyonu ile raporlama altyapısı.',
        'Paralel koşum (parallel execution) ve ölçeklenebilir mimari ile test hızı ve verimliliğini optimize etme.',
        'CI/CD süreçlerine entegre test otomasyon framework’leri tasarlama (Jenkins, Bitbucket); Mockoon ile dinamik Mock API ortamları yapılandırma.',
        'Yeni teknoloji entegrasyonu için POC çalışmaları yürütme; izlenebilirlik matrisleri ve test dokümantasyonu hazırlama.',
      ],
      groups: [
        {
          label: 'AI Destekli İyileştirmeler',
          items: [
            'AI destekli araçlarla (Copilot, Claude) Playwright test senaryolarını hızlı scaffold ederek otomasyon geliştirme süresini önemli ölçüde kısaltma.',
            'Visual Regression Testing entegre ederek UI değişikliklerini otomatik tespit etme ve false-positive oranlarını minimize etme.',
            'Self-healing test locator stratejileri ile dinamik web elementlerinde kırılan testlerin otomatik kurtarma mekanizmalarını araştırma.',
            'AI tabanlı sentetik test verisi üretimi ve predictive test selection stratejileri üzerinde çalışma.',
            'LLM tabanlı hata analizi ile bug raporlarının otomatik kategorizasyonu ve kök neden analizini hızlandırma.',
          ],
        },
      ],
      tags: ['Playwright', 'Node.js', 'JavaScript', 'Jenkins', 'Bitbucket', 'Allure', 'Mockoon'],
    },
    {
      period: 'Nisan 2023 — Ağustos 2023 (5 ay)',
      role: 'Kalite Güvence Otomasyon Mühendisi',
      org: 'Meva Avionic · Baykar Teknoloji · Ankara · Ofiste',
      summary:
        'Savunma sanayii öncülerinden Baykar’ın start-up firmasında ilk kurulan ekipte yer aldım; İHA kokpit gömülü yazılımı için test mimarisini sıfırdan kurdum.',
      bullets: [
        'İHA kokpit ekranlarındaki gömülü yazılımlar için coğrafi konum otomasyon testleri tasarlama.',
        'Python / QT / Tkinter ile test otomasyon altyapısını kurma; USB, Ethernet, RS232/422/485 ve CAN protokollerinin aktif kullanımı.',
        'STM32 (ARM Cortex-M) ve AM6442 (Sitara) işlemcili donanımlar üzerinde UART, SPI, I2C protokolleriyle uçtan uca sistem testleri ve veri bütünlüğü analizi.',
        'GitLab CI/CD pipeline entegrasyonu; SVN ve Git ile versiyon kontrol yönetimi.',
      ],
      tags: ['Python', 'QT', 'Tkinter', 'CAN', 'RS232/422/485', 'STM32', 'TI AM6442', 'GitLab CI'],
    },
    {
      period: 'Şubat 2022 — Ocak 2023 (1 yıl)',
      role: 'Kalite Güvence Otomasyon Mühendisi',
      org: 'Lotec Company · Ankara · Ofiste',
      summary:
        'Projeler: Ev Tarımı Uygulamaları (Mobil), Uzaktan Kumandalı Sokak Aydınlatması (DALI, IoT, Web), Braue Kajer Sensör Verileri Projesi (Web), Sertifikalı Öğrenci Sınav Sistemi (Web).',
      bullets: [
        'Selenium WebDriver (Python) ile E2E, Regresyon ve Smoke testlerinin otomasyonu.',
        'Apache JMeter ile anlık 500.000 kullanıcı için performans ve yük testleri tasarlama.',
        'REST API, GraphQL ve WebSocket API testleri; Postman, RestAssured ve Grafana K6 ile API otomasyonu.',
        'AWS Microservice mimarisinde CloudWatch, DynamoDB, IoT Core, S3 servislerini aktif kullanma.',
        'BDD yaklaşımıyla Gherkin syntax kullanarak test senaryoları yazma.',
      ],
      tags: ['Selenium', 'Python', 'JMeter', 'REST', 'GraphQL', 'WebSocket', 'AWS', 'Grafana K6'],
    },
    {
      period: 'Şubat 2020 — Ocak 2022 (2 yıl)',
      role: 'Kıdemli Medikal Kalite Güvence Uzmanı · Ekip Lideri',
      org: 'Proted · Protez ve Ortez · Ankara · Ofiste',
      bullets: [
        'Tüm Kalite Mühendisi ve Test teknikerlerinin ekip lideri olarak görev.',
        'ISO 13485, MDR/745, ISO 9001 ve ISO 14001 standartlarına uygunluğu sağlama.',
        'MDR teknik tıbbi cihaz dosya oluşturma, Risk Analizi, Klinik Araştırma ve literatür inceleme süreçlerini yönetme.',
        'Sağlık Bakanlığı ÜTS sistemine tıbbi cihaz dokümantasyonu ve ruhsatlandırma süreçleri.',
      ],
      tags: ['ISO 13485', 'MDR/745', 'ISO 9001', 'ISO 14001', 'Risk Analizi', 'ÜTS'],
    },
    {
      period: 'Ocak 2018 — Şubat 2020 (2 yıl 2 ay)',
      role: 'Kariyer Boşluğu — Tam Zamanlı Ebeveynlik',
      org: 'Tam Zamanlı Ebeveynlik · Ankara',
      bullets: [
        'İlk oğlum Cihangir’in doğumunun ardından bilinçli bir kariyer molası vererek onun erken gelişimine zaman ayırdım.',
      ],
    },
    {
      period: 'Eylül 2016 — Ocak 2018 (1 yıl 5 ay)',
      role: 'Elektriksel Güvenlik Test Uzmanı',
      org: 'Eldaş Test ve Kalibrasyon Laboratuvarı · Ankara · Ofiste',
      bullets: [
        'IEC 60601-1 ve EN 61010-1 standartlarına uygun elektriksel güvenlik testleri (LVD).',
        'ISO 14971 doğrultusunda risk değerlendirmesi ve teknik dokümantasyon yönetimi.',
        'Medikal cihazlar için test prosedürleri geliştirme ve kapsamlı test raporları (TRF) hazırlama.',
      ],
      tags: ['IEC 60601-1', 'EN 61010-1', 'ISO 14971', 'LVD', 'TRF'],
    },
    {
      period: 'Ağustos 2014 — Ağustos 2015 (1 yıl 1 ay)',
      role: 'Teknik Tıbbi Cihaz Ürün Uzmanı',
      org: 'Okuman Medikal Sistemler A.Ş. · Ankara · Ofiste',
      bullets: [
        'Anestezi ve yoğun bakım ünitelerine hitap eden ürün gruplarında satış, ihale, demo ve kalite dokümanları süreçleri.',
      ],
      tags: ['Anestezi', 'Yoğun Bakım', 'İhale', 'Ürün Demo'],
    },
  ],

  achievements: [
    { title: 'Test Otomasyonu Dönüşümü', detail: 'CyanGate’de test kapsama oranını %40’tan %85’e çıkararak kritik hataları %60 azalttım.' },
    { title: 'CI/CD Entegrasyonu', detail: 'E2E, Smoke ve Regression testlerini Jenkins pipeline’larına entegre ederek bug bulma sürecini hızlandırdım.' },
    { title: 'API Test Framework’ü', detail: 'Mockoon ile dinamik Mock API ortamı kurarak geliştirme hızını iki katına çıkardım.' },
    { title: 'Uluslararası İşbirliği', detail: 'Toptal üzerinden Almanya merkezli ekiplerle uzaktan büyük ölçekli uçtan uca otomasyon liderliği.' },
    { title: 'Cross-functional Köprü', detail: 'Baykar’da gömülü ve yazılım ekipleri arasında köprü kurarak disiplinler arası test süreçlerini optimize ettim.' },
  ],

  competencies: [
    'Güçlü analitik düşünme ve problem çözme',
    'Etkili iletişim ve departmanlar arası işbirliği',
    'QA ekiplerini yönetme ve genç mühendislere mentorluk',
    'Hızlı değişen ortamlarda adaptasyon ve hızlı öğrenme',
    'Süreç iyileştirme ve yenilikçilikte proaktif yaklaşım',
    'Detaylara yüksek dikkat ve kaliteye bağlılık',
  ],

  industries: [
    { title: 'Kurumsal BT', sub: 'DAM / PIM, kamu platformları, büyük ölçekli web' },
    { title: 'Medikal Cihazlar', sub: 'ISO 13485 · MDR · IEC 60601' },
    { title: 'Savunma & Avionik', sub: 'Baykar · gömülü İHA sistemleri' },
    { title: 'Bulut & IoT', sub: 'AWS · IoT Core · mikroservisler' },
  ],

  education: [
    { title: 'Lisans — Biyomedikal Mühendisliği', meta: 'Erciyes Üniversitesi, Kayseri · 2009–2013' },
    { title: 'Lise — Sayısal', meta: 'Rahmi Kula Anadolu Lisesi, Balıkesir · 2004–2008' },
  ],

  certifications: [
    { title: 'Node.js Backend Development Bootcamp', meta: 'Patika.dev / NewMind · 2025' },
    { title: 'Test Automation with Playwright', meta: 'Udemy · 2024' },
    { title: 'AWS Cloud Practitioner Essentials', meta: '2023' },
    { title: 'Agile Testing Certification', meta: '2022' },
  ],

  ui: {
    nav: { about: 'Hakkımda', impact: 'Etki', skills: 'Yetenekler', work: 'Deneyim', achievements: 'Öne Çıkanlar', contact: 'İletişim' },
    sections: {
      aboutEyebrow: 'Hakkımda',
      aboutTitle: 'Kaliteye bakışım',
      impactEyebrow: 'Etki',
      impactTitle: 'Ölçülebilir sonuçlar',
      skillsEyebrow: 'Araç Kutusu',
      skillsTitle: 'Çalıştığım teknolojiler',
      workEyebrow: 'Deneyim',
      workTitle: 'Bunu nerede yaptım',
      achievementsEyebrow: 'Öne Çıkanlar',
      achievementsTitle: 'Başarılar & güçlü yönler',
      achievementsLabel: 'Başarı hikâyeleri',
      competenciesLabel: 'Temel yetkinlikler',
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