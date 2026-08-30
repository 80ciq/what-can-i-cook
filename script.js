/* =========================================================
   WHAT CAN I COOK? - script.js
   ========================================================= */

/* =========================================================
   1. RECIPE DATABASE
========================================================= */

const recipes = [
    {
        id: 1,
        name: "ข้าวผัดไข่",
        description: "ข้าวผัดง่าย ๆ หอมกระทะ พร้อมไข่และผัก",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ข้าว", "ไข่", "น้ำมัน", "ซีอิ๊ว", "น้ำปลา", "ต้นหอม"],
        instructions: [
            "ตั้งกระทะใส่น้ำมันให้ร้อน",
            "ตอกไข่ลงไปแล้วผัดให้พอสุก",
            "ใส่ข้าวลงไปผัดให้เข้ากัน",
            "ปรุงรสด้วยซีอิ๊วและน้ำปลา",
            "ใส่ต้นหอม ผัดให้เข้ากันแล้วตักเสิร์ฟ"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 2,
        name: "ข้าวผัดหมู",
        description: "ข้าวผัดหมูรสกลมกล่อม ทำง่ายและอิ่มอร่อย",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ข้าว", "หมู", "ไข่", "น้ำมัน", "ซีอิ๊ว", "ต้นหอม"],
        instructions: [
            "หั่นหมูเป็นชิ้นเล็ก ๆ",
            "ตั้งกระทะใส่น้ำมันแล้วผัดหมูจนสุก",
            "ใส่ไข่และผัดให้เข้ากัน",
            "ใส่ข้าวแล้วผัดด้วยไฟกลาง",
            "ปรุงรสด้วยซีอิ๊วและใส่ต้นหอม"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 3,
        name: "ผัดกะเพราหมู",
        description: "เมนูยอดฮิต ผัดหมูหอมใบกะเพรา รสจัดจ้าน",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
        ingredients: ["หมู", "ใบกะเพรา", "กระเทียม", "พริก", "น้ำปลา", "ซีอิ๊ว", "น้ำตาล"],
        instructions: [
            "โขลกกระเทียมกับพริกพอหยาบ",
            "ตั้งกระทะใส่น้ำมันแล้วผัดพริกกระเทียม",
            "ใส่หมูลงไปผัดจนสุก",
            "ปรุงรสด้วยน้ำปลา ซีอิ๊ว และน้ำตาล",
            "ใส่ใบกะเพรา ผัดเร็ว ๆ แล้วปิดไฟ"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 4,
        name: "ไข่เจียวหมูสับ",
        description: "ไข่เจียวฟูนุ่มใส่หมูสับ เมนูง่าย ๆ ที่ใครก็ทำได้",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไข่", "หมู", "น้ำปลา", "น้ำมัน"],
        instructions: [
            "ตอกไข่ใส่ชาม",
            "ใส่หมูสับและน้ำปลาลงไป",
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
        description: "คะน้ากรอบ ๆ ผัดกับหมูนุ่มและซอสหอม ๆ",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
        ingredients: ["หมู", "คะน้า", "กระเทียม", "น้ำมัน", "ซีอิ๊ว", "น้ำมันหอย"],
        instructions: [
            "ล้างและหั่นคะน้า",
            "ตั้งกระทะใส่น้ำมัน ผัดกระเทียม",
            "ใส่หมูลงไปผัดจนสุก",
            "ใส่คะน้าและผัดด้วยไฟแรง",
            "ปรุงรสด้วยซีอิ๊วและน้ำมันหอย"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 6,
        name: "ต้มจืดเต้าหู้หมูสับ",
        description: "ซุปใสร้อน ๆ รสอ่อน ทานง่าย เหมาะกับทุกวัย",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        ingredients: ["หมู", "เต้าหู้", "ผักกาดขาว", "กระเทียม", "น้ำปลา", "พริกไทย"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่หมูสับที่ปั้นเป็นก้อนลงไป",
            "ใส่เต้าหู้และผักกาดขาว",
            "ปรุงรสด้วยน้ำปลา",
            "โรยพริกไทยแล้วตักเสิร์ฟ"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 25
    },

    {
        id: 7,
        name: "ต้มยำกุ้ง",
        description: "ต้มยำกุ้งรสจัดจ้าน เปรี้ยว เผ็ด หอมสมุนไพร",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
        ingredients: ["กุ้ง", "ตะไคร้", "ใบมะกรูด", "ข่า", "พริก", "มะนาว", "น้ำปลา", "เห็ด"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่ข่า ตะไคร้ และใบมะกรูด",
            "ใส่เห็ดและกุ้ง",
            "ปรุงรสด้วยน้ำปลาและพริก",
            "ปิดไฟแล้วเติมน้ำมะนาว"
        ],
        category: "ต้ม",
        difficulty: "ปานกลาง",
        time: 30
    },

    {
        id: 8,
        name: "ผัดซีอิ๊ว",
        description: "เส้นใหญ่ผัดซีอิ๊วหอม ๆ พร้อมหมูและผักคะน้า",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
        ingredients: ["เส้นใหญ่", "หมู", "ไข่", "คะน้า", "ซีอิ๊ว", "น้ำมัน"],
        instructions: [
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดหมูจนสุก",
            "ใส่ไข่แล้วผัด",
            "ใส่เส้นใหญ่และคะน้า",
            "ปรุงรสด้วยซีอิ๊วแล้วผัดจนหอม"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 9,
        name: "ผัดผักรวม",
        description: "ผักหลากชนิดผัดกรอบ ๆ รสกลมกล่อม",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
        ingredients: ["แครอท", "คะน้า", "ข้าวโพด", "เห็ด", "กระเทียม", "น้ำมันหอย"],
        instructions: [
            "เตรียมและหั่นผักทั้งหมด",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมให้หอม",
            "ใส่ผักที่สุกยากก่อน",
            "ปรุงรสแล้วใส่ผักที่เหลือ ผัดจนกรอบ"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 10,
        name: "ข้าวกะเพราไก่",
        description: "ไก่ผัดกะเพรารสเข้มข้น ทานคู่กับข้าวสวย",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไก่", "ใบกะเพรา", "กระเทียม", "พริก", "น้ำปลา", "ซีอิ๊ว", "ข้าว"],
        instructions: [
            "สับไก่เป็นชิ้นเล็ก ๆ",
            "ผัดพริกกับกระเทียม",
            "ใส่ไก่และผัดจนสุก",
            "ปรุงรสตามชอบ",
            "ใส่ใบกะเพราแล้วผัดให้หอม เสิร์ฟกับข้าว"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 11,
        name: "ไก่ทอดกระเทียม",
        description: "ไก่ทอดหอมกระเทียม กรอบนอกนุ่มใน",
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไก่", "กระเทียม", "พริกไทย", "ซีอิ๊ว", "น้ำมัน"],
        instructions: [
            "หมักไก่ด้วยซีอิ๊วและพริกไทย",
            "พักไก้ไว้ประมาณ 10 นาที",
            "ตั้งกระทะใส่น้ำมัน",
            "ทอดไก่จนสุกและเหลือง",
            "เจียวกระเทียมแล้วโรยด้านบน"
        ],
        category: "ทอด",
        difficulty: "ง่าย",
        time: 25
    },

    {
        id: 12,
        name: "ไข่ดาว",
        description: "ไข่ดาวกรอบ ๆ ไข่แดงเยิ้ม ทำง่ายในไม่กี่นาที",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไข่", "น้ำมัน"],
        instructions: [
            "ตั้งกระทะใส่น้ำมัน",
            "ตอกไข่ลงไป",
            "ทอดจนขอบไข่กรอบ",
            "ตักขึ้นและสะเด็ดน้ำมัน"
        ],
        category: "ทอด",
        difficulty: "ง่าย",
        time: 5
    },

    {
        id: 13,
        name: "ข้าวต้มหมู",
        description: "ข้าวต้มร้อน ๆ หมูนุ่ม น้ำซุปหอม ทานง่าย",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ข้าว", "หมู", "กระเทียม", "ต้นหอม", "น้ำปลา", "พริกไทย"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่ข้าวลงต้มจนเริ่มนิ่ม",
            "ใส่หมูสับลงไป",
            "ปรุงรสด้วยน้ำปลาและพริกไทย",
            "โรยต้นหอมและกระเทียมเจียว"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 25
    },

    {
        id: 14,
        name: "ยำไข่ดาว",
        description: "ไข่ดาวกรอบคลุกน้ำยำรสเปรี้ยวเผ็ด",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไข่", "หอมแดง", "พริก", "มะนาว", "น้ำปลา", "น้ำตาล"],
        instructions: [
            "ทอดไข่ดาวให้กรอบ",
            "หั่นไข่ดาวเป็นชิ้น",
            "ผสมน้ำมะนาว น้ำปลา และน้ำตาล",
            "ใส่พริกและหอมแดง",
            "นำไข่ดาวมาคลุกกับน้ำยำ"
        ],
        category: "ยำ",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 15,
        name: "ผัดพริกแกงหมู",
        description: "หมูผัดพริกแกงหอม ๆ รสเผ็ดกำลังดี",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
        ingredients: ["หมู", "พริกแกง", "ถั่วฝักยาว", "ใบมะกรูด", "น้ำปลา", "น้ำตาล"],
        instructions: [
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดพริกแกงให้หอม",
            "ใส่หมูลงไปผัดจนสุก",
            "ใส่ถั่วฝักยาว",
            "ปรุงรสและใส่ใบมะกรูด"
        ],
        category: "ผัด",
        difficulty: "ปานกลาง",
        time: 20
    },

    {
        id: 16,
        name: "แกงจืดผักกาดขาว",
        description: "แกงจืดน้ำใส รสอ่อน หอมหวานจากผัก",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ผักกาดขาว", "เต้าหู้", "หมู", "ต้นหอม", "น้ำปลา", "พริกไทย"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่หมูสับลงไป",
            "ใส่เต้าหู้และผักกาดขาว",
            "ปรุงรสด้วยน้ำปลา",
            "โรยต้นหอมและพริกไทย"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 25
    },

    {
        id: 17,
        name: "กุ้งผัดกระเทียม",
        description: "กุ้งสดผัดกระเทียมหอม ๆ รสกลมกล่อม",
        image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80",
        ingredients: ["กุ้ง", "กระเทียม", "พริกไทย", "ซีอิ๊ว", "น้ำมัน"],
        instructions: [
            "ล้างและเตรียมกุ้ง",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมจนหอม",
            "ใส่กุ้งและผัดจนสุก",
            "ปรุงรสด้วยซีอิ๊วและพริกไทย"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 18,
        name: "ข้าวไข่ข้น",
        description: "ไข่ข้นนุ่มละมุน เสิร์ฟบนข้าวสวยร้อน ๆ",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไข่", "นม", "ข้าว", "เนย", "ซีอิ๊ว"],
        instructions: [
            "ตีไข่กับนมให้เข้ากัน",
            "ตั้งกระทะใส่เนย",
            "เทไข่ลงกระทะ",
            "คนเบา ๆ ให้ไข่เป็นเนื้อข้น",
            "ตักราดบนข้าวแล้วปรุงรส"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 10
    },

    {
        id: 19,
        name: "แกงเขียวหวานไก่",
        description: "แกงเขียวหวานไก่เข้มข้น หอมกะทิและเครื่องแกง",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไก่", "พริกแกงเขียวหวาน", "กะทิ", "มะเขือ", "ใบโหระพา", "น้ำปลา", "น้ำตาล"],
        instructions: [
            "ตั้งหม้อใส่กะทิและพริกแกง",
            "เคี่ยวจนเครื่องแกงหอม",
            "ใส่ไก่ลงไป",
            "ใส่มะเขือและเคี่ยวจนสุก",
            "ปรุงรสและใส่ใบโหระพา"
        ],
        category: "แกง",
        difficulty: "ปานกลาง",
        time: 40
    },

    {
        id: 20,
        name: "สุกี้น้ำ",
        description: "สุกี้น้ำร้อน ๆ ใส่ผักและเนื้อสัตว์ตามชอบ",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=900&q=80",
        ingredients: ["หมู", "ไข่", "ผักกาดขาว", "วุ้นเส้น", "เต้าหู้", "น้ำจิ้มสุกี้"],
        instructions: [
            "ต้มน้ำซุปให้เดือด",
            "ใส่หมูลงไปต้ม",
            "ใส่ผักกาดขาวและเต้าหู้",
            "ใส่วุ้นเส้นและไข่",
            "ตักใส่ชามและเสิร์ฟพร้อมน้ำจิ้มสุกี้"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 21,
        name: "มาม่าผัดไข่",
        description: "บะหมี่กึ่งสำเร็จรูปผัดไข่ เมนูง่ายสำหรับวันที่คิดอะไรไม่ออก",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
        ingredients: ["บะหมี่", "ไข่", "ผัก", "น้ำมัน", "ซีอิ๊ว"],
        instructions: [
            "ต้มบะหมี่ให้พอนิ่มแล้วสะเด็ดน้ำ",
            "ตั้งกระทะใส่น้ำมัน",
            "ใส่ไข่ลงไปผัด",
            "ใส่เส้นและผัก",
            "ปรุงรสด้วยซีอิ๊วแล้วผัดให้เข้ากัน"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 10
    },

    {
        id: 22,
        name: "หมูกระเทียม",
        description: "หมูผัดกระเทียมพริกไทย หอม ๆ กินกับข้าวสวย",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
        ingredients: ["หมู", "กระเทียม", "พริกไทย", "ซีอิ๊ว", "น้ำมัน"],
        instructions: [
            "หมักหมูด้วยซีอิ๊วและพริกไทย",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมให้หอม",
            "ใส่หมูลงไปผัดจนสุก",
            "จัดใส่จานและโรยกระเทียมเจียว"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 15
    }
];


/* =========================================================
   2. INGREDIENT DATABASE
========================================================= */

const commonIngredients = [
    "ไข่",
    "ข้าว",
    "หมู",
    "ไก่",
    "กุ้ง",
    "ปลา",
    "คะน้า",
    "ผักกาดขาว",
    "ผัก",
    "แครอท",
    "ข้าวโพด",
    "เห็ด",
    "เต้าหู้",
    "วุ้นเส้น",
    "เส้นใหญ่",
    "บะหมี่",
    "กระเทียม",
    "พริก",
    "พริกไทย",
    "ต้นหอม",
    "หอมแดง",
    "ตะไคร้",
    "ใบมะกรูด",
    "ข่า",
    "ใบกะเพรา",
    "ใบโหระพา",
    "มะนาว",
    "มะเขือ",
    "ถั่วฝักยาว",
    "น้ำปลา",
    "ซีอิ๊ว",
    "น้ำมันหอย",
    "น้ำตาล",
    "น้ำมัน",
    "เนย",
    "นม",
    "กะทิ",
    "พริกแกง",
    "พริกแกงเขียวหวาน",
    "น้ำจิ้มสุกี้"
];


/* =========================================================
   3. STORAGE KEYS
========================================================= */

const STORAGE_KEYS = {
    favorites: "whatCanICook_favorites",
    recentSearches: "whatCanICook_recentSearches"
};


/* =========================================================
   4. STATE
========================================================= */

let selectedIngredients = [];
let favoriteIds = [];
let recentSearches = [];

let currentRecipes = [...recipes];
let currentModalRecipeId = null;

let activeSection = "searchSection";


/* =========================================================
   5. DOM ELEMENTS
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

const searchIngredientsBtn =
    document.getElementById("searchIngredientsBtn");

const recipeGrid =
    document.getElementById("recipeGrid");

const favoritesGrid =
    document.getElementById("favoritesGrid");

const favoritesSection =
    document.getElementById("favoritesSection");

const resultsSection =
    document.getElementById("resultsSection");

const recentSearchesSection =
    document.getElementById("recentSearchesSection");

const resultsSummary =
    document.getElementById("resultsSummary");

const noResults =
    document.getElementById("noResults");

const noFavorites =
    document.getElementById("noFavorites");

const favoriteCount =
    document.getElementById("favoriteCount");

const recentSearchesContainer =
    document.getElementById("recentSearches");

const menuSearch =
    document.getElementById("menuSearch");

const categoryFilter =
    document.getElementById("categoryFilter");

const timeFilter =
    document.getElementById("timeFilter");

const difficultyFilter =
    document.getElementById("difficultyFilter");

const sortSelect =
    document.getElementById("sortSelect");

const resetFiltersBtn =
    document.getElementById("resetFiltersBtn");

const clearRecentBtn =
    document.getElementById("clearRecentBtn");

const randomMenuBtn =
    document.getElementById("randomMenuBtn");

const noResultsClearBtn =
    document.getElementById("noResultsClearBtn");

const browseRecipesBtn =
    document.getElementById("browseRecipesBtn");

const recipeModal =
    document.getElementById("recipeModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const modalRecipeImage =
    document.getElementById("modalRecipeImage");

const modalRecipeTitle =
    document.getElementById("modalRecipeTitle");

const modalRecipeDescription =
    document.getElementById("modalRecipeDescription");

const modalCategory =
    document.getElementById("modalCategory");

const modalDifficulty =
    document.getElementById("modalDifficulty");

const modalTime =
    document.getElementById("modalTime");

const modalIngredients =
    document.getElementById("modalIngredients");

const modalInstructions =
    document.getElementById("modalInstructions");

const modalFavoriteBtn =
    document.getElementById("modalFavoriteBtn");

const toast =
    document.getElementById("toast");

const toastIcon =
    document.getElementById("toastIcon");

const toastMessage =
    document.getElementById("toastMessage");


/* =========================================================
   6. INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadStorage();

    renderSelectedIngredients();

    renderRecentSearches();

    updateFavoriteCount();

    renderRecipes(recipes);

    setupEventListeners();

    showSection("searchSection");
});


/* =========================================================
   7. LOCAL STORAGE
========================================================= */

function loadStorage() {

    try {

        const savedFavorites =
            localStorage.getItem(STORAGE_KEYS.favorites);

        const savedRecent =
            localStorage.getItem(STORAGE_KEYS.recentSearches);

        favoriteIds = savedFavorites
            ? JSON.parse(savedFavorites)
            : [];

        recentSearches = savedRecent
            ? JSON.parse(savedRecent)
            : [];

        if (!Array.isArray(favoriteIds)) {
            favoriteIds = [];
        }

        if (!Array.isArray(recentSearches)) {
            recentSearches = [];
        }

    } catch (error) {

        console.warn(
            "ไม่สามารถโหลด LocalStorage ได้",
            error
        );

        favoriteIds = [];
        recentSearches = [];
    }
}


function saveFavorites() {

    try {

        localStorage.setItem(
            STORAGE_KEYS.favorites,
            JSON.stringify(favoriteIds)
        );

    } catch (error) {

        console.warn(
            "ไม่สามารถบันทึก Favorite ได้",
            error
        );
    }
}


function saveRecentSearches() {

    try {

        localStorage.setItem(
            STORAGE_KEYS.recentSearches,
            JSON.stringify(recentSearches)
        );

    } catch (error) {

        console.warn(
            "ไม่สามารถบันทึก Recent Searches ได้",
            error
        );
    }
}


/* =========================================================
   8. EVENT LISTENERS
========================================================= */

function setupEventListeners() {

    addIngredientBtn.addEventListener(
        "click",
        addIngredientFromInput
    );


    ingredientInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                addIngredientFromInput();
            }
        }
    );


    ingredientInput.addEventListener(
        "input",
        handleIngredientInput
    );


    clearIngredientsBtn.addEventListener(
        "click",
        clearIngredients
    );


    searchIngredientsBtn.addEventListener(
        "click",
        searchByIngredients
    );


    menuSearch.addEventListener(
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


    sortSelect.addEventListener(
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


    randomMenuBtn.addEventListener(
        "click",
        randomRecipe
    );


    noResultsClearBtn.addEventListener(
        "click",
        clearAllSearchData
    );


    browseRecipesBtn.addEventListener(
        "click",
        () => showSection("searchSection")
    );


    closeModalBtn.addEventListener(
        "click",
        closeRecipeModal
    );


    modalOverlay.addEventListener(
        "click",
        closeRecipeModal
    );


    modalFavoriteBtn.addEventListener(
        "click",
        () => {

            if (currentModalRecipeId !== null) {

                toggleFavorite(
                    currentModalRecipeId
                );
            }
        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                recipeModal.classList.contains("is-open")
            ) {

                closeRecipeModal();
            }
        }
    );


    document
        .querySelectorAll(".quick-ingredient")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const ingredient =
                        button.dataset.ingredient;

                    addIngredient(ingredient);
                }
            );
        });


    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const section =
                        button.dataset.section;

                    showSection(section);
                }
            );
        });
}


/* =========================================================
   9. INGREDIENT INPUT
========================================================= */

function handleIngredientInput() {

    const value =
        ingredientInput.value.trim();

    if (!value) {

        ingredientSuggestions.innerHTML = "";

        return;
    }


    const normalizedValue =
        normalizeText(value);


    const suggestions =
        commonIngredients
            .filter(ingredient => {

                return (
                    normalizeText(ingredient)
                        .includes(normalizedValue)
                );
            })
            .filter(ingredient => {

                return !selectedIngredients
                    .includes(ingredient);
            })
            .slice(0, 6);


    ingredientSuggestions.innerHTML =
        suggestions
            .map(ingredient => {

                return `
                    <button
                        type="button"
                        class="suggestion-item"
                        data-suggestion="${escapeHTML(ingredient)}"
                    >
                        🥕 ${escapeHTML(ingredient)}
                    </button>
                `;
            })
            .join("");


    ingredientSuggestions
        .querySelectorAll(".suggestion-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    addIngredient(
                        button.dataset.suggestion
                    );

                    ingredientSuggestions.innerHTML = "";
                }
            );
        });
}


