/* =========================================================
   What Can I Cook? - script.js
   ========================================================= */


/* =========================================================
   1. RECIPE DATABASE
   ========================================================= */

const recipes = [

    {
        id: 1,
        name: "ข้าวผัดไข่",
        description: "ข้าวผัดง่าย ๆ หอมกลิ่นกระทะ ทำได้รวดเร็ว เหมาะสำหรับมื้อเร่งด่วน",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ข้าวสวย", "ไข่", "กระเทียม", "น้ำมัน", "ซีอิ๊วขาว", "ต้นหอม"],
        instructions: [
            "ตั้งกระทะใส่น้ำมันให้ร้อน",
            "ใส่กระเทียมลงผัดจนหอม",
            "ตอกไข่ลงไปแล้วยีให้พอสุก",
            "ใส่ข้าวสวยลงผัดให้เข้ากัน",
            "ปรุงรสด้วยซีอิ๊วขาว",
            "ใส่ต้นหอม ผัดให้เข้ากันแล้วตักเสิร์ฟ"
        ],
        category: "ข้าว",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 2,
        name: "ข้าวผัดหมู",
        description: "ข้าวผัดหมูรสกลมกล่อม ใส่หมูนุ่ม ๆ และผักเพิ่มความอร่อย",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ข้าวสวย", "หมู", "ไข่", "กระเทียม", "น้ำมัน", "ซีอิ๊วขาว", "ต้นหอม"],
        instructions: [
            "หั่นหมูเป็นชิ้นพอดีคำ",
            "ตั้งกระทะใส่น้ำมันและผัดกระเทียม",
            "ใส่หมูลงผัดจนสุก",
            "ใส่ไข่แล้วผัดให้เข้ากัน",
            "ใส่ข้าวสวยและปรุงรส",
            "ใส่ต้นหอมแล้วผัดอีกครั้งก่อนเสิร์ฟ"
        ],
        category: "ข้าว",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 3,
        name: "ผัดกะเพราหมู",
        description: "เมนูยอดนิยมรสจัดจ้าน หอมใบกะเพราและพริกกระเทียม",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
        ingredients: ["หมู", "ใบกะเพรา", "พริก", "กระเทียม", "น้ำมัน", "น้ำปลา", "น้ำตาล"],
        instructions: [
            "โขลกพริกกับกระเทียมพอหยาบ",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดพริกกระเทียมจนหอม",
            "ใส่หมูลงผัดจนสุก",
            "ปรุงรสด้วยน้ำปลาและน้ำตาล",
            "ใส่ใบกะเพรา ผัดเร็ว ๆ แล้วปิดไฟ"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 4,
        name: "ไข่เจียวหมูสับ",
        description: "ไข่เจียวฟู ๆ ใส่หมูสับ ทำง่าย ใช้วัตถุดิบไม่เยอะ",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไข่", "หมู", "น้ำปลา", "น้ำมัน"],
        instructions: [
            "ตอกไข่ใส่ชาม",
            "ใส่หมูสับและน้ำปลา",
            "ตีไข่ให้เข้ากัน",
            "ตั้งกระทะใส่น้ำมันให้ร้อน",
            "เทไข่ลงทอดจนเหลืองกรอบ",
            "กลับด้านแล้วทอดจนสุก"
        ],
        category: "ทอด",
        difficulty: "ง่าย",
        time: 10
    },

    {
        id: 5,
        name: "ผัดคะน้าหมู",
        description: "คะน้ากรอบ ๆ ผัดกับหมูและกระเทียม รสชาติกลมกล่อม",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
        ingredients: ["คะน้า", "หมู", "กระเทียม", "น้ำมัน", "น้ำปลา", "น้ำตาล"],
        instructions: [
            "ล้างและหั่นคะน้า",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมจนหอม",
            "ใส่หมูลงผัดจนสุก",
            "ใส่คะน้าและปรุงรส",
            "ผัดด้วยไฟแรงจนคะน้าสุกกรอบ"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 6,
        name: "ต้มจืดเต้าหู้หมูสับ",
        description: "ซุปร้อน ๆ รสอ่อน ทานง่าย เหมาะกับทุกคนในครอบครัว",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        ingredients: ["เต้าหู้", "หมู", "ผักกาดขาว", "กระเทียม", "น้ำ", "ซีอิ๊วขาว"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ปั้นหมูสับเป็นก้อนเล็ก ๆ",
            "ใส่หมูลงต้มจนสุก",
            "ใส่เต้าหู้และผักกาดขาว",
            "ปรุงรสด้วยซีอิ๊วขาว",
            "ต้มต่อจนผักสุกแล้วตักเสิร์ฟ"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 25
    },

    {
        id: 7,
        name: "ต้มยำกุ้ง",
        description: "ต้มยำกุ้งรสเปรี้ยวเผ็ด หอมสมุนไพรไทย",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        ingredients: ["กุ้ง", "ตะไคร้", "ใบมะกรูด", "ข่า", "พริก", "น้ำปลา", "มะนาว", "เห็ด"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่ตะไคร้ ข่า และใบมะกรูด",
            "ใส่กุ้งและเห็ด",
            "ปรุงรสด้วยน้ำปลา",
            "ใส่พริกตามความชอบ",
            "ปิดไฟแล้วเติมน้ำมะนาว"
        ],
        category: "ต้ม",
        difficulty: "ปานกลาง",
        time: 30
    },

    {
        id: 8,
        name: "ผัดซีอิ๊วหมู",
        description: "เส้นใหญ่ผัดซีอิ๊วกับหมูและคะน้า หอมกลิ่นกระทะ",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80",
        ingredients: ["เส้นใหญ่", "หมู", "คะน้า", "ไข่", "ซีอิ๊วดำ", "ซีอิ๊วขาว", "น้ำมัน"],
        instructions: [
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดหมูจนเกือบสุก",
            "ใส่ไข่และยีให้พอสุก",
            "ใส่เส้นใหญ่",
            "ปรุงรสด้วยซีอิ๊วขาวและซีอิ๊วดำ",
            "ใส่คะน้าแล้วผัดจนสุก"
        ],
        category: "เส้น",
        difficulty: "ปานกลาง",
        time: 20
    },

    {
        id: 9,
        name: "ราดหน้าหมู",
        description: "เส้นนุ่มราดน้ำราดหน้าเข้มข้น พร้อมหมูและผัก",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80",
        ingredients: ["เส้นใหญ่", "หมู", "คะน้า", "แป้งมัน", "ซีอิ๊วขาว", "น้ำตาล"],
        instructions: [
            "ผัดเส้นใหญ่ให้หอมแล้วพักไว้",
            "ผัดหมูจนสุก",
            "เติมน้ำและใส่คะน้า",
            "ปรุงรสด้วยซีอิ๊วขาวและน้ำตาล",
            "ละลายแป้งมันกับน้ำ",
            "เทแป้งลงในน้ำราด คนจนข้นแล้วราดบนเส้น"
        ],
        category: "เส้น",
        difficulty: "ปานกลาง",
        time: 30
    },

    {
        id: 10,
        name: "แกงจืดสาหร่ายเต้าหู้",
        description: "ซุปใสรสอ่อน หอมสาหร่ายและเต้าหู้",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        ingredients: ["สาหร่าย", "เต้าหู้", "หมู", "ต้นหอม", "น้ำ", "ซีอิ๊วขาว"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่หมูสับลงไปต้ม",
            "ใส่เต้าหู้",
            "ใส่สาหร่าย",
            "ปรุงรสด้วยซีอิ๊วขาว",
            "โรยต้นหอมก่อนเสิร์ฟ"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 11,
        name: "ไข่ดาว",
        description: "ไข่ดาวทอดง่าย ๆ ไข่ขาวกรอบ ไข่แดงเยิ้ม",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไข่", "น้ำมัน"],
        instructions: [
            "ตั้งกระทะใส่น้ำมัน",
            "ตอกไข่ลงกระทะ",
            "ทอดจนไข่ขาวสุก",
            "ตักขึ้นพักให้สะเด็ดน้ำมัน"
        ],
        category: "ทอด",
        difficulty: "ง่าย",
        time: 5
    },

    {
        id: 12,
        name: "ไข่คน",
        description: "ไข่คนเนื้อนุ่ม ทำง่ายและใช้เวลาเพียงไม่กี่นาที",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไข่", "นม", "เนย", "เกลือ"],
        instructions: [
            "ตอกไข่ใส่ชาม",
            "เติมนมและเกลือแล้วตีให้เข้ากัน",
            "ตั้งกระทะใส่เนย",
            "เทไข่ลงไป",
            "คนช้า ๆ จนไข่เริ่มเซ็ตตัว",
            "ปิดไฟก่อนที่ไข่จะแห้งเกินไป"
        ],
        category: "ทอด",
        difficulty: "ง่าย",
        time: 8
    },

    {
        id: 13,
        name: "หมูกระเทียม",
        description: "หมูทอดกระเทียมหอม ๆ รสเค็มหวาน ทานคู่กับข้าวสวย",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        ingredients: ["หมู", "กระเทียม", "น้ำปลา", "น้ำตาล", "น้ำมัน"],
        instructions: [
            "หมักหมูกับน้ำปลาและน้ำตาล",
            "ตั้งกระทะใส่น้ำมัน",
            "ทอดกระเทียมจนเหลืองแล้วพักไว้",
            "นำหมูลงทอดจนสุก",
            "ใส่กระเทียมทอดกลับลงไป",
            "คลุกให้เข้ากันแล้วเสิร์ฟ"
        ],
        category: "ทอด",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 14,
        name: "ไก่ผัดเม็ดมะม่วง",
        description: "ไก่ผัดซอสเข้มข้น พร้อมเม็ดมะม่วงหิมพานต์และผัก",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไก่", "เม็ดมะม่วง", "พริกแห้ง", "หอมหัวใหญ่", "ซีอิ๊วขาว", "น้ำตาล", "น้ำมัน"],
        instructions: [
            "หั่นไก่เป็นชิ้นพอดีคำ",
            "ทอดเม็ดมะม่วงและพริกแห้งแล้วพักไว้",
            "ผัดไก่จนสุก",
            "ใส่หอมหัวใหญ่",
            "ปรุงรสด้วยซีอิ๊วขาวและน้ำตาล",
            "ใส่เม็ดมะม่วงและพริกแห้งแล้วผัดให้เข้ากัน"
        ],
        category: "ผัด",
        difficulty: "ปานกลาง",
        time: 30
    },

    {
        id: 15,
        name: "แกงเขียวหวานไก่",
        description: "แกงเขียวหวานหอมกะทิและเครื่องแกง รสชาติเข้มข้น",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ไก่", "กะทิ", "พริกแกงเขียวหวาน", "มะเขือ", "ใบโหระพา", "น้ำปลา", "น้ำตาล"],
        instructions: [
            "ตั้งหม้อใส่กะทิเล็กน้อย",
            "ใส่พริกแกงเขียวหวานแล้วผัดจนหอม",
            "ใส่ไก่ลงผัด",
            "เติมกะทิที่เหลือ",
            "ใส่มะเขือและปรุงรส",
            "ใส่ใบโหระพาแล้วปิดไฟ"
        ],
        category: "แกง",
        difficulty: "ปานกลาง",
        time: 40
    },

    {
        id: 16,
        name: "สุกี้น้ำ",
        description: "สุกี้น้ำร้อน ๆ ใส่ผักและเนื้อสัตว์ตามชอบ",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
        ingredients: ["หมู", "ผักกาดขาว", "วุ้นเส้น", "ไข่", "เต้าหู้", "น้ำจิ้มสุกี้"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่หมูลงต้มจนสุก",
            "ใส่ผักกาดขาวและเต้าหู้",
            "ใส่วุ้นเส้น",
            "ตอกไข่ลงไป",
            "ตักใส่ชามและเติมน้ำจิ้มสุกี้"
        ],
        category: "ต้ม",
        difficulty: "ง่าย",
        time: 25
    },

    {
        id: 17,
        name: "ยำวุ้นเส้น",
        description: "ยำวุ้นเส้นรสเปรี้ยวเผ็ด หอมมะนาวและสมุนไพร",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        ingredients: ["วุ้นเส้น", "หมู", "กุ้ง", "หอมหัวใหญ่", "มะนาว", "น้ำปลา", "พริก"],
        instructions: [
            "แช่วุ้นเส้นให้นิ่ม",
            "ลวกวุ้นเส้น หมู และกุ้งให้สุก",
            "หั่นหอมหัวใหญ่",
            "ทำน้ำยำจากมะนาว น้ำปลา และพริก",
            "ใส่ส่วนผสมทั้งหมดลงในชาม",
            "คลุกให้เข้ากันแล้วเสิร์ฟ"
        ],
        category: "อาหารจานเดียว",
        difficulty: "ง่าย",
        time: 20
    },

    {
        id: 18,
        name: "ผัดผักรวม",
        description: "ผัดผักหลากชนิด กรอบ อร่อย และทำได้ง่าย",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
        ingredients: ["แครอท", "คะน้า", "เห็ด", "ข้าวโพดอ่อน", "กระเทียม", "น้ำมัน", "ซีอิ๊วขาว"],
        instructions: [
            "ล้างและหั่นผักทั้งหมด",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมจนหอม",
            "ใส่ผักที่สุกยากก่อน",
            "เติมผักที่เหลือ",
            "ปรุงรสด้วยซีอิ๊วขาวแล้วผัดจนสุก"
        ],
        category: "ผัด",
        difficulty: "ง่าย",
        time: 15
    },

    {
        id: 19,
        name: "มาม่าผัดไข่",
        description: "เมนูเส้นกึ่งสำเร็จรูปแบบง่าย ๆ เพิ่มไข่ให้อิ่มอร่อย",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
        ingredients: ["บะหมี่กึ่งสำเร็จรูป", "ไข่", "กระเทียม", "น้ำมัน", "ซีอิ๊วขาว"],
        instructions: [
            "ลวกบะหมี่ให้พอนิ่มแล้วพักไว้",
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดกระเทียมจนหอม",
            "ใส่ไข่และยีให้พอสุก",
            "ใส่เส้นลงผัด",
            "ปรุงรสด้วยซีอิ๊วขาวแล้วตักเสิร์ฟ"
        ],
        category: "เส้น",
        difficulty: "ง่าย",
        time: 10
    },

    {
        id: 20,
        name: "ก๋วยเตี๋ยวหมูน้ำใส",
        description: "ก๋วยเตี๋ยวน้ำซุปร้อน ๆ พร้อมหมูและลูกชิ้น",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
        ingredients: ["เส้นก๋วยเตี๋ยว", "หมู", "ลูกชิ้น", "ถั่วงอก", "ต้นหอม", "น้ำซุป"],
        instructions: [
            "ต้มน้ำซุปให้เดือด",
            "ลวกเส้นก๋วยเตี๋ยว",
            "ลวกหมูและลูกชิ้นจนสุก",
            "ใส่เส้นลงในชาม",
            "เติมหมู ลูกชิ้น และถั่วงอก",
            "เทน้ำซุปร้อน ๆ แล้วโรยต้นหอม"
        ],
        category: "เส้น",
        difficulty: "ปานกลาง",
        time: 30
    },

    {
        id: 21,
        name: "ข้าวต้มหมู",
        description: "ข้าวต้มหมูร้อน ๆ เนื้อนุ่ม ทานง่าย เหมาะกับมื้อเช้า",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        ingredients: ["ข้าว", "หมู", "กระเทียม", "ต้นหอม", "ขิง", "ซีอิ๊วขาว", "น้ำ"],
        instructions: [
            "ต้มน้ำให้เดือด",
            "ใส่ข้าวลงต้มจนเมล็ดข้าวนิ่ม",
            "ใส่หมูสับ",
            "ปรุงรสด้วยซีอิ๊วขาว",
            "ต้มจนหมูสุก",
            "โรยต้นหอมและขิงก่อนเสิร์ฟ"
        ],
        category: "ข้าว",
        difficulty: "ง่าย",
        time: 25
    },

    {
        id: 22,
        name: "ผัดพริกแกงหมู",
        description: "หมูผัดพริกแกงรสเข้มข้น หอมเครื่องแกงและใบมะกรูด",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
        ingredients: ["หมู", "พริกแกง", "ถั่วฝักยาว", "ใบมะกรูด", "น้ำปลา", "น้ำตาล", "น้ำมัน"],
        instructions: [
            "ตั้งกระทะใส่น้ำมัน",
            "ผัดพริกแกงจนหอม",
            "ใส่หมูลงผัด",
            "ใส่ถั่วฝักยาว",
            "ปรุงรสด้วยน้ำปลาและน้ำตาล",
            "ใส่ใบมะกรูดแล้วผัดให้เข้ากัน"
        ],
        category: "ผัด",
        difficulty: "ปานกลาง",
        time: 20
    }

];


/* =========================================================
   2. INGREDIENT ALIASES
   ========================================================= */

const ingredientAliases = {
    "ข้าว": "ข้าวสวย",
    "ข้าวสวย": "ข้าวสวย",
    "หมูสับ": "หมู",
    "เนื้อหมู": "หมู",
    "หมู": "หมู",
    "ไข่ไก่": "ไข่",
    "ไข่": "ไข่",
    "กุ้งสด": "กุ้ง",
    "กุ้ง": "กุ้ง",
    "ไก่": "ไก่",
    "เนื้อไก่": "ไก่",
    "ผักกาด": "ผักกาดขาว",
    "ผักกาดขาว": "ผักกาดขาว",
    "คะน้า": "คะน้า",
    "เต้าหู้": "เต้าหู้",
    "เส้นใหญ่": "เส้นใหญ่",
    "วุ้นเส้น": "วุ้นเส้น",
    "มาม่า": "บะหมี่กึ่งสำเร็จรูป",
    "บะหมี่": "บะหมี่กึ่งสำเร็จรูป",
    "กระเทียม": "กระเทียม",
    "พริก": "พริก",
    "เห็ด": "เห็ด",
    "แครอท": "แครอท",
    "ข้าวโพดอ่อน": "ข้าวโพดอ่อน",
    "ถั่วฝักยาว": "ถั่วฝักยาว"
};


/* =========================================================
   3. SUGGESTED INGREDIENTS
   ========================================================= */

const suggestedIngredients = [
    "ไข่",
    "ข้าว",
    "หมู",
    "ไก่",
    "กุ้ง",
    "คะน้า",
    "เต้าหู้",
    "กระเทียม",
    "พริก",
    "เห็ด",
    "แครอท",
    "วุ้นเส้น"
];


/* =========================================================
   4. LOCAL STORAGE KEYS
   ========================================================= */

const STORAGE_KEYS = {
    favorites: "whatCanICook_favorites",
    recent: "whatCanICook_recent"
};


/* =========================================================
   5. STATE
   ========================================================= */

let selectedIngredients = [];
let favoriteRecipes = loadFavorites();
let recentSearches = loadRecentSearches();
let currentFilteredRecipes = [...recipes];
let toastTimer = null;


/* =========================================================
   6. DOM ELEMENTS
   ========================================================= */

const ingredientInput = document.getElementById("ingredientInput");
const addIngredientBtn = document.getElementById("addIngredientBtn");
const ingredientSuggestions = document.getElementById("ingredientSuggestions");
const selectedIngredientsContainer =
    document.getElementById("selectedIngredients");

const clearIngredientsBtn =
    document.getElementById("clearIngredientsBtn");

const searchRecipesBtn =
    document.getElementById("searchRecipesBtn");

const recipeSearchInput =
    document.getElementById("recipeSearchInput");

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

const resetSearchBtn =
    document.getElementById("resetSearchBtn");

const randomRecipeBtn =
    document.getElementById("randomRecipeBtn");

const favoritesGrid =
    document.getElementById("favoritesGrid");

const favoritesEmpty =
    document.getElementById("favoritesEmpty");

const recentSearchesContainer =
    document.getElementById("recentSearches");

const clearRecentBtn =
    document.getElementById("clearRecentBtn");

const recipeModal =
    document.getElementById("recipeModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const modalRecipeImage =
    document.getElementById("modalRecipeImage");

const modalCategory =
    document.getElementById("modalCategory");

const modalDifficulty =
    document.getElementById("modalDifficulty");

const modalTime =
    document.getElementById("modalTime");

const modalRecipeName =
    document.getElementById("modalRecipeName");

const modalRecipeDescription =
    document.getElementById("modalRecipeDescription");

const modalPercentage =
    document.getElementById("modalPercentage");

const modalProgressFill =
    document.getElementById("modalProgressFill");

const modalIngredientStatus =
    document.getElementById("modalIngredientStatus");

const modalIngredients =
    document.getElementById("modalIngredients");

const modalInstructions =
    document.getElementById("modalInstructions");

const toast =
    document.getElementById("toast");

const toastIcon =
    document.getElementById("toastIcon");

const toastMessage =
    document.getElementById("toastMessage");


/* =========================================================
   7. INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderIngredientSuggestions();

    renderSelectedIngredients();

    renderRecipes(recipes);

    renderFavorites();

    renderRecentSearches();

    setupEventListeners();

});


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

    searchRecipesBtn.addEventListener(
        "click",
        searchRecipes
    );

    recipeSearchInput.addEventListener(
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

    resetSearchBtn.addEventListener(
        "click",
        resetSearch
    );

    randomRecipeBtn.addEventListener(
        "click",
        randomRecipe
    );

    clearRecentBtn.addEventListener(
        "click",
        clearRecentSearches
    );

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
        (event) => {

            if (
                event.key === "Escape" &&
                !recipeModal.classList.contains("hidden")
            ) {
                closeRecipeModal();
            }

        }
    );

    setupNavigation();

}


/* =========================================================
   9. NAVIGATION
   ========================================================= */

function setupNavigation() {

    const navButtons =
        document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {

        button.addEventListener("click", () => {

            const sectionId =
                button.dataset.section;

            navButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const section =
                document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

}


/* =========================================================
   10. INGREDIENT SUGGESTIONS
   ========================================================= */

function renderIngredientSuggestions(
    searchTerm = ""
) {

    const normalizedSearch =
        normalizeText(searchTerm);

    let suggestions =
        suggestedIngredients.filter(
            ingredient => {

                const normalized =
                    normalizeText(ingredient);

                const notSelected =
                    !selectedIngredients.includes(
                        normalizeIngredient(ingredient)
                    );

                return (
                    notSelected &&
                    (
                        !normalizedSearch ||
                        normalized.includes(normalizedSearch)
                    )
                );

            }
        );

    suggestions =
        suggestions.slice(0, 8);

    ingredientSuggestions.innerHTML =
        suggestions
            .map(ingredient => `
                <button
                    type="button"
                    class="suggestion-item"
                    data-ingredient="${escapeHTML(ingredient)}"
                >
                    + ${escapeHTML(ingredient)}
                </button>
            `)
            .join("");

    ingredientSuggestions
        .querySelectorAll(".suggestion-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    addIngredient(
                        button.dataset.ingredient
                    );

                }
            );

        });

}


/* =========================================================
   11. HANDLE INGREDIENT INPUT
   ========================================================= */

function handleIngredientInput() {

    renderIngredientSuggestions(
        ingredientInput.value
    );

}


/* =========================================================
   12. ADD INGREDIENT FROM INPUT
   ========================================================= */

function addIngredientFromInput() {

    const value =
        ingredientInput.value.trim();

    if (!value) {
        showToast(
            "⚠️",
            "กรุณาพิมพ์วัตถุดิบก่อน"
        );
        return;
    }

    const parts =
        value
            .split(",")
            .map(item => item.trim())
            .filter(Boolean);

    let addedCount = 0;

    parts.forEach(part => {

        if (addIngredient(part)) {
            addedCount++;
        }

    });

    ingredientInput.value = "";

    renderIngredientSuggestions();

    if (addedCount > 0) {

        showToast(
            "✓",
            `เพิ่มวัตถุดิบ ${addedCount} รายการแล้ว`
        );

    }

}


/* =========================================================
   13. ADD INGREDIENT
   ========================================================= */

function addIngredient(ingredient) {

    const normalized =
        normalizeIngredient(ingredient);

    if (!normalized) {
        return false;
    }

    if (selectedIngredients.includes(normalized)) {

        showToast(
            "ℹ️",
            "วัตถุดิบนี้ถูกเลือกไว้แล้ว"
        );

        return false;
    }

    selectedIngredients.push(normalized);

    renderSelectedIngredients();

    renderIngredientSuggestions(
        ingredientInput.value
    );

    return true;

}


/* =========================================================
   14. REMOVE INGREDIENT
   ========================================================= */

function removeIngredient(ingredient) {

    selectedIngredients =
        selectedIngredients.filter(
            item => item !== ingredient
        );

    renderSelectedIngredients();

    renderIngredientSuggestions();

}


/* =========================================================
   15. RENDER SELECTED INGREDIENTS
   ========================================================= */

function renderSelectedIngredients() {

    if (selectedIngredients.length === 0) {

        selectedIngredientsContainer.innerHTML = `
            <span class="empty-tags">
                ยังไม่ได้เลือกวัตถุดิบ
            </span>
        `;

        return;
    }

    selectedIngredientsContainer.innerHTML =
        selectedIngredients
            .map(ingredient => `
                <span class="ingredient-tag">
                    ${escapeHTML(ingredient)}

                    <button
                        type="button"
                        class="remove-ingredient"
                        data-ingredient="${escapeHTML(ingredient)}"
                        aria-label="ลบ ${escapeHTML(ingredient)}"
                    >
                        ×
                    </button>
                </span>
            `)
            .join("");

    selectedIngredientsContainer
        .querySelectorAll(".remove-ingredient")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeIngredient(
                        button.dataset.ingredient
                    );

                }
            );

        });

}


