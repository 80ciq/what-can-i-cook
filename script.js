/* =========================================================
   What Can I Cook? - script.js
   ========================================================= */

/* =========================================================
   RECIPE DATABASE
   ========================================================= */

const recipes = [
    {
        id: 1,
        name: "ข้าวผัดไข่",
        description: "ข้าวผัดง่าย ๆ หอมกลิ่นกระทะ พร้อมไข่และผัก",
        image: "images/khao-pad-khai.jpg",
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
        image: "images/khao-pad-moo.jpg",
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
        image: "images/pad-kra-pao-moo.jpg",
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
        image: "images/khai-jiao-moo-sap.jpg",
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
        image: "images/pad-khana-moo.jpg",
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
        image: "images/tom-jued-tofu-moo-sap.jpg",
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
        image: "images/tom-yum-kung.jpg",
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
        image: "images/pad-see-ew.jpg",
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
        image: "images/sukiyaki-nam.jpg",
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
        image: "images/yum-woon-sen.jpg",
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
        image: "images/khai-dao.jpg",
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
        image: "images/khai-tom.jpg",
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
        image: "images/pad-phak-ruam.jpg",
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
        image: "images/kaeng-jued-khai-nam.jpg",
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
        image: "images/moo-krathiam.jpg",
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
        image: "images/pad-prik-kaeng-moo.jpg",
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
        image: "images/green-curry-chicken.jpg",
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
        image: "images/larb-moo.jpg",
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
        image: "images/khao-tom-moo.jpg",
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
        image: "images/mama-pad-khai.jpg",
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
        image: "images/gai-pad-med-mamuang.jpg",
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
        image: "images/pla-tod-nam-pla.jpg",
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
   STATE
   ========================================================= */

let selectedIngredients = [];
let favoriteIds = loadStorage("whatCanICookFavorites", []);
let recentSearches = loadStorage("whatCanICookRecent", []);

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
        const value = localStorage.getItem(key);

        return value
            ? JSON.parse(value)
            : fallback;
    } catch (error) {
        console.warn("Cannot read localStorage:", error);
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
        console.warn("Cannot save localStorage:", error);
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
   INGREDIENT MANAGEMENT
   ========================================================= */

function addIngredient(value) {

    const ingredient = String(value)
        .trim()
        .replace(/\s+/g, " ");

    if (!ingredient) {
        return;
    }

    const exists = selectedIngredients.some(
        item =>
            normalizeText(item) ===
            normalizeText(ingredient)
    );

    if (exists) {
        ingredientInput.value = "";
        hideSuggestions();
        return;
    }

    selectedIngredients.push(ingredient);

    ingredientInput.value = "";

    hideSuggestions();

    renderSelectedIngredients();
}


function removeIngredient(index) {

    selectedIngredients.splice(index, 1);

    renderSelectedIngredients();

    if (selectedIngredients.length > 0) {
        searchRecipes();
    }
}


function clearIngredients() {

    selectedIngredients = [];

    ingredientInput.value = "";

    renderSelectedIngredients();

    currentRecipes = [...recipes];

    applyFilters();
}


/* =========================================================
   RENDER SELECTED INGREDIENTS
   ========================================================= */

function renderSelectedIngredients() {

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

    const query = normalizeText(value);

    if (!query) {
        hideSuggestions();
        return;
    }

    const matches = ingredientList
        .filter(
            ingredient =>
                normalizeText(ingredient).includes(query)
        )
        .filter(
            ingredient =>
                !selectedIngredients.some(
                    selected =>
                        normalizeText(selected) ===
                        normalizeText(ingredient)
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
                        <span>🥕 ${escapeHTML(ingredient)}</span>
                        <span>+</span>
                    </button>
                `
            )
            .join("");

    ingredientSuggestions.style.display = "block";
}


function hideSuggestions() {
    ingredientSuggestions.style.display = "none";
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

    currentRecipes = recipes
        .map(recipe => ({
            ...recipe,
            match: calculateMatch(recipe)
        }))
        .sort(
            (a, b) =>
                b.match.percentage -
                a.match.percentage
        );

    resultMessage.textContent =
        `พบเมนูที่ตรงกับวัตถุดิบ ${selectedIngredients.length} รายการ`;

    applyFilters();

    document
        .getElementById("recipes-section")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


/* =========================================================
   CALCULATE MATCH
   ========================================================= */

function calculateMatch(recipe) {

    if (recipe.ingredients.length === 0) {
        return {
            count: 0,
            total: 0,
            percentage: 0
        };
    }

    const selected = selectedIngredients.map(
        normalizeText
    );

    const matchedIngredients =
        recipe.ingredients.filter(
            ingredient =>
                selected.includes(
                    normalizeText(ingredient)
                )
        );

    const count = matchedIngredients.length;

    const total = recipe.ingredients.length;

    const percentage =
        Math.round((count / total) * 100);

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
        normalizeText(menuSearchInput.value);

    const category =
        categoryFilter.value;

    const maxTime =
        timeFilter.value;

    const difficulty =
        difficultyFilter.value;

    let filtered = [...currentRecipes];

    if (menuQuery) {

        filtered = filtered.filter(
            recipe =>
                normalizeText(recipe.name)
                    .includes(menuQuery)
        );
    }

    if (category !== "all") {

        filtered = filtered.filter(
            recipe =>
                recipe.category === category
        );
    }

    if (maxTime !== "all") {

        filtered = filtered.filter(
            recipe =>
                recipe.time <= Number(maxTime)
        );
    }

    if (difficulty !== "all") {

        filtered = filtered.filter(
            recipe =>
                recipe.difficulty === difficulty
        );
    }

    renderRecipes(filtered);
}


/* =========================================================
   RENDER RECIPE CARDS
   ========================================================= */

function renderRecipes(recipeList) {

    recipeCount.textContent =
        `(${recipeList.length})`;

    if (recipeList.length === 0) {

        recipeGrid.innerHTML = "";

        emptyState.hidden = false;

        return;
    }

    emptyState.hidden = true;

    recipeGrid.innerHTML =
        recipeList
            .map(createRecipeCard)
            .join("");
}


/* =========================================================
   CREATE RECIPE CARD
   ========================================================= */

function createRecipeCard(recipe) {

    const match =
        calculateMatch(recipe);

    const isFavorite =
        favoriteIds.includes(recipe.id);

    return `
        <article
            class="recipe-card"
            data-recipe-id="${recipe.id}"
        >

            <div class="recipe-image">

                <img
                    src="${recipe.image}"
                    alt="${escapeHTML(recipe.name)}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

                <button
                    type="button"
                    class="favorite-btn ${isFavorite ? "active" : ""}"
                    data-favorite-id="${recipe.id}"
                    aria-label="เพิ่ม ${escapeHTML(recipe.name)} ในรายการโปรด"
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
                            มีวัตถุดิบ ${match.count}/${match.total}
                        </span>

                        <span class="match-percentage">
                            ${match.percentage}%
                        </span>
                    </div>

                    <div class="progress-bar">
                        <div
                            class="progress-fill"
                            style="width: ${match.percentage}%"
                        ></div>
                    </div>

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

    const favoriteRecipes =
        recipes.filter(
            recipe =>
                favoriteIds.includes(recipe.id)
        );

    if (favoriteRecipes.length === 0) {

        favoriteGrid.innerHTML = "";

        favoriteEmpty.style.display = "block";

        return;
    }

    favoriteEmpty.style.display = "none";

    favoriteGrid.innerHTML =
        favoriteRecipes
            .map(createRecipeCard)
            .join("");
}


/* =========================================================
   RECENT SEARCHES
   ========================================================= */

function saveRecentSearch() {

    if (selectedIngredients.length === 0) {
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
                    .join("|") !== searchKey
        );

    recentSearches.unshift(search);

    recentSearches =
        recentSearches.slice(0, 6);

    saveStorage(
        "whatCanICookRecent",
        recentSearches
    );

    renderRecentSearches();
}


function renderRecentSearches() {

    if (recentSearches.length === 0) {

        recentSection.style.display = "none";

        return;
    }

    recentSection.style.display = "block";

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
                            .map(escapeHTML)
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
        openRecipeModal(recipe.id);
    }
}


/* =========================================================
   RECIPE MODAL
   ========================================================= */

function openRecipeModal(recipeId) {

    const recipe =
        recipes.find(
            item => item.id === Number(recipeId)
        );

    if (!recipe) {
        return;
    }

    const match =
        calculateMatch(recipe);

    modalRecipeImage.innerHTML = `
        <img
            src="${recipe.image}"
            alt="${escapeHTML(recipe.name)}"
            onerror="this.style.display='none'"
        >
    `;

    modalRecipeMeta.innerHTML = `
        <span>🍽️ ${escapeHTML(recipe.category)}</span>
        <span>⏱️ ${recipe.time} นาที</span>
        <span>📊 ${escapeHTML(recipe.difficulty)}</span>
    `;

    modalRecipeTitle.textContent =
        recipe.name;

    modalRecipeDescription.textContent =
        recipe.description;

    modalMatchPercentage.textContent =
        `${match.percentage}%`;

    modalProgressBar.style.width =
        `${match.percentage}%`;

    modalIngredientCount.textContent =
        `มีวัตถุดิบ ${match.count} จาก ${match.total} รายการ`;

    modalIngredients.innerHTML =
        recipe.ingredients
            .map(
                ingredient => `
                    <li>
                        ${escapeHTML(ingredient)}
                    </li>
                `
            )
            .join("");

    modalInstructions.innerHTML =
        recipe.instructions
            .map(
                instruction => `
                    <li>
                        ${escapeHTML(instruction)}
                    </li>
                `
            )
            .join("");

    recipeModal.classList.add("active");

    recipeModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeRecipeModal() {

    recipeModal.classList.remove("active");

    recipeModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


/* =========================================================
   RESET FILTERS
   ========================================================= */

function resetFilters() {

    menuSearchInput.value = "";

    categoryFilter.value = "all";

    timeFilter.value = "all";

    difficultyFilter.value = "all";

    applyFilters();
}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

addIngredientBtn.addEventListener(
    "click",
    () => {
        addIngredient(
            ingredientInput.value
        );
    }
);


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
                ingredientSuggestions.querySelector(
                    "[data-suggestion]"
                );

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


clearIngredientsBtn.addEventListener(
    "click",
    clearIngredients
);


searchBtn.addEventListener(
    "click",
    searchRecipes
);


randomBtn.addEventListener(
    "click",
    randomRecipe
);


menuSearchInput.addEventListener(
    "input",
    applyFilters
);


categoryFilter.addEventListener(
    "change",
    applyFilters
);


timeFilter.addEventListener(
    "change",
    applyFilters
);


difficultyFilter.addEventListener(
    "change",
    applyFilters
);


resetFiltersBtn.addEventListener(
    "click",
    resetFilters
);


clearRecentBtn.addEventListener(
    "click",
    clearRecentSearches
);


/* =========================================================
   RECIPE GRID EVENTS
   ========================================================= */

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


/* =========================================================
   FAVORITE GRID EVENTS
   ========================================================= */

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


/* =========================================================
   RECENT SEARCH EVENTS
   ========================================================= */

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


/* =========================================================
   MODAL EVENTS
   ========================================================= */

closeModalBtn.addEventListener(
    "click",
    closeRecipeModal
);


modalOverlay.addEventListener(
    "click",
    closeRecipeModal
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            recipeModal.classList.contains("active")
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
