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
  a: '-0x64167fea04eb5cadbf24084182cbcca',
  b: '-0x90b49be8e08136dc0955fb30d2fb419243c4f8e',
  r: '0x389344ba3eecab63db49f82f24e5ebb4fff316613b19e798a4e93030d6f97dde6b0e0c'
}, {
  a: '0xe71942504ee38',
  b: '-0xaaa6931040a550bab8fb67c9058c20e4de8f9bcb02a148f14ac46f9f4',
  r: '-0x9a0d252c817a0992d6441ac048413ba79247ba8df0715ac70ef2892372acfbd7b78560'
}, {
  a: '-0x6d1ca1a71a1fa7d071eb09716a74633f179a7cc6a0e6498a297ada5524',
  b: '-0x6594de720a4d',
  r: '0x2b4bbf23d13c6c807d5b2c4b5f917753dff411fd4c35d278aa9766cc56a5259d0703d4'
}, {
  a: '0x2486cdb679f37db1787eb23ac35166db201d0e95b8696f5a262ccc4b60',
  b: '-0x53707003b687',
  r: '-0xbe7bfa7aafea41bb27b53c652bf419fb6146a1c0966215b5dd42d5bacaf59bf71ffa0'
}, {
  a: '0x64e0676bf1e5d0917ae2',
  b: '-0x88f010ee13ed95744c6e7a4b5efb381b16696ec4e2b5946c1b',
  r: '-0x35f5cffe24a60a0b443e1b10c018045837e73d141a7a7a07259ba2c9626abb33d74dd6'
}, {
  a: '-0x59d5f41efa6f80cb7f2b8eec8be5e856e604316ee9e5',
  b: '-0xf225979cd3c43de16ee20dae18',
  r: '0x54f971e5cce6d831e3ccea6c3fc9af450dfdf16f6c1dd4dd6b707203229c8210009378'
}, {
  a: '-0x279d51ca307939b6d4f6a67907e5c88d935530a75e0f2f0dca61d11eda294c92ea',
  b: '-0xca37',
  r: '0x1f4aa5561cb01195aa526059443c029dccabdfb1842d3063fda7aa0645c5754b603446'
}, {
  a: '-0xe16b241cfbb62d09d04cc823375',
  b: '-0x312b3ecfc49af1dc57af3c588ca2ec2524d8a57f72a',
  r: '0x2b4b9637828bd5afe52a692e6ce23c8a46829f833e1b9af1b5d0ceace80848bbc55432'
}, {
  a: '0x3c7f47999ee76bb1080ce40ff968fdec58c10aabd71face46827f0916d2300341',
  b: '-0x1449c',
  r: '-0x4cb5f42e0eb9b951ae11387f3164dd59dc5a6723fcfb2e1e6f0204cea6becd9603f9c'
}, {
  a: '-0xc71d2c78c66286be41180f4fc61c3a',
  b: '-0x1921e7ce58b270b4aeb11525ad4d7d541b1eff1f',
  r: '0x138c38665888c74a39c351d012b28f3e9d163bef9601f981b16403e849fd8a6be73106'
}, {
  a: '-0xd74c2f2061aac5bbba01362ef6658c306250c1d21ff37d1e45e',
  b: '0x7b6e85e4390323b4cf9',
  r: '-0x67ce8dfb531f6a611b8d947df6b47d46bff8a999c1ef88857803027c7fc0a9989d076e'
}, {
  a: '-0xf7d9a94d5438841d06360b27d17e5756d4e1912c2ca6ae',
  b: '-0xc1eb7e1376ae2a2efe1d993a',
  r: '0xbbbf1781afdd7e7e25d68e3d0b3bce55e8f275dd9fdc2e6563d8073ff3abfe3771c16c'
}, {
  a: '-0x794e9e9f17de8',
  b: '0xf9e63d517d878b0faa57122e200b81377d23418949cb14b74a6fe8ce7',
  r: '-0x766a91f99a4e933c02e6dfc8a5eb55510beb2e0622065682e96672c8c8056185f37c58'
}, {
  a: '0xc14e33b0ae8efa2be88419e93b4c238ac45846dd86d5',
  b: '0x29d84c3e8e3dcc178e7654303a',
  r: '0x1f98d9d55cb931bb42e6085f3c4b09e439295043ad693689efcf16989c5346035c7c42'
}, {
  a: '0x7e6346fbfd42df5dce',
  b: '-0x5142c4547d81a0aa41b77abb1ebc290280925f85c14116982197',
  r: '-0x281e5ffbc0fc25827bb2ea7858d340cbf302c3c78bff4b52eead35a5ee4dfea327e282'
}, {
  a: '0x7e1f2a90cff9731a1e664a3a457fe8',
  b: '0x6a9249171cc43648456f4f8ccf7f02965eaedbc4',
  r: '0x3480f96882d0177fe249c06fee6060f78efe82c1976c4c3613876a8471b2d2315165a0'
}, {
  a: '0xf11b4a940b2a4a0c1306ecd3cc67ae634ea2f6cc266e65e38e814822b3f544b06b36',
  b: '-0xfd',
  r: '-0xee47f8b44f08cb2deecdd80d5102775824b70de7c1fb1ab1e3d5c44a4bd964e259f45e'
}, {
  a: '0xfea05f9',
  b: '0x8c701bc1522febd14586fc6d0c4165b191c6077601275ad25a7782facabf9d5',
  r: '0x8baf3607c1bb442b093eb15629eb00a8e723b0263b0ec183ba12448beebd9426d9292d'
}, {
  a: '0xbeb8ad30790c42052ecff00b1e88492',
  b: '0xfc30d90d60e63dcc99bd4b0197b09aaafcccf62',
  r: '0xbbe22ed0b29e6e433a8c85325a7c729c035207bab3b1a2178ae75b544e10fc908ccde4'
}, {
  a: '-0xe55f32d7329b89dae96e66da7300494ea714e',
  b: '0x132474cdb7fb829102adc890f592835f6',
  r: '-0x1126bad094224907966ff04d38fe19409d881e711aa01b41dc3ed86f7d3ed374ee06f4'
}, {
  a: '-0x1e',
  b: '0x2ed0e36993a53e06ac1acca90c12614e2e325e826e29271a85a21fd312aa7f9d6681',
  r: '-0x57c7aa65f4d5d44c82b23fbcf6a27672969e71348e8d2951ba8ffbabc2ffaf472031e'
}, {
  a: '-0xe5fa228f84f8bdf622584168064dc22d085b73051e84d3ffe23b3c955c1e',
  b: '0x94704e7e5a',
  r: '-0x85597fedd028a7f31897fcd11498a0645a2f277b16e076edf9703a5835bfcc00fd268c'
}, {
  a: '-0x1e',
  b: '-0x29282562dc41773bad934dad62f7ffa51b96aa02fe5de4bbd8a0b628404f4e2e94df',
  r: '0x4d2b46195cfabf8fe57431a51990ff5593ba7ec59cf00ce0362d558b7894b29757222'
}, {
  a: '-0x8b5c7586da7d0c9996a8007b84525cafc94a71b8',
  b: '-0xc5b4685df7c1a9fee194af15525523',
  r: '0x6ba05c442028f803bb126506ac2e5a046fc6f77a950ed92f0fc612b234bbd2c1dfa428'
}, {
  a: '0x7e48d82e8ef07ea602c5294284406f19f43c119baa77adba30e729cbb',
  b: '0xb3ad93ac070c4',
  r: '0x58a28f3b55f6c5556a9110b0111a5dec207330b55b87ad2df18b7f986a85241e91cf2c'
}, {
  a: '-0x2657b9347668702de998863f0b393b4703d1d7de6b1b0034',
  b: '0x79e1b527e970bc7b42f2df',
  r: '-0x124144c5935977b2d5e550b0af93222c0ddcb7c8d0b59dce2ddadbc9e7c83ddc1e554c'
}, {
  a: '0xdbc609f62b0d527bfa7833d272a8781a8bad4bb5fd856f7429242',
  b: '0xb2406aba7aff47bbd',
  r: '0x9907000fbf14b9f604b2264d6f92d47b7cd70cc475923777e2ea2e824a2d7e0d53b0ba'
}, {
  a: '-0x1c0f7969566d2fc60cd13d33fdb086e3010bb4',
  b: '0xf2cf8baa727f8c02d6401675786b3ee1',
  r: '-0x1a9d6097d59fca6a70736edfa7428634eea79b58ee02471331cbc560fe01b808fce134'
}, {
  a: '-0xde3f59c4fd648338b2a1071db79a0b94cf5383ee06239c470824009ba84f86bdf',
  b: '0xa7f16',
  r: '-0x91cce08ac568fc3f361c7838786a7a6cbeae766eca8e44c5cfc8c9579d8fb2e192e62a'
}, {
  a: '0xead0ad6aa616db37f1d68ff1afa446ccd8',
  b: '0x3e1eda7c952f8b4da5663f52767bbce539a7',
  r: '0x38fad6dc2050e1e296c347174209e23d6c9b7d6e9d2c566cd1f20c8918b2b3cb03b8e8'
}, {
  a: '-0xecc20d95fd30309337565ea724e7de1cb7e72b292660db2bc',
  b: '0x4fa92a0cc1e73e17f7c45',
  r: '-0x49ac552fe3cd6b24c594bdc5d3540e4edca1a9d20244566993c08346a5083b0b883cac'
}, {
  a: '0xdbbe52a1d77330ea532973fe72310760a4f1edf',
  b: '0x2c49790500deb5bcb79095bd1eabce3',
  r: '0x2603c75aa1b3834b1696a75f642ebf76bac298df79c10562d83d5cfd1b1d0885aa23bd'
}, {
  a: '-0x518c19e1f81522a28415de',
  b: '0x42896bafea6442add68b54a89c65a61bd3d5d3f7dfb89155',
  r: '-0x1531e4f3b4245a0702ac667e0b7ee66ca344ad022dc00bde1dfb01befa93badfce00b6'
}, {
  a: '0x27203141a6cdb5f7d373f13add51c49361c60',
  b: '0xa173b8b7125aa95269182c6242f50739b',
  r: '0x18aceeab889dd25479da3b329980e08adf50c7f51f7a48725b9be1b991caa220824e20'
}, {
  a: '-0xd41f5426bac6',
  b: '0x6e095ed7a91c7daef8222190768faa57da0cdfcaec7f65f73faa15e859',
  r: '-0x5b2d39d8ccf3d4309ccfe0ac105e6d980a4e425b5123f22588cf4df2d4c31628f85ed6'
}, {
  a: '0x973fe05376bc8c69c6b7c197653',
  b: '0xd78410635271fcba4144152cdcf3d26f65263d2daa8',
  r: '0x7f54ac04703059359cca18d28f004bc53f183e99a00253fe0eade353e17c72488e5478'
}, {
  a: '-0x9dbfe209be46e7e12e592c6ff4476ac11a955a21839921ecb8a0372',
  b: '-0x27115e8542ff95c',
  r: '0x1812ef6c119b69a6413ad429d5af6d026e6a1c89a3dca46032a4e1d2ee97d26ce11ef8'
}, {
  a: '0x1c070e34a',
  b: '-0xb2e69f456d3c4f99fc18e68133a2ad31d4be89fb1f8711c84eaf7bc2f4e2a',
  r: '-0x139627a75636def9e5a8e6b53e67a786526b3c4e04877b9c233254707ab4f60a5bd624'
}, {
  a: '-0xd7aed9',
  b: '0x107d9837d6f7f4caaae2427807581f1f67cc4a42c42ae538c145503877fa54d5',
  r: '-0xde4be2ed185b056c5c3f675c617be4239e6be34b713f3f2d331af4fb424a717bdae8d'
}, {
  a: '0xe51a3416bbb5581c7c642bb6',
  b: '0x138be40397eb458d93b3405ab78d8a6e26326fd7f52d1f',
  r: '0x117e232685ee3e78a789ef221341dcf3ec60684253bdd7e06c53b50c2a59ce5afe490a'
}, {
  a: '0xb591cd91574df92fd3d769ed7444be79d15b6f27ca9211e911106e04e9',
  b: '-0x38b0550f27e4',
  r: '-0x2834f589481c4dcb0245e0d0ec58826fc1039111f352554cb9c56d81a002f70b62de84'
}, {
  a: '-0x1289005eae3547bb2399af5f30ee94f99ef52567094314bd',
  b: '-0xffb08ea4204571464f2787',
  r: '0x12833fe270edbf8a60b0f6d9d76a5fe443f4e3bd5815fc36d68736ba20b78b2edbbaab'
}, {
  a: '0xeef6',
  b: '-0x7acdeb103f2bfaa23ea2aee0c923bb13241a41a3379cee0e1fafa3d0cbb50d0bf7',
  r: '-0x72a17268fc579745ae236ee9070080418ff51a40d08b561de307bd138806121ba9215a'
}, {
  a: '-0x7947f4c16767b395ac38b8a8bb',
  b: '0xb6d3afb643bfb3251a4bad530e09d671e5e847dcaf4e',
  r: '-0x569d718ec47cd1f1f2a551d94e6b2d34243433e595b8d0f2d3cc2f22977b34614f3dfa'
}, {
  a: '-0x19d6c88b5f69e6dec9af90b3e361499a5d1a51b0a20469bf314c',
  b: '-0x55a4bd246eab956863',
  r: '0x8a4f145ff65fe42de185565a607b28e6f39c36b8f5f046f916321008693880632f064'
}, {
  a: '0xb38fefdec0e89262dbdb15724fb9b1ffca65a459ed7b',
  b: '-0xd7f43dd65400e337a9197082de',
  r: '-0x9779330455b9a2ddfdb1b41fc8ec9023d1e64a81158422840c379b1f920456196466aa'
}, {
  a: '0x4cd6d7eb14f8a460970eefa32cbe739783838815c0afdb0846981e017',
  b: '0x425ffc337058c',
  r: '0x13ec3317a8b5f1120a0e09610987f94c5040f922a539c11fdac1af1e1d40fae657ff94'
}, {
  a: '-0x74e1',
  b: '0x33fb7ee8d09b7fb699fabe82097a7a545545bfd989329bc7fbd55ff20ea626339d',
  r: '-0x17bba58c0925ce89fd42f3b45c95d413bac28d3c305c841188e1060302622956f680fd'
}, {
  a: '0x9874f082ed43633a008d375a0e6e95d31b9a0e55882ea2f65317bd9f432194b',
  b: '0x8a50a5e',
  r: '0x525f10fa82274e08505781135829996c862dd561082d5e08ed9c1eba1df2a644b9378a'
}, {
  a: '0x6bbe944528c581dba6ecceab',
  b: '0x927221611c09259fb92efbe647883747c2f7e46e80980b',
  r: '0x3da2b979e82c96398d3786782f87c85950a5676138777f755db0ed8609440d96626959'
}, {
  a: '-0x947256755fbd4efcf05a6153b72b0',
  b: '-0x711397a05365fc44d7910c66062eb93b0894d27d2',
  r: '0x4191d492a2ca252ba59a15ceb9ccd259878018736931eb5f6f9259394a0bbb282ce460'
}, {
  a: '0x1a02231947d352055f960a5a79edd9d64c4514c007ef7eb1bc9781d9ffd2c1e64612d',
  b: '-0x7',
  r: '-0xb60ef5b0f6c73e259d1a48795580f4dc15e39140378c76dc28248cf5fec34d4bea83b'
}, {
  a: '-0x748a06229',
  b: '-0x534de959e7fdddd0383af5ace905f061f85f5a1abd45b9fed79b537fe1c35',
  r: '0x25ec37bb9a4303ff41222ad8c20426be52daa84704a9da898d2881169519a8c79ece7d'
}, {
  a: '0x102606bc',
  b: '-0xcddac16a40fcc4ec9280669a12fbcdff17e99f754bb7c1e914630926a854ae',
  r: '-0xcfc3ff9a703f961aa83eea374c183d85d1b688a0972934f435d14eb1133e7c76e43c8'
}, {
  a: '-0xc61418ca79a46db',
  b: '-0xc8739b15290f28b6aa6b61fcc679a5411e2eeb638cf3c825cb00c41',
  r: '0x9b192663dc6aad77aa54b745cd804da16c33c9437ddc7b8c84f6a9c8bb374f340e419b'
}, {
  a: '0x396b7280d61404cd9c390eb865860a227c47f7c801b957335143',
  b: '0xb471be18d4334b9e6c',
  r: '0x28790f93720b695e22141943b776512e3bf069515d7603a79f98f44ff476b79d6ea244'
}, {
  a: '-0x606a',
  b: '-0xa73b5cd2a39191c42c63f039bae93212c8440088b5ca637e0bd18c004e076d7d26',
  r: '0x3efb81636c8e50efebdfdb771dfed755c6e06c5b7cc72b1c769f7944156318224411bc'
}, {
  a: '0x3ab91a8d9072807f3c13cc65682428a4da',
  b: '-0x6d189ec6bcaaaf2790bf63f74d9467a8e8f3',
  r: '-0x19067614989b4aafd103d30dd2bd1509fea8c0eb52fe32d3109f99f73997a70d0a0aee'
}, {
  a: '-0xd',
  b: '0x7474461a4f22278236bff79ff444ddf03934e02ff438e9e3948c4cbdc9e642cc6030f',
  r: '-0x5e9e78f5604bc019cc7bf931f677f4532e7af626f66e3e08e8b1fe5a340b16460e27c3'
}, {
  a: '-0x6789205b660853692f9ae48bf736c1a129a3e30cac02a6a3281aed0cd612c7e0',
  b: '-0xc484f9',
  r: '0x4f7ac42f09b7e265a3d07226a9bd87ef7d50b3d72e120c416ae9fd623f163eeed3e8e0'
}, {
  a: '-0x2abdf1f937b9dc3639cf6512ea61563d90880416bf0d4a5de68',
  b: '-0xcc1ee430131b3308c06',
  r: '0x2214852e25ec9b225113ff0c23d54bdd3d256bfe506032c9728997a93e0f741d041670'
}, {
  a: '-0x3a37ee6406c7d8ceaac347c6f885ab370e8e9b9e',
  b: '-0x41ecd4103b9765d6572e179e5e211f',
  r: '0xefe0f512c660c3dbe1bfe26f9a6218798089db93c56df2a771e5511ed9025cd583622'
}, {
  a: '-0xa91',
  b: '-0x7a0a48b3d8fe3f16ebf0ddb2d68e401ba3e63657c3842b3a70cc263300150891a8c',
  r: '0x50986aa3457d678a1330c168ead1513640ed3843558e78cc481dd1fa0e3de3f8b1814c'
}, {
  a: '0x98e7fa3',
  b: '0xd3282b6de67edfc399952285da4c8f7b613267994579d9ee2433690caa61d52',
  r: '0x7e1f316542f7c90b2aff1aba1012a08e6c84060bef2d24ef110c9cc44dd1e595cc5936'
}, {
  a: '0x41ff43a8936681960c9ad0f30bd453e343594650c032fb1c3fb81c0da0e8d474ed',
  b: '-0x59c2',
  r: '-0x1723c1f6e0fe56bb5e175ff6d74bc81194a313195c035fef1d8f4b45ff44e24da7009a'
}, {
  a: '0xc34d3b5834c7365181c9be7faeb64eab5b7778d74f17670a52911373e2d2',
  b: '-0x86d3629444',
  r: '-0x66dbb0ecc2925d96a319183ac2b906bd3f086db36e7c751334b5bab3b47e04144da7c8'
}, {
  a: '0x9d43598a7ba214e5cb592a480efbbba409e243b440170920180c3d43146a63',
  b: '0x27fec0f1',
  r: '0x1891c1fd7fcb8417b13c5cc03c6e106d11f9f3a6a36406008e0962b9d22272193c6733'
}, {
  a: '-0xf4672609a42f23f5b495b090665ca9fa2570d94',
  b: '-0xa85f24f64b990f193f514bdb1e52ff5',
  r: '0xa0be868715f71da6b1a8919bf4afb3366918d226154c5e2eee54f011a1381ad2322aa4'
}, {
  a: '-0x8e10ee8069724b456',
  b: '0x8b38c89565a399fd907754bbda6a77f66e3dfb13b935560c9d4ae',
  r: '-0x4d42b48407eebb53277070d397d4237d25b6e8dc61150165bf0e293eb0dba4f7cfca74'
}, {
  a: '-0xc26f5a5b3bf158eb14efc81fb46d708c605e9',
  b: '-0x60db571668a42fdfae4d019dee0952f28',
  r: '0x499059495f477e6cacaf70d6f0af3f890ac2ff74c879897d8d2f9517b6cdb10aa3b368'
}, {
  a: '-0x669b8b4e55bc70a6767c3c571cf2d85d5e78fe06988d15',
  b: '-0x669dd95a0b79058bfb936347',
  r: '0x29213e0395913a64a3c13dffb7203eda7e5166c0e528f81ad5fe991dd62a546ced3fd3'
}, {
  a: '0x5851fb8654cbef255646fcf1d28',
  b: '-0x53a20a117e254f6a0f48747269058943ff7919ef6cd',
  r: '-0x1cda7be6f549f3dd6578fbb8306f1cdb25d814f12ba4cb29c6418ed1902fce358ec908'
}, {
  a: '-0x73f3249a3e09063a35c1ad939b8d38e96341cf',
  b: '-0x22f3eb3c153bcdcff576e56b1f48a35c',
  r: '0xfd4c533a3da48bf72f456e2db9d5cdfd2a43cf01f5b0462edf3e279db5275a5ca7364'
}, {
  a: '0x5ff89f22ec9233c1ff1d417fa',
  b: '-0xf9a2533bae64295865e53b7acbf5bdcbd10b08010ccf6',
  r: '-0x5d95ad51a779716439f6d34f2449966dcff601abacd1015cad60a325908085e48a423c'
}, {
  a: '0x6e8a6a3079bcdf75a',
  b: '0xc7151174f7cca339e8bed41948e6789d313fa9fe155f4fc2a688c',
  r: '0x55f6b17017610d7bff76c7e3b5ada09b2a844e1c2a26e95e4008a4598532840de3d538'
}, {
  a: '0x85d3dba068962c5263e15ca09b97162673be3a2c93ddeeae65b8c62ae4f',
  b: '-0x647e838e178',
  r: '-0x3488e4d672fdfe621525b8fb9d6659b9488f9b711e9c83334762c08d46c6c342bd2408'
}, {
  a: '-0x20243c5fbd31c13e5',
  b: '-0x393ae7ea606e734c77102d0a914c12665e5569db51f07cc5fcc60',
  r: '0x72f76c51e85f93735b1bf63048df3a27b1aaaa94487ca2b7a5ee8adf2e832685cf1e0'
}, {
  a: '0x51a9c172d51e01129e035b50aab4844b21e00815670b51b9db7107c02e7e98a884',
  b: '-0xfed0',
  r: '-0x5148c7dd1cc0ed7157e7b7543ae9cdee08a7ce0bcda0f448cebc7186fa4762533be340'
}, {
  a: '0x488e31c76b674b',
  b: '-0xa08715ee28ed15ab81d1fb8b36b0f989c74ce6593e2c00e1f2ac6359',
  r: '-0x2d7f28500d2b3f1d647112d3a69789b07760493759b2b2894c5593f075fc2629acea13'
}, {
  a: '0x4ebd34608d03aa87cb295916eb9d92033444a7f63a2eb4564957db',
  b: '0x898271d3eb869394',
  r: '0x2a4b601ef7006f74536bb086c0c061a37b44af85837f4cd6e998ce0e802059057b8b9c'
}, {
  a: '0x6503f9ccfcec30588f7955a',
  b: '-0x2f27f5037d08c841cb40e84d6c9712381113e2c01de32a1',
  r: '-0x129b7f25df1d686e982405ecde8a0938ae409e35ad3c3b76488265fd28f0fc5cec819a'
}, {
  a: '-0x5dac1ccad8261864c5e0d',
  b: '0xf7d934d049c715a78ef1d30ea3e2474f05fe6e9b6f2592a62',
  r: '-0x5ab089ff4b2d7f77eb82312c6a7cde0c8486be2140f0dade823b9ba53e7d10ed2f22fa'
}, {
  a: '-0x7fdb3f67dd6a7d9e9db9cba8a8e7e40d2a5e429c7cdd8e11053c3bad6eb7883d08',
  b: '-0x5c07',
  r: '0x2df649c80f69530e700515452e4ff44bf79608840f27091d0058ca17f587fbfaa88b38'
}, {
  a: '0x716cf61780e83232aac6d0b9da357dc9d6690a',
  b: '-0x43838b3017d9a734c443276bc356c6d0',
  r: '-0x1de9ccd58d61dce95d8bf92fed73fa685a14b571b397ae1091fc46bbe74d87bacf1420'
}, {
  a: '-0x94bdecb8653d0506ceef9b6011',
  b: '0xe00c49f076e675f868bf7f68eff4238740d2b28666f0',
  r: '-0x822d52fe50de174a4f661c8400f15457082841c9a9f0845f35fe8409c8578aa4d6d5f0'
}, {
  a: '0x40f94e9189cef88c70615282cb7a4c534ea',
  b: '0x73b62fc09c1ce7d578e16e219242141f09b',
  r: '0x1d5e3ba7e466da3c9116c7a7ac635f7263806d4068ab58489942d6c097ca763e6c69ae'
}, {
  a: '-0x7e9ab547e11544c48ec480588e2485a5fc65f6911e8f748421a77c23764068',
  b: '0x579a5643',
  r: '-0x2b52e755961f3897386db13aae1f42514715395cf4336b242f9c0bd3cd0e6d1825cb38'
}, {
  a: '-0xc8ee62a7b2ff5c593c01066c8c919fa9fc677b499b',
  b: '-0xa3831b814495606fcfda571787e3',
  r: '0x8056b063dd25278052f01c08aa9dafa1ad375a499fa53db421af7039c60a7710100171'
}, {
  a: '0x9e589e1f14bb6c0a3915dbe667239160f82943a4fe3375420f',
  b: '0x91d1d375f34fc1858d94',
  r: '0x5a31fab4b1716aa3a97a069cc84f2b60db4ceb0b71de2f65b7fa4d369627a6f5f773ac'
}, {
  a: '0x25580ab652fec7142a',
  b: '-0x5fe72d625e405aa562e04aa4eba82e63b246c228ae1cca51c736',
  r: '-0xdfd650a26a74d53614c609cfdd7f9128f4ce6454aebe63d3c1cb03b536d0d03f4e6dc'
}, {
  a: '0x1b7e735137a30464cc6351192862131f90d81e66d33684d93baf4ec9cb5f',
  b: '-0x56979ad71b',
  r: '-0x94cc2f479109f78cf8970e551287c3f73686e5975ad14685d2a193ac244ec293b3c05'
}, {
  a: '-0x453bd3949',
  b: '-0xd8b19462892dce72879e1239d94ec372aa6d04151bb19ba947ad248adad61',
  r: '0x3a9a8103df89d9b2efc06075e79871a30a3977ec82955536c5e39b41368518d8be09a9'
}, {
  a: '-0x13271801e6b72a16f7bb6',
  b: '0x83c8f2378d508e0efea4aaca64e532e492be9166f8dd131f6',
  r: '-0x9dc09f2d7367d35b506a2c5bd767210decb908c080d44c5eea05389eaac1eb564b6e4'
}, {
  a: '-0x4ed97593abc0d0efa4e49be212e6bd8f60529',
  b: '0x7340dd841c1fc6dfa1e1318f33b75e9ee',
  r: '-0x237faa69265d3bec5cab2d1b19c834fe3d106390abad1ccd920c153a71ea476e281d1e'
}, {
  a: '-0x48a049740f',
  b: '-0xe4964c9e115f263e90f496fe0d78bf53056b41f7449c3b1805265b71be6c',
  r: '0x40d96512d506374ac3e92242eaf393155978fef6ad9181bcd11fc981d26781b2bf1854'
}, {
  a: '-0xb53c9f507c6f73caa8e9e6d7699423fab64817fb1f38692cd58988',
  b: '0x8e552782092976f9',
  r: '-0x64c3e977d649c99998e267ea9e34952bd92eea805b32609d6f7e7cc755980fd7df7548'
}, {
  a: '-0x5610115177d985ac00c136b943a6ae7f531008a48e7',
  b: '0xda3f13be57d171e63d9f1fe40bc',
  r: '-0x495ee356d1d78003c85f4ecd304b0c2920e47edf073711e8de67e4234028c3c3f949a4'
}, {
  a: '-0x976e56a394c6b0740bfe0a9bebaf976db419',
  b: '-0x28f71eadaf4d8e1e7d3bb8cb71d0f9f98d',
  r: '0x183b6b24d27d9cbc53c2c5b802e27e56d79e62ec87133589a7f78a7326581197e982c5'
}, {
  a: '0xdb04ef064',
  b: '0xc5d47898399bfcda6203a533f4305e3361e87e4a6b97cf4e2a11e13e3b698',
  r: '0xa94093324caf673ece61743852877ad54bafb0d4d5091c7af634bce6fa05076271d360'
}, {
  a: '0xd942d6e0a767a65eec61',
  b: '0xb8567553ccc6153d09d45263f2198befe3e0a894d64674c6d5',
  r: '0x9c716a78527472b2437ab23ac1a4bfa1910fc0de6dda5a667a8557b08478a679c1b2b5'
}];

