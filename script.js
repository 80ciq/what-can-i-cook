/* =========================================================
   What Can I Cook? - script.js
   FULL VERSION
   22 เมนูเดิม + ค้นหาวัตถุดิบ + ตัวกรอง + Favorite
   + Recent Search + Random + Recipe Modal
   ========================================================= */


/* =========================================================
   RECIPE DATABASE
   ========================================================= */

const recipes = [

    {
        id: 1,
        name: "ข้าวผัดไข่",
        description: "ข้าวผัดง่าย ๆ หอมกลิ่นกระทะ พร้อมไข่",
        imageKeywords: "egg fried rice thai food",
        ingredients: ["ข้าว", "ไข่", "น้ำมัน", "กระเทียม", "ซีอิ๊ว"],
        instructions: [
            "ตั้งกระทะใส่น้ำมันและผัดกระเทียมให้หอม",
            "ตอกไข่ลงไปแล้วคนให้พอสุก",
            "ใส่ข้าวลงไปผัดให้เข้ากัน",
            "ปรุงรสด้วยซีอิ๊ว",
            "ผัดต่อจนข้าวแห้งและหอม แล้วจัดเสิร์ฟ"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 2,
        name: "ข้าวผัดหมู",
        description: "ข้าวผัดหมูรสกลมกล่อม ทำง่าย เหมาะสำหรับมื้อเร่งด่วน",
        imageKeywords: "thai pork fried rice",
        ingredients: ["ข้าว", "หมู", "ไข่", "กระเทียม", "ซีอิ๊ว", "น้ำมัน"],
        instructions: [
            "หั่นหมูเป็นชิ้นพอดีคำ",
            "ตั้งกระทะใส่น้ำมันแล้วผัดกระเทียม",
            "ใส่หมูลงผัดจนเกือบสุก",
            "ใส่ไข่และข้าวลงไปผัด",
            "ปรุงรสด้วยซีอิ๊วแล้วผัดจนเข้ากัน"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 3,
        name: "ผัดกะเพราหมู",
        description: "เมนูยอดนิยมรสจัดจ้าน หอมใบกะเพรา",
        imageKeywords: "pad kra pao pork thai basil",
        ingredients: ["หมู", "ใบกะเพรา", "กระเทียม", "พริก", "น้ำปลา", "น้ำมัน"],
        instructions: [
            "โขลกกระเทียมและพริกพอหยาบ",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดพริกและกระเทียมจนหอม",
            "ใส่หมูลงผัดจนสุก",
            "ปรุงรสด้วยน้ำปลา",
            "ใส่ใบกะเพราแล้วผัดเร็ว ๆ ก่อนปิดไฟ"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 4,
        name: "ไข่เจียวหมูสับ",
        description: "ไข่เจียวฟู ๆ ใส่หมูสับ เหมาะกับข้าวสวยร้อน ๆ",
        imageKeywords: "thai pork omelette minced pork",
        ingredients: ["ไข่", "หมู", "น้ำปลา", "น้ำมัน"],
        instructions: [
            "ตอกไข่ใส่ชาม",
            "ใส่หมูสับและน้ำปลา",
            "ตีไข่ให้เข้ากัน",
            "ตั้งกระทะใส่น้ำมันให้ร้อน",
            "เทไข่ลงทอดจนเหลืองกรอบทั้งสองด้าน"
        ],
        category: "ทอด",
        difficulty: "ง่าย",
        time: 10
    },

    {
        id: 5,
        name: "ผัดคะน้าหมู",
        description: "คะน้ากรอบ ๆ ผัดกับหมูนุ่มและซอสปรุงรส",
        imageKeywords: "thai stir fried kale pork",
        ingredients: ["คะน้า", "หมู", "กระเทียม", "น้ำมัน", "ซีอิ๊ว"],
        instructions: [
            "ล้างและหั่นคะน้า",
            "หั่นหมูเป็นชิ้นพอดีคำ",
            "ตั้งกระทะใส่น้ำมันและผัดกระเทียม",
            "ใส่หมูลงผัดจนสุก",
            "ใส่คะน้าและปรุงรส",
            "ผัดเร็ว ๆ จนคะน้าสุกกรอบ"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 6,
        name: "ต้มจืดเต้าหู้หมูสับ",
        description: "ซุปใสรสอ่อน ๆ พร้อมเต้าหู้และหมูสับ",
        imageKeywords: "thai clear soup tofu minced pork",
        ingredients: ["หมู", "เต้าหู้", "ผักกาดขาว", "กระเทียม", "น้ำปลา"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่หมูสับลงไปต้ม",
            "ใส่ผักกาดขาวและเต้าหู้",
            "ปรุงรสด้วยน้ำปลา",
            "ต้มจนผักนิ่มแล้วจัดเสิร์ฟ"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 25
    },

    {
        id: 7,
        name: "ต้มยำกุ้ง",
        description: "ต้มยำกุ้งรสจัดจ้าน เปรี้ยว เผ็ด หอมสมุนไพร",
        imageKeywords: "tom yum goong thai spicy shrimp soup",
        ingredients: ["กุ้ง", "ตะไคร้", "ใบมะกรูด", "พริก", "มะนาว", "น้ำปลา"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่ตะไคร้และใบมะกรูด",
            "ใส่กุ้งลงไปต้มจนสุก",
            "ใส่พริก",
            "ปรุงรสด้วยน้ำปลาและมะนาว",
            "ชิมรสแล้วจัดเสิร์ฟ"
        ],
        category: "ต้ม",
        difficulty: "ปานกลาง",
        time: 30
    },

    {
        id: 8,
        name: "ผัดซีอิ๊ว",
        description: "เส้นใหญ่ผัดซีอิ๊วพร้อมหมูและผักคะน้า",
        imageKeywords: "pad see ew thai stir fried noodles pork",
        ingredients: ["เส้นใหญ่", "หมู", "ไข่", "คะน้า", "ซีอิ๊ว", "น้ำมัน"],
        instructions: [
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดหมูจนเกือบสุก",
            "ใส่ไข่แล้วคนให้เข้ากัน",
            "ใส่เส้นใหญ่และคะน้า",
            "ปรุงรสด้วยซีอิ๊ว",
            "ผัดจนเส้นหอมและเข้ากัน"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ปานกลาง",
        time: 20
    },

    {
        id: 9,
        name: "สุกี้น้ำ",
        description: "สุกี้น้ำร้อน ๆ พร้อมผัก ไข่ และเนื้อสัตว์",
        imageKeywords: "thai sukiyaki soup vegetables pork",
        ingredients: ["หมู", "ไข่", "ผักกาดขาว", "วุ้นเส้น", "น้ำจิ้มสุกี้"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่หมูลงไปต้ม",
            "ใส่ผักกาดขาวและวุ้นเส้น",
            "ตอกไข่ลงไป",
            "ต้มจนทุกอย่างสุก",
            "เสิร์ฟพร้อมน้ำจิ้มสุกี้"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 10,
        name: "ยำวุ้นเส้น",
        description: "ยำวุ้นเส้นรสเปรี้ยวเผ็ด หอมสมุนไพร",
        imageKeywords: "thai glass noodle salad yum woon sen",
        ingredients: ["วุ้นเส้น", "หมู", "หอมใหญ่", "มะนาว", "พริก", "น้ำปลา"],
        instructions: [
            "ลวกวุ้นเส้นและพักไว้",
            "ลวกหมูให้สุก",
            "หั่นหอมใหญ่",
            "ผสมน้ำมะนาว น้ำปลา และพริก",
            "ใส่วุ้นเส้น หมู และหอมใหญ่",
            "คลุกให้เข้ากันแล้วจัดเสิร์ฟ"
        ],
        category: "ยำ",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 11,
        name: "ไข่ดาว",
        description: "ไข่ดาวทอดง่าย ๆ ไข่ขาวกรอบ ไข่แดงเยิ้ม",
        imageKeywords: "fried egg sunny side up",
        ingredients: ["ไข่", "น้ำมัน"],
        instructions: [
            "ตั้งกระทะใส่น้ำมัน",
            "ตอกไข่ลงกระทะ",
            "ทอดจนไข่ขาวสุก",
            "ตักขึ้นและจัดเสิร์ฟ"
        ],
        category: "ทอด",
        difficulty: "ง่าย",
        time: 5
    },

    {
        id: 12,
        name: "ไข่ต้ม",
        description: "ไข่ต้มทำง่าย เหมาะสำหรับรับประทานคู่กับอาหารหลายชนิด",
        imageKeywords: "boiled eggs food",
        ingredients: ["ไข่"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่ไข่ลงไปอย่างระมัดระวัง",
            "ต้มประมาณ 7-10 นาทีตามระดับความสุกที่ต้องการ",
            "นำไข่ขึ้นแช่น้ำเย็น",
            "ปอกเปลือกและจัดเสิร์ฟ"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 10
    },

    {
        id: 13,
        name: "ผัดผักรวม",
        description: "ผัดผักหลากชนิดกรอบ ๆ ปรุงรสกลมกล่อม",
        imageKeywords: "thai mixed vegetables stir fry",
        ingredients: ["แครอท", "คะน้า", "กะหล่ำ", "กระเทียม", "น้ำมัน", "ซีอิ๊ว"],
        instructions: [
            "ล้างและหั่นผักทุกชนิด",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมให้หอม",
            "ใส่ผักที่สุกยากก่อน",
            "ใส่ผักที่เหลือตามลงไป",
            "ปรุงรสและผัดจนผักสุกกรอบ"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 14,
        name: "แกงจืดไข่น้ำ",
        description: "ซุปไข่นุ่ม ๆ รสอ่อน รับประทานง่าย",
        imageKeywords: "thai egg soup omelette soup",
        ingredients: ["ไข่", "หมู", "ต้นหอม", "กระเทียม", "น้ำปลา"],
        instructions: [
            "ตีไข่ให้เข้ากัน",
            "ทอดไข่ให้พอสุกแล้วหั่นเป็นชิ้น",
            "ต้มน้ำให้เดือดและใส่หมู",
            "ใส่ไข่ทอดลงในน้ำซุป",
            "ปรุงรสด้วยน้ำปลา",
            "โรยต้นหอมก่อนเสิร์ฟ"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 15,
        name: "หมูกระเทียม",
        description: "หมูผัดกระเทียมหอม ๆ รสเค็มหวานกำลังดี",
        imageKeywords: "thai garlic pork moo krathiam",
        ingredients: ["หมู", "กระเทียม", "ซีอิ๊ว", "น้ำมัน", "น้ำตาล"],
        instructions: [
            "หมักหมูกับซีอิ๊วและน้ำตาล",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมให้เหลืองหอม",
            "ใส่หมูลงผัดจนสุก",
            "ผัดต่อให้ซอสเคลือบเนื้อหมู",
            "จัดเสิร์ฟพร้อมข้าว"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 16,
        name: "ผัดพริกแกงหมู",
        description: "หมูผัดพริกแกงรสเข้มข้น หอมเครื่องแกง",
        imageKeywords: "thai red curry paste stir fried pork",
        ingredients: ["หมู", "พริกแกง", "ถั่วฝักยาว", "ใบมะกรูด", "น้ำปลา", "น้ำมัน"],
        instructions: [
            "หั่นหมูและถั่วฝักยาว",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดพริกแกงให้หอม",
            "ใส่หมูลงผัดจนสุก",
            "ใส่ถั่วฝักยาว",
            "ปรุงรสและใส่ใบมะกรูด"
        ],
        category: "ผัด",
        difficulty: "ปานกลาง",
        time: 25
    },

    {
        id: 17,
        name: "แกงเขียวหวานไก่",
        description: "แกงไทยรสเข้มข้น หอมกะทิและเครื่องแกง",
        imageKeywords: "thai green curry chicken",
        ingredients: ["ไก่", "พริกแกงเขียวหวาน", "กะทิ", "มะเขือ", "ใบโหระพา"],
        instructions: [
            "ตั้งหม้อใส่กะทิ",
            "ใส่พริกแกงเขียวหวานแล้วคนให้เข้ากัน",
            "ใส่ไก่และต้มจนสุก",
            "ใส่มะเขือ",
            "ปรุงรสตามต้องการ",
            "ใส่ใบโหระพาก่อนปิดไฟ"
        ],
        category: "แกง",
        difficulty: "ปานกลาง",
        time: 40
    },

    {
        id: 18,
        name: "ลาบหมู",
        description: "ลาบหมูรสจัดจ้าน หอมข้าวคั่วและสมุนไพร",
        imageKeywords: "thai larb moo minced pork salad",
        ingredients: ["หมู", "มะนาว", "น้ำปลา", "พริก", "ข้าวคั่ว", "หอมแดง"],
        instructions: [
            "รวนหมูสับในกระทะจนสุก",
            "ใส่น้ำปลาและน้ำมะนาว",
            "ใส่พริกและข้าวคั่ว",
            "ใส่หอมแดงซอย",
            "คลุกทุกอย่างให้เข้ากัน",
            "จัดเสิร์ฟพร้อมผักสด"
        ],
        category: "ยำ",
        difficulty: "ปานกลาง",
        time: 25
    },

    {
        id: 19,
        name: "ข้าวต้มหมู",
        description: "ข้าวต้มหมูร้อน ๆ รสอ่อน เหมาะสำหรับมื้อเช้า",
        imageKeywords: "thai rice porridge pork khao tom moo",
        ingredients: ["ข้าว", "หมู", "กระเทียม", "ต้นหอม", "น้ำปลา"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่ข้าวลงไปต้ม",
            "ใส่หมูสับ",
            "ปรุงรสด้วยน้ำปลา",
            "ต้มจนข้าวนิ่มและหมูสุก",
            "โรยต้นหอมก่อนเสิร์ฟ"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 30
    },

    {
        id: 20,
        name: "มาม่าผัดไข่",
        description: "บะหมี่กึ่งสำเร็จรูปผัดไข่ เมนูง่าย ๆ ใช้วัตถุดิบน้อย",
        imageKeywords: "instant noodle fried egg stir fry",
        ingredients: ["บะหมี่", "ไข่", "กระเทียม", "น้ำมัน", "ซีอิ๊ว"],
        instructions: [
            "ต้มบะหมี่ให้พอนิ่มแล้วพักไว้",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมให้หอม",
            "ใส่ไข่แล้วคนให้พอสุก",
            "ใส่เส้นบะหมี่",
            "ปรุงรสและผัดจนเข้ากัน"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 10
    },

    {
        id: 21,
        name: "ไก่ผัดเม็ดมะม่วง",
        description: "ไก่ผัดซอสพร้อมเม็ดมะม่วงหิมพานต์กรุบกรอบ",
        imageKeywords: "thai cashew chicken stir fry",
        ingredients: ["ไก่", "เม็ดมะม่วง", "หอมใหญ่", "พริกแห้ง", "ซีอิ๊ว", "น้ำมัน"],
        instructions: [
            "หั่นไก่เป็นชิ้นพอดีคำ",
            "ทอดไก่จนเหลือง",
            "ผัดหอมใหญ่และพริกแห้ง",
            "ใส่ไก่และเม็ดมะม่วง",
            "ปรุงรสด้วยซีอิ๊ว",
            "ผัดจนเข้ากันแล้วจัดเสิร์ฟ"
        ],
        category: "ผัด",
        difficulty: "ปานกลาง",
        time: 30
    },

    {
        id: 22,
        name: "ปลาทอดน้ำปลา",
        description: "ปลาทอดกรอบราดน้ำปลาหอม ๆ",
        imageKeywords: "thai fried fish with fish sauce",
        ingredients: ["ปลา", "น้ำปลา", "น้ำมัน", "น้ำตาล"],
        instructions: [
            "ทำความสะอาดปลาและซับให้แห้ง",
            "ตั้งกระทะใส่น้ำมัน",
            "ทอดปลาจนเหลืองกรอบ",
            "ผสมน้ำปลาและน้ำตาล",
            "ราดซอสลงบนปลา",
            "จัดเสิร์ฟ"
        ],
        category: "ทอด",
        difficulty: "ปานกลาง",
        time: 30
    }

];


/* =========================================================
   INGREDIENT LIST
   ========================================================= */

const ingredientList = [
    "ข้าว",
    "ไข่",
    "หมู",
    "ไก่",
    "กุ้ง",
    "ปลา",
    "คะน้า",
    "ผักกาดขาว",
    "กะหล่ำ",
    "แครอท",
    "ถั่วฝักยาว",
    "มะเขือ",
    "หอมใหญ่",
    "หอมแดง",
    "ต้นหอม",
    "กระเทียม",
    "พริก",
    "พริกแห้ง",
    "ใบกะเพรา",
    "ใบมะกรูด",
    "ใบโหระพา",
    "ตะไคร้",
    "มะนาว",
    "น้ำปลา",
    "ซีอิ๊ว",
    "น้ำมัน",
    "น้ำตาล",
    "เต้าหู้",
    "วุ้นเส้น",
    "เส้นใหญ่",
    "บะหมี่",
    "น้ำจิ้มสุกี้",
    "พริกแกง",
    "พริกแกงเขียวหวาน",
    "กะทิ",
    "เม็ดมะม่วง",
    "ข้าวคั่ว"
];


/* =========================================================
   IMAGE SYSTEM
   ========================================================= */

/*
   ใช้ LoremFlickr โดยค้นด้วย keyword เฉพาะเมนู
   ถ้ารูปโหลดไม่ได้ จะใช้ภาพสำรองที่สร้างด้วย SVG
*/

function getRecipeImage(recipe) {
    const imageMap = {
        "ข้าวผัดไข่": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khao_phat_kai.jpg",
        "ข้าวผัดหมู": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khao_phat_moo.jpg",
        "ผัดกะเพราหมู": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pad_kra_pao_moo.jpg",
        "ไข่เจียวหมูสับ": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kai_jeow_moo_sap.jpg",
        "ผัดคะน้าหมู": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pad_kana_moo.jpg",
        "ต้มจืดเต้าหู้หมูสับ": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tom_jued_tofu_moo_sap.jpg",
        "ต้มยำกุ้ง": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tom_Yum_Kung.jpg",
        "ผัดซีอิ๊ว": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pad_see_ew.jpg",
        "สุกี้น้ำ": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Suki_nam.jpg",
        "ยำวุ้นเส้น": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Yum_Woon_Sen.jpg",
        "ไข่ดาว": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kai_Dao.jpg",
        "ไข่ต้ม": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Boiled_egg_halved.jpg",
        "ผัดผักรวม": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pad_Pak_Ruam.jpg",
        "แกงจืดไข่น้ำ": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kaeng_jeud_kai_nam.jpg",
        "หมูกระเทียม": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Moo_krathiam.jpg",
        "ผัดพริกแกงหมู": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pad_prik_gaeng_moo.jpg",
        "แกงเขียวหวานไก่": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kaeng_kiao_wan_kai.jpg",
        "ลาบหมู": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Larb_Moo.jpg",
        "ข้าวต้มหมู": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khao_Tom_Moo.jpg",
        "มาม่าผัดไข่": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mama_pad_kai.jpg",
        "ไก่ผัดเม็ดมะม่วง": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gai_pad_med_mamuang.jpg",
        "ปลาทอดน้ำปลา": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pla_Tod_Nam_Pla.jpg"
    };

    return imageMap[recipe.name] || createFallbackImage(recipe);
}


function createFallbackImage(recipe) {

    const title =
        escapeHTML(recipe.name);

    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="600"
            viewBox="0 0 900 600"
        >
            <rect
                width="900"
                height="600"
                fill="#f3f4f6"
            />

            <circle
                cx="450"
                cy="245"
                r="125"
                fill="#ffffff"
            />

            <circle
                cx="450"
                cy="245"
                r="100"
                fill="#e5e7eb"
            />

            <text
                x="450"
                y="430"
                text-anchor="middle"
                font-family="Arial, sans-serif"
                font-size="44"
                font-weight="bold"
                fill="#374151"
            >
                ${title}
            </text>

            <text
                x="450"
                y="480"
                text-anchor="middle"
                font-family="Arial, sans-serif"
                font-size="24"
                fill="#6b7280"
            >
                What Can I Cook?
            </text>
        </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}


/* =========================================================
   STATE
   ========================================================= */

let selectedIngredients = [];

let favoriteIds =
    loadStorage(
        "whatCanICookFavorites",
        []
    );

let recentSearches =
    loadStorage(
        "whatCanICookRecent",
        []
    );

let currentRecipes = [...recipes];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const ingredientInput =
    document.getElementById("ingredientInput");

const addIngredientBtn =
    document.getElementById("addIngredientBtn");

const ingredientSuggestions =
    document.getElementById("ingredientSuggestions");

const selectedIngredientsContainer =
    document.getElementById("selectedIngredients");

const clearIngredientsBtn =
    document.getElementById("clearIngredientsBtn");

const searchBtn =
    document.getElementById("searchBtn");

const randomBtn =
    document.getElementById("randomBtn");

const menuSearchInput =
    document.getElementById("menuSearchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const timeFilter =
    document.getElementById("timeFilter");

const difficultyFilter =
    document.getElementById("difficultyFilter");

const recipeGrid =
    document.getElementById("recipeGrid");

const recipeCount =
    document.getElementById("recipeCount");

const resultMessage =
    document.getElementById("resultMessage");

const emptyState =
    document.getElementById("emptyState");

const resetFiltersBtn =
    document.getElementById("resetFiltersBtn");

const recentSection =
    document.getElementById("recentSection");

const recentSearchesContainer =
    document.getElementById("recentSearches");

const clearRecentBtn =
    document.getElementById("clearRecentBtn");

const favoriteGrid =
    document.getElementById("favoriteGrid");

const favoriteEmpty =
    document.getElementById("favoriteEmpty");

const recipeModal =
    document.getElementById("recipeModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const modalRecipeImage =
    document.getElementById("modalRecipeImage");

const modalRecipeMeta =
    document.getElementById("modalRecipeMeta");

const modalRecipeTitle =
    document.getElementById("modalRecipeTitle");

const modalRecipeDescription =
    document.getElementById("modalRecipeDescription");

const modalMatchPercentage =
    document.getElementById("modalMatchPercentage");

const modalProgressBar =
    document.getElementById("modalProgressBar");

const modalIngredientCount =
    document.getElementById("modalIngredientCount");

const modalIngredients =
    document.getElementById("modalIngredients");

const modalInstructions =
    document.getElementById("modalInstructions");


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function loadStorage(key, fallback) {

    try {

        const value =
            localStorage.getItem(key);

        return value
            ? JSON.parse(value)
            : fallback;

    } catch (error) {

        console.warn(
            "Cannot read localStorage:",
            error
        );

        return fallback;
    }
}


function saveStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.warn(
            "Cannot save localStorage:",
            error
        );
    }
}


/* =========================================================
   NORMALIZE TEXT
   ========================================================= */

function normalizeText(value) {

    return String(value)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "");
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   INGREDIENT MANAGEMENT
   ========================================================= */

function addIngredient(value) {

    const ingredient =
        String(value)
            .trim()
            .replace(/\s+/g, " ");

    if (!ingredient) {
        return;
    }

    const exists =
        selectedIngredients.some(
            item =>
                normalizeText(item) ===
                normalizeText(ingredient)
        );

    if (exists) {

        ingredientInput.value = "";

        hideSuggestions();

        return;
    }

    selectedIngredients.push(
        ingredient
    );

    ingredientInput.value = "";

    hideSuggestions();

    renderSelectedIngredients();
}


function removeIngredient(index) {

    selectedIngredients.splice(
        index,
        1
    );

    renderSelectedIngredients();

    if (selectedIngredients.length > 0) {

        searchRecipes();

    } else {

        currentRecipes = [...recipes];

        applyFilters();
    }
}


function clearIngredients() {

    selectedIngredients = [];

    ingredientInput.value = "";

    renderSelectedIngredients();

    currentRecipes = [...recipes];

    resultMessage.textContent =
        "แสดงเมนูทั้งหมด เลือกวัตถุดิบเพื่อจัดอันดับเมนู";

    applyFilters();
}


/* =========================================================
   RENDER SELECTED INGREDIENTS
   ========================================================= */

function renderSelectedIngredients() {

    if (
        !selectedIngredientsContainer
    ) {
        return;
    }

    if (selectedIngredients.length === 0) {

        selectedIngredientsContainer.innerHTML = `
            <span class="empty-ingredients">
                ยังไม่ได้เลือกวัตถุดิบ
            </span>
        `;

        return;
    }

    selectedIngredientsContainer.innerHTML =
        selectedIngredients
            .map(
                (ingredient, index) => `
                    <span class="ingredient-tag">

                        ${escapeHTML(ingredient)}

                        <button
                            type="button"
                            data-remove-ingredient="${index}"
                            aria-label="ลบ ${escapeHTML(ingredient)}"
                        >
                            ×
                        </button>

                    </span>
                `
            )
            .join("");
}


/* =========================================================
   INGREDIENT SUGGESTIONS
   ========================================================= */

function showSuggestions(value) {

    if (!ingredientSuggestions) {
        return;
    }

    const query =
        normalizeText(value);

    if (!query) {

        hideSuggestions();

        return;
    }

    const matches =
        ingredientList
            .filter(
                ingredient =>
                    normalizeText(
                        ingredient
                    ).includes(query)
            )
            .filter(
                ingredient =>
                    !selectedIngredients.some(
                        selected =>
                            normalizeText(
                                selected
                            ) ===
                            normalizeText(
                                ingredient
                            )
                    )
            )
            .slice(0, 8);

    if (matches.length === 0) {

        hideSuggestions();

        return;
    }

    ingredientSuggestions.innerHTML =
        matches
            .map(
                ingredient => `
                    <button
                        type="button"
                        class="ingredient-suggestion"
                        data-suggestion="${escapeHTML(ingredient)}"
                    >
                        <span>
                            🥕 ${escapeHTML(ingredient)}
                        </span>

                        <span>+</span>

                    </button>
                `
            )
            .join("");

    ingredientSuggestions.style.display =
        "block";
}


function hideSuggestions() {

    if (!ingredientSuggestions) {
        return;
    }

    ingredientSuggestions.style.display =
        "none";
}


/* =========================================================
   SEARCH RECIPES
   ========================================================= */

function searchRecipes() {

    if (selectedIngredients.length === 0) {

        currentRecipes = [...recipes];

        resultMessage.textContent =
            "แสดงเมนูทั้งหมด เลือกวัตถุดิบเพื่อจัดอันดับเมนู";

        applyFilters();

        return;
    }

    saveRecentSearch();

    currentRecipes =
        recipes
            .map(recipe => ({

                ...recipe,

                match:
                    calculateMatch(recipe)

            }))
            .sort(
                (a, b) =>
                    b.match.percentage -
                    a.match.percentage
            );

    resultMessage.textContent =
        `พบเมนูที่ตรงกับวัตถุดิบ ${selectedIngredients.length} รายการ`;

    applyFilters();

    const section =
        document.getElementById(
            "recipes-section"
        );

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================================
   CALCULATE MATCH
   ========================================================= */

function calculateMatch(recipe) {

    if (
        !recipe ||
        !recipe.ingredients ||
        recipe.ingredients.length === 0
    ) {

        return {
            count: 0,
            total: 0,
            percentage: 0
        };
    }

    const selected =
        selectedIngredients.map(
            normalizeText
        );

    const matchedIngredients =
        recipe.ingredients.filter(
            ingredient =>
                selected.includes(
                    normalizeText(
                        ingredient
                    )
                )
        );

    const count =
        matchedIngredients.length;

    const total =
        recipe.ingredients.length;

    const percentage =
        Math.round(
            (count / total) * 100
        );

    return {
        count,
        total,
        percentage
    };
}


/* =========================================================
   FILTERS
   ========================================================= */

function applyFilters() {

    const menuQuery =
        menuSearchInput
            ? normalizeText(
                menuSearchInput.value
            )
            : "";

    const category =
        categoryFilter
            ? categoryFilter.value
            : "all";

    const maxTime =
        timeFilter
            ? timeFilter.value
            : "all";

    const difficulty =
        difficultyFilter
            ? difficultyFilter.value
            : "all";

    let filtered =
        [...currentRecipes];

    if (menuQuery) {

        filtered =
            filtered.filter(
                recipe =>
                    normalizeText(
                        recipe.name
                    ).includes(menuQuery)
            );
    }

    if (category !== "all") {

        filtered =
            filtered.filter(
                recipe =>
                    recipe.category === category
            );
    }

    if (maxTime !== "all") {

        filtered =
            filtered.filter(
                recipe =>
                    recipe.time <=
                    Number(maxTime)
            );
    }

    if (difficulty !== "all") {

        filtered =
            filtered.filter(
                recipe =>
                    recipe.difficulty ===
                    difficulty
            );
    }

    renderRecipes(filtered);
}


/* =========================================================
   RENDER RECIPE CARDS
   ========================================================= */

function renderRecipes(recipeList) {

    if (!recipeGrid) {
        return;
    }

    if (recipeCount) {

        recipeCount.textContent =
            `(${recipeList.length})`;
    }

    if (recipeList.length === 0) {

        recipeGrid.innerHTML = "";

        if (emptyState) {
            emptyState.hidden = false;
        }

        return;
    }

    if (emptyState) {
        emptyState.hidden = true;
    }

    recipeGrid.innerHTML =
        recipeList
            .map(createRecipeCard)
            .join("");

    setupImageFallbacks(
        recipeGrid
    );
}


/* =========================================================
   CREATE RECIPE CARD
   ========================================================= */

function createRecipeCard(recipe) {

    const match =
        selectedIngredients.length > 0
            ? calculateMatch(recipe)
            : {
                count: 0,
                total: recipe.ingredients.length,
                percentage: 0
            };

    const isFavorite =
        favoriteIds.includes(recipe.id);

    const image =
        getRecipeImage(recipe);

    return `
        <article
            class="recipe-card"
            data-recipe-id="${recipe.id}"
        >

            <div class="recipe-image">

                <img
                    src="${image}"
                    alt="${escapeHTML(recipe.name)}"
                    loading="lazy"
                    data-recipe-image="${recipe.id}"
                >

                <button
                    type="button"
                    class="favorite-btn ${isFavorite ? "active" : ""}"
                    data-favorite-id="${recipe.id}"
                    aria-label="${isFavorite ? "ลบ" : "เพิ่ม"} ${escapeHTML(recipe.name)} ${isFavorite ? "จากรายการโปรด" : "ในรายการโปรด"}"
                >
                    ${isFavorite ? "❤️" : "♡"}
                </button>

            </div>


            <div class="recipe-body">

                <span class="recipe-category">
                    ${escapeHTML(recipe.category)}
                </span>

                <h3>
                    ${escapeHTML(recipe.name)}
                </h3>

                <p class="recipe-description">
                    ${escapeHTML(recipe.description)}
                </p>


                <div class="match-info">

                    <div class="match-header">

                        <span>
                            ${
                                selectedIngredients.length > 0
                                    ? `มีวัตถุดิบ ${match.count}/${match.total}`
                                    : `วัตถุดิบ ${match.total} รายการ`
                            }
                        </span>

                        ${
                            selectedIngredients.length > 0
                                ? `
                                    <span class="match-percentage">
                                        ${match.percentage}%
                                    </span>
                                `
                                : ""
                        }

                    </div>

                    ${
                        selectedIngredients.length > 0
                            ? `
                                <div class="progress-bar">

                                    <div
                                        class="progress-fill"
                                        style="width: ${match.percentage}%"
                                    ></div>

                                </div>
                            `
                            : ""
                    }

                </div>


                <div class="recipe-meta">

                    <span>
                        ⏱️ ${recipe.time} นาที
                    </span>

                    <span>
                        📊 ${escapeHTML(recipe.difficulty)}
                    </span>

                </div>


                <button
                    type="button"
                    class="view-recipe-btn"
                    data-view-recipe="${recipe.id}"
                >
                    ดูรายละเอียด
                </button>

            </div>

        </article>
    `;
}


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

function setupImageFallbacks(container) {

    if (!container) {
        return;
    }

    const images =
        container.querySelectorAll(
            "img[data-recipe-image]"
        );

    images.forEach(image => {

        image.addEventListener(
            "error",
            function () {

                const recipeId =
                    Number(
                        this.dataset.recipeImage
                    );

                const recipe =
                    recipes.find(
                        item =>
                            item.id === recipeId
                    );

                if (!recipe) {
                    return;
                }

                if (
                    this.dataset.fallbackUsed ===
                    "true"
                ) {
                    return;
                }

                this.dataset.fallbackUsed =
                    "true";

                this.src =
                    createFallbackImage(
                        recipe
                    );
            },
            {
                once: true
            }
        );
    });
}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(recipeId) {

    const index =
        favoriteIds.indexOf(recipeId);

    if (index === -1) {

        favoriteIds.push(recipeId);

    } else {

        favoriteIds.splice(index, 1);
    }

    saveStorage(
        "whatCanICookFavorites",
        favoriteIds
    );

    applyFilters();

    renderFavorites();
}


function renderFavorites() {

    if (
        !favoriteGrid ||
        !favoriteEmpty
    ) {
        return;
    }

    const favoriteRecipes =
        recipes.filter(
            recipe =>
                favoriteIds.includes(
                    recipe.id
                )
        );

    if (favoriteRecipes.length === 0) {

        favoriteGrid.innerHTML = "";

        favoriteEmpty.style.display =
            "block";

        return;
    }

    favoriteEmpty.style.display =
        "none";

    favoriteGrid.innerHTML =
        favoriteRecipes
            .map(createRecipeCard)
            .join("");

    setupImageFallbacks(
        favoriteGrid
    );
}


/* =========================================================
   RECENT SEARCHES
   ========================================================= */

function saveRecentSearch() {

    if (
        selectedIngredients.length === 0
    ) {
        return;
    }

    const search =
        [...selectedIngredients];

    const searchKey =
        search
            .map(normalizeText)
            .sort()
            .join("|");

    recentSearches =
        recentSearches.filter(
            item =>
                item
                    .map(normalizeText)
                    .sort()
                    .join("|") !==
                searchKey
        );

    recentSearches.unshift(
        search
    );

    recentSearches =
        recentSearches.slice(0, 6);

    saveStorage(
        "whatCanICookRecent",
        recentSearches
    );

    renderRecentSearches();
}


function renderRecentSearches() {

    if (
        !recentSection ||
        !recentSearchesContainer
    ) {
        return;
    }

    if (recentSearches.length === 0) {

        recentSection.style.display =
            "none";

        return;
    }

    recentSection.style.display =
        "block";

    recentSearchesContainer.innerHTML =
        recentSearches
            .map(
                (search, index) => `
                    <button
                        type="button"
                        class="recent-item"
                        data-recent-index="${index}"
                    >
                        🔄
                        ${search
                            .map(
                                escapeHTML
                            )
                            .join(", ")}
                    </button>
                `
            )
            .join("");
}


function loadRecentSearch(index) {

    const search =
        recentSearches[index];

    if (!search) {
        return;
    }

    selectedIngredients =
        [...search];

    renderSelectedIngredients();

    searchRecipes();
}


function clearRecentSearches() {

    recentSearches = [];

    saveStorage(
        "whatCanICookRecent",
        recentSearches
    );

    renderRecentSearches();
}


/* =========================================================
   RANDOM RECIPE
   ========================================================= */

function randomRecipe() {

    const availableRecipes =
        currentRecipes.length > 0
            ? currentRecipes
            : recipes;

    const randomIndex =
        Math.floor(
            Math.random() *
            availableRecipes.length
        );

    const recipe =
        availableRecipes[randomIndex];

    if (recipe) {

        openRecipeModal(
            recipe.id
        );
    }
}


/* =========================================================
   RECIPE MODAL
   ========================================================= */

function openRecipeModal(recipeId) {

    const recipe =
        recipes.find(
            item =>
                item.id ===
                Number(recipeId)
        );

    if (!recipe) {
        return;
    }

    const match =
        calculateMatch(recipe);

    if (modalRecipeImage) {

        modalRecipeImage.innerHTML = `
            <img
                src="${getRecipeImage(recipe)}"
                alt="${escapeHTML(recipe.name)}"
                data-modal-recipe-image="${recipe.id}"
            >
        `;

        const image =
            modalRecipeImage.querySelector(
                "img"
            );

        if (image) {

            image.addEventListener(
                "error",
                function () {

                    if (
                        this.dataset.fallbackUsed ===
                        "true"
                    ) {
                        return;
                    }

                    this.dataset.fallbackUsed =
                        "true";

                    this.src =
                        createFallbackImage(
                            recipe
                        );
                }
            );
        }
    }


    if (modalRecipeMeta) {

        modalRecipeMeta.innerHTML = `
            <span>
                🍽️ ${escapeHTML(recipe.category)}
            </span>

            <span>
                ⏱️ ${recipe.time} นาที
            </span>

            <span>
                📊 ${escapeHTML(recipe.difficulty)}
            </span>
        `;
    }


    if (modalRecipeTitle) {

        modalRecipeTitle.textContent =
            recipe.name;
    }


    if (modalRecipeDescription) {

        modalRecipeDescription.textContent =
            recipe.description;
    }


    if (modalMatchPercentage) {

        modalMatchPercentage.textContent =
            `${match.percentage}%`;
    }


    if (modalProgressBar) {

        modalProgressBar.style.width =
            `${match.percentage}%`;
    }


    if (modalIngredientCount) {

        modalIngredientCount.textContent =
            selectedIngredients.length > 0
                ? `มีวัตถุดิบ ${match.count} จาก ${match.total} รายการ`
                : `วัตถุดิบทั้งหมด ${match.total} รายการ`;
    }


    if (modalIngredients) {

        modalIngredients.innerHTML =
            recipe.ingredients
                .map(
                    ingredient => `
                        <li>
                            ${escapeHTML(
                                ingredient
                            )}
                        </li>
                    `
                )
                .join("");
    }


    if (modalInstructions) {

        modalInstructions.innerHTML =
            recipe.instructions
                .map(
                    instruction => `
                        <li>
                            ${escapeHTML(
                                instruction
                            )}
                        </li>
                    `
                )
                .join("");
    }


    if (recipeModal) {

        recipeModal.classList.add(
            "active"
        );

        recipeModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";
    }
}


function closeRecipeModal() {

    if (!recipeModal) {
        return;
    }

    recipeModal.classList.remove(
        "active"
    );

    recipeModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


/* =========================================================
   RESET FILTERS
   ========================================================= */

function resetFilters() {

    if (menuSearchInput) {
        menuSearchInput.value = "";
    }

    if (categoryFilter) {
        categoryFilter.value = "all";
    }

    if (timeFilter) {
        timeFilter.value = "all";
    }

    if (difficultyFilter) {
        difficultyFilter.value = "all";
    }

    applyFilters();
}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

if (addIngredientBtn) {

    addIngredientBtn.addEventListener(
        "click",
        () => {

            addIngredient(
                ingredientInput.value
            );
        }
    );
}


if (ingredientInput) {

    ingredientInput.addEventListener(
        "input",
        event => {

            showSuggestions(
                event.target.value
            );
        }
    );


    ingredientInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                const firstSuggestion =
                    ingredientSuggestions
                        ? ingredientSuggestions.querySelector(
                            "[data-suggestion]"
                        )
                        : null;

                if (firstSuggestion) {

                    addIngredient(
                        firstSuggestion.dataset.suggestion
                    );

                } else {

                    addIngredient(
                        ingredientInput.value
                    );
                }
            }


            if (event.key === "Escape") {

                hideSuggestions();
            }
        }
    );
}


if (selectedIngredientsContainer) {

    selectedIngredientsContainer.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-remove-ingredient]"
                );

            if (!button) {
                return;
            }

            removeIngredient(
                Number(
                    button.dataset.removeIngredient
                )
            );
        }
    );
}


if (ingredientSuggestions) {

    ingredientSuggestions.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-suggestion]"
                );

            if (!button) {
                return;
            }

            addIngredient(
                button.dataset.suggestion
            );
        }
    );
}


if (clearIngredientsBtn) {

    clearIngredientsBtn.addEventListener(
        "click",
        clearIngredients
    );
}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        searchRecipes
    );
}


if (randomBtn) {

    randomBtn.addEventListener(
        "click",
        randomRecipe
    );
}


if (menuSearchInput) {

    menuSearchInput.addEventListener(
        "input",
        applyFilters
    );
}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        applyFilters
    );
}


