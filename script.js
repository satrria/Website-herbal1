const herbs = [
    {
        name: "Jahe",
        latinName: "Zingiber officinale",
        description: "Jahe adalah salah satu tanaman herbal yang paling populer di dunia. Jahe digunakan sebagai rempah-rempah dalam masakan dan obat tradisional karena manfaat kesehatannya yang meliputi mengurangi mual, peradangan, dan meningkatkan pencernaan.",
        benefits: "Mengurangi mual, membantu pencernaan, meredakan sakit tenggorokan.",
        brew: "Cuci bersih jahe, potong-potong, dan rebus dalam air mendidih selama 10 menit.",
        image: "https://faperta.umsu.ac.id/wp-content/uploads/2023/06/manfaat-jahe.jpg"
    },
    {
        name: "Kunyit",
        latinName: "Curcuma longa",
        description: "Kunyit telah digunakan selama ribuan tahun sebagai rempah-rempah dan obat di Asia. Kunyit terkenal karena sifat anti-inflamasi dan antioksidannya yang kuat.",
        benefits: "Anti-inflamasi, baik untuk kesehatan hati, meningkatkan imunitas.",
        brew: "Cuci bersih kunyit, potong-potong, dan rebus dalam air mendidih selama 15 menit.",
        image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1683291053/attached_image/7-manfaat-kunyit-untuk-kulit-yang-jarang-diketahui.jpg"
    },
    {
        name: "Sereh",
        latinName: "Cymbopogon citratus",
        description: "Sereh dikenal memiliki aroma yang menyegarkan dan sering digunakan dalam masakan serta teh herbal. Selain itu, sereh memiliki sifat yang dapat menenangkan dan membantu pencernaan.",
        benefits: "Mengurangi kecemasan, membantu pencernaan, baik untuk kesehatan kulit.",
        brew: "Cuci bersih sereh, memarkan, dan rebus dalam air selama 10 menit.",
        image: "https://desagrogol.gunungkidulkab.go.id/assets/files/artikel/sedang_1724401799SEREH.jpg"
    },
    {
        name: "Daun Binahong",
        latinName: "Anredera cordifolia",
        description: "Binahong merupakan salah satu tanaman yang memiliki beragam khasiat, termasuk mengobati berbagai penyakit kronis. Bahkan, hampir seluruh bagian tumbuhan ini bisa dimanfaatkan sebagai pengobatan alternatif. Manfaat binahong bisa didapatkan dengan cara mengonsumsi maupun mengoleskannya ke kulit.",
        benefits: "Beberapa senyawa alami di dalam daun binahong yang bermanfaat bagi kesehatan adalah flavonoid, saponin, dan tanin. Berkat berbagai kandungan dan khasiat tersebut, manfaat daun binahong yang bisa didapatkan adalah sebagai berikut: Mempercepat penyembuhan luka bakar, Mengatasi Diare, Mengatasi Jerawat, Menurunkan risiko terjadinya katarak, Mengatasi diabetes, Mencegah terjadinya serangan jantung, Meningkatkan fungsi ginjal, Mengobati asam urat",
        brew: "Cuci bersih daun binahong dengan air mengalir. Masukkan 5–6 lembar daun binahong ke dalam air panas. Rebus selama 10 menit atau sampai mendidih. Setelah matang, saring air rebusan tersebut dan dinginkan. Setelah cukup dingin, Anda dapat minum air rebusan daun binahong tersebut.",
        image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1604258349/attached_image/manfaat-daun-binahong-yang-sayang-untuk-dilewatkan.jpg"
    },
    {
        name: "kunir asem",
        latinName: "",
        description: "Kunyit asam adalah minuman tradisional yang terbuat dari perpaduan kunyit dan asam jawa. Kunyit asam mengandung banyak zat antioksidan dan antiinflamasi, serta vitamin C yang mendukung sistem kekebalan dan produksi kolagen. Asam jawa mengandung asam malat yang bermanfaat untuk meningkatkan kesehatan tulang dan jantung",
        benefits: "Minuman ini memiliki warna kuning gelap dan aroma harum. Kunyit asam memiliki banyak khasiat bagi kesehatan, di antaranya: Mengatasi nyeri haid, Mengatasi keputihan, Mengobati maag, Meredakan stress, Mengontrol berat badan ",
        brew: "pembuatan jamu kunir asem adalah gula merah, serai, kapulaga, cengkeh, jeruk nipis dan kayu manis. Cara membuat jamu kunir asem adalah dengan menghaluskan kunyit terlebih dahulu dan merebusnya hingga mendidih. Kemudian menambahkan air asam jawa dan gula jawa. Setelah disaring, maka jamu kunir asem siap untuk diminum. ",
        image: "https://asset.kompas.com/crops/xwQ9xYIqOUTykXodysDMOgITur8=/0x0:1000x667/1200x800/data/photo/2019/11/27/5dde7bfc69ba8.jpg"
    },
    {
        name: "Sinom",
        latinName: "",
        description: "Jamu sinom merupakan jamu yang berbahan dasar daun asam muda (sinom) dan kunyit. Kombinasi kunyit dan sinom menghasilkan sensasi yang hampir mirip dengan kunir asem yaitu rasa asam manis. Cita rasa asam, manis dan segar dari jamu sinom melambangkan kondisi manusia yang lahir dalam keadaan suci dan kembali ke penciptanya dalam keadaan suci pula (Isnawati & Sumarno, 2021).",
        benefits: "jamu sinom digunakan oleh masyarakat Jawa untuk melancarkan peredaran darah, mengurangi nyeri haid, menurunkan berat badan, mengatasi keputihan dan sembelit.",
        brew: "Prosedur pembuatan jamu sinom mirip dengan pembuatan jamu kunir asam. ",
        image: "https://lh6.googleusercontent.com/proxy/VD2FlJgpfoKCoBSVLO2EUUK3vWDJ9iHxw3h9kG-cRV-slksdqpYBiCBS8gSFkReAYNge7cYmB9yHw7Klgj7qinHErVDE04ekAhfRf3qlZe-agDYr4w_w85xqgSC9nFtwDnOjE4zeqYw9qnBrPtrnhR3A8fsq1Axsst-R-jCBdX5ezDGQZFFUkcBUjw"
    },
    {
        name: "Uyup-Uyup",
        latinName: "",
        description: "Jamu uyup-uyub umumnya dikonsumsi oleh wanita sehabis melahirkan dengan tujuan meningkatkan dan memperlancar ASI. Namun ada juga yang mengonsumsinya sebagai minuman perawatan selama masa nifas.",
        benefits: " Selain itu, jamu ini juga dapat meredakan gangguan menyusui seperti nyeri dan pembengkakan payudara.",
        brew: "Cara pembuatan jamu uyub-uyub adalah bahan baku berupa rimpang dicuci bersih kemudian dihaluskan menggunakan lumpang dan ditambahkan dengan sedikit air. Setelah halus rimpang diperas menggunakan kain halus. Air perasan rimpang selanjutnya dimasukkan ke dalam gelas yang berisi air matang dan ditambahkan dengan madu/gula merah sesuai selera.",
        image: "https://cdn0-production-images-kly.akamaized.net/ytTOqj2BbSVsv4F_HgWyEwQAQ9M=/1x24:1000x587/469x260/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4621854/original/050666800_1698128591-shutterstock_1516228193.jpg"
    },
    {
        name: "Beras Kencur",
        latinName: "Kombinasi beras (Oryza sativa) dan kencur (Kaempferia galanga L.).",
        description: " minuman herbal yang terbuat dari rimpang kencur dan rendaman beras. Karena bahan-bahan tersebut, jamu beras kencur mengandung berbagai nutrisi vitamin dan mineral yang baik untuk tubuh, di antaranya adalah: Kalsium, Kalium",
        benefits: "Jamu ini memiliki banyak manfaat, di antaranya: Merangsang nafsu makan, Memperbaiki pencernaan, Menyegarkan tubuh, Meredakan pegal, Meningkatkan sistem imun ",
        brew: "Cara membuat beras kencur di rumah: Cuci beras dan rendam selama 3 jam. Masukkan beras, kencur, jahe, asam jawa, gula jawa, daun pandan, dan air matang ke dalam panci, Didihkan, dinginkan, dan blender atau tumbuk dengan beras yang direndam. Saring dan peras hingga keluar jamu beras kencur",
        image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/255/2024/11/16/IMG_5011-960681411.jpeg"
    },
    {
        name: "Cabe Puyang",
        latinName: "Kombinasi dari bahan dasar cabe jamu (Piper retrofractum Vahl.) dan Lempuyang (Zingiber zerumbet).",
        description: "Jamu cabe puyang merupakan salah satu jenis ramuan herbal yang disebut sebagai rahasia raja-raja jawa. Disebut demikian karena ramuan ini memiliki khasiat untuk menjaga vitalitas. Menurut dr. Ratna Asih, M.Si dari Perkumpulan Dokter Pengembangan Obat Tradisional dan Jamu Indonesia (PDPOTJI) jamu cabe puyang juga berfungsi untuk memperlancar peredaran darah dan meningkatkan stamina.",
        benefits: "Manfaat konsumsi jamu cabe puyang secara rutin adalah meredakan pegal linu, nyeri pinggang, kram otot dan kesemutan. ",
        brew: "Proses pembuatan jamu cabe puyang cukup sederhana, yaitu lempuyang dan temulawak dicuci bersih, diiris tipis, dan dihaluskan. Bahan yang telah dihaluskan direbus bersama cabe puyang, serai dan gula jawa hingga mendidih. Setelah dingin, jamu ditambahkan dengan perasan jeruk nipis dan garam kemudian diaduk hingga rata. Jamu cabe puyang siap untuk diminum.",
        image: "https://www.malanggleerrr.com/wp-content/uploads/2020/10/IMG-20200416-WA0015-e1602686007483.jpg"
    },
    {
        name: "Pahitan/Paitan",
        latinName: "Andrographis paniculata (sambiloto) atau Pluchea indica (beluntas)",
        description: "Pahitan merupakan jamu dengan bahan dasar sambiloto (Andrographis paniculata Ness) yang kaya akan alkaloid. ",
        benefits: "dipercaya mampu mengobati penyakit seperti gatal-gatal, menurunkan kolesterol, mengurangi kelelahan meningkatkan nafsu makan dan anti alergi.Masyarakat Indonesia umumnya mengkombinasikan sambiloto dengan tanaman herbal lainnya seperti brotowali (Tinospora crispa), pule (Alstonia scolaris L. R. Br.), widoro laut (Strychnos ligustrina), adas (Foeniculum vulgare) ataupun rimpang tanaman (empon-empon) untuk mendapatkan khasiat yang maksimal. ",
        brew: "Cara membuat jamu pahitan adalah dengan merebus semua bahan baku dengan air hingga mendidih kemudian disaring. Jika telah terasa hangat, tambahkan gula batu untuk mengurangi rasa pahit ketika diminum. Jamu kemudian diaduk hingga rata dan siap diminum.",
        image: "https://jolalijogja.com/wp-content/uploads/2024/08/JamuPaitanSEHAT.jpg"
    },
    {
        name: "Kudu Laos",
        latinName: "Kombinasi Morinda citrifolia (mengkudu) dan Alpinia galanga (lengkuas).",
        description: "Kudu laos merupakan jamu yang berbahan dasar mengkudu (Morinda citrifolia) dan laos (Alpinia galangal).",
        benefits: "Jamu kudu laos berkhasiat untuk menurunkan tekanan darah, memperlancar aliran darah, menambah nafsu makan, mengontrol gula darah pasien diabetes dan mengurangi kolesterol. Selain itu, jamu kudu laos adalah jamu penghangat, sehingga jamu ini merepresentasikan tentang manusia dewasa yang harus bisa mengayomi orang-orang di sekitarnya. Selain mengkudu dan laos, juga dapat ditambahkan merica, asam jawa, cabe puyang dan bawang putih.",
        brew: "Proses pembuatan jamu kudu laos yaitu semua bahan baku dihaluskan dan dimasukkan ke dalam air yang mendidih. Setelah dingin, ramuan disaring untuk mendapatkan jamu kudu laos. Agar rasa getir jamu kudu laos berkurang saat diminum, dapat ditambahkan gula jawa atau perasan air jeruk nipis.",
        image: "https://www.wowkeren.com/display/images/photo/2020/07/15/00320360s4.jpg"
    }

    // Tambahkan lebih banyak data herbal di sini
];

