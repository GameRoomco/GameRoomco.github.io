'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e99645498630d2197afc1da4eb909868",
"assets/AssetManifest.json": "27d61dcd1fb0fa5dee443394d33070db",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "ef63ec606772a644d57fd302e0be8c7a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/videos/2.png": "bfdbe1b8d8f2e7e32eddda1ad813639f",
"assets/videos/cute.jpg": "83674d4d93336a2a60deefb9f84f221e",
"assets/videos/danzoo.jpg": "67eb3ce924e20ed46447f4d83e08c10b",
"assets/videos/first.jpg": "fc90b08f4215b3a9c9815fddadcd27a2",
"assets/videos/firstcomp.jpg": "376062b8832f1ccde2104179bae44eef",
"assets/videos/gun%2520die.png": "c2253ab90f4d7d6e82f33d43877282fa",
"assets/videos/hands.jpg": "39e15975e2e6b54280529cc0353e7037",
"assets/videos/heart.png": "4ebd52b7e6d4944a470d1d4c07176448",
"assets/videos/heartsmul.png": "15c61560d3c606f5259101af3bd6f07c",
"assets/videos/ilu.png": "5a88528a207a465275b604a8b5667906",
"assets/videos/janam.mp3": "024f6284e2c26850d2f93825d72febd0",
"assets/videos/milo.png": "764631ee8d0f83557a3af82d256fab97",
"assets/videos/mybaby.jpg": "72ed0a6a91f2d1026c605bf03e9907eb",
"assets/videos/posess.png": "8ceed324164e5b85fc770bd8d0667bab",
"assets/videos/standing.jpg": "ea790af028765e385e1501c8faf28874",
"assets/videos/uwu.png": "a9fe74d9056afb1116f629f1fcddbae0",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-icon-144x144.png": "dbf65d4172ed2b6047b7f61387f996e3",
"icons/android-icon-192x192.png": "706dd07b09678c070dec4b012632a46d",
"icons/android-icon-36x36.png": "2dee61ba9fee343951774c8c592b94db",
"icons/android-icon-48x48.png": "4d688471ebd5b3cded14691b1f647cda",
"icons/android-icon-72x72.png": "735a1c4765b4d8789518d6a9f0b2a27c",
"icons/android-icon-96x96.png": "f5be2d3d33e9b0e9c35a9c9b0b8d47a9",
"icons/apple-icon-114x114.png": "a6661dc8c199f7bb2478a9f4d89ef7bf",
"icons/apple-icon-120x120.png": "87c0feac3c950edbb3249452adf35cce",
"icons/apple-icon-144x144.png": "dbf65d4172ed2b6047b7f61387f996e3",
"icons/apple-icon-152x152.png": "d34e18db6c9adb545b9ec279a4f04df1",
"icons/apple-icon-180x180.png": "4c86fda23d7ad6592fdfa21deb6a9d2c",
"icons/apple-icon-57x57.png": "4a5bc6e91ab0b2156a550242146b2e54",
"icons/apple-icon-60x60.png": "19d0d83e6daecece85981edae0411e3f",
"icons/apple-icon-72x72.png": "735a1c4765b4d8789518d6a9f0b2a27c",
"icons/apple-icon-76x76.png": "cd7405b82ff290369ce0cd67d7d90f9f",
"icons/apple-icon-precomposed.png": "b89c73fd5fe8f2e44f33a07df216c880",
"icons/apple-icon.png": "b89c73fd5fe8f2e44f33a07df216c880",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "d83a52221e395bb698872ad66d824ae9",
"icons/favicon-32x32.png": "8d040b04a2bb4187aba84f1fe71f939e",
"icons/favicon-96x96.png": "f47f888af4d01577f1d3807c2db18b6c",
"icons/favicon.ico": "2aacafbe6e8b66bcc5a026f4b240c922",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "dbf65d4172ed2b6047b7f61387f996e3",
"icons/ms-icon-150x150.png": "1d43bc46a0b641b11a2b1e1f564436df",
"icons/ms-icon-310x310.png": "e5e7dd34ba9eb023e3b30414a8f15d57",
"icons/ms-icon-70x70.png": "48af7f90562b6209a758e5cdfcc41abf",
"index.html": "28822e86acb4639627b8473a57413905",
"/": "28822e86acb4639627b8473a57413905",
"main.dart.js": "b62cee62afebe44c39ebf98e1f4a6222",
"manifest.json": "6bd487069f5fd857bd52e938a3c69d9e",
"version.json": "a20e739b4e9f19d51c70f18437f20032"};
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
