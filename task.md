## Mashq: Talabalar boshqaruv tizimi

O'quvchilar uchun talabalar boshqaruv tizimini yaratish orqali CRUD amallarini controller va service larga bo'lib ishlashni o'rganamiz.

### Loyiha tuzilishi

### Endpointlar

1. **Talabalar ro'yxatini olish**

   - Method: GET
   - Endpoint: `/api/students`

2. **Bitta talabani ID bo'yicha olish**

   - Method: GET
   - Endpoint: `/api/students/:id`

3. **Yangi talaba qo'shish**

   - Method: POST
   - Endpoint: `/api/students`
   - Kerakli ma'lumotlar: ismi, familiyasi, kursi, yo'nalishi

4. **Talaba ma'lumotlarini yangilash**

   - Method: PUT
   - Endpoint: `/api/students/:id`
   - Yangilanishi mumkin bo'lgan ma'lumotlar: ismi, familiyasi, kursi, yo'nalishi

5. **Talabani o'chirish**
   - Method: DELETE
   - Endpoint: `/api/students/:id`

### Mashqni bajarish bosqichlari

1. **Model tuzilishini aniqlash**
   Talabalar uchun quyidagi ma'lumotlar bo'lsin:

   - id (number)
   - firstName (string)
   - lastName (string)
   - course (number) - 1-4 kurs
   - faculty (string) - yo'nalish

2. **Studentlar serviceni yaratish**
   `studentService.js` faylida quyidagi metodlarni yozing:

   - getAllStudents() - barcha talabalarni qaytarish
   - getStudentById(id) - id bo'yicha talabani topish
   - createStudent(data) - yangi talaba yaratish
   - updateStudent(id, data) - talaba ma'lumotlarini yangilash
   - deleteStudent(id) - talabani o'chirish

3. **Studentlar controllerini yaratish**
   `studentController.js` faylida quyidagi metodlarni yozing:

   - getStudents(req, res) - talabalar ro'yxati
   - getStudent(req, res) - bitta talaba
   - createStudent(req, res) - talaba yaratish
   - updateStudent(req, res) - talaba yangilash
   - deleteStudent(req, res) - talaba o'chirish

4. **Routelarni yaratish**
   `studentRoutes.js` faylida barcha endpointlarni va controllerlarni bog'lang.

### Mashqning kengaytirilgan versiyasi

Asosiy vazifalarni bajarganingizdan so'ng, quyidagi qo'shimcha vazifalarni ham bajarishingiz mumkin:

1. **Talabalarni filterlash**

   - Kurs bo'yicha: `/api/students?course=2`
   - Yo'nalish bo'yicha: `/api/students?faculty=IT`

2. **Talabalarni saralash**

   - Ism bo'yicha: `/api/students?sort=firstName`
   - Familiya bo'yicha: `/api/students?sort=lastName`

3. **Validatsiya**
   Talaba qo'shish va yangilashda ma'lumotlarni tekshiring:
   - Ism va familiya bo'sh bo'lmasligi kerak
   - Kurs 1 dan 4 gacha bo'lishi kerak