/* =========================================================
   16. CLEAR INGREDIENTS
   ========================================================= */

function clearIngredients() {

    selectedIngredients = [];

    renderSelectedIngredients();

    renderIngredientSuggestions();

    if (recipeSearchInput) {
        recipeSearchInput.value = "";
    }

    showToast(
        "✓",
        "ล้างวัตถุดิบทั้งหมดแล้ว"
    );

}


/* =========================================================
   17. SEARCH RECIPES
   ========================================================= */

function searchRecipes() {

    saveRecentSearch();

    applyFilters();

    document
        .querySelector(".recipe-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   18. APPLY FILTERS
   ========================================================= */

function applyFilters() {

    const searchTerm =
        normalizeText(
            recipeSearchInput.value
        );

    const category =
        categoryFilter.value;

    const time =
        timeFilter.value;

    const difficulty =
        difficultyFilter.value;

    let filtered =
        recipes.filter(recipe => {

            const matchesName =
                !searchTerm ||
                normalizeText(recipe.name)
                    .includes(searchTerm);

            const matchesCategory =
                category === "all" ||
                recipe.category === category;

            const matchesTime =
                time === "all" ||
                recipe.time <= Number(time);

            const matchesDifficulty =
                difficulty === "all" ||
                recipe.difficulty === difficulty;

            return (
                matchesName &&
                matchesCategory &&
                matchesTime &&
                matchesDifficulty
            );

        });


    /* -----------------------------------------
       Rank by ingredient availability
    ----------------------------------------- */

    filtered.sort(
        (a, b) => {

            const percentageA =
                calculateMatchPercentage(a);

            const percentageB =
                calculateMatchPercentage(b);

            return percentageB - percentageA;

        }
    );


    currentFilteredRecipes = filtered;

    renderRecipes(filtered);

}


/* =========================================================
   19. CALCULATE MATCH
   ========================================================= */

function calculateMatch(recipe) {

    if (
        !selectedIngredients.length ||
        !recipe.ingredients.length
    ) {
        return {
            matched: 0,
            total: recipe.ingredients.length,
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
                    normalizeIngredient(ingredient)
                )
        );

    const matched =
        matchedIngredients.length;

    const total =
        recipe.ingredients.length;

    const percentage =
        Math.round(
            (matched / total) * 100
        );

    return {
        matched,
        total,
        percentage
    };

}


/* =========================================================
   20. CALCULATE PERCENTAGE
   ========================================================= */

function calculateMatchPercentage(recipe) {

    return calculateMatch(recipe).percentage;

}


/* =========================================================
   21. RENDER RECIPES
   ========================================================= */

function renderRecipes(recipeList) {

    recipeCount.textContent =
        `(${recipeList.length})`;

    if (recipeList.length === 0) {

        recipeGrid.innerHTML = "";

        emptyState.classList.remove("hidden");

        resultMessage.textContent =
            "ลองเปลี่ยนวัตถุดิบหรือ Filter แล้วค้นหาอีกครั้ง";

        return;
    }

    emptyState.classList.add("hidden");

    if (selectedIngredients.length > 0) {

        resultMessage.textContent =
            "จัดอันดับจากจำนวนวัตถุดิบที่คุณมี";

    } else {

        resultMessage.textContent =
            "เลือกวัตถุดิบเพื่อดูเมนูที่เหมาะกับคุณ";

    }

    recipeGrid.innerHTML =
        recipeList
            .map(recipe => createRecipeCard(recipe))
            .join("");

    attachRecipeCardEvents();

}


/* =========================================================
   22. CREATE RECIPE CARD
   ========================================================= */

function createRecipeCard(recipe) {

    const match =
        calculateMatch(recipe);

    const isFavorite =
        favoriteRecipes.includes(recipe.id);

    return `
        <article
            class="recipe-card"
            data-recipe-id="${recipe.id}"
        >

            <div class="recipe-image-wrapper">

                <img
                    class="recipe-image"
                    src="${escapeHTML(recipe.image)}"
                    alt="${escapeHTML(recipe.name)}"
                    loading="lazy"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
                >

                <div
                    class="recipe-image-placeholder"
                    style="display:none;"
                >
                    🍳
                </div>

                <button
                    type="button"
                    class="favorite-btn ${isFavorite ? "active" : ""}"
                    data-favorite-id="${recipe.id}"
                    aria-label="เพิ่ม ${escapeHTML(recipe.name)} เป็นเมนูโปรด"
                >
                    ${isFavorite ? "❤️" : "♡"}
                </button>

                ${
                    selectedIngredients.length > 0
                    ? `
                        <span class="recipe-percentage">
                            ${match.percentage}% มี ${match.matched}/${match.total}
                        </span>
                    `
                    : ""
                }

            </div>


            <div class="recipe-content">

                <div class="recipe-meta">

                    <span>
                        ${escapeHTML(recipe.category)}
                    </span>

                    <span class="difficulty">
                        ${escapeHTML(recipe.difficulty)}
                    </span>

                </div>


                <h3 class="recipe-title">
                    ${escapeHTML(recipe.name)}
                </h3>


                <p class="recipe-description">
                    ${escapeHTML(recipe.description)}
                </p>


                ${
                    selectedIngredients.length > 0
                    ? `
                        <div class="recipe-match">

                            <div class="match-header">

                                <span>
                                    วัตถุดิบที่มี
                                </span>

                                <strong>
                                    ${match.percentage}%
                                </strong>

                            </div>

                            <div class="progress-bar">

                                <div
                                    class="progress-fill"
                                    style="width:${match.percentage}%"
                                ></div>

                            </div>

                        </div>
                    `
                    : ""
                }


                <div class="recipe-footer">

                    <span class="recipe-time">
                        ⏱️ ${recipe.time} นาที
                    </span>

                    <button
                        type="button"
                        class="view-recipe-btn"
                        data-view-id="${recipe.id}"
                    >
                        ดูวิธีทำ →
                    </button>

                </div>

            </div>

        </article>
    `;

}


/* =========================================================
   23. RECIPE CARD EVENTS
   ========================================================= */

function attachRecipeCardEvents() {

    document
        .querySelectorAll(".favorite-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavorite(
                        Number(
                            button.dataset.favoriteId
                        )
                    );

                }
            );

        });


    document
        .querySelectorAll(".view-recipe-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openRecipeModal(
                        Number(
                            button.dataset.viewId
                        )
                    );

                }
            );

        });

}