function addIngredientFromInput() {

    const rawValue =
        ingredientInput.value.trim();

    if (!rawValue) {

        showToast(
            "⚠️",
            "กรุณาพิมพ์วัตถุดิบก่อน"
        );

        return;
    }


    const parts =
        rawValue
            .split(/[,，、]/)
            .map(item => item.trim())
            .filter(Boolean);


    let addedCount = 0;


    parts.forEach(part => {

        if (
            addIngredient(part, false)
        ) {

            addedCount++;
        }
    });


    ingredientInput.value = "";

    ingredientSuggestions.innerHTML = "";


    if (addedCount > 0) {

        showToast(
            "✓",
            `เพิ่มวัตถุดิบ ${addedCount} รายการแล้ว`
        );

    } else {

        showToast(
            "ℹ️",
            "วัตถุดิบนี้ถูกเลือกไว้แล้ว"
        );
    }


    renderSelectedIngredients();
}


function addIngredient(
    ingredient,
    showNotification = true
) {

    const cleanIngredient =
        ingredient.trim();


    if (!cleanIngredient) {
        return false;
    }


    const alreadyExists =
        selectedIngredients.some(
            item =>
                normalizeText(item) ===
                normalizeText(cleanIngredient)
        );


    if (alreadyExists) {

        if (showNotification) {

            showToast(
                "ℹ️",
                "วัตถุดิบนี้ถูกเลือกไว้แล้ว"
            );
        }

        return false;
    }


    selectedIngredients.push(
        cleanIngredient
    );


    renderSelectedIngredients();


    if (showNotification) {

        showToast(
            "✓",
            `เพิ่ม "${cleanIngredient}" แล้ว`
        );
    }


    return true;
}


