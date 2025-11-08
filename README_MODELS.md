# 3D Model Setup Guide

## Model İndirme ve Kurulum

Projede gerçek 3D GLB modelleri kullanmak için aşağıdaki adımları izleyin:

### 1. Model İndirme

Önerilen modellerden birini seçin ve indirin:

#### 💎 Önerilen: Sketchfab Perfume Bottle
- **URL**: https://sketchfab.com/3d-models/perfume-bottle-glass-c4a56b0e66c04c61a676e912064dfb23
- **Format**: .glb
- **Lisans**: CC Attribution (krediyle ticari kullanım serbest)
- **Özellikler**: Gerçek cam efekti, sıvı bölümü, light reflection

#### 🌸 Alternatif: CGTrader Luxury Perfume
- **URL**: https://www.cgtrader.com/free-3d-models/household/cosmetics/perfume-bottle-16b23a
- **Format**: .glb
- **Lisans**: Free for commercial use
- **Özellikler**: Gold cap, transparent body, PBR materials

#### 🩶 Chanel-style Bottle
- **URL**: https://sketchfab.com/3d-models/chanel-perfume-0e89ab31a5ad495a907dc75bce00953f
- **Format**: .glb
- **Lisans**: CC Attribution
- **Özellikler**: Kare hatlar, metal yansımalı kapak

### 2. Dosya Yerleştirme

İndirdiğiniz `.glb` dosyasını şu konuma koyun:

```
public/
 └── models/
      └── perfume.glb
```

### 3. Klasör Oluşturma

Eğer `public/models/` klasörü yoksa, oluşturun:

```bash
mkdir -p public/models
```

### 4. Dosya Adlandırma

Model dosyasını `perfume.glb` olarak adlandırın. Farklı bir isim kullanmak isterseniz, `components/PerfumeBottle.tsx` dosyasında `modelPath` değerini güncelleyin:

```typescript
const modelPath = "/models/your-model-name.glb";
```

### 5. Fallback Sistemi

Eğer model dosyası bulunamazsa, sistem otomatik olarak basit bir fallback şişe gösterir. Bu sayede model olmadan da site çalışır.

## Model Özelleştirme

### Scale ve Position Ayarlama

`components/PerfumeBottle.tsx` dosyasında model ölçeğini ve pozisyonunu ayarlayabilirsiniz:

```typescript
<group ref={groupRef} scale={2.5} position={[0, -1, 0]}>
  <primitive object={clonedScene} />
</group>
```

### Animasyonlar

Scroll ve mouse hareketlerine göre model döner. Bu animasyonları `useFrame` içinde özelleştirebilirsiniz.

### Işıklandırma

Model, sahne ışıklandırmasından etkilenir. `app/page.tsx` dosyasında ışıklandırmayı ayarlayabilirsiniz.

## Performans İpuçları

1. **Model Optimizasyonu**: Büyük modelleri optimize edin (Blender veya online araçlarla)
2. **Lazy Loading**: Model Suspense ile lazy load edilir
3. **Preloading**: Model preload edilir (opsiyonel)
4. **Fallback**: Model yüklenemezse basit fallback gösterilir

## Sorun Giderme

### Model görünmüyor
- Dosya yolunu kontrol edin: `public/models/perfume.glb`
- Browser console'da hata var mı kontrol edin
- Fallback şişe görünüyorsa model yüklenememiş demektir

### Performans sorunları
- Model boyutunu küçültün
- Model içindeki gereksiz detayları kaldırın
- `scale` değerini düşürün

### Materyaller görünmüyor
- Model PBR materyalleri içermelidir
- Environment mapping etkin olmalıdır
- Işıklandırma yeterli olmalıdır

## Test

Modeli test etmek için:

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` adresine gidin. Model yükleniyorsa görünecektir, yoksa fallback gösterilecektir.