/* =========================================================
   24. FAVORITES
   ========================================================= */

function toggleFavorite(recipeId) {

    const index =
        favoriteRecipes.indexOf(recipeId);

    if (index === -1) {

        favoriteRecipes.push(recipeId);

        showToast(
            "❤️",
            "เพิ่มเมนูในรายการโปรดแล้ว"
        );

    } else {

        favoriteRecipes.splice(
            index,
            1
        );

        showToast(
            "✓",
            "นำเมนูออกจากรายการโปรดแล้ว"
        );

    }

    saveFavorites();

    renderFavorites();

    renderRecipes(currentFilteredRecipes);

}


/* =========================================================
   25. RENDER FAVORITES
   ========================================================= */

function renderFavorites() {

    const favorites =
        recipes.filter(
            recipe =>
                favoriteRecipes.includes(
                    recipe.id
                )
        );

    if (favorites.length === 0) {

        favoritesGrid.innerHTML = "";

        favoritesEmpty.classList.remove(
            "hidden"
        );

        return;
    }

    favoritesEmpty.classList.add(
        "hidden"
    );

    favoritesGrid.innerHTML =
        favorites
            .map(recipe => createRecipeCard(recipe))
            .join("");

    attachFavoriteSectionEvents();

}


/* =========================================================
   26. FAVORITE SECTION EVENTS
   ========================================================= */