/* =========================================================
   10. SELECTED INGREDIENT TAGS
========================================================= */

function renderSelectedIngredients() {

    if (!selectedIngredients.length) {

        selectedIngredientsContainer.innerHTML = `
            <span class="empty-tag-message">
                ยังไม่ได้เลือกวัตถุดิบ
            </span>
        `;

        return;
    }


    selectedIngredientsContainer.innerHTML =
        selectedIngredients
            .map((ingredient, index) => {

                return `
                    <span class="ingredient-tag">

                        <span>
                            ${escapeHTML(ingredient)}
                        </span>

                        <button
                            type="button"
                            class="remove-ingredient-btn"
                            data-index="${index}"
                            aria-label="ลบ ${escapeHTML(ingredient)}"
                        >
                            ×
                        </button>

                    </span>
                `;
            })
            .join("");


    selectedIngredientsContainer
        .querySelectorAll(".remove-ingredient-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(button.dataset.index);

                    removeIngredient(index);
                }
            );
        });
}


function removeIngredient(index) {

    selectedIngredients.splice(index, 1);

    renderSelectedIngredients();
}


function clearIngredients() {

    selectedIngredients = [];

    renderSelectedIngredients();

    showToast(
        "✓",
        "ล้างวัตถุดิบทั้งหมดแล้ว"
    );
}


