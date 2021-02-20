# vue-router-ile-route-yonetimi

> A Vue.js project


# Notes

Router ve children tanımlama,

Dinamik router yönetimi,

Router da query yönetimi,

Çoklu route yapısı,

Wildcard ile olmayan sayfaya girilmeye çalışıldığında anasayfaya atma,

Router-link ile menü oluşturma ve active kontrolü,

Router-view ile route'a göre component gösterimi,

Hash Fragment ( url de #name gibi yönlendirme ) kontrolü ve sayfa kaydırma,

scrollBehavior ile scroll yönetimi (main.js),

Guard Hook ile route koruma ; ************ ÖNEMLİ *****************

-  *router.beforeEach((to, from, next){})* => Global bir kontroldür. Tüm sayfaları, açılmadan önce kontrol eder.(main.js)

-  *beforeEnter: (to, from, next)* => Route bazlı kontroldür. (routes.js)

-  *beforeRouteEnter(to, from, next)* => Component içinde yazılır. Component oluşturulmadan önce bu kontrolden geçer ve eğer şartlar sağlanırsa componenti yükler. (yetki kontrolleri vs. yapılabilir. Component yüklenmeden kontrol sağlandığı için data() da ki verileri göremez. localStorage cookie gibi alanlardan kontrol sağlanabilir. )

-   *beforeRouteLeave(to, from, next)* => Component içine yazılır. Component oluştuktan sonra çalışacağı için data() içindeki değişkenlere göre işlemler yaptırılabilir. (çıkış işlemleri gibi ... useredit.vue sayfasında örnek )

# Documents

-   vue-router Github : https://github.com/vuejs/vue-router

-   vue-router : https://router.vuejs.org/en/


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