function attachFavoriteSectionEvents() {

    favoritesGrid
        .querySelectorAll(".favorite-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavorite(
                        Number(
                            button.dataset.favoriteId
                        )
                    );

                }
            );

        });


    favoritesGrid
        .querySelectorAll(".view-recipe-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openRecipeModal(
                        Number(
                            button.dataset.viewId
                        )
                    );

                }
            );

        });

}


/* =========================================================
   27. SAVE / LOAD FAVORITES
   ========================================================= */

function saveFavorites() {

    localStorage.setItem(
        STORAGE_KEYS.favorites,
        JSON.stringify(favoriteRecipes)
    );

}


function loadFavorites() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEYS.favorites
            );

        if (!saved) {
            return [];
        }

        const parsed =
            JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.warn(
            "ไม่สามารถโหลด Favorite ได้",
            error
        );

        return [];

    }

}


/* =========================================================
   28. RECENT SEARCH
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
            item => {

                const key =
                    item
                        .map(normalizeText)
                        .sort()
                        .join("|");

                return key !== searchKey;

            }
        );


    recentSearches.unshift(search);

    recentSearches =
        recentSearches.slice(0, 8);

    localStorage.setItem(
        STORAGE_KEYS.recent,
        JSON.stringify(recentSearches)
    );

    renderRecentSearches();

}


/* =========================================================
   29. LOAD RECENT SEARCH
   ========================================================= */

