# Sciascia-Caff-Webstie

Sciascia Caffè 1919 için hazırlanmış, tek sayfalı ve statik bir kahve markası web arayüzüdür. Projenin amacı; güçlü bir ilk ekran, ürün keşfi, marka hikayesi, menü sunumu, açılış saatleri ve müşteri yorumlarını modern bir landing page akışı içinde birleştirmektir.

Site **Yunus Emre Gurlek** tarafından hazırlanmıştır. Footer içinde proje kredisi **SoftBridge Solutions** olarak gösterilir.

## Technical Overview

Bu proje Next.js App Router mimarisiyle geliştirilmiş bir frontend uygulamasıdır. Backend, API route, CMS, veritabanı veya runtime environment değişkeni gerektirmez. İçerik ve görsel yapı component seviyesinde tutulur; statik assetler `public/assets` altında yönetilir.

Ana teknolojiler:

- Next.js 15 App Router
- React 18 client/server component yapısı
- TypeScript
- TailwindCSS
- GSAP ScrollTrigger
- Framer Motion
- Locomotive Scroll
- Swiper
- Next Image optimization

## Application Structure

`app/layout.tsx` global metadata, font yükleme, Header ve Footer yerleşimini yönetir. SEO title, description, Open Graph, Twitter Card, creator, publisher ve application metadata bu dosyada merkezi olarak tanımlanır.

`app/page.tsx` ana landing page kompozisyonudur. Sayfa Hero, Explore, About, Menu, Opening Hours ve Testimonials bölümlerini sıralar. Locomotive Scroll client tarafında dinamik import ile başlatılır.

`components/Hero.tsx` video arka planlı ilk ekranı oluşturur. Marka başlığı, kısa açıklama, dekoratif badge, separator ve CTA bu bölümde yer alır.

`components/Explore/Explore.tsx` kahve türlerini iki metin kolonu ve merkezde ürün görseliyle sunar. Bardak görseli `public/assets/explore/cup.png` dosyasından gelir ve Sciascia Caffè yazısı asset üzerinde işlenmiştir.

`components/About.tsx` GSAP ScrollTrigger ile yatay panel geçişi kullanan marka hikayesi bölümüdür. Journey, Promise ve Team panelleri ayrı içerik blokları olarak tanımlanır.

`components/Menu/Menu.tsx` statik kahve menüsünü grid yapısında gösterir. Ürün adları, açıklamalar, fiyatlar ve görseller component içindeki veri dizisi üzerinden render edilir.

`components/OpeningHours.tsx` açılış saatleri bölümünü arka plan görseli, overlay ve program badge asset’i ile sunar.

`components/Testimonials.tsx` Swiper tabanlı yorum carousel yapısını içerir.

`components/Footer.tsx` logo, navigasyon linkleri, SoftBridge Solutions proje kredisi ve telif satırını yönetir. Sosyal medya ikonları kaldırılmıştır.

## Branding

Görünen marka adı:

`Sciascia Caffè 1919`

Temel marka yüzeyleri:

- Header logo
- Hero headline
- SEO metadata
- Open Graph metadata
- Footer logo
- About copy
- Product cup asset
- README ve LICENSE attribution

## Assets

Ana görsel dosyaları `public/assets` altında tutulur.

- `public/assets/logo.svg`: Sciascia Caffè 1919 wordmark
- `public/assets/explore/cup.png`: Sciascia Caffè yazılı bardak görseli
- `public/assets/hero/video.mp4`: Hero video arka planı
- `public/assets/about/*`: About bölüm görselleri
- `public/assets/menu/*`: Menü ürün görselleri
- `public/assets/opening-hours/*`: Açılış saatleri görselleri
- `public/assets/footer/bg.png`: Footer arka planı

## Styling

TailwindCSS yapılandırması `tailwind.config.ts` içinde yer alır. Renkler, font aileleri, container davranışı, özel breakpoint ve background image tokenları bu dosyada tanımlanır. Global yardımcı sınıflar `app/globals.css` içinde tutulur.

Kullanılan ana tasarım tokenları:

- `primary`: koyu kahve/siyah arka plan yüzeyleri
- `accent`: kahve tonlu vurgu rengi
- `font-primary`: başlık karakteri
- `font-secondary`: gövde ve UI metinleri

## Animation Model

Animasyon yapısı üç farklı katmanda çalışır:

- Framer Motion: navigasyon açılışı, menü animasyonları ve UI geçişleri
- GSAP ScrollTrigger: About bölümündeki pinned horizontal scroll
- Locomotive Scroll: smooth scroll ve parallax davranışı

Bu ayrım, her animasyon türünü kendi güçlü olduğu kullanım alanında tutar ve componentlerin okunabilir kalmasını sağlar.

## Vercel Readiness

Proje Vercel üzerinde Next.js uygulaması olarak çalışacak şekilde hazırlanmıştır. `vercel.json` yalnızca framework bilgisini taşır ve App Router akışını bozabilecek statik SPA rewrite kuralları içermez.

Next image kalite uyarıları için `next.config.mjs` içinde `images.qualities` yapılandırması eklenmiştir. Bu ayar, ilerideki Next sürümlerinde `quality={100}` kullanılan görseller için uyumluluk sağlar.

## Ownership

Site author attribution:

`Yunus Emre Gurlek`

Footer project credit:

`This project was made by SoftBridge Solutions.`

## License

MIT License. Copyright bilgisi LICENSE dosyasında `Yunus Emre Gurlek` olarak tanımlanmıştır.