window.onload = () => {
    displayHerbs(herbs);
};

function displayHerbs(herbs) {
    const herbContainer = document.getElementById('herbContainer');
    herbContainer.innerHTML = '';
    herbs.forEach((herb, index) => {
        const herbItem = document.createElement('div');
        herbItem.className = 'herb-item';

        herbItem.innerHTML = `
            <img src="${herb.image}" alt="${herb.name}">
            <h3>${herb.name}</h3>
            <button onclick="openModal(${index})">Selengkapnya</button>
        `;
        
        herbContainer.appendChild(herbItem);
    });
}

function openModal(index) {
    const herb = herbs[index];
    document.getElementById('modalHerbImage').src = herb.image;
    document.getElementById('modalHerbName').innerText = herb.name;
    document.getElementById('modalHerbLatinName').innerText = herb.latinName;
    document.getElementById('modalHerbDescription').innerText = herb.description;
    document.getElementById('modalHerbBenefits').innerText = herb.benefits;
    document.getElementById('modalHerbBrew').innerText = herb.brew;
    document.getElementById('herbModal').style.display = 'block';
}
function searchHerbs() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredHerbs = herbs.filter(herb => herb.name.toLowerCase().includes(searchTerm));
    displayHerbs(filteredHerbs);
}

document.querySelector('.close').onclick = function() {
    document.getElementById('herbModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('herbModal')) {
        document.getElementById('herbModal').style.display = 'none';
    }
}
