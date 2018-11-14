// Copyright 2018 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// <https://apache.org/licenses/LICENSE-2.0>.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const dataBig = [{
  a: '0x5f8bba60079794fa0d3b971f915732e05e514a176bcde9d13a054c6ad90615f84b',
  b: '-0x852bd04121ea975e30e52c8a32b5c070dac155634284a48',
  r: '0x5fbaa0f41311996698f15640a7451e48fcfd393bb28005b'
}, {
  a: '-0xee37aef04891f2a45dfc35267370efadbad1ac0109302901c5939689b41694d',
  b: '-0x6440f3399f95510c690aad71e7120',
  r: '-0x3e8b5d30ef70ba76192aebc63a9ed'
}, {
  a: '-0x58be2e394d020161d956263d7ab037487f4a063f90b754a61f0ad2fd17a',
  b: '-0x87260cfdabd302155ca3',
  r: '-0x85e1b46b317466d0fef3'
}, {
  a: '0x580991c4432f9e38559a8a970784dd78a2e3add3406cedfc0175045a',
  b: '-0x442c47eb8a7f256dfb4',
  r: '0x3ae1edc05704ecfc3f2'
}, {
  a: '0x126a4c2dd98c6ec96a0e6b7c170db60469b0066b926588518ccd58035edb',
  b: '-0x879',
  r: '0x5be'
}, {
  a: '-0x149b31f05b14820ee7f5eda80e132c698f66ad20b42a1d2c5dc',
  b: '-0xf2aa75c434f774b6a44401965b3cb16aed9cad95050c8aa',
  r: '-0xe6e50e11acac1a513518c95d60ccdf7663753bb5b8ae5a'
}, {
  a: '0xef8a2373716677d41c55a564f3a1a9e93e446d2a9751b1434dbf08094772dde7',
  b: '0x7a0a7fe697dfad72839',
  r: '0x2a15964e0e94af8bc7'
}, {
  a: '0x39a105b27b1a96aa6b628326dc763029e8caa2f6b161b93a693d1e564dfb9',
  b: '0x4d79aa22909e6072e89ac',
  r: '0x1e6043682e52807b9fb75'
}, {
  a: '-0xc3a7fb24f26dac332317127907dd14e05ae8b0f6b64151e272b5be6',
  b: '-0xef1895f223951cf41ec',
  r: '-0xbff2bf630d9ffe0bf16'
}, {
  a: '-0x1e212b81b0b085bc076ba7b2bef482cf17cc3e5c613a5ab',
  b: '0x23afadfdba3179240ab9f2',
  r: '-0x183b59fa58e92711c26b55'
}, {
  a: '0xa7aca4e8c68e30fb948d396e7bab0696855a2d1e34d7ea',
  b: '-0x67ea5cfc37e2249d85a33a787e6',
  r: '0x5b8102d38b2fb9d366e18926128'
}, {
  a: '0x5ad098befc93f149932c69ea08b3a2d90b70b9101dba7333a7dbd9',
  b: '0x914dd0e68ed878abaf7de',
  r: '0x86af190cbfc1b117b29b7'
}, {
  a: '0x31899eaaae6044bc7e5fb91d3e66582b9d3c8d6410199b25e27c0adba41',
  b: '0x32b20ef1249fc99',
  r: '0xd7ea734f339963'
}, {
  a: '0xf929d9c34056ea5c9e19b99493b7a21b1d34a1871211ef998491',
  b: '-0x79795b94b742883c132a989652b6f8fa3a67e2a47561',
  r: '0x41cfa04a683c622c7616e447b24cb85e2dbcf3bdf1ba'
}, {
  a: '0xf322ddb320b124d930c548c89d6c79c551e18047c165d0b9ceef50d',
  b: '0x2dd4c6312d46fc0a27173ddb306fca4d',
  r: '0x5ffdec904d5328b6f851b920ea881fb'
}, {
  a: '0x381976d936517bcddc7c5a877b002609681ce895eca6ef2c5680e807b51f267c9',
  b: '0xa998b4aa81d47657b750c65899d379',
  r: '0x495ca616869d9afaa02cd8768c27f3'
}, {
  a: '0xf5167f012b4ed0c3c383752a4792cf97d13d05c08782efae7706',
  b: '0x3e8583d4',
  r: '0x27d69f06'
}, {
  a: '0x216490d3bd406c3ea9fb67c2b3f1a8b2729fc3ffe22867bfea6b0956bdffa1f',
  b: '-0xfaa61ca1c1ac10e9bf45a37999f149278',
  r: '0x8212ec44dcffd2af3c2ead4f18bc084af'
}, {
  a: '-0xbe9143eba4da29acb1e9a43008fb25d77f5ea51f599c7d03f6d6720495f61e4676e3f1',
  b: '0xf242c37494',
  r: '-0x5ff895b201'
}, {
  a: '-0xd49e2a80d3685df99da2927b528d8b83c1e823d00556987417cd2179eba19881ad215',
  b: '0x1bfeb173c96b34',
  r: '-0xd26bb4ad15ae5'
}, {
  a: '0xd46f56a01a6f408f526257d574a231a515471c117e648733bc087b1b17afcf2d5',
  b: '-0x89',
  r: '0x61'
}, {
  a: '-0x205dfd46969e7f10984ea68804d265b809d5e0b0d9b9f6b3624766139e2b',
  b: '-0x9e770d',
  r: '-0x9b25a3'
}, {
  a: '-0x4ece06cebf426861705b5b23ff2f3e7b348d27d6d9edc2c88cf18c3',
  b: '0x46699cbea6cce6e541b2',
  r: '-0x3e67815f940af5d7253'
}, {
  a: '0x32c5c5ce27a5b647be7d4d63270f2bbb307247dfa81b3f6d16f',
  b: '-0x6266a3eca4cb52d0873989153d44496ebf6e00',
  r: '0x4e48cd7ff383f65ff9a0fda051176fd49add6f'
}, {
  a: '-0xf4ecc3d0c51bfa102f46445b0b53bf7d45670fe794b7',
  b: '0x2e9fb2f2964d9f70753cb572b35cc764ace280e9f',
  r: '-0x7695caea55f03c684a6d707aed4ab7f57312aaa4'
}, {
  a: '-0x78b02c7bdc5532a2b3076ae8c798bbeee53d3665a6833830',
  b: '0x22386e1fe2d1e629eddd599ffe2b54b4a378684aa840',
  r: '-0x12314dde981b110f04c3622da068f6bb1eed61d3c970'
}, {
  a: '-0x8a3081369617a8df1868ac967943550dbfbc530c2e06161a7e1b6',
  b: '-0x9543df83c3cd388b5dafbdf7ff9e952f',
  r: '-0xd5355082d477b3efa112de9682ed6ac'
}, {
  a: '-0x2dea3f93fb3eaa12e9c432493e35f78423865a7c9238f6d',
  b: '0xeeabe5e6e2174bea63c22abe92e7895cc5',
  r: '-0x8e418310bf1fa8bb678408628ed1d683d2'
}, {
  a: '-0xdb3992d6fa80603c47d50ff3e00e68f243a1a3ff44bf58cea2e1a1e6a1bcee411',
  b: '0xa31d3448d55156036bd79a5e9cbd1396402f0f38481',
  r: '-0x2ec4f00665a174826c15579328555ec55e335cf406c'
}, {
  a: '-0xfdca02dbb19b8031a5104f1659809b86c748bf18c8',
  b: '-0xc38b629108736cd9bc923b472294159e48a76d9d6f4',
  r: '-0xfdca02dbb19b8031a5104f1659809b86c748bf18c8'
}, {
  a: '0x9464d36be61cdb880f10559a2759eff269fc93e397f18d41ad6ee04356c675e310109',
  b: '-0xcadc62e',
  r: '0x1608091'
}, {
  a: '-0x4ce87cc259ab93cc4908237ff5bbc9a9bf385e7ddf0176ec454a9d431',
  b: '0xb7f0b8e162e8',
  r: '-0xa9685c766f39'
}, {
  a: '0x4049e97bd437a82bb5dea1e2608a17e7e8924731e67ae',
  b: '0x470ac9763424db8c10ebc127f188602b1ef94a086a192915',
  r: '0x4049e97bd437a82bb5dea1e2608a17e7e8924731e67ae'
}, {
  a: '0x5c23729033b29ede70c72f5a93786bfed9645f7d612c6bea',
  b: '-0xc810f80636dc16b35bcfb0e4c',
  r: '0x176d7afd85ab709aa6aaae06e'
}, {
  a: '-0xdc1e9d434d7358d80a6470b82b5ccfc1df5c88c74d61',
  b: '0xac1b1b51b1d45db2b6aca63b424c7',
  r: '-0x2187f71f031625c85ddcc2efa3c83'
}, {
  a: '-0x6dbdc01b31f61a4128af87116720e3cc6cc2a4621ba67e7e8',
  b: '-0xce172b88c9c50f7823999b7d340ebd8',
  r: '-0x7a73919212a0aa0b94222687ba5ce40'
}, {
  a: '-0x21b754f12762f4482a6faf6411cadc060252ec86ee5a56c59f3244',
  b: '-0xb577ae64d8ae1152e782ea657434e4f09a22',
  r: '-0xa7974720c7026c31a74175fc5c6046036c86'
}, {
  a: '-0xdc70d2049eaf8aa230d21a63a9c03e7dc1caf152192f28ef531d7a',
  b: '-0x68fecc634aec7b1c0f7fb402446297c7cce9',
  r: '-0x5672aa3bd8562aed33019eb373e7681cb4a0'
}, {
  a: '-0x408440a1547a0276de0ebeb28d60c65f80a30622fa799ad3d2c3ceeef0cdbbc01e',
  b: '0xc22c5d7',
  r: '-0x5759b13'
}, {
  a: '0xea9e83b53f67d7a7a36359299a01855d334dd6c8a9c',
  b: '0x602d86869d4b0c5682eb30b907f91fadcb02',
  r: '0x5a6486afb3c28e09df7c6ad8b4dcaaa54dda'
}, {
  a: '0xb3154ebe2c4f4c5fe35db42c641b8e9fdb52f3e22340a6bf90288bc',
  b: '-0x29fc8',
  r: '0x1f84c'
}, {
  a: '-0xb130c9dde495aee7667c2ce64866bfcc4bed4e215ac705cbcd622fa7b8d5d0a',
  b: '-0x1fd137936ae5e6f5c51ad',
  r: '-0x7af746659c2b765c6e26'
}, {
  a: '-0xf04145fe2dd950a00cb8e3cbeea9b578164e56e10c004a77a10af4a3ad0bcb4b541',
  b: '0x913f8454c3553ac86e2',
  r: '-0x51610e092e9a5e0806f'
}, {
  a: '0x10ee5bc4ec005ebd125b3d346b6d6647a425479ef8875',
  b: '0xcd50c254d63dc3cef7f20ad07cbd766c18ea',
  r: '0x73a8278a10816e570714a44bc28784bcf2c3'
}, {
  a: '-0x670c1a21577224852d2842abac31bf260cf5e1ee6be25fb6080ace0d75675880',
  b: '-0x427c20b65b085d3b1655375',
  r: '-0x9caba4da2ec694b3e94cbf'
}, {
  a: '0xa2baf33f452341447752136f438c7202f45d93f4bf540e3d6ded0d',
  b: '0x6e4abad41c502bf46953746cb6f72fca19af3d1edf',
  r: '0x1d4d7e4ae5b1acc37243ce1c263834b492debefdb0'
}, {
  a: '0x475e6f88c9896a6b6525ebdaec7dc46672bd58ae664a8b4245516e2527565f216161',
  b: '-0x45adb',
  r: '0x2bf3b'
}, {
  a: '0x9ce9cf993be0c8f00a6e15fe413c1aad8cab263391e48b564b8503f2e0d3bc8742393',
  b: '0x6f6cb466abc433e',
  r: '0x8d0af1a602051f'
}, {
  a: '-0x1cf82927fee70f2136c122708069aebf0b037b369b3143c60110137913c8ce',
  b: '-0x6ee7',
  r: '-0x1fb7'
}, {
  a: '0xa6b4c0b88745aa326eb29a9b79642e80f42ce33d2540b1ede268805ca5f1cc3b',
  b: '-0xb4c9c9164b5ddf227fd36ab7',
  r: '0x484998d4a277ccaf4b95d4a4'
}, {
  a: '0x5ffca68d53d4617d72abe12f994a7303b7b9789cd922e3fefa20ab29d9908f51a6',
  b: '0xa63c85f3ec932a1e21b8ceee6edcce8eb258afe8eecd2',
  r: '0x9337e184cfc9f729b923ae2d662e59e182cdba4043f98'
}, {
  a: '-0x24210f0724ca05d8a3a6f55128c006d783fb22c0bb4d1c1500',
  b: '0xd036959',
  r: '-0x7a20901'
}, {
  a: '-0xaaa3f9e954b3373dad352ae75b1e6a5360d4735bd449de4ab2627',
  b: '-0x130e123709ad43726d5627381803cce9',
  r: '-0x1219eece5750ff2ea8ff6ef7139305a8'
}, {
  a: '0xfaf3393b12d7155a1ae1f54bcc0140df3a2e31335419a4aaa1b',
  b: '0x1ec15e1cb5c9209782366f37e0337f',
  r: '0x10c16a4ad10c8b15e87e543459a65c'
}, {
  a: '-0x75376ef36c96c98aede64e2519e985715e63bf86eee24',
  b: '0x10674dbbf97d599cd094b8a4bc9b25fb8f7f72def3c24b',
  r: '-0x75376ef36c96c98aede64e2519e985715e63bf86eee24'
}, {
  a: '0x7a9eeb34768ab1894bd000143cc276e25a84718a1e71bce23c92fb3645e1',
  b: '-0x720eedda5f3a2fb9e908f3b1d7a6413e6e0b90ebf1d19c154',
  r: '0x39b4723a522e7f61e6f2cd1d29ef5f9dbf40877a2f13a7b1d'
}, {
  a: '0xed1876df291bcd2042b81dd4e5146b8f47af5247dfa00178643086825b412',
  b: '0xc4e5',
  r: '0x6644'
}, {
  a: '-0xd8305d2fa98e2339b487b1535e8e4865e2988087c2e1dd18788a7b002c',
  b: '0x2577c132f83029bd01d9c6c71daa082b80554cef',
  r: '-0x145476d640373c18708d9be1e6eefe2c265c5d15'
}, {
  a: '-0xb7933a54b05f8205de17f9fd4fb0e014b5821343602a0e249996a55d2a70ab567198',
  b: '-0xfbb337deb1705cb60ed7e',
  r: '-0xd944dc3ae94c1b3155dae'
}, {
  a: '-0xb66823a0d33327deb0c90895d10cf8dce8349185fbaf9f533ef1420',
  b: '0x1fb550243fd2679bd6c7',
  r: '-0x7279623f629ec9241ef'
}, {
  a: '0xd4f82517b844bdfb0f3a7fb0ce2e796db95e300f97ab74373a16068157a1334ab0a',
  b: '-0x3b152dfc53292f297e7cd6a7183ce8670affe3c55',
  r: '0xdd49f39a478f62c3b113f3425a1dba0082c51da2'
}, {
  a: '-0xd1bc8450453cc07f4d7d3959ee24ff871dd223844ca3a8c438e3dd1c1999407881',
  b: '-0x9f86d5756e281b395903',
  r: '-0x9130c2fb4860be9c0a75'
}, {
  a: '-0x1a5e78be68d51acbe4ed0ad0e0cdf7e85ddc438a9670cd108228dccaf6a10db80fc1',
  b: '0x6b36fc508fd7d398548f180f8dc',
  r: '-0x4acb0801adc252bb19da4a712d'
}, {
  a: '-0x6a3428741c482ca184ffb6f5cb693fb665feb3c59e810f644d17e625eec0da1c94f9',
  b: '-0x4d',
  r: '0x0'
}, {
  a: '0x616ee189e3741059e0f90522830b4923117712b452a38026cb20',
  b: '-0xadb7492ed8a96ee8c',
  r: '0x67106f84011ba47d4'
}, {
  a: '0xfa3167975b8348bdd03ef7dedf7e9ef3f2ca66b76f2dc74',
  b: '-0x7f70f806ee4d3d6718e33f8866cbc49621db16bdbd174',
  r: '0x49e139c437d255a571594965eb0b758c66c81f5e622fc'
}, {
  a: '-0x89324313eb8ff1a9c9919d985eebe2eab7b99fde2dfbeab8a94b',
  b: '-0x23fed4e95429',
  r: '-0x19d9bb36b085'
}, {
  a: '-0xed827fcdf119ac3ea2d73616e44a264f3a40ddbc1242da',
  b: '0x9d683e7c07b097c445a404856f92',
  r: '-0x85d0e95106743bdb81b3f54ad548'
}, {
  a: '0xaa5fc133fb84f26a93054208265f867ac995666d5fd63a9b9e97a1911671afa311ee4',
  b: '0x6243b914b0cb8b0d4c',
  r: '0x13afd1e595c52d38'
}, {
  a: '0x46d3f93a63f6fed2b8671fd8d7617b57d8508697ed88a550',
  b: '-0x75e654a01f3b9deae9969ee55fd067130',
  r: '0x5e7534998c1740af133103442d0dc49c0'
}, {
  a: '-0xcdfcb79134f80b5a7cde7db4708cf3d474af0ee996',
  b: '0x286a1994b626f2a64ab95dd76106103d9',
  r: '-0x2285923c3351a8bdb878af541582c524a'
}, {
  a: '-0xf086eadae2aba711c58ba4074481cf12f5dc685d90238383c6',
  b: '0x427181ed4820e4730e46f0',
  r: '-0x146f7e3722af259a7c7396'
}, {
  a: '-0x17dfe4bad3841bb96dca61d626e9cf30b95d84ffe194b39e5468',
  b: '0xf9987a39768f4381ebaad024dcac194e37a288',
  r: '-0x5c5b5d6fbf99dc4c7a00a04504703113bcb180'
}, {
  a: '0xe9206937144ea55f7aff8d5e8bd2718b248e5be1df7e2efa7ba4f28a04e690f87d9',
  b: '0x242c20f1025e38b6de5e4a1fe1a5a8e2ac1e',
  r: '0x20c18c88b126fdb9a5f1533b88af3fe6de1b'
}, {
  a: '0x6ffbbd20fa62649884961d880446cf67bf85b42539db3459d4ce8',
  b: '0xa5d66d94e5bd9305b0051d39ac2fd4bbe92b66d489bd',
  r: '0x42c0966445f8482554d059f85272d200cfd9e12ce3a7'
}, {
  a: '0xdaf9ef6b125abd5b12ed5a63b8b03b148a1b73114cd01b7472633',
  b: '-0x485',
  r: '0x47d'
}, {
  a: '-0x9e627993860927db90ccf5ebb6f05033856b5987fadbf668fcb6e9de816fb0dc56db',
  b: '-0x6d37c8e5428fc27bb',
  r: '-0x57ca78c906ec066f5'
}, {
  a: '0xeefeecafadee74e1d6bbb9f29ec5fbb3cbe2e5c126',
  b: '-0x3c7553b0937cb3ce6ac7c4b9b07d131f2480',
  r: '0x18b6144602817c77dc23466e90bd27705826'
}, {
  a: '0x8d40d3556a082fe44f2920951bd40c8b3f6ea93ca925739b28fabf170ccf',
  b: '0xa9268e8079692b402f80c02267d0ee7ebac',
  r: '0x3f1431acae363a2f5166fae904699bb74d3'
}, {
  a: '0xae023b59bd11a297fdc874150eb3ddf0420be9c0f2d269f912081eb3e354d1a9d9',
  b: '0xc53ac55d4a1ee0980bdfbae67',
  r: '0x42b7a46366e3f9f05f46a7702'
}, {
  a: '-0x30e50d14f2cdb0b14ece1546959da03ab356d790f8f737a4450231f622b9fc5',
  b: '0xd21e56a8c016dccb32fb26985838a25634acac',
  r: '-0x82c1dfe0319d6ece1d20aa9c3be2c3aa0b1765'
}, {
  a: '0xc5c2e04b49f1f9cbf50270eb6a491402a9940347607682f',
  b: '-0xce8db423c7390f25900434fd9a',
  r: '0xcd12e70a331709d5c456a80629'
}, {
  a: '-0xdc2ff0fdb2a2a29f6715824e59d61f663dde51a6891abab8e1c9f788f403602d5e',
  b: '0x81e423f942d6e7f26ea71f3c006ecca1',
  r: '-0x5ec30b2e6479823c162ac3769a1b961e'
}, {
  a: '-0xe7d98a65318c26087136c1f1af7a61529e1d9cb510a5e5b6f8f9e4cfe603d7de51d34d',
  b: '0x7420f1e71037c0f4548e237f39cf0bf242fdf53636068',
  r: '-0x674259f14f76abb36e10e896d468095e34f58f4d419c5'
}, {
  a: '0xcec664d7b2759e401a6cde5433d9a27b469c8d33d9640f44',
  b: '-0x7763661bf8506650183',
  r: '0x1955ca1248478da8946'
}, {
  a: '0x3405a4c754d8abfbea4bbf46b6c0b8466aa7a44776a2bd68f89ce16ea45',
  b: '0x5',
  r: '0x4'
}, {
  a: '-0x250204837da4cb227a854b41c9bdc34fd0fd4f9bfc998f0bfb9',
  b: '-0x7450dedd44fd0cc',
  r: '-0x6198bd661d14971'
}, {
  a: '-0xb855fb02709a190b2c254f9d13013161d97bf1e727d86b6fd',
  b: '-0x9a93e97089c5887267eacb0618d96c',
  r: '-0x7f7024c4612f6065a62a1595243e4d'
}, {
  a: '-0x4e5a3c816d0745c915a13469da7fd45ae10b22815502296cad707482caff3fc8b3c41',
  b: '-0xfc1d31bb7d3079b42762ac3dbcf6b8aff5c66c',
  r: '-0x3a34eee84958b691507d61598a3d09c97b4015'
}, {
  a: '0x7d366459576b30634b55fb1aa0a5bb323165d46c8990c3bae63',
  b: '0x63f7346ff9cf570a2a02592dba18',
  r: '0x3d98ad6f569e184cbd7a5b50298b'
}, {
  a: '0x7fc98379ff9a1b3d15e4eb9a4ff469d011859fc9cc227e18ded24274',
  b: '-0x7c',
  r: '0x8'
}, {
  a: '0xf46bb4e66764e6e9d256d1e5b68e56efd762d9133eff69c7f',
  b: '-0xf1bc51629324a5',
  r: '0x5cba656c3afd24'
}, {
  a: '0x18ae202d60d3e1df059531c1299a83eb79eb2304d6a0652d5cb977628f5',
  b: '-0x77bf6c92458e5af05db5a',
  r: '0x7185778b3438513e452f'
}, {
  a: '0x24edb102d75ff7f0ac60e8357d907fc067dd6463dcda628e',
  b: '-0x5ca2e334c841c09c9f',
  r: '0x49eb7b75266c1ef6ce'
}, {
  a: '-0xadd068a9c73be1abbc3396dddffe96e36b81bd475c435864f3361e29b',
  b: '-0x83954',
  r: '-0x23913'
}, {
  a: '-0x6327352f169e4e2ec9d72df55a7b8418b343fe561faa4ec9b2c7b85b7cbdc04bfeb9',
  b: '0x880012ca505803670613caf0080a',
  r: '-0x5207a3b89fc3dbc856f972865313'
}, {
  a: '-0x76498ba945de78647ae1fb4faa1ebf0881eaa8a81bd5c2ea812a7883efe2d3e0ed40d3',
  b: '0xd18b8da61dc1dd43b63fe5bb6c55c3b0f4329425fa',
  r: '-0x5abfdab072525a7b97cde034c44d1051d5ae2cc769'
}, {
  a: '-0x3232c55bee9a70d832e3aac8f288dd26a57c844461664ab651dfdc40f645a',
  b: '0x31a1ca5b1abaaafe117d87fda12a',
  r: '-0xb2bea231b7ac6f4a55bc0bae056'
}, {
  a: '0x28526da80e08ebdd92a0305eb130dcac3852cfb5f36e85b70c6e319539',
  b: '0x7aac62cceb424129405ff72',
  r: '0x6099a229f6e47e5f968119d'
}, {
  a: '-0xb373c35a078c5f52d3a565fe79345c928f8a07e307d98ed53165d6ab8dda478a',
  b: '0x53cd842c1f7742f1e7319c2a95086f2a097b',
  r: '-0x5057696f6e9e2fb3d914b73fb62418ea4b'
}];