/* =========================================================
   11. SEARCH BY INGREDIENTS
========================================================= */

function searchByIngredients() {

    if (!selectedIngredients.length) {

        showToast(
            "⚠️",
            "เลือกวัตถุดิบอย่างน้อย 1 รายการ"
        );

        return;
    }


    saveRecentSearch();


    currentRecipes =
        recipes
            .map(recipe => {

                const match =
                    calculateMatch(recipe);


                return {
                    ...recipe,
                    matchCount: match.count,
                    matchPercentage: match.percentage
                };
            })
            .filter(recipe => {

                return recipe.matchCount > 0;
            });


    applyFilters();

    scrollToResults();
}


/* =========================================================
   12. CALCULATE MATCH
========================================================= */

function calculateMatch(recipe) {

    if (!selectedIngredients.length) {

        return {
            count: 0,
            percentage: 0
        };
    }


    const normalizedSelected =
        selectedIngredients.map(
            normalizeText
        );


    let count = 0;


    recipe.ingredients.forEach(
        ingredient => {

            const normalized =
                normalizeText(ingredient);


            const matched =
                normalizedSelected.some(
                    selected => {

                        return (
                            normalized.includes(selected) ||
                            selected.includes(normalized)
                        );
                    }
                );


            if (matched) {
                count++;
            }
        }
    );


    const percentage =
        Math.round(
            (count / recipe.ingredients.length) * 100
        );


    return {
        count,
        percentage
    };
}


