/* =========================================================
   What Can I Cook? 🍳
   script.js
   ========================================================= */

/* =========================================================
   RECIPE DATABASE
   ========================================================= */

const recipes = [
    {
        id: 1,
        name: "ข้าวผัดไข่",
        description: "ข้าวผัดง่าย ๆ หอมกระทะ พร้อมไข่และเครื่องปรุงพื้นฐาน",
        image: "images/ข้าวผัดไข่.jpg",
        ingredients: ["ข้าวสวย", "ไข่", "กระเทียม", "น้ำมัน", "ซีอิ๊ว"],
        instructions: [
            "ตั้งกระทะใส่น้ำมันและเจียวกระเทียมให้หอม",
            "ตอกไข่ลงไปแล้วยีให้พอสุก",
            "ใส่ข้าวสวยลงไปผัดให้เข้ากัน",
            "ปรุงรสด้วยซีอิ๊วแล้วผัดให้เข้ากัน",
            "ผัดต่อจนข้าวแห้งหอมแล้วตักเสิร์ฟ"
        ],
        category: "rice",
        categoryName: "อาหารจานข้าว",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 15
    },

    {
        id: 2,
        name: "ข้าวผัดหมู",
        description: "ข้าวผัดหมูร้อน ๆ หอมกลิ่นกระทะ ทำง่ายและอิ่มท้อง",
        image: "images/ข้าวผัดหมู.jpg",
        ingredients: ["ข้าวสวย", "หมู", "ไข่", "กระเทียม", "น้ำมัน", "ซีอิ๊ว"],
        instructions: [
            "หั่นหมูเป็นชิ้นพอดีคำ",
            "ตั้งกระทะใส่น้ำมันแล้วเจียวกระเทียม",
            "ใส่หมูลงผัดจนเกือบสุก",
            "ใส่ไข่แล้วยีให้เข้ากับหมู",
            "ใส่ข้าวสวยและปรุงรส",
            "ผัดจนทุกอย่างเข้ากันแล้วจัดเสิร์ฟ"
        ],
        category: "rice",
        categoryName: "อาหารจานข้าว",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 20
    },

    {
        id: 3,
        name: "ผัดกะเพราหมู",
        description: "เมนูยอดนิยม รสจัดจ้าน หอมใบกะเพราและกระเทียม",
        image: "images/ผัดกะเพราหมู.jpg",
        ingredients: ["หมู", "ใบกะเพรา", "กระเทียม", "พริก", "น้ำมัน", "น้ำปลา", "ซีอิ๊ว", "น้ำตาล"],
        instructions: [
            "โขลกพริกกับกระเทียมพอหยาบ",
            "ตั้งกระทะใส่น้ำมันแล้วผัดพริกกระเทียมให้หอม",
            "ใส่หมูลงไปผัดจนสุก",
            "ปรุงรสด้วยน้ำปลา ซีอิ๊ว และน้ำตาล",
            "ใส่ใบกะเพราแล้วผัดเร็ว ๆ",
            "ตักเสิร์ฟพร้อมข้าวสวย"
        ],
        category: "stir-fry",
        categoryName: "ผัด",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 15
    },

    {
        id: 4,
        name: "ไข่เจียวหมูสับ",
        description: "ไข่เจียวฟู ๆ ใส่หมูสับ เมนูง่ายที่ใช้เวลาไม่นาน",
        image: "images/ไข่เจียวหมูสับ.jpg",
        ingredients: ["ไข่", "หมู", "น้ำปลา", "น้ำมัน"],
        instructions: [
            "ตอกไข่ใส่ชามแล้วตีให้เข้ากัน",
            "ใส่หมูสับและน้ำปลา",
            "ตั้งกระทะใส่น้ำมันให้ร้อน",
            "เทไข่ลงทอดจนด้านล่างเหลือง",
            "กลับด้านและทอดจนสุก",
            "ตักขึ้นสะเด็ดน้ำมันแล้วเสิร์ฟ"
        ],
        category: "fried",
        categoryName: "ทอด",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 10
    },

    {
        id: 5,
        name: "ผัดคะน้าหมู",
        description: "คะน้ากรอบ ๆ ผัดกับหมูนุ่มและซอสเข้มข้น",
        image: "images/ผัดคะน้าหมู.jpg",
        ingredients: ["หมู", "คะน้า", "กระเทียม", "น้ำมัน", "น้ำปลา", "ซีอิ๊ว", "น้ำตาล"],
        instructions: [
            "หั่นหมูและคะน้าเตรียมไว้",
            "ตั้งกระทะใส่น้ำมันแล้วเจียวกระเทียม",
            "ใส่หมูลงผัดจนเกือบสุก",
            "ใส่คะน้าและปรุงรส",
            "เติมน้ำเล็กน้อยแล้วผัดจนคะน้าสุกกรอบ",
            "ตักใส่จานพร้อมเสิร์ฟ"
        ],
        category: "stir-fry",
        categoryName: "ผัด",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 15
    },

    {
        id: 6,
        name: "ต้มจืดเต้าหู้หมูสับ",
        description: "ซุปใสรสกลมกล่อม พร้อมเต้าหู้และหมูสับ",
        image: "images/ต้มจืดเต้าหู้หมูสับ.jpg",
        ingredients: ["หมู", "เต้าหู้", "ผักกาดขาว", "กระเทียม", "ซีอิ๊ว", "น้ำปลา", "น้ำ"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่หมูสับปั้นเป็นก้อนลงไป",
            "ช้อนฟองออกเพื่อให้น้ำซุปใส",
            "ใส่เต้าหู้และผักกาดขาว",
            "ปรุงรสด้วยซีอิ๊วและน้ำปลา",
            "ต้มจนผักสุกแล้วตักเสิร์ฟ"
        ],
        category: "soup",
        categoryName: "ต้ม / แกง",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 25
    },

    {
        id: 7,
        name: "ต้มยำกุ้ง",
        description: "ต้มยำกุ้งรสเปรี้ยวเผ็ด หอมสมุนไพรแบบไทย",
        image: "images/ต้มยำกุ้ง.jpg",
        ingredients: ["กุ้ง", "ตะไคร้", "ใบมะกรูด", "ข่า", "พริก", "เห็ด", "น้ำปลา", "มะนาว", "น้ำ"],
        instructions: [
            "ต้มน้ำให้เดือดแล้วใส่ข่า ตะไคร้ และใบมะกรูด",
            "ใส่เห็ดและกุ้ง",
            "ต้มจนกุ้งสุก",
            "ปรุงรสด้วยน้ำปลาและพริก",
            "ปิดไฟแล้วเติมน้ำมะนาว",
            "ชิมรสแล้วตักเสิร์ฟ"
        ],
        category: "soup",
        categoryName: "ต้ม / แกง",
        difficulty: "medium",
        difficultyName: "ปานกลาง",
        time: 30
    },

    {
        id: 8,
        name: "ผัดซีอิ๊วหมู",
        description: "เส้นใหญ่ผัดซีอิ๊วกับหมูและคะน้า หอมกลิ่นกระทะ",
        image: "images/ผัดซีอิ๊วหมู.jpg",
        ingredients: ["เส้นใหญ่", "หมู", "คะน้า", "ไข่", "กระเทียม", "ซีอิ๊วดำ", "ซีอิ๊ว", "น้ำมัน"],
        instructions: [
            "ตั้งกระทะใส่น้ำมันแล้วผัดกระเทียม",
            "ใส่หมูลงผัดจนสุก",
            "ตอกไข่ลงไปแล้วยีให้เข้ากัน",
            "ใส่เส้นใหญ่และคะน้า",
            "ปรุงด้วยซีอิ๊วและซีอิ๊วดำ",
            "ผัดด้วยไฟแรงจนหอมแล้วตักเสิร์ฟ"
        ],
        category: "noodle",
        categoryName: "เส้น",
        difficulty: "medium",
        difficultyName: "ปานกลาง",
        time: 20
    },

    {
        id: 9,
        name: "ราดหน้าหมู",
        description: "เส้นราดหน้าพร้อมหมูนุ่มและน้ำราดข้น ๆ",
        image: "images/ราดหน้าหมู.jpg",
        ingredients: ["เส้นใหญ่", "หมู", "คะน้า", "กระเทียม", "แป้งมัน", "ซีอิ๊ว", "น้ำปลา", "น้ำ"],
        instructions: [
            "ผัดเส้นใหญ่กับซีอิ๊วดำจนหอมแล้วพักไว้",
            "ผัดกระเทียมและหมูจนสุก",
            "เติมน้ำและปรุงรส",
            "ใส่คะน้า",
            "ละลายแป้งมันกับน้ำแล้วเทลงไป",
            "คนจนข้นแล้วราดบนเส้น"
        ],
        category: "noodle",
        categoryName: "เส้น",
        difficulty: "medium",
        difficultyName: "ปานกลาง",
        time: 30
    },

    {
        id: 10,
        name: "ผัดผักรวมหมู",
        description: "ผักหลากหลายชนิดผัดกับหมู รสกลมกล่อม",
        image: "images/ผัดผักรวมหมู.jpg",
        ingredients: ["หมู", "แครอท", "ข้าวโพด", "คะน้า", "กระเทียม", "น้ำมัน", "ซีอิ๊ว"],
        instructions: [
            "หั่นผักและหมูเป็นชิ้นพอดีคำ",
            "ผัดกระเทียมกับน้ำมันให้หอม",
            "ใส่หมูลงไปผัดจนสุก",
            "ใส่ผักทั้งหมด",
            "ปรุงรสด้วยซีอิ๊ว",
            "ผัดจนผักสุกกรอบแล้วเสิร์ฟ"
        ],
        category: "stir-fry",
        categoryName: "ผัด",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 20
    },

    {
        id: 11,
        name: "ไข่ดาว",
        description: "ไข่ดาวกรอบนอก ไข่แดงเยิ้ม ทำง่ายและรวดเร็ว",
        image: "images/ไข่ดาว.jpg",
        ingredients: ["ไข่", "น้ำมัน"],
        instructions: [
            "ตั้งกระทะใส่น้ำมันให้ร้อน",
            "ตอกไข่ลงในกระทะ",
            "ทอดจนขอบไข่กรอบตามต้องการ",
            "ตักขึ้นพักให้สะเด็ดน้ำมัน",
            "จัดเสิร์ฟทันที"
        ],
        category: "fried",
        categoryName: "ทอด",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 5
    },

    {
        id: 12,
        name: "ไข่ต้ม",
        description: "ไข่ต้มทำง่าย ใช้เป็นเครื่องเคียงหรือรับประทานกับข้าว",
        image: "images/ไข่ต้ม.jpg",
        ingredients: ["ไข่", "น้ำ"],
        instructions: [
            "ใส่ไข่ลงในหม้อ",
            "เติมน้ำให้ท่วมไข่",
            "ต้มจนเดือด",
            "จับเวลาให้ได้ระดับความสุกที่ต้องการ",
            "นำไข่แช่น้ำเย็นแล้วปอกเปลือก"
        ],
        category: "main",
        categoryName: "อาหารจานหลัก",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 10
    },

    {
        id: 13,
        name: "มาม่าผัดไข่",
        description: "บะหมี่กึ่งสำเร็จรูปผัดกับไข่ เมนูง่ายสำหรับวันที่เร่งรีบ",
        image: "images/มาม่าผัดไข่.jpg",
        ingredients: ["บะหมี่กึ่งสำเร็จรูป", "ไข่", "กระเทียม", "น้ำมัน", "ซีอิ๊ว"],
        instructions: [
            "ต้มบะหมี่ให้พอสุกแล้วสะเด็ดน้ำ",
            "ตั้งกระทะใส่น้ำมันและเจียวกระเทียม",
            "ตอกไข่ลงไปแล้วยี",
            "ใส่เส้นลงผัด",
            "ปรุงรสด้วยเครื่องปรุงและซีอิ๊ว",
            "ผัดจนเข้ากันแล้วเสิร์ฟ"
        ],
        category: "noodle",
        categoryName: "เส้น",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 10
    },

    {
        id: 14,
        name: "สุกี้น้ำหมู",
        description: "สุกี้น้ำร้อน ๆ พร้อมหมู ผัก และน้ำจิ้มรสเด็ด",
        image: "images/สุกี้น้ำหมู.jpg",
        ingredients: ["หมู", "ผักกาดขาว", "ไข่", "วุ้นเส้น", "เห็ด", "น้ำจิ้มสุกี้", "น้ำ"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่หมูลงไปต้มจนสุก",
            "ใส่ผักกาดขาวและเห็ด",
            "ใส่วุ้นเส้น",
            "ตอกไข่ลงไป",
            "ต้มจนทุกอย่างสุกแล้วเสิร์ฟพร้อมน้ำจิ้ม"
        ],
        category: "soup",
        categoryName: "ต้ม / แกง",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 25
    },

    {
        id: 15,
        name: "หมูกระเทียม",
        description: "หมูผัดกระเทียมหอม ๆ รสเค็มหวานกำลังดี",
        image: "images/หมูกระเทียม.jpg",
        ingredients: ["หมู", "กระเทียม", "น้ำมัน", "ซีอิ๊ว", "น้ำตาล", "พริกไทย"],
        instructions: [
            "หมักหมูกับซีอิ๊ว น้ำตาล และพริกไทย",
            "เจียวกระเทียมในน้ำมันจนเหลือง",
            "ตักกระเทียมพักไว้",
            "ผัดหมูในกระทะจนสุก",
            "ใส่กระเทียมเจียวกลับลงไป",
            "คลุกให้เข้ากันแล้วเสิร์ฟ"
        ],
        category: "stir-fry",
        categoryName: "ผัด",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 20
    },

    {
        id: 16,
        name: "ผัดพริกแกงหมู",
        description: "หมูผัดพริกแกงเข้มข้น หอมเครื่องแกงแบบไทย",
        image: "images/ผัดพริกแกงหมู.jpg",
        ingredients: ["หมู", "พริกแกง", "ถั่วฝักยาว", "ใบมะกรูด", "น้ำมัน", "น้ำปลา", "น้ำตาล"],
        instructions: [
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดพริกแกงให้หอม",
            "ใส่หมูลงผัดจนเกือบสุก",
            "ใส่ถั่วฝักยาว",
            "ปรุงรสด้วยน้ำปลาและน้ำตาล",
            "ใส่ใบมะกรูดแล้วผัดให้เข้ากัน"
        ],
        category: "stir-fry",
        categoryName: "ผัด",
        difficulty: "medium",
        difficultyName: "ปานกลาง",
        time: 20
    },

    {
        id: 17,
        name: "ยำไข่ดาว",
        description: "ไข่ดาวกรอบคลุกน้ำยำรสเปรี้ยวเผ็ดสดชื่น",
        image: "images/ยำไข่ดาว.jpg",
        ingredients: ["ไข่", "หอมแดง", "พริก", "มะนาว", "น้ำปลา", "น้ำตาล"],
        instructions: [
            "ทอดไข่ดาวให้กรอบแล้วหั่นเป็นชิ้น",
            "ซอยหอมแดงและเตรียมพริก",
            "ผสมน้ำมะนาว น้ำปลา และน้ำตาล",
            "ใส่พริกและหอมแดงลงในน้ำยำ",
            "ใส่ไข่ดาวแล้วคลุกเบา ๆ",
            "ตักเสิร์ฟทันที"
        ],
        category: "salad",
        categoryName: "ยำ / สลัด",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 15
    },

    {
        id: 18,
        name: "แกงจืดไข่น้ำ",
        description: "แกงจืดน้ำซุปใสพร้อมไข่ทอดนุ่ม ๆ",
        image: "images/แกงจืดไข่น้ำ.jpg",
        ingredients: ["ไข่", "หมู", "ต้นหอม", "กระเทียม", "ซีอิ๊ว", "น้ำปลา", "น้ำ"],
        instructions: [
            "ตีไข่แล้วนำไปทอดให้เป็นแผ่น",
            "หั่นไข่ทอดเป็นชิ้น",
            "ต้มน้ำให้เดือดและใส่หมูสับ",
            "ปรุงรสด้วยซีอิ๊วและน้ำปลา",
            "ใส่ไข่ทอดและต้นหอม",
            "ต้มอีกเล็กน้อยแล้วตักเสิร์ฟ"
        ],
        category: "soup",
        categoryName: "ต้ม / แกง",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 20
    },

    {
        id: 19,
        name: "ข้าวต้มหมู",
        description: "ข้าวต้มร้อน ๆ พร้อมหมูสับและเครื่องปรุงหอม ๆ",
        image: "images/ข้าวต้มหมู.jpg",
        ingredients: ["ข้าวสวย", "หมู", "กระเทียม", "ต้นหอม", "ซีอิ๊ว", "น้ำปลา", "น้ำ"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่ข้าวสวยลงไป",
            "ใส่หมูสับลงต้มจนสุก",
            "ปรุงรสด้วยซีอิ๊วและน้ำปลา",
            "โรยต้นหอม",
            "ตักใส่ชามแล้วเสิร์ฟร้อน ๆ"
        ],
        category: "rice",
        categoryName: "อาหารจานข้าว",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 20
    },

    {
        id: 20,
        name: "ข้าวไข่ข้น",
        description: "ข้าวร้อน ๆ เสิร์ฟคู่ไข่ข้นเนื้อนุ่มละมุน",
        image: "images/ข้าวไข่ข้น.jpg",
        ingredients: ["ข้าวสวย", "ไข่", "นม", "เนย", "ซีอิ๊ว"],
        instructions: [
            "ตอกไข่ใส่ชามแล้วตีให้เข้ากัน",
            "เติมนมเล็กน้อย",
            "ตั้งกระทะใส่เนย",
            "เทไข่ลงไปใช้ไฟอ่อน",
            "คนเบา ๆ จนไข่ข้นแต่ยังนุ่ม",
            "ปรุงรสเล็กน้อยแล้วราดบนข้าว"
        ],
        category: "rice",
        categoryName: "อาหารจานข้าว",
        difficulty: "medium",
        difficultyName: "ปานกลาง",
        time: 10
    },

    {
        id: 21,
        name: "ผัดกระเทียมพริกไทยหมู",
        description: "หมูนุ่มผัดกระเทียมและพริกไทย หอมและทำง่าย",
        image: "images/ผัดกระเทียมพริกไทยหมู.jpg",
        ingredients: ["หมู", "กระเทียม", "พริกไทย", "น้ำมัน", "ซีอิ๊ว", "น้ำตาล"],
        instructions: [
            "หมักหมูกับซีอิ๊ว น้ำตาล และพริกไทย",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมให้หอม",
            "ใส่หมูลงผัดจนสุก",
            "ปรุงรสเพิ่มเติมตามชอบ",
            "ผัดจนแห้งหอมแล้วตักเสิร์ฟ"
        ],
        category: "stir-fry",
        categoryName: "ผัด",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 15
    },

    {
        id: 22,
        name: "กุ้งผัดกระเทียม",
        description: "กุ้งสดผัดกระเทียมหอม ๆ เมนูง่ายแต่รสชาติดี",
        image: "images/กุ้งผัดกระเทียม.jpg",
        ingredients: ["กุ้ง", "กระเทียม", "น้ำมัน", "ซีอิ๊ว", "น้ำตาล", "พริกไทย"],
        instructions: [
            "ล้างและเตรียมกุ้งให้เรียบร้อย",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมจนเหลืองหอม",
            "ใส่กุ้งลงไปผัด",
            "ปรุงรสด้วยซีอิ๊ว น้ำตาล และพริกไทย",
            "ผัดจนกุ้งสุกแล้วตักเสิร์ฟ"
        ],
        category: "stir-fry",
        categoryName: "ผัด",
        difficulty: "easy",
        difficultyName: "ง่าย",
        time: 15
    }
];