const dataSmall = [{
  a: '0x150a4fdab4a71f0a',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0x80ef2e6fe',
  b: '-0xab59690',
  r: '0x564ccc0df990c2e0'
}, {
  a: '-0xd41d63b1db1c',
  b: '-0x4532',
  r: '0x3955599c68cb5778'
}, {
  a: '0xf6d7f05b104d9',
  b: '-0x873',
  r: '-0x825a283d16abf57b'
}, {
  a: '-0xe11356292',
  b: '0x9798348',
  r: '-0x85483975e1766f10'
}, {
  a: '-0xb5c1e3da028e8',
  b: '0x7b7',
  r: '-0x57a3ad4d6e9b95d8'
}, {
  a: '0x9cc35ae9',
  b: '-0xf5e01f77',
  r: '-0x969034350fb1794f'
}, {
  a: '-0xd3',
  b: '-0x3d27cbfc7a8199',
  r: '0x3267cd2118f8d11b'
}, {
  a: '-0xfa885cdf863c9',
  b: '0xa81',
  r: '-0xa47925787e102249'
}, {
  a: '-0x6d95991d373',
  b: '0xe12e0',
  r: '-0x60642c7430c11aa0'
}, {
  a: '-0xa0acaf59aac8ed',
  b: '0x33',
  r: '-0x200266eedd060737'
}, {
  a: '-0xb37ed9931caf7c6e',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0x390c09',
  b: '-0x9b699e1150',
  r: '0x22a1d29bfa2e5bd0'
}, {
  a: '-0x6f9f',
  b: '0x6702db8ed04c',
  r: '-0x2cea37f94a045334'
}, {
  a: '0x78ce3e22bd58bdf',
  b: '0x6',
  r: '0x2d4d574d0701473a'
}, {
  a: '0x650af01',
  b: '-0x160f1c115',
  r: '-0x8b4e759787f1c15'
}, {
  a: '0x8e0c',
  b: '-0x2ce48316ccec',
  r: '-0x18e8db6ccabc8310'
}, {
  a: '-0x9ece9bd3c330c',
  b: '0x4a4',
  r: '-0x2e0f6cb22b5ce3b0'
}, {
  a: '0xda94',
  b: '0xeaa4811c060f',
  r: '0xc857bd0c815c46ac'
}, {
  a: '0xc8ad2da7',
  b: '0xaf87efb0',
  r: '0x8998f16be0bf4bd0'
}, {
  a: '-0x5ffc5d19',
  b: '-0x5fa37813',
  r: '0x23dbf140f949a0db'
}, {
  a: '0x8',
  b: '0x857a18007b7725c',
  r: '0x42bd0c003dbb92e0'
}, {
  a: '0x7c226d72',
  b: '0xab15acdf',
  r: '0x52f581c163dfee4e'
}, {
  a: '0x147369a8bd644b0',
  b: '0x8',
  r: '0xa39b4d45eb22580'
}, {
  a: '0x937b9f7',
  b: '0x9cbdf506c',
  r: '0x5a4cc49628c8a434'
}, {
  a: '0xe3a72d',
  b: '0xa2268d5a08',
  r: '0x903212fdd1ac0b68'
}, {
  a: '-0xb84d82f205dd8',
  b: '0xc29',
  r: '-0x8c1268d510952798'
}, {
  a: '0x533',
  b: '-0x8bd4b4c76d14b',
  r: '-0x2d702e7e8dc228f1'
}, {
  a: '-0x2f2a459cf50a8',
  b: '0xab5',
  r: '-0x1f8ff9b598ba96c8'
}, {
  a: '-0x8b0a',
  b: '0x68d028fe6d24',
  r: '-0x38ed1e63bf32cf68'
}, {
  a: '-0xe29361c5ae931',
  b: '0x29c',
  r: '-0x24f38931fd387bdc'
}, {
  a: '0xf87d306',
  b: '0x85153c1bd',
  r: '0x812da6bf2e50516e'
}, {
  a: '0xc258',
  b: '-0xcb0b3c96d175',
  r: '-0x9a244fc71e92aa38'
}, {
  a: '0x12a4c2',
  b: '0x2a7b154937',
  r: '0x317fe8a0ee6b7ae'
}, {
  a: '-0x7934179118d7ab93',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0xf15abbbed',
  b: '0xb1f779c',
  r: '-0xa7c90d22f9b4af6c'
}, {
  a: '-0x98ca',
  b: '-0xf9ee9db65c06',
  r: '0x952ae3ecb8882cbc'
}, {
  a: '0xf2672150815d',
  b: '-0x2619',
  r: '-0x2412fb0434107015'
}, {
  a: '0xd',
  b: '-0xee5d840f694fb06',
  r: '-0xc1abfb4c8590bf4e'
}, {
  a: '-0x4c',
  b: '0x155c2ab8967412',
  r: '-0x6575caeccaa7558'
}, {
  a: '0x8',
  b: '0xb811ddb41e40505',
  r: '0x5c08eeda0f202828'
}, {
  a: '-0xe5696e0f8',
  b: '-0xad4b419',
  r: '0x9b4bb004884a5838'
}, {
  a: '-0xe6e9eba',
  b: '-0x5c67e99a2',
  r: '0x5359cb813a699bb4'
}, {
  a: '-0xfe6154f164',
  b: '-0x23df93',
  r: '0x23a57777e2b8b86c'
}, {
  a: '-0xdcf88b7bb4d9b996',
  b: '0x0',
  r: '0x0'
}, {
  a: '0x2095',
  b: '-0x660ef8b17d2b',
  r: '-0xcfd45cceef33a07'
}, {
  a: '0xc92d3096002f27',
  b: '-0x77',
  r: '-0x5d840195ba15eb21'
}, {
  a: '0x7071',
  b: '0xb1c1ce25ca60',
  r: '0x4e1340bc87385460'
}, {
  a: '0x2fd418794a',
  b: '-0x861f1e',
  r: '-0x190ed5194e4a2cac'
}, {
  a: '0x73d8da04e2',
  b: '0x95b192',
  r: '0x43bd91e541410ae4'
}, {
  a: '0x5b0d2b99795f',
  b: '0x847c',
  r: '0x2f1ee4dc40ebc604'
}, {
  a: '0x5ab',
  b: '0x7833911b0dad9',
  r: '0x2a94c47745686bf3'
}, {
  a: '0x1feb4460e8',
  b: '-0x73ba08',
  r: '-0xe6de1a690c39740'
}, {
  a: '0xf92d698c9e89b',
  b: '-0xc8d',
  r: '-0xc375ef5b9e1c615f'
}, {
  a: '0xf08bae3a785fe1b9',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0x57b142e769',
  b: '-0x91aa4e',
  r: '0x31e5bd5382873bfe'
}, {
  a: '-0x27',
  b: '-0x2112cbf67cd115',
  r: '0x509dd128d03da33'
}, {
  a: '-0x86fb3f828b396b50',
  b: '0x0',
  r: '0x0'
}, {
  a: '0xa1869fd2df45d',
  b: '0x746',
  r: '0x496d92e77c3f5c6e'
}, {
  a: '-0x94be',
  b: '-0xc9d5a12c5940',
  r: '0x75454dbb42833d80'
}, {
  a: '-0xaa25c9b2a2548d',
  b: '-0x25',
  r: '0x18977626d1763861'
}, {
  a: '-0xd3eb5',
  b: '0xa3a8aee25a6',
  r: '-0x877a7721d0ecd25e'
}, {
  a: '0x9',
  b: '-0x58551bb6c572c4d',
  r: '-0x31afdf96cf108eb5'
}, {
  a: '0xc4358b225600689',
  b: '-0x5',
  r: '-0x3d50bb7abae020ad'
}, {
  a: '0x836cb50e370bc4bc',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0x3335957',
  b: '0x186e92d51',
  r: '-0x4e32467e4228f87'
}, {
  a: '0x2a6d52beb94cb636',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0xe',
  b: '0x936cf70798a045a',
  r: '-0x80ff5826a58c3cec'
}, {
  a: '0xc98200e4c58',
  b: '-0x2789c',
  r: '-0x1f1f3bd6d52fc5a0'
}, {
  a: '0xea69185b5f66e50',
  b: '0xd',
  r: '0xbe7563ca3d839a10'
}, {
  a: '0x692c',
  b: '-0xd6e37face47e',
  r: '-0x58483e77db6ef3a8'
}, {
  a: '0x3bb087f76b',
  b: '-0xc2caa6',
  r: '-0x2d6b0709407add62'
}, {
  a: '-0xa',
  b: '0xa5b4dc1f3efefd9',
  r: '-0x67910993875f5e7a'
}, {
  a: '-0xad20f8f4f0b',
  b: '0x6a4fe',
  r: '-0x47e5abbf191578ea'
}, {
  a: '0xbfb86c',
  b: '0xe12e0e7239',
  r: '0xa8a394e108b8280c'
}, {
  a: '-0xad0f8',
  b: '-0x34027fe2980',
  r: '0x2328d692def03400'
}, {
  a: '0x592b5c431d1720',
  b: '0xde',
  r: '0x4d539a02333a0dc0'
}, {
  a: '-0xffe0bfe9fed89153',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0xfc482175dcc42',
  b: '-0x613',
  r: '0x5fc6a233eebfb4e6'
}, {
  a: '-0xb8479c5ac4',
  b: '-0x2c295e',
  r: '0x1fca1601efa2b7f8'
}, {
  a: '0x2934da6b36131',
  b: '0x165',
  r: '0x3976b4978268955'
}, {
  a: '0x9a2cdaa',
  b: '0xe68a77618',
  r: '0x8ad7b07f2bf5a3f0'
}, {
  a: '0x15f32',
  b: '-0x68ec7b4ea04',
  r: '-0x8ff0bb40e3130c8'
}, {
  a: '-0x8c190b63929fb2',
  b: '-0x5c',
  r: '0x32590017c8b163f8'
}, {
  a: '-0xbf0ac61c679120b',
  b: '0xa',
  r: '-0x7766bbd1c0bab46e'
}, {
  a: '-0x97647f5',
  b: '-0x41c01b3c6',
  r: '0x26e21fce19c0f67e'
}, {
  a: '-0x51ba033',
  b: '0x7ac299db5',
  r: '-0x2730c59979f28b0f'
}, {
  a: '-0xd139f632c2',
  b: '-0xac398c',
  r: '0x8cc1f9bd9e48f418'
}, {
  a: '-0xbb78ba218ce6619',
  b: '0x9',
  r: '-0x6973e8b2df4196e1'
}, {
  a: '-0xda041c203601c7',
  b: '0x2f',
  r: '-0x2806c129e9ea5389'
}, {
  a: '-0xe72ad0e',
  b: '-0x9796985e2',
  r: '0x88e23de0ede30c5c'
}, {
  a: '0x27fb5efe077769cd',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0x364db6bb3a',
  b: '0xadd51a',
  r: '-0x24dfb8a9748845e4'
}, {
  a: '-0x3f11d7bbc46a',
  b: '0xf449',
  r: '-0x3c2efdb57bc00a3a'
}, {
  a: '0xf8a1fa67f9414',
  b: '-0x193',
  r: '-0x18766fd31ad61b7c'
}, {
  a: '0xaa2f0d28139',
  b: '-0x43295',
  r: '-0x2ca5c7294ca6582d'
}, {
  a: '0x4cd014fe5afe',
  b: '0x2062',
  r: '0x9b76a47d4be953c'
}, {
  a: '0x275bf89874a',
  b: '-0x25a05',
  r: '-0x5c8f0b625d3a872'
}, {
  a: '-0x5a1e31',
  b: '0x5b247cd42b',
  r: '-0x2015939b33dfa63b'
}, {
  a: '-0xb12c8e63c9',
  b: '0x5772dc',
  r: '-0x3c85a27d9c1c42bc'
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
    const r = d.a * d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: *');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a * d.b;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = JSBI.multiply(d.a, d.b);
    if (!JSBI.equal(r, d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: multiply');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = JSBI.multiply(d.a, d.b);
    }
  }
  return Date.now() - t1;
}


const kRepsBig = 40000;
const kRepsSmall = 120000;

console.log('Native/big:   ' + testNative(dataBigNative, kRepsBig));
console.log('JSB/big:      ' + testJsb(dataBigJsb, kRepsBig));
console.log('Native/small: ' + testNative(dataSmallNative, kRepsSmall));
console.log('JSB/small:    ' + testJsb(dataSmallJsb, kRepsSmall));

if (errorCount !== 0) {
  console.error('Finished with ' + errorCount + ' errors.');
  // Support both d8 (`quit`) and Node.js (`process.exit`).
  (typeof quit !== 'undefined' ? quit : process.exit)(1);
}
