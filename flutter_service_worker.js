'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ef29cdaa72f0ecb543babec8f24fca5c",
"assets/AssetManifest.json": "941a1f316004582ed477d5eb30937fcb",
"assets/assets/about.png": "9173737d8699fc8c9ba82e370c95dd41",
"assets/assets/apple.png": "8a355e8c1e9a58babc5e7f8de97a6065",
"assets/assets/applogo.png": "64eb2674ceb476d09686138f83c1666a",
"assets/assets/Bag.png": "601d10ea5b0ee361b838b03cd9e336c3",
"assets/assets/banner1.png": "d8d42c74fad458c3e8a2cd880723b6af",
"assets/assets/banner2.png": "0bd85976e65c7fae41b635ffb34622dc",
"assets/assets/bfood.jpg": "56d250001eb90c037f3b7a50e3ab6724",
"assets/assets/burgerking.png": "a1d95cc7f474805d8d2cf906915758a5",
"assets/assets/Buy.png": "17d7fd33d5a90a10928ec198c28ec850",
"assets/assets/buynow.png": "d9e560f6b2c9f1b4bfc4999c752f6fca",
"assets/assets/cake.jpg": "1774687846d9072725057ba0f372fc3f",
"assets/assets/Call.png": "3ff9162448e8cf2d6c917cebe0deb1fb",
"assets/assets/car.png": "7758c00b2a2a998cd698bb1f86f4abfb",
"assets/assets/cash.png": "e1614adb15081ba8249e6d8445f6a481",
"assets/assets/cheack.png": "54cfca3f9d71dc1fcced277529738454",
"assets/assets/chiken.png": "da7ee42e7cb313b9123062cce434961a",
"assets/assets/cloth.png": "eceb6db8c11c663725c99e387fd1e47c",
"assets/assets/current.bmp": "2577fd44fd8b2b439734231cd7832e04",
"assets/assets/d.png": "34ff42630506ecf8e73bbd51711762c5",
"assets/assets/d1.png": "9afe3ba433df35d465454deb551c0132",
"assets/assets/dalfry.png": "4446fb26a5fb958bb25edbfd5ba87c0e",
"assets/assets/darkmode.png": "bf593259bc6b88654f07a803e68f4a87",
"assets/assets/dele.png": "485c2c97f3dbbf2930c5db79703fcc5d",
"assets/assets/Deliveryscooter.png": "c8b6b2152e6118a733abf13a15150145",
"assets/assets/destination.bmp": "853d4c90d61a8574332faf3ec5310a8e",
"assets/assets/driver2.png": "9d03c3510f432c7c2282383005b68138",
"assets/assets/e.png": "1913b2a5c27f3c1ccb6885486f743883",
"assets/assets/edit.png": "8f06fac3f635c358479a089dc7125395",
"assets/assets/eggiteam.png": "490449571ec9bd19b7b063cc446a9960",
"assets/assets/electronic.png": "17a1e89181768f1b885b5d3fa14c41ee",
"assets/assets/enablelocation.png": "98191f19c5f73e4c95bdb0279c9a0355",
"assets/assets/end2.png": "c165f51ca8f6d9276c978fdf695d37d9",
"assets/assets/f1.png": "e7ebc3bbac32a9068dee615e1a8da7f2",
"assets/assets/f2.png": "2c1323651692c97583521e9590ab399e",
"assets/assets/f3.png": "b0ec8387c55ac1427cf3d653e462791e",
"assets/assets/facebook.png": "a00f8574be92ca6cfa4c723276196682",
"assets/assets/FaceID.png": "e5f65b65b0c4d49d442232915cad73bd",
"assets/assets/flagfive.png": "89d12bed1174897e1e161a7af36aaae7",
"assets/assets/flagfour.png.png": "6fd3413b33decbc9f6f28da0f8170631",
"assets/assets/flagthree.jpg": "6e694f574e8e124c65d2e971752682b7",
"assets/assets/food.png": "aeb64a1d60e0f7a93f6cffecac553db7",
"assets/assets/foodmenu.png": "77ddcb8bb59c7177fa41445433ba6fca",
"assets/assets/foods.png": "e49ff5757f125a884bcc78f674f5e9c3",
"assets/assets/google.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/greencheak.png": "da6aa389426e9d7513c8a6efdedbdc43",
"assets/assets/greycheak.png": "65fc4193d936a7fc0bfdf472489b8974",
"assets/assets/Home.png": "873458ae2d1f956255511f950ff194f3",
"assets/assets/idli.png": "56e8ad1f2fe32ce140feaacb70b59f5b",
"assets/assets/invite.png": "fb817980a0dc66701cd67f50bdb4c645",
"assets/assets/juice.png": "815243596d51a854159b7d5d0367ffa0",
"assets/assets/lockdown.png": "6990edc096936e855d2ae60fc980bb7a",
"assets/assets/Logout.png": "dfb7a4c84c94b2a9bb6dda3eeea6c881",
"assets/assets/master.png": "cdefe37834ea25376736fe13d4296740",
"assets/assets/medicine.png": "46b2128dfbbe4586e2b66995519aab6c",
"assets/assets/motorcycle.png": "766b476cd6c889d77d5fd05a3c6bfde5",
"assets/assets/Notification.png": "a39256a5e5bdafafc1d2ca5b51a8be9d",
"assets/assets/onbondingone.png": "308019600f262ae2ec7c3f5d2fbe4c66",
"assets/assets/onbondingthree.png": "018a18b937cbe88b03b8b7445c902045",
"assets/assets/onbondingtwo.png": "d6b523ed7fe6cdd71b894a7c39149ad1",
"assets/assets/onimage.png": "5720cd5c8f7068186b2002967583f3ec",
"assets/assets/order1.png": "22f3b8846e19518d351cd99ce669c173",
"assets/assets/order2.png": "ae44b201706280507482ada7001a616e",
"assets/assets/order3.png": "6266e79f27c3e249a937f8934870fe5a",
"assets/assets/order4.png": "2f1d6ed01379d29a458878bc03383515",
"assets/assets/p3.png": "6a94e4dec0bcaf882fa6821c08ab4cc5",
"assets/assets/p4.png": "2ddbb42418ccd221a5748c3dc2532cb3",
"assets/assets/papajogn.png": "77dca5dbdd0c1b4a52f8e235eccf1842",
"assets/assets/Paper.png": "ef74e3490118e25c8c848e58771fdf84",
"assets/assets/picture.bmp": "d593d6f96079e3dd44cce3ecca83f561",
"assets/assets/pizza.png": "fe16794def891b1cbdda3d33fb32f538",
"assets/assets/pizzachicago.jpg": "634111b6dc079a3d08770c424453f163",
"assets/assets/product_image.png": "45f5646f045c0cc904573f72438e4dd8",
"assets/assets/profile.png": "3af28b113f2800bf1775e4e983ae9ccb",
"assets/assets/resetpassword.png": "a7f6d0b46f97f1cc87ff6510c2845ef1",
"assets/assets/s.png": "2fa1e443acf21b38f404640db5457645",
"assets/assets/Salad.png": "752f81237fb6f075ba0b0c91c498726a",
"assets/assets/search.png": "61a5469c3b8197bae44bdb4026726f49",
"assets/assets/search_img.jpg": "5bab3b3f0172f7d75a23f6952cc45c03",
"assets/assets/Setting.png": "935c0b7bf3dd316b39711fba30c5c462",
"assets/assets/shopping_bag.png": "08ef40e67bc49452fbcad351f9e1304e",
"assets/assets/shop_image.png": "60bb6f36821ed45995ba890c6b6c9f74",
"assets/assets/signin.jpg": "22fd95851cb004c22158d66c462feda8",
"assets/assets/signup.png": "82a043de1b9a65d72e1efd4419537425",
"assets/assets/source.bmp": "4a68b7c2af4d830f0ff1292eb598ab5d",
"assets/assets/start2.png": "c839ad7690293f243244f64e2541228b",
"assets/assets/stationary.jpg": "ec80147073f2e99b57a0beb221535838",
"assets/assets/stationary_product.png": "939710ece14ce0f94872760f9d057430",
"assets/assets/supcup.png": "ab7e55cbc69c29cb5a7c0ce2654e4535",
"assets/assets/teams.png": "4737fa3085453cf2057e9c06e5e52703",
"assets/assets/Ticket.png": "98620c99bf407ec17314ee2c6f611f3e",
"assets/assets/todayfoodmenu.png": "e0387b9cf0659a2ad93db559174dcc20",
"assets/assets/visa.png": "668b98eed468c140459a2ddc4b384189",
"assets/assets/yummy.png": "2a0686e765cf9f689c8223a3850bcfc8",
"assets/FontManifest.json": "596a3565a9edbe5d13d1f1d3e53d0200",
"assets/fonts/Gilroy-Black.ttf": "c9a9baef8eeb74fb49d1fb697502ed9e",
"assets/fonts/Gilroy-Bold.otf": "f4db025e41888450ff00ccc3cb899a72",
"assets/fonts/Gilroy-Heavy.ttf": "7081f75bf3e7fadc9a4bba209a1c061c",
"assets/fonts/Gilroy-Light.ttf": "6caebee1ddae08f16cf56bd2ac58d6cc",
"assets/fonts/Gilroy-Medium.otf": "8b70347d584923c037790b37b64846a2",
"assets/fonts/MaterialIcons-Regular.otf": "0079494dd9dcb0c82dd841234eb0b839",
"assets/NOTICES": "6ecf8de55d6668df9fe3b1a9f7498386",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "92483f7d13f61f6f64a7bf633b7df3fb",
"/": "92483f7d13f61f6f64a7bf633b7df3fb",
"main.dart.js": "cce638a73916cfa8fcba52b3b890b9f5",
"manifest.json": "6870d56d65e452b1234abf67e80f6d3e",
"version.json": "767ba3a00a587e1b5270eefe02bbd37a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
