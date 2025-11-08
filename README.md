# Pugarlov - Luxury Perfume Brand Website

Modern, lüks parfüm markası landing sayfası. Next.js 14, Three.js ve Framer Motion ile geliştirilmiştir.

## ✨ Özellikler

- 🎬 **Cinematic Loading Animation**: 3D parfüm şişesi dolum animasyonu
- 🎨 **Profesyonel 3D Parfüm Şişesi**: Interaktif 3D model (scroll ve mouse ile animasyon)
- ✨ **Smooth Scrolling**: Lenis.js ile akıcı scroll deneyimi
- 🌊 **Parallax Effects**: Scroll-triggered parallax animasyonlar
- 💨 **Mist Particles**: Parfüm şişesi etrafında ambient partikül efektleri
- 📱 **Mobile-First**: Tüm cihazlarda optimize responsive tasarım
- 🎭 **Framer Motion**: Tüm sayfada smooth animasyonlar ve geçişler
- 🔍 **SEO Optimized**: Meta tags, Open Graph ve proper semantic HTML
- 🎯 **Sketchfab Model Desteği**: GLB model yükleme (opsiyonel)

## 🚀 Hızlı Başlangıç

### Kurulum

```bash
npm install
```

### Development

```bash
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## 📦 Sketchfab Model Entegrasyonu

### Model İndirme

1. Sketchfab model sayfasına git: https://sketchfab.com/3d-models/05-parfum-c6de4b728fb74cddaa5ca1e156e45c17
2. "Download 3D Model" butonuna tıkla
3. GLB formatını seç
4. Dosyayı `public/models/perfume.glb` olarak kaydet

### Dosya Yapısı

```
public/
 └── models/
      └── perfume.glb  ← Model dosyasını buraya koy
```

### Not

Eğer model dosyası yoksa, sistem otomatik olarak profesyonel bir fallback 3D şişe gösterecektir. Fallback şişe:
- Gerçekçi cam efekti
- Altın sıvı
- Lüks siyah kapak
- Altın dekoratif halkalar
- Profesyonel gölgeler
- Scroll ve mouse interaktivitesi

İçerir ve production-ready'dir.

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **React Three Fiber** + **Drei**
- **Three.js**
- **Lenis.js**
- **shadcn/ui**

## 📁 Proje Yapısı

```
perfume-brand/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main homepage
│   └── globals.css      # Global styles
├── components/
│   ├── LoadingScreen.tsx    # Loading animation
│   ├── PerfumeBottle.tsx    # 3D perfume bottle component
│   ├── HeroCanvas.tsx       # Canvas wrapper
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   ├── Collection.tsx       # Perfume collection grid
│   ├── ParallaxText.tsx     # Parallax text component
│   └── ui/
│       └── button.tsx       # Button component
├── lib/
│   └── utils.ts         # Utility functions
└── public/
    └── models/          # 3D models (GLB files)
```

## 🎨 Özelleştirme

### Renkler

`tailwind.config.ts` dosyasında lüks renk paletini özelleştirebilirsiniz:

```typescript
colors: {
  luxury: {
    gold: "#D4AF37",
    "gold-light": "#F4E4BC",
    black: "#0A0A0A",
    beige: "#F5F1E8",
    "beige-dark": "#E8E3D5",
  },
}
```

### İçerik

- `app/page.tsx` - Ana bölümler ve hero içeriği
- `components/Collection.tsx` - Parfüm koleksiyonu öğeleri
- `app/layout.tsx` - SEO metadata

## 🚀 Performance

- Lazy loading with React Suspense
- Optimized 3D renders with React Three Fiber
- Code splitting with Next.js App Router
- Dynamic imports for Three.js components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT

## 🙏 Credits

- 3D Model: [Pedro França on Sketchfab](https://sketchfab.com/3d-models/05-parfum-c6de4b728fb74cddaa5ca1e156e45c17)
- Fonts: Playfair Display, Inter (Google Fonts)
