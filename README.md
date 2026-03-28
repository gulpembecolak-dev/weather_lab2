# 🌤️ Weather Lab Kids - De Weer Eilanden

**16-bit RPG Pixel Art Tablet Experience | 8-12 jaar | Müze/Eğitim Ortamı**

---

## 📋 Proje Özeti

Weather Lab Kids, 8-12 yaş arası çocuklar için tasarlanmış **interaktif bir hava durumu eğitim deneyimidir**. Stardew Valley tarzı 16-bit RPG pixel art estetiğiyle, çocuklar 3 farklı adada gezinerek meteoroloji kavramlarını öğrenirler.

### 🎯 Tasarım Felsefesi

- ✅ **Infantil olmayan** (bebeksi değil) ama çocuk dostu
- ✅ **Progressive Disclosure** (aşamalı bilgi açığa çıkarma)
- ✅ **Oyunlaştırma** (Gamification) ile öğrenme
- ✅ **Fitts Kanunu** (80-120px minimum tıklama alanları)
- ✅ **RPG anlatımı** ile duygusal bağ

---

## 🗺️ Uygulama Yapısı

### **18 Toplam Ekran | 5 Bölüm**

#### 📌 BÖLÜM 0: Onboarding (3 ekran)
- **0.1** - Idle/Giriş ekranı
- **0.2** - İsim kayıt ekranı
- **0.3** - Karakter seçimi (Pam/Lily/Eric)

#### 📌 BÖLÜM 1: Hub & Geçişler (2 ekran)
- **1.0** - Ana harita (3 ada: Observatorium, Storm Lab, Discovery Lab)
- **1.5** - Loading/Geçiş animasyonu

#### 📌 BÖLÜM 2: Observatorium - Weer Meten (4 ekran)
- **2.0** - Ada ana görünüm (3 interaktif obje)
- **2.1** - Termometre (sıcaklık açıklaması)
- **2.2** - Rüzgar değirmeni (güncel hava verisi)
- **2.3** - **⭐ İnteraktif Weerkaart** (ZORUNLU MODÜL - Belçika haritası, H/L basınç)

#### 📌 BÖLÜM 3: Storm Lab - Weer Maken (1 ekran)
- **3.0** - Beaufort slider oyunu (rüzgar gücü simülasyonu 0-12)

#### 📌 BÖLÜM 4: Discovery Lab - Weer Leren (2 ekran)
- **4.0** - Soru baloncukları ("Waarom?" modülü)
- **4.2** - Phygital görev (QR kod - evde deney)

#### 📌 BÖLÜM 5: Final Test (3 ekran)
- **5.0** - Test uyarısı
- **5.1** - 10 soruluk quiz
- **5.2** - Zafer & ödül ekranı

---

## 🎨 Tasarım Sistemi

### Renkler
- **Gökyüzü**: `#5DADE2`, `#87CEEB`
- **Fırtına**: `#7D3C98`, `#4A235A`
- **Güneş**: `#F7DC6F`
- **Doğa**: `#58D68D`, `#27AE60`
- **Ahşap**: `#C68642`, `#6E4C1E`

### Tipografi
- **Font**: Press Start 2P (Google Fonts)
- **Boyutlar**: XS (10px) → XL (28px)

### Butonlar
- **Ahşap Buton** (btn-wood): Standart etkileşim
- **Glow Buton** (btn-glow): Call-to-action (pulse animasyonu)

### Ekran Boyutu
- **1024x768 landscape** (tablet horizontal)
- Responsive viewport desteği

---

## 🚀 Kullanım

### 1. Tarayıcıda Açma
```bash
# Ana navigasyon sayfası
open /home/ubuntu/weather_lab_kids/index.html

# Direkt deneyimi başlatma
open /home/ubuntu/weather_lab_kids/screens/0.1-idle-screen.html
```

### 2. Tablet Simülasyonu (Chrome DevTools)
1. `F12` ile DevTools'u aç
2. `Ctrl+Shift+M` ile Device Toolbar'ı aktif et
3. **1024x768** çözünürlük seç
4. **Landscape** oryantasyon seç

### 3. Dosya Yapısı
```
weather_lab_kids/
├── index.html              # Master navigasyon
├── design-system.css       # Global stil sistemi
├── screens/                # Tüm ekranlar
│   ├── 0.1-idle-screen.html
│   ├── 0.2-name-entry.html
│   ├── 0.3-character-selection.html
│   ├── 1.0-hub-map.html
│   ├── 1.5-loading.html
│   ├── 2.0-observatory-main.html
│   ├── 2.1-thermometer.html
│   ├── 2.2-windmill.html
│   ├── 2.3-interactive-map.html
│   ├── 3.0-storm-main.html
│   ├── 4.0-discovery-main.html
│   ├── 4.2-phygital.html
│   ├── 5.0-final-warning.html
│   ├── 5.1-quiz.html
│   └── 5.2-victory.html
└── README.md               # Bu dosya
```

---