/* =========================================================
   13. APPLY FILTERS
========================================================= */

function applyFilters() {

    let filteredRecipes =
        selectedIngredients.length
            ? recipes
                .map(recipe => {

                    const match =
                        calculateMatch(recipe);

                    return {
                        ...recipe,
                        matchCount: match.count,
                        matchPercentage: match.percentage
                    };
                })
                .filter(recipe => {

                    return recipe.matchCount > 0;
                })
            : recipes.map(recipe => ({
                ...recipe,
                matchCount: 0,
                matchPercentage: 0
            }));


    const searchValue =
        normalizeText(
            menuSearch.value
        );


    if (searchValue) {

        filteredRecipes =
            filteredRecipes.filter(
                recipe => {

                    return (
                        normalizeText(
                            recipe.name
                        ).includes(searchValue) ||
                        normalizeText(
                            recipe.description
                        ).includes(searchValue)
                    );
                }
            );
    }


    const category =
        categoryFilter.value;


    if (category !== "all") {

        filteredRecipes =
            filteredRecipes.filter(
                recipe =>
                    recipe.category === category
            );
    }


    const maxTime =
        timeFilter.value;


    if (maxTime !== "all") {

        filteredRecipes =
            filteredRecipes.filter(
                recipe =>
                    recipe.time <=
                    Number(maxTime)
            );
    }


    const difficulty =
        difficultyFilter.value;


    if (difficulty !== "all") {

        filteredRecipes =
            filteredRecipes.filter(
                recipe =>
                    recipe.difficulty === difficulty
            );
    }


    sortRecipes(
        filteredRecipes,
        sortSelect.value
    );


    currentRecipes =
        filteredRecipes;


    renderRecipes(
        filteredRecipes
    );
}