if (timeFilter) {

    timeFilter.addEventListener(
        "change",
        applyFilters
    );
}


if (difficultyFilter) {

    difficultyFilter.addEventListener(
        "change",
        applyFilters
    );
}


if (resetFiltersBtn) {

    resetFiltersBtn.addEventListener(
        "click",
        resetFilters
    );
}


if (clearRecentBtn) {

    clearRecentBtn.addEventListener(
        "click",
        clearRecentSearches
    );
}


/* =========================================================
   RECIPE GRID EVENTS
   ========================================================= */

if (recipeGrid) {

    recipeGrid.addEventListener(
        "click",
        event => {

            const favoriteButton =
                event.target.closest(
                    "[data-favorite-id]"
                );

            if (favoriteButton) {

                toggleFavorite(
                    Number(
                        favoriteButton.dataset.favoriteId
                    )
                );

                return;
            }


            const viewButton =
                event.target.closest(
                    "[data-view-recipe]"
                );

            if (viewButton) {

                openRecipeModal(
                    Number(
                        viewButton.dataset.viewRecipe
                    )
                );
            }
        }
    );
}


/* =========================================================
   FAVORITE GRID EVENTS
   ========================================================= */

if (favoriteGrid) {

    favoriteGrid.addEventListener(
        "click",
        event => {

            const favoriteButton =
                event.target.closest(
                    "[data-favorite-id]"
                );

            if (favoriteButton) {

                toggleFavorite(
                    Number(
                        favoriteButton.dataset.favoriteId
                    )
                );

                return;
            }


            const viewButton =
                event.target.closest(
                    "[data-view-recipe]"
                );

            if (viewButton) {

                openRecipeModal(
                    Number(
                        viewButton.dataset.viewRecipe
                    )
                );
            }
        }
    );
}


/* =========================================================
   RECENT SEARCH EVENTS
   ========================================================= */

if (recentSearchesContainer) {

    recentSearchesContainer.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-recent-index]"
                );

            if (!button) {
                return;
            }

            loadRecentSearch(
                Number(
                    button.dataset.recentIndex
                )
            );
        }
    );
}


/* =========================================================
   MODAL EVENTS
   ========================================================= */

if (closeModalBtn) {

    closeModalBtn.addEventListener(
        "click",
        closeRecipeModal
    );
}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeRecipeModal
    );
}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            recipeModal &&
            recipeModal.classList.contains(
                "active"
            )
        ) {

            closeRecipeModal();
        }
    }
);


/* =========================================================
   CLOSE SUGGESTIONS WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".ingredient-search"
            )
        ) {

            hideSuggestions();
        }
    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

function initialize() {

    renderSelectedIngredients();

    renderRecentSearches();

    renderFavorites();

    currentRecipes = [...recipes];

    applyFilters();
}


initialize();
