'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6ba1b553a6d76249ac8fa1ee886b4c6c",
"version.json": "2c3baee489b7688b52535ed3f9c172b1",
"index.html": "2199d1dd83520aae60fcdd0548d099fc",
"/": "2199d1dd83520aae60fcdd0548d099fc",
"main.dart.js": "b0e3883e7fa8254121299f92d2eb2651",
"sqlite3.wasm": "079cc69bb70ead058d8d7330eded9e03",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sqflite_sw.js": "aac413f2e0c3b07b416d0ee8e4aa0c36",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1aa88d3e6b4b9323f691fc0c7da50725",
".git/config": "0c6ea208aee15d4937b3c73631af49ca",
".git/objects/68/2abc34a3188cc4b2a1cff49230ea45dcfde121": "0bcd1f81e7ff5aeecd48c60ad11f6734",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/35/d916cd4826c8ff2c55dc73684150ec972aff81": "b592422c9bd3c390122a527037652438",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/56/552281e3ffce89867c8106e222a2ce5ea92716": "887c2e7a6aabab2c999add90b66be755",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/120fe43053fa3b74c074487478ab79b9a3e9a0": "8c5645ab7911f3838d3c669916bea1ad",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9d/97a84d34c9ffc8c415beb8f958b540b72fccf8": "a7c1a55e595a0de2ce4dc7c3410b4f31",
".git/objects/b5/0ad706f6058d5ed75de38535fe919c904954e3": "a9433844096cb5d740382316860f1ee3",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b4/64538d11075a749d283e6a7904a80f5c6e940b": "36622a2d9adc8cb6e7cd71b5bae8fdb2",
".git/objects/b4/32197e7bfcd7c2b2387da9f43ba1fef89dd0fe": "90cd1c04ecd80921b59cb571b07142e9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/7253b04565258eb44249badd4ad7e3bf5daec2": "7289b55d2ef3b51a4402b7faa45e3840",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/4b4bfbd81f7fe830780a0ccf5debc921df3142": "65c0ce6aace79814c771dc97701f8a52",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/d400460313a9a14a8e7ecdaa0044c71beac0b3": "9693b91293d10d6765be25eada81dcff",
".git/objects/fe/c0393f26daf0c32a6ce6d2cef6da181b09511d": "1cbc3c3ed5f680c6c2e2e81b44b62e36",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/4b/4d97aabd2df91317b34f1cf1eea15634fdcf6c": "70d8d60c6953e41d4f9afeec208d3542",
".git/objects/7c/dc059257efadd11179e8d4bf962663a1b530e2": "bcc9da7f744c36963232e8e74cc5897e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/1f/a5ad7bbd0c1b9fed4a2815a647482f237b6848": "a199d65e62d94cd3b686f1b6910c6dc6",
".git/objects/73/39688efe15c91d9d1ed4e35b7ab374a61b2611": "8ecfed3bb650805e1d0fa36bff8057f6",
".git/objects/73/759490f46cb5607c534ca3c4cda58b75842f1b": "dad8d2e081ffca105951a59eab30330f",
".git/objects/80/b44676d07c0f7f044c3796891567d10ce7344f": "e747008b6c0942b42e5510a21ba8be85",
".git/objects/8a/779d10b19792a072dfb7d24233fedd97a0ffb9": "d0620fc88cb0b0bcc6ee961e5a3c07bb",
".git/objects/8a/68a1566a30d79a58427346d477b3dca4b26b02": "9bff0dc311c4a92be5ff4ef0a835a9f9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/a83d4222c194cfe4c9447b0a3bacd6b3933a46": "51f792e7a125c1b818b7c50ddbf2db98",
".git/objects/21/acb7307303ac75c3c18bab6cc9d86b0a00bf9c": "5d1d7bae3e4f1f3f557bbc383c4963f5",
".git/objects/4d/362bf7848e5826c7056c0a0eddd44bd163f599": "51ae8c9d5b6f657b0c012de54a4e338a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/cb1379f977d3f41b4fc26a8c4fe6dc3df9fe4a": "4846629bf61a65444cb4fe6ff1dde04c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/2aa4642077f034ed61eb31cb86fe05df93e63f": "f39c381a048ea6a2b693cf9df787f269",
".git/objects/5d/acef9c0abd1152752a40399f788612fb0ab2f5": "1288877169ea80ebc3c8fa3225f04d6a",
".git/objects/31/c53c80606f340e68c98cd6a59d802146ec9f7e": "a867e7d69bf8600f42b29fafdb7793d5",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/4d4a3e6a2c7e6d395ef7724729875b7c601ccb": "6dbec3298d1048db390c8c49ee2f3171",
".git/objects/30/f8b55f417323d6e60cfe3bdb64ae22fdacfe29": "470de3bb3607b58a1816ad63794fbdc7",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/63/b4652cdcc7788ffbc3c760e4aa0daf332bb27d": "96c96ad1bdcb191bf0c6897d048b9e64",
".git/objects/0f/52ec0a822a5d389fc58e6aa1151f65add3e39b": "b5d27f77ef498875d2e4849f112bb504",
".git/objects/0a/c13a619628e9aeabc2626a0f0f725fda959bba": "2711b4e3135ae50774c8454dd9932d2b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d2/27bf970e2a1fd6053e3e160516e1b7e2c3fcdf": "a7c423f4ac31c0b596b5cf9712bf67c6",
".git/objects/aa/9125d6b386a2320a797f39b4ab1ec0a266e60e": "b2c03424e71e47d751914c951df36e84",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/edca9d1a889d20164a590569dd1a2d22dfda04": "1f68968f1b0d010c3ffcbaad5c7e46fb",
".git/objects/db/cf14424117bd15f0842936c7ff95a8fe946cd8": "91218e6be08bfa457f34a2756f63e959",
".git/objects/a8/ddffec43c76dab54a62c126880188405062ee6": "505abe0d2b2f7ee687072361717abbc0",
".git/objects/b0/4398bf949e4d46a0cd52011e85fcc6510cb411": "32dd58c360cc756b52ae2a8c93a882cd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/fa/b6646f07b93d4e0d5ed38faa503b5e9753c342": "193dcd68dddad0aed3ca7f92162ee54d",
".git/objects/ff/12881224b7cc0c578aba44ee77b418748eeb2e": "1487b7d577bd49f640650b3d2fa23de2",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/25cb436995d0f97c901ccfa7747f2c0b9ec550": "b7b52d5e6ec1b748fd2d871fc31ebe5a",
".git/objects/e7/7521f9db1c09a9d98acb95f70b5690bda543ff": "671f1ea5d6aece8b85bb10b2f4112bc2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/0d03e8976ea2567edf721cd2499cc3c937d4cc": "fdd460ceec27d514f4e9d2d8c6390905",
".git/objects/1b/27e4196ed66acece47d460c56e24f5cef23028": "d7e098008b991248f243499bf27bf21c",
".git/objects/24/58d1a212a528d8958a9b02b4197d8c9acf305b": "df00db82e73891f77b1ea9b19c20e784",
".git/objects/8d/19b0a8c97b9ba71dc73b314f247619dc0babfd": "784c4660435388c464a3205310ec0b72",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/71/897830b71eba082bd38577bb84d44f3ed75079": "75559f5f14c7a7a585f976521deeeb23",
".git/objects/71/0d8d9ea339779cf8555f43e62770050fdf5349": "7e12d67fff6fa5d5412292bf1f3c68f5",
".git/objects/76/ee6c0b3f3e23b7c878c5307dee12ee0c4c2f24": "d2938f87e3325811aea821f2072c7e1e",
".git/objects/82/00487d9755729e107dca31636ff8d4ab475307": "9609dd9137f6826d5ae67d2c1d63be54",
".git/objects/2e/6023f6b9e47792d7060f04887c390a3643a5d9": "4cc8e0f4865f1261e405528b565c924e",
".git/objects/25/7eb433823698464f428f11d6d5e5b51c2f2a61": "2f68666aaac6dc1179c28a00a9c1e214",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d318d1cfa0f5ee3995d9025526a453b",
".git/logs/refs/heads/master": "9d318d1cfa0f5ee3995d9025526a453b",
".git/logs/refs/remotes/origin/gh-pages": "68e24ff7478a5b368f03aad3baf61da5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "24043a210da4c5d029e88eefae1361f1",
".git/refs/remotes/origin/gh-pages": "24043a210da4c5d029e88eefae1361f1",
".git/index": "76df101228c29bddba15d3802603ebfb",
".git/COMMIT_EDITMSG": "51fb99eaf257fd5bfa74130c41300c71",
"assets/NOTICES": "330dd6c76bfe81e950da991f3aa62852",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "3957ec2d6574486f447d18eac2e302e4",
"assets/packages/esc_pos_utils_plus/resources/capabilities.json": "cfcc98d389d1ee4358f773efe8a9cdac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/win_ble/assets/BLEServer.exe": "28aa0e2566083c860f029ff4bc32c4ce",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "34a21f5d9636cdef8558c6a72ccfd135",
"assets/fonts/MaterialIcons-Regular.otf": "b125c975727eea67201a8a258ebbf833",
"assets/assets/database/MCGM_WARD.db": "2c505653d0d53f367305841ece2b34d6",
"assets/assets/config/login_config.json": "4ba531324644a880b8253b9c8cc61f2e",
"assets/assets/images/icon.png": "57fd3ff917192060c3de8351590564c2",
"assets/assets/images/slip_header.jpeg": "6f8705a67a5c27851376fec82a37ac70",
"assets/assets/fonts/Hind-Regular.ttf": "22e75ef63d50d11ec065e22a05284fdd",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