/* =========================================================
   14. SORT
========================================================= */

function sortRecipes(
    recipeList,
    sortType
) {

    if (sortType === "match") {

        recipeList.sort(
            (a, b) => {

                if (
                    b.matchPercentage !==
                    a.matchPercentage
                ) {

                    return (
                        b.matchPercentage -
                        a.matchPercentage
                    );
                }

                return a.time - b.time;
            }
        );

        return;
    }


    if (sortType === "time") {

        recipeList.sort(
            (a, b) =>
                a.time - b.time
        );

        return;
    }


    if (sortType === "name") {

        recipeList.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name,
                    "th"
                )
        );

        return;
    }


    if (sortType === "difficulty") {

        const difficultyOrder = {
            "ง่าย": 1,
            "ปานกลาง": 2,
            "ยาก": 3
        };


        recipeList.sort(
            (a, b) =>
                difficultyOrder[a.difficulty] -
                difficultyOrder[b.difficulty]
        );
    }
}


/* =========================================================
   15. RENDER RECIPES
========================================================= */

function renderRecipes(recipeList) {

    if (!recipeList.length) {

        recipeGrid.innerHTML = "";

        noResults.hidden = false;

        resultsSummary.textContent =
            "ไม่พบเมนูที่ตรงกับเงื่อนไข";

        return;
    }


    noResults.hidden = true;


    if (selectedIngredients.length) {

        resultsSummary.textContent =
            `พบ ${recipeList.length} เมนูจากวัตถุดิบที่คุณเลือก`;

    } else {

        resultsSummary.textContent =
            `มี ${recipeList.length} เมนูให้เลือก`;
    }


    recipeGrid.innerHTML =
        recipeList
            .map(recipe => {

                return createRecipeCard(
                    recipe
                );
            })
            .join("");


    attachRecipeCardEvents(
        recipeGrid
    );
}