/* =========================================================
   INGREDIENT SUGGESTIONS
   ========================================================= */

const commonIngredients = [
    "ไข่",
    "ข้าวสวย",
    "หมู",
    "กุ้ง",
    "ไก่",
    "กระเทียม",
    "พริก",
    "คะน้า",
    "ผักกาดขาว",
    "เห็ด",
    "ต้นหอม",
    "หอมแดง",
    "มะนาว",
    "ซีอิ๊ว",
    "น้ำปลา"
];


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

const STORAGE_KEYS = {
    favorites: "whatCanICook_favorites",
    recentSearches: "whatCanICook_recentSearches"
};


function getStorage(key, fallback = []) {
    try {
        const value = localStorage.getItem(key);

        if (!value) {
            return fallback;
        }

        return JSON.parse(value);

    } catch (error) {
        console.warn("ไม่สามารถอ่าน LocalStorage ได้:", error);
        return fallback;
    }
}


function setStorage(key, value) {
    try {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    } catch (error) {
        console.warn("ไม่สามารถบันทึก LocalStorage ได้:", error);
        return false;
    }
}


let favoriteIds =
    getStorage(
        STORAGE_KEYS.favorites,
        []
    );

let recentSearches =
    getStorage(
        STORAGE_KEYS.recentSearches,
        []
    );