const dataSmall = [{
  a: '-0x34f2bbc746',
  b: '0xe66',
  r: '-0xa26'
}, {
  a: '-0x1f8d1b17e650ac',
  b: '-0x6a',
  r: '-0x4c'
}, {
  a: '-0x3612ca9200e',
  b: '-0x6',
  r: '-0x2'
}, {
  a: '-0x165aeb16af3a',
  b: '-0xc89938',
  r: '-0x91228a'
}, {
  a: '0xa80d4a2fa68b8a28',
  b: '-0x4c17349d9c',
  r: '0x3bdf9cac20'
}, {
  a: '0x870c39f75899e8d',
  b: '-0x19b0a4',
  r: '0xf22e9'
}, {
  a: '0x9801281ba',
  b: '-0x3c450a131',
  r: '0x1f7713f58'
}, {
  a: '-0x6e4e135c8571723',
  b: '0xe8d',
  r: '-0x930'
}, {
  a: '-0x708ff34ac473',
  b: '-0x5c490ae5e',
  r: '-0x5a0509059'
}, {
  a: '-0xa6308c0c56b9d',
  b: '0x48b8ef',
  r: '-0x1b3ed8'
}, {
  a: '-0xfe000e390a',
  b: '0x233f07',
  r: '-0xc2114'
}, {
  a: '-0x5b49e8ad722c',
  b: '-0xa',
  r: '-0x2'
}, {
  a: '-0x62c60fafda9',
  b: '0x429e2a00',
  r: '-0x6e8a3a9'
}, {
  a: '0xa98840aeb3b',
  b: '0x13',
  r: '0x2'
}, {
  a: '0xa93d861e60',
  b: '0x10919dad',
  r: '0xea619e2'
}, {
  a: '-0x31dc9f84b2',
  b: '0x8be',
  r: '-0x5fa'
}, {
  a: '0xd2b045a22b7bab',
  b: '-0x10ff',
  r: '0xe17'
}, {
  a: '-0x464970cd2064e83',
  b: '0xab',
  r: '-0xa1'
}, {
  a: '-0xd346b86e7703',
  b: '-0x5f065b',
  r: '-0x2439c1'
}, {
  a: '-0x88e7c95dca2f085e',
  b: '0x4c6dea',
  r: '-0x335d30'
}, {
  a: '-0xe1162eb997',
  b: '0x6f1fd26a6f',
  r: '-0x2d689e4b9'
}, {
  a: '-0x27a3939dddde7',
  b: '0x1a52b',
  r: '-0x14e61'
}, {
  a: '-0xb9e32bfc1ab1',
  b: '-0x48978',
  r: '-0x34a41'
}, {
  a: '-0x1657c7583',
  b: '-0xca5',
  r: '-0x8be'
}, {
  a: '0xbdc254eb84',
  b: '0xb8b9',
  r: '0x8f97'
}, {
  a: '0x4c756632ff',
  b: '0x8a24f7',
  r: '0x10be2f'
}, {
  a: '-0xe09914ba67',
  b: '0x1f2e6',
  r: '-0xba81'
}, {
  a: '-0x4472e9d01',
  b: '0x7483f3045b',
  r: '-0x4472e9d01'
}, {
  a: '0x797f4d5726',
  b: '0x96224548',
  r: '0x199751ee'
}, {
  a: '0xd5ef750cff3a7e5e',
  b: '0x3',
  r: '0x1'
}, {
  a: '0xdfeb2f8f640',
  b: '0xe65cafe6d5a',
  r: '0xdfeb2f8f640'
}, {
  a: '0x1cfecf8ed',
  b: '-0xdb000875ea',
  r: '0x1cfecf8ed'
}, {
  a: '0x619c627ae323c13f',
  b: '0x3594',
  r: '0x304f'
}, {
  a: '-0x35b3605ff',
  b: '0x69c99',
  r: '-0x647c4'
}, {
  a: '-0xca9ceca35fa97',
  b: '-0x4c7025',
  r: '-0x47ba51'
}, {
  a: '-0x66491613ba993f',
  b: '0x31c207af06f',
  r: '-0x315e8a986d2'
}, {
  a: '0x8818bb00214',
  b: '0x2e62',
  r: '0x268e'
}, {
  a: '-0xacebba7e265cac2',
  b: '-0xa80a2',
  r: '-0x70704'
}, {
  a: '0x78b61ce900',
  b: '-0x6',
  r: '0x2'
}, {
  a: '-0x3b0431ffc9',
  b: '0x3d789',
  r: '-0x3a050'
}, {
  a: '-0x792513b0f570372',
  b: '0x98',
  r: '-0x92'
}, {
  a: '0xb828f6b4eb6a15',
  b: '0xf',
  r: '0x7'
}, {
  a: '0x3d22ad08e4676',
  b: '0x3ef4',
  r: '0x1936'
}, {
  a: '-0x8a4b8954fa3cd946',
  b: '0x5ffa89',
  r: '-0x4e4af2'
}, {
  a: '0x315929c05902',
  b: '-0x9bb3978',
  r: '0x387e90a'
}, {
  a: '0x6d5af37fc15c',
  b: '0x7cf311fd',
  r: '0x685d8980'
}, {
  a: '-0xa5df47c8cd9',
  b: '-0x4d',
  r: '-0x2c'
}, {
  a: '0xae3ac2db695e2',
  b: '0x1',
  r: '0x0'
}, {
  a: '0x1566ee21ae728b7a',
  b: '0x55bd1c7566',
  r: '0x1f134ccae8'
}, {
  a: '0x6bfd6874107ce88',
  b: '0x7',
  r: '0x3'
}, {
  a: '0x48d395bf3d3b',
  b: '-0x9cfabb0c',
  r: '0x708b3b17'
}, {
  a: '0xdf1e490580561e7',
  b: '0x19a147f15ee',
  r: '0x4e9caf882b'
}, {
  a: '-0xb37eca518c8638b',
  b: '0x8dd14',
  r: '-0x77eeb'
}, {
  a: '0x916abb1f35e8e',
  b: '-0x2',
  r: '0x0'
}, {
  a: '-0x176debecb',
  b: '-0xd006c1c',
  r: '-0xad2ebbb'
}, {
  a: '-0x9746a4265c45',
  b: '0x7d',
  r: '-0x3b'
}, {
  a: '-0xfc269d54f239',
  b: '0x8e5ca4',
  r: '-0x71e65d'
}, {
  a: '0xd8baa30661a537b',
  b: '0xc08df04e',
  r: '0x7eadfe67'
}, {
  a: '0x3bcfb7829acc94',
  b: '-0x18a3e',
  r: '0x1353e'
}, {
  a: '-0x3a100a90ce41',
  b: '0xa38767f92a',
  r: '-0x927003357d'
}, {
  a: '-0x810e1ce8e7993',
  b: '-0xe6',
  r: '-0x69'
}, {
  a: '-0x20097fa1e',
  b: '-0xd',
  r: '-0x8'
}, {
  a: '-0xdc4d2a3218eaf',
  b: '0x5d814e',
  r: '-0x2dc4d3'
}, {
  a: '-0xc6f2fac284c7d',
  b: '-0x83a0',
  r: '-0x735d'
}, {
  a: '0x2906a3ae932c7b',
  b: '-0x75095ab7',
  r: '0x4461f758'
}, {
  a: '0x2083b01ea5083c',
  b: '-0x68',
  r: '0x5c'
}, {
  a: '0x66bd378abc',
  b: '-0x8dde3508ce3',
  r: '0x66bd378abc'
}, {
  a: '0x4f772173e3',
  b: '0x8d01858',
  r: '0x305fa83'
}, {
  a: '0x823e2ef535a2c',
  b: '0x54b6ef0',
  r: '0x17f5c'
}, {
  a: '0x1a3e32235dfc4',
  b: '-0x4b6ad3',
  r: '0x3cb4c4'
}, {
  a: '-0x230a1254d',
  b: '-0x9e54af7823',
  r: '-0x230a1254d'
}, {
  a: '0x175c14eb8a343a',
  b: '-0x6e84',
  r: '0x33a'
}, {
  a: '0xa1345cb355',
  b: '0x424',
  r: '0x38d'
}, {
  a: '0x70056603d893',
  b: '0x347654bd',
  r: '0x6dd73b6'
}, {
  a: '0xeb77f8cfe9',
  b: '-0x63b1d99ba',
  r: '0x4ecb19807'
}, {
  a: '-0x72e14ae4f2d6617',
  b: '0xcf37',
  r: '-0x592f'
}, {
  a: '0x3dbed36187b4',
  b: '-0x6be4a3175',
  r: '0x7c0cb06c'
}, {
  a: '0xa1dfac184e6c478',
  b: '0x19b09',
  r: '0xfc71'
}, {
  a: '0x3707ceadd11',
  b: '-0x89a',
  r: '0x5e5'
}, {
  a: '0x6789ec5f31a7',
  b: '-0x59ef2ff',
  r: '0x5426f41'
}, {
  a: '-0xeb07a7b5cd4988d',
  b: '0xf8',
  r: '-0x9d'
}, {
  a: '0x5c0a09538045d7',
  b: '0x32b04',
  r: '0x2c7ff'
}, {
  a: '-0x5b9ed91317c',
  b: '-0x68313b8',
  r: '-0x2e6515c'
}, {
  a: '0x52d5a54ec35708',
  b: '-0x81f',
  r: '0x7b3'
}, {
  a: '-0xd153e2f382eaedb0',
  b: '0x5eb6ae54',
  r: '-0x51483764'
}, {
  a: '0xc942c9006e3b82c8',
  b: '-0x6b93fadd8e5',
  r: '0x4b649fc6d33'
}, {
  a: '-0x7277de21b209bbf4',
  b: '0x7',
  r: '-0x1'
}, {
  a: '-0xc28c9456c6d5e0',
  b: '-0xf7c79cc5a0',
  r: '-0xda3f9c35e0'
}, {
  a: '0xf82714b027ec',
  b: '-0xdfdb59',
  r: '0xd679c'
}, {
  a: '0x6bab09664d70',
  b: '-0x463423e',
  r: '0x1633b20'
}, {
  a: '0xd4632976b04',
  b: '0x1bc0f8c703',
  r: '0xc3c089396'
}, {
  a: '-0x9d743fbf2f4f20',
  b: '0x264d',
  r: '-0xb68'
}, {
  a: '0xe047d195cbc',
  b: '-0xfe88fe5c9',
  r: '0x916a06713'
}, {
  a: '-0xc755d8c392e',
  b: '-0x5e947ec40d',
  r: '-0x443934f381'
}, {
  a: '0x177222941fc54',
  b: '0x2cc0',
  r: '0x1954'
}, {
  a: '0xccd0ff3b03d0',
  b: '0xc04f4da90e1',
  r: '0x7cbcb764df'
}, {
  a: '0xa7573124b',
  b: '-0xc96127',
  r: '0x84a0de'
}, {
  a: '-0x5d429e9910622e',
  b: '0x9e6',
  r: '-0x7b2'
}, {
  a: '0x964d2fbbd64',
  b: '-0x91bced994a',
  r: '0x49042228c4'
}, {
  a: '0x62e7590f707972',
  b: '-0x153',
  r: '0x123'
}];

