'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9f275d51245f0883263adc080f33db5f",
".git/config": "024c019e360ca56d7291b3e91009bbd2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2766315678e103aa0805586db2c8cc0c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d547596cf3c22034f769b8ccc963988a",
".git/logs/refs/heads/main": "0e06ff8849eed1be35722052b5f419e4",
".git/logs/refs/remotes/origin/main": "be4e40ea2d148c2ce88046e8db2964cd",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/01/e51f5ccb40d949ea73b1cf2f6a7c8d8b293fa4": "a7878acb60d8717109a3a7c6b5234e31",
".git/objects/05/594dc23bae0e1674af23033e259f6b0a07a1c7": "7f999dd897ca34d2821dffadd646259e",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/10/6056c3989fb438aa60ea987fb246f93f5c9a85": "9287b0492f7721987a7852ef2040124d",
".git/objects/11/d57cb5c524ae0f44cea8b07e1b7218062c316f": "f2d82d6de1bb39ba84fd1d75d8a24282",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/6c2ad61671f9780dce3c3e432111f22823dc39": "bfca9f51469658ac267e12ea4ec02eb0",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/29/2e2b3701257a5960e0e641f132ae5aea99036f": "4e1ffe4e402a87701fa137a72e68834a",
".git/objects/2c/1b50916bb180cbf42b97804efc618f07cd7c17": "341c2fd1a16f26031b55f1cc68ce0cb7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/84f1616847102d42b06e7f6fe24f39e4e97c3d": "3755a995f0dd4f9885e7e0e327365559",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/60/6533b1c8203029a56fedd5e75534316299419c": "e834fecf323a623e8474089153f567fc",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/ed76208815818e6d17072180e8c3034371cd35": "d5485174c39afd97357e360da2b7f069",
".git/objects/7d/4dee4b610b2436e9c215f5eadbae91fd8cc066": "8283e63188bbf5bca60201f0c8ffe8eb",
".git/objects/7e/abb7ba96794b8ed96781bad477abd8b0275830": "dec3ea1ae759ac4f95661d78d1b71cfc",
".git/objects/82/78f0b3bb2da3e47691f6975e9c49187c556d65": "09b25cfdfe917e415fe3034b39924d06",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d78846afa3a7582132df64266a7fc7900cd707": "eaa20c58aecb36ccc48f47c422e4074c",
".git/objects/89/d526b1231a8abde4f5f6116ab54124d896e7cc": "89eef31312384dc1fe707883ff2327d4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/aa2d341bc7469f4dfd1c7bac5e4af5372f345d": "8eedce825c7647b338cb74ae2677a86c",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/3ca52173fe72650eeb4da0664835ad24337890": "feefddc9992a9d0b21bbea9f1e90fc0e",
".git/objects/9b/3a94d3a522a62e4b47a9cb812317596408b10c": "7f73f989f4d2fe409399f5ca42b6a121",
".git/objects/9d/5bcca855efc64b8be3dcd084bfa313f10123c1": "05169009a49a8bcea514dcaa0d5ed266",
".git/objects/a8/4656e80f3d856d10455ba7ce6810f110c14a68": "f7c71052ddd82025005cef2570def888",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/4f62f0cd2f1882a0ffebfc3cd4affbd8659683": "d43e991578eab125499e26205e65fbb8",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/5c343b95f179cb7334880d95ee69958e84cbe3": "27543b98ae0c3748bae7baa0a13c0fee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7ef5da7d939bd6ff984cd9c659451f222f3615": "c6ebdf3fff44c8203f334073502439eb",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d1/3893c954e83514137a33929e8ea617c53f7b31": "4064a8a1ee8dda21bc5517b56388bdb6",
".git/objects/d2/93561430e2ea56f393ff092e7f6fcb64cc71b6": "d7af681a11b7117c51d5f643c1aced85",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/886da5e4feb717e28b85466b34d68cc74694f3": "c38f19779910ca31d341269d66b70ff7",
".git/objects/e6/a41bf9ffadb52b2b0788e8f6fb7a3d7116fd73": "0cd8d8c625c195e5d7ebd49c966906ae",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/990919305488aeaf9d29c3627eb607fde7a9a9": "06b5e2bfa5a3721ac57b1bc1fc9604ff",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "62c399f23e3ed831012252763d6f2eea",
".git/refs/remotes/origin/main": "62c399f23e3ed831012252763d6f2eea",
"assets/AssetManifest.bin": "a0e29bbc5aa1d74c48307c98d743a3d6",
"assets/AssetManifest.bin.json": "3a9bddd27d20ab37be49a421cdf97e42",
"assets/AssetManifest.json": "a8ddfa4cf0b557287f3783ca0937b895",
"assets/assets/empt.png": "96d0c46dfcff9e99df2a1b00339ee937",
"assets/assets/profile.png": "307974d7be16d0d5249f07f48b21ff0a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f866d54ac8cfd9b50bfae01a57c1de7e",
"assets/NOTICES": "c05864dfbf4458eb5eca7c78aa009b00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Logo-192.png": "e369aa4d07187099c15221a1585cbe39",
"icons/Logo-512.png": "33e79e88e72dac7fc5c69e265831b69b",
"index.html": "4b2d9db975a4e2a7c0b25cc2a2932cce",
"/": "4b2d9db975a4e2a7c0b25cc2a2932cce",
"main.dart.js": "6f9378139e26bb2f78bc3ec585ae2509",
"manifest.json": "6bdd435ec53c9ab32443378c196555e2",
"README.md": "c23629b32c1dd741a75cbe192eb46079",
"version.json": "dd3cd9e9701b52ca8aab582cb5e2b362"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