/* =========================================================
   APPLICATION STATE
   ========================================================= */

const state = {
    selectedIngredients: [],
    recipeSearch: "",
    category: "all",
    time: "all",
    difficulty: "all",
    favoritesOnly: false,
    currentRecipeId: null
};


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const ingredientInput =
    document.getElementById("ingredientInput");

const addIngredientBtn =
    document.getElementById("addIngredientBtn");

const ingredientSuggestions =
    document.getElementById("ingredientSuggestions");

const selectedIngredients =
    document.getElementById("selectedIngredients");

const clearIngredientsBtn =
    document.getElementById("clearIngredientsBtn");

const searchRecipeBtn =
    document.getElementById("searchRecipeBtn");

const recentSearchesContainer =
    document.getElementById("recentSearches");

const clearRecentBtn =
    document.getElementById("clearRecentBtn");

const recipeSearchInput =
    document.getElementById("recipeSearchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const timeFilter =
    document.getElementById("timeFilter");

const difficultyFilter =
    document.getElementById("difficultyFilter");

const favoriteFilter =
    document.getElementById("favoriteFilter");

const recipeGrid =
    document.getElementById("recipeGrid");

const resultsTitle =
    document.getElementById("resultsTitle");

const resultsCount =
    document.getElementById("resultsCount");

const noResults =
    document.getElementById("noResults");

const resetFiltersBtn =
    document.getElementById("resetFiltersBtn");

const randomRecipeBtn =
    document.getElementById("randomRecipeBtn");

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

const modalRecipeCategory =
    document.getElementById("modalRecipeCategory");

const modalRecipeDescription =
    document.getElementById("modalRecipeDescription");

const modalRecipeTime =
    document.getElementById("modalRecipeTime");

const modalRecipeDifficulty =
    document.getElementById("modalRecipeDifficulty");

const modalIngredientCount =
    document.getElementById("modalIngredientCount");

const modalFavoriteBtn =
    document.getElementById("modalFavoriteBtn");

const modalMatchPercentage =
    document.getElementById("modalMatchPercentage");

const modalMatchProgress =
    document.getElementById("modalMatchProgress");

const modalMatchText =
    document.getElementById("modalMatchText");

const modalIngredients =
    document.getElementById("modalIngredients");

const modalInstructions =
    document.getElementById("modalInstructions");


/* =========================================================
   NORMALIZE TEXT
   ========================================================= */

function normalizeText(value) {
    return String(value || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}


/* =========================================================
   INGREDIENT MATCHING
   ========================================================= */

function ingredientMatches(selected, required) {

    const selectedText =
        normalizeText(selected);

    const requiredText =
        normalizeText(required);

    if (
        selectedText === requiredText ||
        requiredText.includes(selectedText) ||
        selectedText.includes(requiredText)
    ) {
        return true;
    }

    const aliases = {
        "ข้าว": ["ข้าวสวย"],
        "หมูสับ": ["หมู"],
        "หมู": ["หมูสับ"],
        "ไข่ไก่": ["ไข่"],
        "กุ้งสด": ["กุ้ง"]
    };

    if (aliases[selectedText]) {
        return aliases[selectedText].some(
            alias =>
                normalizeText(alias) === requiredText
        );
    }

    if (aliases[requiredText]) {
        return aliases[requiredText].some(
            alias =>
                normalizeText(alias) === selectedText
        );
    }

    return false;
}


function getMatchedIngredients(recipe) {

    return recipe.ingredients.filter(
        required =>
            state.selectedIngredients.some(
                selected =>
                    ingredientMatches(
                        selected,
                        required
                    )
            )
    );
}


function getMatchData(recipe) {

    const matchedIngredients =
        getMatchedIngredients(recipe);

    const total =
        recipe.ingredients.length;

    const matched =
        matchedIngredients.length;

    const percentage =
        total === 0
            ? 0
            : Math.round(
                (matched / total) * 100
            );

    return {
        matchedIngredients,
        matched,
        total,
        percentage
    };
}


/* =========================================================
   ADD INGREDIENT
   ========================================================= */

function addIngredient(value) {

    const cleaned =
        String(value || "").trim();

    if (!cleaned) {
        return;
    }

    const exists =
        state.selectedIngredients.some(
            ingredient =>
                normalizeText(ingredient) ===
                normalizeText(cleaned)
        );

    if (exists) {

        ingredientInput.value = "";

        renderIngredientSuggestions("");

        return;
    }

    state.selectedIngredients.push(
        cleaned
    );

    ingredientInput.value = "";

    renderSelectedIngredients();

    renderIngredientSuggestions("");

    renderRecipes();
}


function removeIngredient(index) {

    state.selectedIngredients.splice(
        index,
        1
    );

    renderSelectedIngredients();

    renderRecipes();
}


function clearIngredients() {

    state.selectedIngredients = [];

    ingredientInput.value = "";

    renderSelectedIngredients();

    renderIngredientSuggestions("");

    renderRecipes();
}


/* =========================================================
   SELECTED INGREDIENT TAGS
   ========================================================= */

function renderSelectedIngredients() {

    if (
        state.selectedIngredients.length === 0
    ) {

        selectedIngredients.innerHTML = `
            <span class="empty-tag-message">
                ยังไม่ได้เลือกวัตถุดิบ
            </span>
        `;

        return;
    }

    selectedIngredients.innerHTML =
        state.selectedIngredients
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

function renderIngredientSuggestions(
    query = ""
) {

    const normalizedQuery =
        normalizeText(query);

    const suggestions =
        commonIngredients
            .filter(ingredient => {

                const alreadySelected =
                    state.selectedIngredients.some(
                        selected =>
                            normalizeText(selected) ===
                            normalizeText(ingredient)
                    );

                if (alreadySelected) {
                    return false;
                }

                if (!normalizedQuery) {
                    return true;
                }

                return normalizeText(ingredient)
                    .includes(normalizedQuery);
            })
            .slice(0, 8);

    if (suggestions.length === 0) {

        ingredientSuggestions.innerHTML = "";

        return;
    }

    ingredientSuggestions.innerHTML =
        suggestions
            .map(
                ingredient => `
                    <button
                        type="button"
                        class="suggestion-btn"
                        data-suggestion="${escapeHTML(ingredient)}"
                    >
                        + ${escapeHTML(ingredient)}
                    </button>
                `
            )
            .join("");
}


/* =========================================================
   FILTER RECIPES
   ========================================================= */

function getFilteredRecipes() {

    const query =
        normalizeText(
            state.recipeSearch
        );

    return recipes

        .map(recipe => {

            const matchData =
                getMatchData(recipe);

            return {
                ...recipe,
                matchData
            };
        })

        .filter(recipe => {

            if (
                query &&
                !normalizeText(recipe.name)
                    .includes(query)
            ) {
                return false;
            }

            if (
                state.category !== "all" &&
                recipe.category !== state.category
            ) {
                return false;
            }

            if (
                state.time !== "all" &&
                recipe.time > Number(state.time)
            ) {
                return false;
            }

            if (
                state.difficulty !== "all" &&
                recipe.difficulty !== state.difficulty
            ) {
                return false;
            }

            if (
                state.favoritesOnly &&
                !favoriteIds.includes(recipe.id)
            ) {
                return false;
            }

            return true;
        })

        .sort((a, b) => {

            const percentageDifference =
                b.matchData.percentage -
                a.matchData.percentage;

            if (percentageDifference !== 0) {
                return percentageDifference;
            }

            const matchedDifference =
                b.matchData.matched -
                a.matchData.matched;

            if (matchedDifference !== 0) {
                return matchedDifference;
            }

            return a.time - b.time;
        });
}


/* =========================================================
   RENDER RECIPES
   ========================================================= */

function renderRecipes() {

    const filteredRecipes =
        getFilteredRecipes();

    recipeGrid.innerHTML = "";

    if (
        state.selectedIngredients.length > 0
    ) {

        resultsTitle.textContent =
            "เมนูที่เหมาะกับวัตถุดิบของคุณ";

    } else {

        resultsTitle.textContent =
            "เมนูแนะนำ";
    }

    resultsCount.textContent =
        `พบ ${filteredRecipes.length} เมนู`;

    if (
        filteredRecipes.length === 0
    ) {

        noResults.classList.remove(
            "hidden"
        );

        return;
    }

    noResults.classList.add(
        "hidden"
    );

    recipeGrid.innerHTML =
        filteredRecipes
            .map(createRecipeCard)
            .join("");
}


/* =========================================================
   CREATE RECIPE CARD
   ========================================================= */

function createRecipeCard(recipe) {

    const isFavorite =
        favoriteIds.includes(recipe.id);

    const {
        matched,
        total,
        percentage
    } = recipe.matchData;

    return `
        <article class="recipe-card">

            <div class="recipe-card-image">

                <img
                    src="${recipe.image}"
                    alt="${escapeHTML(recipe.name)}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.nextElementSibling.style.display='grid';
                    "
                >

                <div
                    class="recipe-image-placeholder"
                    style="display:none;"
                >
                    🍳
                </div>

                <button
                    type="button"
                    class="recipe-favorite"
                    data-favorite-id="${recipe.id}"
                    aria-label="${
                        isFavorite
                            ? "ลบจากเมนูโปรด"
                            : "เพิ่มในเมนูโปรด"
                    }"
                >
                    ${isFavorite ? "❤️" : "♡"}
                </button>

            </div>

            <div class="recipe-card-body">

                <span class="recipe-category">
                    ${escapeHTML(recipe.categoryName)}
                </span>

                <h3 class="recipe-card-title">
                    ${escapeHTML(recipe.name)}
                </h3>

                <p class="recipe-card-description">
                    ${escapeHTML(recipe.description)}
                </p>

                <div class="recipe-card-meta">

                    <span>
                        ⏱️ ${recipe.time} นาที
                    </span>

                    <span>
                        📊 ${escapeHTML(recipe.difficultyName)}
                    </span>

                    <span>
                        🥕 ${total} วัตถุดิบ
                    </span>

                </div>

                <div class="match-info">

                    <div class="match-info-header">

                        <span>
                            มีวัตถุดิบ ${matched}/${total}
                        </span>

                        <strong class="match-percentage">
                            ${percentage}%
                        </strong>

                    </div>

                    <div class="progress-bar">

                        <div
                            class="progress-fill"
                            style="width:${percentage}%"
                        ></div>

                    </div>

                </div>

                <button
                    type="button"
                    class="view-recipe-btn"
                    data-recipe-id="${recipe.id}"
                >
                    ดูรายละเอียด →
                </button>

            </div>

        </article>
    `;
}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(recipeId) {

    const id =
        Number(recipeId);

    if (
        favoriteIds.includes(id)
    ) {

        favoriteIds =
            favoriteIds.filter(
                favoriteId =>
                    favoriteId !== id
            );

    } else {

        favoriteIds.push(id);
    }

    setStorage(
        STORAGE_KEYS.favorites,
        favoriteIds
    );

    renderRecipes();

    if (
        state.currentRecipeId === id
    ) {

        updateModalFavoriteButton();
    }
}


function updateModalFavoriteButton() {

    const isFavorite =
        favoriteIds.includes(
            state.currentRecipeId
        );

    modalFavoriteBtn.textContent =
        isFavorite ? "❤️" : "♡";

    modalFavoriteBtn.setAttribute(
        "aria-label",
        isFavorite
            ? "ลบจากเมนูโปรด"
            : "เพิ่มในเมนูโปรด"
    );
}


/* =========================================================
   RECENT SEARCHES
   ========================================================= */

function saveRecentSearch() {

    if (
        state.selectedIngredients.length === 0
    ) {
        return;
    }

    const search =
        [...state.selectedIngredients];

    const searchKey =
        search
            .map(normalizeText)
            .sort()
            .join("|");

    recentSearches =
        recentSearches.filter(item => {

            const itemKey =
                item
                    .map(normalizeText)
                    .sort()
                    .join("|");

            return itemKey !== searchKey;
        });

    recentSearches.unshift(search);

    recentSearches =
        recentSearches.slice(0, 8);

    setStorage(
        STORAGE_KEYS.recentSearches,
        recentSearches
    );

    renderRecentSearches();
}


function renderRecentSearches() {

    if (
        recentSearches.length === 0
    ) {

        recentSearchesContainer.innerHTML = `
            <span class="empty-message">
                ยังไม่มีประวัติการค้นหา
            </span>
        `;

        return;
    }

    recentSearchesContainer.innerHTML =
        recentSearches
            .map(
                (search, index) => `
                    <button
                        type="button"
                        class="recent-item"
                        data-recent-index="${index}"
                    >
                        🔎 ${escapeHTML(
                            search.join(", ")
                        )}
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

    state.selectedIngredients =
        [...search];

    ingredientInput.value = "";

    renderSelectedIngredients();

    renderIngredientSuggestions("");

    renderRecipes();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function clearRecentSearches() {

    recentSearches = [];

    setStorage(
        STORAGE_KEYS.recentSearches,
        recentSearches
    );

    renderRecentSearches();
}


/* =========================================================
   RECIPE MODAL
   ========================================================= */

function openRecipeModal(recipeId) {

    const recipe =
        recipes.find(
            item =>
                item.id === Number(recipeId)
        );

    if (!recipe) {
        return;
    }

    state.currentRecipeId =
        recipe.id;

    const matchData =
        getMatchData(recipe);

    modalRecipeTitle.textContent =
        recipe.name;

    modalRecipeCategory.textContent =
        recipe.categoryName;

    modalRecipeDescription.textContent =
        recipe.description;

    modalRecipeTime.textContent =
        `${recipe.time} นาที`;

    modalRecipeDifficulty.textContent =
        recipe.difficultyName;

    modalIngredientCount.textContent =
        `${recipe.ingredients.length} รายการ`;

    modalMatchPercentage.textContent =
        `${matchData.percentage}%`;

    modalMatchProgress.style.width =
        `${matchData.percentage}%`;

    modalMatchText.textContent =
        `มีวัตถุดิบ ${matchData.matched} จาก ${matchData.total} รายการ`;

    modalRecipeImage.innerHTML = `
        <img
            src="${recipe.image}"
            alt="${escapeHTML(recipe.name)}"
            onerror="
                this.style.display='none';
            "
        >
    `;

    modalIngredients.innerHTML =
        recipe.ingredients
            .map(ingredient => {

                const hasIngredient =
                    matchData.matchedIngredients
                        .some(
                            matched =>
                                ingredientMatches(
                                    matched,
                                    ingredient
                                )
                        );

                return `
                    <li
                        class="${
                            hasIngredient
                                ? "ingredient-have"
                                : ""
                        }"
                    >
                        ${
                            hasIngredient
                                ? "✓ "
                                : ""
                        }

                        ${escapeHTML(ingredient)}
                    </li>
                `;
            })
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

    updateModalFavoriteButton();

    recipeModal.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";
}


function closeRecipeModal() {

    recipeModal.classList.add(
        "hidden"
    );

    document.body.style.overflow =
        "";

    state.currentRecipeId =
        null;
}


/* =========================================================
   RANDOM RECIPE
   ========================================================= */

function randomRecipe() {

    const availableRecipes =
        getFilteredRecipes();

    if (
        availableRecipes.length === 0
    ) {

        alert(
            "ไม่พบเมนูสำหรับสุ่ม กรุณาล้างตัวกรองแล้วลองอีกครั้ง"
        );

        return;
    }

    const randomIndex =
        Math.floor(
            Math.random() *
            availableRecipes.length
        );

    const selectedRecipe =
        availableRecipes[randomIndex];

    openRecipeModal(
        selectedRecipe.id
    );
}


/* =========================================================
   RESET FILTERS
   ========================================================= */

function resetFilters() {

    state.recipeSearch = "";
    state.category = "all";
    state.time = "all";
    state.difficulty = "all";
    state.favoritesOnly = false;

    recipeSearchInput.value = "";
    categoryFilter.value = "all";
    timeFilter.value = "all";
    difficultyFilter.value = "all";
    favoriteFilter.checked = false;

    renderRecipes();
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
    "keydown",
    event => {

        if (event.key === "Enter") {

            event.preventDefault();

            addIngredient(
                ingredientInput.value
            );
        }
    }
);


ingredientInput.addEventListener(
    "input",
    event => {

        renderIngredientSuggestions(
            event.target.value
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


selectedIngredients.addEventListener(
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


clearIngredientsBtn.addEventListener(
    "click",
    clearIngredients
);


searchRecipeBtn.addEventListener(
    "click",
    () => {

        saveRecentSearch();

        renderRecipes();

        document
            .querySelector(".recipes-section")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    }
);


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


clearRecentBtn.addEventListener(
    "click",
    clearRecentSearches
);


recipeSearchInput.addEventListener(
    "input",
    event => {

        state.recipeSearch =
            event.target.value;

        renderRecipes();
    }
);


categoryFilter.addEventListener(
    "change",
    event => {

        state.category =
            event.target.value;

        renderRecipes();
    }
);


timeFilter.addEventListener(
    "change",
    event => {

        state.time =
            event.target.value;

        renderRecipes();
    }
);


difficultyFilter.addEventListener(
    "change",
    event => {

        state.difficulty =
            event.target.value;

        renderRecipes();
    }
);


favoriteFilter.addEventListener(
    "change",
    event => {

        state.favoritesOnly =
            event.target.checked;

        renderRecipes();
    }
);


recipeGrid.addEventListener(
    "click",
    event => {

        const favoriteButton =
            event.target.closest(
                "[data-favorite-id]"
            );

        if (favoriteButton) {

            toggleFavorite(
                favoriteButton.dataset.favoriteId
            );

            return;
        }

        const recipeButton =
            event.target.closest(
                "[data-recipe-id]"
            );

        if (recipeButton) {

            openRecipeModal(
                recipeButton.dataset.recipeId
            );
        }
    }
);


resetFiltersBtn.addEventListener(
    "click",
    resetFilters
);


randomRecipeBtn.addEventListener(
    "click",
    randomRecipe
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

        if (
            state.currentRecipeId !== null
        ) {

            toggleFavorite(
                state.currentRecipeId
            );
        }
    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !recipeModal.classList.contains(
                "hidden"
            )
        ) {

            closeRecipeModal();
        }
    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeApp() {

    renderSelectedIngredients();

    renderIngredientSuggestions("");

    renderRecentSearches();

    renderRecipes();
}


initializeApp();