import JSBI from '../jsbi.mjs';
const JSBigInt = JSBI.BigInt;

let errorCount = 0;

const dataBigNative = [];
const dataBigJsb = [];
const dataSmallNative = [];
const dataSmallJsb = [];

function hexParseN(s) {
  if (s.charCodeAt(0) === 0x2D) return -BigInt(s.slice(1));
  return BigInt(s);
}
function parseNative(d) {
  if (d.b) {
    return {a: hexParseN(d.a), b: hexParseN(d.b), r: hexParseN(d.r)};
  }
  return {a: hexParseN(d.a), r: hexParseN(d.r)};
}
function hexParse(s) {
  if (s.charCodeAt(0) === 0x2D) {
    const result = JSBigInt(s.slice(1));
    result.sign = true;
    return result;
  }
  return JSBigInt(s);
}
function parseJSB(d) {
  if (d.b) {
    return {a: hexParse(d.a), b: hexParse(d.b), r: hexParse(d.r)};
  }
  return {a: hexParse(d.a), r: hexParse(d.r)};
}
function prepareData(src, dstNative, dstJsb) {
  for (let i = 0; i < src.length; i++) {
    const d = src[i];
    dstNative.push(parseNative(d));
    dstJsb.push(parseJSB(d));
  }
}
prepareData(dataBig, dataBigNative, dataBigJsb);
prepareData(dataSmall, dataSmallNative, dataSmallJsb);


function testNative(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a % d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: %');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a % d.b;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = JSBI.remainder(d.a, d.b);
    if (!JSBI.equal(r, d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: remainder');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = JSBI.remainder(d.a, d.b);
    }
  }
  return Date.now() - t1;
}


const kRepsBig = 10000;
const kRepsSmall = 30000;

console.log('Native/big:   ' + testNative(dataBigNative, kRepsBig));
console.log('JSB/big:      ' + testJsb(dataBigJsb, kRepsBig));
console.log('Native/small: ' + testNative(dataSmallNative, kRepsSmall));
console.log('JSB/small:    ' + testJsb(dataSmallJsb, kRepsSmall));

if (errorCount !== 0) {
  console.error('Finished with ' + errorCount + ' errors.');
  // Support both d8 (`quit`) and Node.js (`process.exit`).
  (typeof quit !== 'undefined' ? quit : process.exit)(1);
}
