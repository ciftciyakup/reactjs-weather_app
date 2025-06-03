# React.js Location Based Weather App

React.js tabanlı, kullanıcının konumuna göre hava durumu bilgilerini gösteren modern bir web uygulaması. usePosition custom hook ve Bootstrap kullanılarak geliştirilmiştir.

## 📸 Ekran Görüntüleri

### Ana Sayfa
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs-weather_app/blob/master/project-images/home-desktop.png" alt="Home Desktop" height="340"/>
      <br><em>Desktop</em>
    </td>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs-weather_app/blob/master/project-images/home-mobile.png" alt="Home Mobile" height="340"/>
      <br><em>Mobil</em>
    </td>
  </tr>
</table>

### Konum Erişimi Reddedildiğinde
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs-weather_app/blob/master/project-images/access_denied-desktop.png" alt="Home Desktop" height="340"/>
      <br><em>Desktop</em>
    </td>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs-weather_app/blob/master/project-images/access_denied-mobile.png" alt="Home Mobile" height="340"/>
      <br><em>Mobil</em>
    </td>
  </tr>
</table>

## 🚀 Özellikler

- **Konum Tabanlı Hava Durumu**: Kullanıcının mevcut konumuna göre otomatik hava durumu bilgisi
- **Responsive Tasarım**: Mobil ve masaüstü cihazlarla uyumlu görünüm
- **Gerçek Zamanlı Veriler**: OpenWeatherMap API ile güncel hava durumu bilgileri
- **Çoklu Dil Desteği**: Tarayıcı diline göre otomatik dil seçimi
- **Modern UI**: Bootstrap ile şık ve kullanıcı dostu arayüz

## 🛠️ Kullanılan Teknolojiler

- **React.js** (v18.2.0) - Frontend framework
- **Axios** (v1.2.5) - HTTP client
- **Bootstrap** - CSS framework
- **use-position** (v1.0.0) - Konum erişimi için custom hook
- **OpenWeatherMap API** - Hava durumu verileri

## 📦 Kurulum

1. **Projeyi klonlayın**
   ```bash
   git clone https://github.com/ciftciyakup/reactjs-weather_app.git
   cd reactjs-weather_app
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **API Anahtarı Ayarlayın**
   
   Proje kök dizininde `.env` dosyası oluşturun:
   ```
   REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key_here
   ```
   
   OpenWeatherMap API anahtarı almak için [buraya](https://openweathermap.org/api) tıklayın.

4. **Uygulamayı başlatın**
   ```bash
   npm start
   ```

   Uygulama [http://localhost:3000](http://localhost:3000) adresinde açılacaktır.

## 📁 Proje Yapısı

```
reactjs-weather_app/
├── project-images/           # Ekran görüntüleri
│   ├── access_denied-desktop.png
│   ├── access_denied-mobile.png
│   ├── home-desktop.png
│   └── home-mobile.png
├── public/                   # Public dosyalar
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/                      # Kaynak kodlar
│   ├── components/
│   │   └── Weather.js        # Hava durumu bileşeni
│   ├── App.js               # Ana uygulama bileşeni
│   └── index.js             # Uygulama giriş noktası
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🎯 Kullanım

1. Uygulamayı açtığınızda konum erişimi izni isteyecektir
2. İzin verdiğinizde mevcut konumunuzun hava durumu otomatik olarak yüklenecektir
3. Sıcaklık, nem, rüzgar hızı ve diğer hava durumu bilgilerini görüntüleyebilirsiniz

## 🔧 Mevcut Komutlar

Proje dizininde çalıştırabileceğiniz komutlar:

### `npm start`

Uygulamayı geliştirme modunda çalıştırır.
[http://localhost:3000](http://localhost:3000) adresinde görüntüleyebilirsiniz.

Değişiklik yaptığınızda sayfa otomatik olarak yeniden yüklenir.
Konsol'da lint hatalarını da görebilirsiniz.

### `npm test`

Test çalıştırıcısını interaktif izleme modunda başlatır.
Testler hakkında daha fazla bilgi için [running tests](https://facebook.github.io/create-react-app/docs/running-tests) bölümüne bakın.

### `npm run build`

Uygulamayı production için `build` klasörüne derler.
React'i production modunda doğru şekilde paketler ve en iyi performans için optimize eder.

Derleme küçültülür ve dosya adları hash içerir.
Uygulamanız deploy edilmeye hazır!

Deploy hakkında daha fazla bilgi için [deployment](https://facebook.github.io/create-react-app/docs/deployment) bölümüne bakın.

## 🌐 API Referansı

Bu proje OpenWeatherMap API kullanır:

**Endpoint:** `https://api.openweathermap.org/data/2.5/weather`

**Parametreler:**
- `lat`: Enlem
- `lon`: Boylam  
- `appid`: API anahtarı
- `units`: Birim sistemi (metric)
- `lang`: Dil kodu

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Yakup Çiftçi**
- GitHub: [@ciftciyakup](https://github.com/ciftciyakup)
- LinkedIn [yakup-ciftci](https://www.linkedin.com/in/yakup-ciftci/)

## 🙏 Teşekkürler

- [Create React App](https://github.com/facebook/create-react-app) - React uygulama şablonu
- [OpenWeatherMap](https://openweathermap.org/) - Hava durumu API'si
- [Bootstrap](https://getbootstrap.com/) - CSS framework

---

⭐ Bu projeyi beğendiyseniz yıldızlamayı unutmayın!