/* =========================================================
   16. CREATE RECIPE CARD
========================================================= */

function createRecipeCard(recipe) {

    const isFavorite =
        favoriteIds.includes(recipe.id);


    const hasMatch =
        selectedIngredients.length > 0;


    const matchBadge =
        hasMatch
            ? `
                <span class="match-badge">
                    ✓ ${recipe.matchCount}/${recipe.ingredients.length}
                    (${recipe.matchPercentage}%)
                </span>
            `
            : "";


    return `
        <article
            class="recipe-card"
            data-recipe-id="${recipe.id}"
        >

            <div class="recipe-image-wrapper">

                <img
                    src="${recipe.image}"
                    alt="${escapeHTML(recipe.name)}"
                    class="recipe-image"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80';"
                >

                <button
                    type="button"
                    class="favorite-btn ${isFavorite ? "is-favorite" : ""}"
                    data-favorite-id="${recipe.id}"
                    aria-label="${isFavorite ? "ลบจากเมนูโปรด" : "เพิ่มเมนูโปรด"}"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

                ${matchBadge}

            </div>


            <div class="recipe-card-body">

                <div class="recipe-card-meta">

                    <span class="category-badge">
                        ${escapeHTML(recipe.category)}
                    </span>

                    <span class="difficulty-badge">
                        ${escapeHTML(recipe.difficulty)}
                    </span>

                </div>


                <h3 class="recipe-card-title">
                    ${escapeHTML(recipe.name)}
                </h3>


                <p class="recipe-card-description">
                    ${escapeHTML(recipe.description)}
                </p>


                <div class="recipe-card-footer">

                    <span class="recipe-time">
                        ⏱️ ${recipe.time} นาที
                    </span>

                    <button
                        type="button"
                        class="view-recipe-btn"
                        data-view-id="${recipe.id}"
                    >
                        ดูสูตร →
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   17. CARD EVENTS
========================================================= */

function attachRecipeCardEvents(
    container
) {

    container
        .querySelectorAll(".favorite-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    const id =
                        Number(
                            button.dataset.favoriteId
                        );

                    toggleFavorite(id);
                }
            );
        });


    container
        .querySelectorAll(".view-recipe-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    const id =
                        Number(
                            button.dataset.viewId
                        );

                    openRecipeModal(id);
                }
            );
        });


    container
        .querySelectorAll(".recipe-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            "button"
                        )
                    ) {
                        return;
                    }


                    const id =
                        Number(
                            card.dataset.recipeId
                        );


                    openRecipeModal(id);
                }
            );
        });
}


/* =========================================================
   18. FAVORITES
========================================================= */

function toggleFavorite(recipeId) {

    const index =
        favoriteIds.indexOf(recipeId);


    if (index === -1) {

        favoriteIds.push(recipeId);

        showToast(
            "❤️",
            "เพิ่มเมนูโปรดแล้ว"
        );

    } else {

        favoriteIds.splice(index, 1);

        showToast(
            "♡",
            "นำออกจากเมนูโปรดแล้ว"
        );
    }


    saveFavorites();

    updateFavoriteCount();

    renderRecipes(currentRecipes);

    if (
        activeSection ===
        "favoritesSection"
    ) {

        renderFavorites();
    }


    if (
        currentModalRecipeId ===
        recipeId
    ) {

        updateModalFavoriteButton();
    }
}


function updateFavoriteCount() {

    favoriteCount.textContent =
        favoriteIds.length;
}


function renderFavorites() {

    const favoriteRecipes =
        recipes.filter(
            recipe =>
                favoriteIds.includes(
                    recipe.id
                )
        );


    if (!favoriteRecipes.length) {

        favoritesGrid.innerHTML = "";

        noFavorites.hidden = false;

        return;
    }


    noFavorites.hidden = true;


    favoritesGrid.innerHTML =
        favoriteRecipes
            .map(recipe => {

                return createRecipeCard(
                    recipe
                );
            })
            .join("");


    attachRecipeCardEvents(
        favoritesGrid
    );
}


/* =========================================================
   19. RECENT SEARCHES
========================================================= */

function saveRecentSearch() {

    const search =
        [...selectedIngredients];


    if (!search.length) {
        return;
    }


    const searchKey =
        search
            .map(normalizeText)
            .sort()
            .join("|");


    recentSearches =
        recentSearches.filter(
            item => {

                const key =
                    item
                        .map(normalizeText)
                        .sort()
                        .join("|");

                return key !== searchKey;
            }
        );


    recentSearches.unshift(
        search
    );


    recentSearches =
        recentSearches.slice(
            0,
            8
        );


    saveRecentSearches();

    renderRecentSearches();
}


function renderRecentSearches() {

    if (!recentSearches.length) {

        recentSearchesContainer.innerHTML = `
            <span class="empty-tag-message">
                ยังไม่มีประวัติการค้นหา
            </span>
        `;

        return;
    }


    recentSearchesContainer.innerHTML =
        recentSearches
            .map(
                (search, index) => {

                    return `
                        <button
                            type="button"
                            class="recent-search-item"
                            data-recent-index="${index}"
                        >
                            🔄
                            ${search
                                .map(escapeHTML)
                                .join(" + ")
                            }
                        </button>
                    `;
                }
            )
            .join("");


    recentSearchesContainer
        .querySelectorAll(".recent-search-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.recentIndex
                        );


                    const search =
                        recentSearches[index];


                    if (!search) {
                        return;
                    }


                    selectedIngredients =
                        [...search];


                    renderSelectedIngredients();

                    showSection(
                        "searchSection"
                    );

                    searchByIngredients();
                }
            );
        });
}


function clearRecentSearches() {

    recentSearches = [];

    saveRecentSearches();

    renderRecentSearches();

    showToast(
        "✓",
        "ล้างประวัติการค้นหาแล้ว"
    );
}


/* =========================================================
   20. FILTER RESET
========================================================= */

function resetFilters() {

    menuSearch.value = "";

    categoryFilter.value = "all";

    timeFilter.value = "all";

    difficultyFilter.value = "all";

    sortSelect.value = "match";

    applyFilters();

    showToast(
        "✓",
        "รีเซ็ตตัวกรองแล้ว"
    );
}


/* =========================================================
   21. RANDOM RECIPE
========================================================= */

function randomRecipe() {

    const availableRecipes =
        currentRecipes.length
            ? currentRecipes
            : recipes;


    const randomIndex =
        Math.floor(
            Math.random() *
            availableRecipes.length
        );


    const recipe =
        availableRecipes[randomIndex];


    if (!recipe) {
        return;
    }


    openRecipeModal(recipe.id);
}


/* =========================================================
   22. RECIPE MODAL
========================================================= */

function openRecipeModal(recipeId) {

    const recipe =
        recipes.find(
            item =>
                item.id === recipeId
        );


    if (!recipe) {
        return;
    }


    currentModalRecipeId =
        recipeId;


    modalRecipeImage.src =
        recipe.image;


    modalRecipeImage.alt =
        recipe.name;


    modalRecipeTitle.textContent =
        recipe.name;


    modalRecipeDescription.textContent =
        recipe.description;


    modalCategory.textContent =
        recipe.category;


    modalDifficulty.textContent =
        recipe.difficulty;


    modalTime.textContent =
        `⏱️ ${recipe.time} นาที`;


    modalIngredients.innerHTML =
        recipe.ingredients
            .map(
                ingredient => {

                    return `
                        <li>
                            ${escapeHTML(ingredient)}
                        </li>
                    `;
                }
            )
            .join("");


    modalInstructions.innerHTML =
        recipe.instructions
            .map(
                instruction => {

                    return `
                        <li>
                            ${escapeHTML(instruction)}
                        </li>
                    `;
                }
            )
            .join("");


    updateModalFavoriteButton();


    recipeModal.classList.add(
        "is-open"
    );


    recipeModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );
}


function closeRecipeModal() {

    recipeModal.classList.remove(
        "is-open"
    );


    recipeModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    currentModalRecipeId = null;
}


function updateModalFavoriteButton() {

    const isFavorite =
        favoriteIds.includes(
            currentModalRecipeId
        );


    modalFavoriteBtn.textContent =
        isFavorite ? "♥" : "♡";


    modalFavoriteBtn.setAttribute(
        "aria-label",
        isFavorite
            ? "ลบจากเมนูโปรด"
            : "เพิ่มเมนูโปรด"
    );
}


/* =========================================================
   23. NAVIGATION
========================================================= */

function showSection(sectionId) {

    activeSection =
        sectionId;


    if (
        sectionId ===
        "favoritesSection"
    ) {

        resultsSection.hidden = true;

        recentSearchesSection.hidden = true;

        favoritesSection.hidden = false;

        renderFavorites();

    } else {

        resultsSection.hidden = false;

        recentSearchesSection.hidden = false;

        favoritesSection.hidden = true;
    }


    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.section ===
                sectionId
            );
        });


    if (
        sectionId ===
        "searchSection"
    ) {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        favoritesSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================================================
   24. CLEAR ALL SEARCH DATA
========================================================= */

function clearAllSearchData() {

    selectedIngredients = [];

    menuSearch.value = "";

    categoryFilter.value = "all";

    timeFilter.value = "all";

    difficultyFilter.value = "all";

    sortSelect.value = "match";

    ingredientInput.value = "";

    ingredientSuggestions.innerHTML = "";

    renderSelectedIngredients();

    currentRecipes = [...recipes];

    renderRecipes(recipes);

    showToast(
        "✓",
        "ล้างการค้นหาแล้ว"
    );
}


/* =========================================================
   25. SCROLL
========================================================= */

function scrollToResults() {

    setTimeout(() => {

        resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);
}


/* =========================================================
   26. TOAST
========================================================= */

let toastTimer = null;


function showToast(
    icon,
    message
) {

    toastIcon.textContent =
        icon;


    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2400);
}


/* =========================================================
   27. HELPERS
========================================================= */

function normalizeText(value) {

    return String(value)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "");
}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   END OF SCRIPT
========================================================= */
