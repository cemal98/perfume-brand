# Sketchfab Model Entegrasyonu

## Model Bilgileri
- **Model ID**: c6de4b728fb74cddaa5ca1e156e45c17
- **URL**: https://sketchfab.com/3d-models/05-parfum-c6de4b728fb74cddaa5ca1e156e45c17
- **Yazar**: Pedro França

## GLB Dosyasını İndirme

### Yöntem 1: Sketchfab'dan Direkt İndirme
1. https://sketchfab.com/3d-models/05-parfum-c6de4b728fb74cddaa5ca1e156e45c17 adresine git
2. "Download 3D Model" butonuna tıkla
3. GLB formatını seç
4. Dosyayı `public/models/perfume.glb` olarak kaydet

### Yöntem 2: Sketchfab API (Gelişmiş)
```bash
# Sketchfab API token gerekli
# Model download için API kullanılabilir
```

## Dosya Yerleştirme

```
public/
 └── models/
      └── perfume.glb  ← Buraya koy
```

## Kod Entegrasyonu

Model dosyasını ekledikten sonra, `components/PerfumeBottle.tsx` dosyasında GLB loader aktif olacak.

### Manuel Test

1. Model dosyasını `public/models/perfume.glb` olarak kaydet
2. `npm run dev` ile çalıştır
3. Model otomatik yüklenecek

## Not

Eğer model dosyası yoksa, sistem otomatik olarak profesyonel bir fallback şişe gösterecek. Bu fallback:
- Gerçekçi cam efekti
- Altın sıvı
- Lüks kapak
- Altın dekoratif halkalar
- Profesyonel gölgeler

İçerir ve production-ready'dir.