function loadRecentSearches() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEYS.recent
            );

        if (!saved) {
            return [];
        }

        const parsed =
            JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.warn(
            "ไม่สามารถโหลด Recent Search ได้",
            error
        );

        return [];

    }

}


/* =========================================================
   30. RENDER RECENT SEARCHES
   ========================================================= */

function renderRecentSearches() {

    if (recentSearches.length === 0) {

        recentSearchesContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🕘</div>

                <h3>ยังไม่มีประวัติการค้นหา</h3>

                <p>
                    เมื่อคุณค้นหาเมนู
                    ประวัติจะปรากฏที่นี่
                </p>
            </div>
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
                        🕘
                        ${search
                            .map(escapeHTML)
                            .join(" + ")}
                    </button>
                `
            )
            .join("");


    recentSearchesContainer
        .querySelectorAll(".recent-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.recentIndex
                        );

                    useRecentSearch(index);

                }
            );

        });

}


/* =========================================================
   31. USE RECENT SEARCH
   ========================================================= */

function useRecentSearch(index) {

    const search =
        recentSearches[index];

    if (!search) {
        return;
    }

    selectedIngredients =
        [...search];

    renderSelectedIngredients();

    renderIngredientSuggestions();

    applyFilters();

    document
        .querySelector(".recipe-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   32. CLEAR RECENT
   ========================================================= */

function clearRecentSearches() {

    recentSearches = [];

    localStorage.removeItem(
        STORAGE_KEYS.recent
    );

    renderRecentSearches();

    showToast(
        "✓",
        "ล้างประวัติการค้นหาแล้ว"
    );

}


/* =========================================================
   33. RANDOM RECIPE
   ========================================================= */

function randomRecipe() {

    const availableRecipes =
        currentFilteredRecipes.length > 0
            ? currentFilteredRecipes
            : recipes;

    const randomIndex =
        Math.floor(
            Math.random() *
            availableRecipes.length
        );

    const selectedRecipe =
        availableRecipes[randomIndex];

    if (!selectedRecipe) {
        return;
    }

    openRecipeModal(
        selectedRecipe.id
    );

}


/* =========================================================
   34. OPEN RECIPE MODAL
   ========================================================= */

function openRecipeModal(recipeId) {

    const recipe =
        recipes.find(
            item => item.id === recipeId
        );

    if (!recipe) {
        return;
    }

    const match =
        calculateMatch(recipe);

    modalCategory.textContent =
        recipe.category;

    modalDifficulty.textContent =
        `ความยาก: ${recipe.difficulty}`;

    modalTime.textContent =
        `⏱️ ${recipe.time} นาที`;

    modalRecipeName.textContent =
        recipe.name;

    modalRecipeDescription.textContent =
        recipe.description;


    if (recipe.image) {

        modalRecipeImage.innerHTML = `
            <img
                src="${escapeHTML(recipe.image)}"
                alt="${escapeHTML(recipe.name)}"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
            >

            <div
                class="modal-image-placeholder"
                style="display:none;"
            >
                🍳
            </div>
        `;

    } else {

        modalRecipeImage.innerHTML = `
            <div class="modal-image-placeholder">
                🍳
            </div>
        `;

    }


    if (selectedIngredients.length > 0) {

        modalPercentage.textContent =
            `${match.percentage}%`;

        modalProgressFill.style.width =
            `${match.percentage}%`;

        modalIngredientStatus.textContent =
            `มีวัตถุดิบ ${match.matched} จาก ${match.total} รายการ`;

    } else {

        modalPercentage.textContent =
            "—";

        modalProgressFill.style.width =
            "0%";

        modalIngredientStatus.textContent =
            "เลือกวัตถุดิบเพื่อดูว่าคุณมีวัตถุดิบกี่เปอร์เซ็นต์";

    }


    modalIngredients.innerHTML =
        recipe.ingredients
            .map(
                ingredient => {

                    const hasIngredient =
                        selectedIngredients.includes(
                            normalizeIngredient(
                                ingredient
                            )
                        );

                    return `
                        <li
                            style="${
                                hasIngredient
                                    ? "background:#e8f3e8;"
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

                }
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


    recipeModal.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   35. CLOSE MODAL
   ========================================================= */

function closeRecipeModal() {

    recipeModal.classList.add(
        "hidden"
    );

    document.body.style.overflow =
        "";

}


/* =========================================================
   36. RESET SEARCH
   ========================================================= */

function resetSearch() {

    selectedIngredients = [];

    ingredientInput.value = "";

    recipeSearchInput.value = "";

    categoryFilter.value = "all";

    timeFilter.value = "all";

    difficultyFilter.value = "all";

    currentFilteredRecipes =
        [...recipes];

    renderSelectedIngredients();

    renderIngredientSuggestions();

    renderRecipes(recipes);

    showToast(
        "✓",
        "ล้างการค้นหาแล้ว"
    );

}


/* =========================================================
   37. NORMALIZE INGREDIENT
   ========================================================= */

function normalizeIngredient(value) {

    const cleaned =
        normalizeText(value);

    return (
        ingredientAliases[cleaned] ||
        cleaned
    );

}


/* =========================================================
   38. NORMALIZE TEXT
   ========================================================= */

function normalizeText(value) {

    return String(value || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

}


/* =========================================================
   39. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   40. TOAST
   ========================================================= */

function showToast(
    icon,
    message
) {

    clearTimeout(toastTimer);

    toastIcon.textContent =
        icon;

    toastMessage.textContent =
        message;

    toast.classList.add("show");

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   END OF SCRIPT
   ========================================================= */