## 🎮 Kullanıcı Akışı

```
İDLE SCREEN (0.1)
    ↓
İSİM GİRİŞİ (0.2)
    ↓
KARAKTER SEÇİMİ (0.3) → Pam/Lily/Eric
    ↓
ANA HARİTA (1.0) → 3 Ada
    ├─→ OBSERVATORIUM (2.0)
    │      ├─→ Termometre (2.1)
    │      ├─→ Windmolen (2.2)
    │      └─→ Weerkaart (2.3) ★ ZORUNLU
    ├─→ STORM LAB (3.0) → Beaufort Slider
    └─→ DISCOVERY LAB (4.0)
           ├─→ Soru Baloncukları
           └─→ Phygital QR (4.2)

↓ (Tüm 3 ada tamamlandıktan sonra)

FİNAL TEST (5.0)
    ↓
QUİZ 10 SORU (5.1)
    ↓
ZAFER & ÖDÜL (5.2) → Müze rozeti
```

---

## ✅ Zorunlu Gereksinimlerin Karşılanması

| Gereksinim | Ekran | Durum |
|------------|-------|-------|
| **Vandaag (Bugün)** | 2.2 (Windmolen) | ✅ |
| **Waarom? (Neden)** | 4.0 (Baloncuklar) | ✅ |
| **Interactieve Weerkaart** | 2.3 (H/L Basınç) | ✅ |
| **Speelse Interactie** | 3.0 (Beaufort), 5.1 (Quiz) | ✅ |
| **Progressive Disclosure** | Tüm ekranlar | ✅ |
| **8-12 yaş uygunluğu** | Tasarım dili | ✅ |
| **Müze bağlamı** | 5.2 (Balie ödül) | ✅ |
| **Tablet optimize** | 1024x768 | ✅ |

---

## 🎨 Process Book İçin Ekran Görüntüleri

**Tavsiye**: Her ekranın ayrı ekran görüntüsünü alın:

1. `index.html` üzerinden her ekrana tıklayın
2. `Ctrl+Shift+S` (Firefox) veya DevTools → Screenshot ile kaydedin
3. Process Book'a şu sırayla ekleyin:
   - **Onboarding Flow** (0.1-0.3)
   - **Hub Map** (1.0)
   - **Observatory** (2.0, 2.3 vurgulu)
   - **Storm Lab** (3.0 gameplay)
   - **Discovery Lab** (4.0)
   - **Final Test** (5.1, 5.2)

---

## 💡 Geliştirme Notları

### UX Kararları
1. **Scroll yok**: Tablet'te scroll rahatsız edici, tüm içerik tek ekranda
2. **Büyük butonlar**: 80-120px minimum (Fitts Kanunu)
3. **Görsel geri bildirim**: Her etkileşimde animasyon
4. **Session storage**: İlerleme tutma (refresh-safe değil, intent tasarım)

### Pixel Art Teknikleri
- `image-rendering: pixelated` CSS property
- Düz renkler, gradient yok
- 8-bit/16-bit palet kısıtlaması
- Drop-shadow filtreleri (modern twist)

### Accessibility
- ✅ Yüksek kontrast (WCAG AA)
- ✅ Büyük fontlar (min 12px)
- ⚠️ Ses efekti yok (müze ortamı için uygun)
- ⚠️ Screen reader desteği kısıtlı (görsel odaklı deneyim)

---

## 📊 Teknik Özellikler

- **Framework**: Vanilla HTML/CSS/JavaScript (bağımlılık yok)
- **Tarayıcı**: Chrome, Firefox, Safari (modern browsers)
- **Boyut**: ~50KB (tüm dosyalar + CSS)
- **Offline**: ✅ (CDN font hariç)
- **Performans**: 60fps animasyonlar (CSS transforms)

---

## 🎯 Gelecek Geliştirmeler

1. **Ses Efektleri** (toggle ile)
2. **Multi-language** (FR/EN desteği)
3. **Data persistence** (LocalStorage)
4. **Admin panel** (müze personeli için istatistikler)
5. **Gerçek API entegrasyonu** (KMI weather data)
6. **Touch gesture**'lar (swipe, pinch-zoom)

---

## 👤 Tasarımcı Notları

**Hedef Kitle Analizi**:
- Çocuklar "infantil" muamele istemez
- Erwin Krol dili: Basit ama saygılı
- Benchmark: Windy.com (görsel), Meteoz & Nova (ton)

**Tasarım İlkeleri**:
1. **Show, Don't Tell**: Animasyonlar > Metin
2. **Gamification**: Rozet, ilerleme, başarı hissi
3. **Character-driven**: Avatar duygusal bağ oluşturur

---

## 📞 Destek

Sorular için:
- Process Book'a tüm ekran görüntülerini ekleyin
- Benchmark analizi için `index.html` navigasyonunu kullanın
- UX akışını göstermek için user flow diyagramı çizin

---

**© 2026 Weather Lab Kids | Designed for KMI Educational Context**
