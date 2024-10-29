<template>
    <!-- ส่วนข่าว -->
    <div>

        <div class=" text-gray-800">
            <!-- Title and Introduction Section -->
            <header class="text-center py-12 bg-blue-600 text-white">
                <h1 class="text-4xl font-bold">ทุกสิ่งที่คุณควรรู้เกี่ยวกับบุหรี่ไฟฟ้า</h1>
                <p class="mt-4 max-w-xl mx-auto">
                    บุหรี่ไฟฟ้าคืออะไร และทำไมผู้คนถึงสนใจบุหรี่ไฟฟ้าในปัจจุบัน ค้นหาคำตอบได้ที่นี่!
                </p>
            </header>

            <!-- Main Content Section -->
            <main class="py-10 px-4 lg:px-20 space-y-12">
                <!-- 1. ประวัติและวิวัฒนาการของบุหรี่ไฟฟ้า -->
                <section id="history" class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold text-blue-600">ประวัติและวิวัฒนาการของบุหรี่ไฟฟ้า</h2>
                    <p class="mt-4">
                        บุหรี่ไฟฟ้ามีที่มาจากการคิดค้นอุปกรณ์เพื่อช่วยเลิกบุหรี่
                        การเปลี่ยนแปลงของเทคโนโลยีนี้ได้พัฒนาอย่างรวดเร็ว...
                    </p>
                </section>

                <!-- 2. การทำงานของบุหรี่ไฟฟ้า -->
                <section id="how-it-works" class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold text-blue-600">การทำงานของบุหรี่ไฟฟ้า</h2>
                    <p class="mt-4">
                        บุหรี่ไฟฟ้าประกอบด้วยแบตเตอรี่ คอยล์ น้ำยา และระบบการเผาไหม้
                        ที่ทำงานร่วมกันเพื่อสร้างไอน้ำที่สูดเข้าไป...
                    </p>
                </section>

                <!-- 3. ชนิดของบุหรี่ไฟฟ้า -->
                <section id="types" class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold text-blue-600">ชนิดของบุหรี่ไฟฟ้า</h2>
                    <p class="mt-4">
                        บุหรี่ไฟฟ้ามีหลายประเภท เช่น Pod System, Box Mod, Disposable Pod
                        แต่ละชนิดมีข้อดีและข้อเสียต่างกัน...
                    </p>
                </section>

                <!-- 4. ส่วนประกอบของน้ำยาบุหรี่ไฟฟ้า -->
                <section id="e-liquid" class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold text-blue-600">ส่วนประกอบของน้ำยาบุหรี่ไฟฟ้า</h2>
                    <p class="mt-4">
                        น้ำยาบุหรี่ไฟฟ้าประกอบด้วย นิโคติน, PG/VG, และสารปรุงรส ที่ทำให้เกิดรสชาติที่หลากหลาย...
                    </p>
                </section>

                <!-- 5. ผลกระทบต่อสุขภาพ -->
                <section id="health" class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold text-blue-600">ผลกระทบต่อสุขภาพ</h2>
                    <p class="mt-4">
                        การใช้บุหรี่ไฟฟ้ามีทั้งข้อดีและข้อเสีย ซึ่งควรพิจารณาด้านสุขภาพและความปลอดภัยก่อนใช้งาน...
                    </p>
                </section>

                <!-- 6. กฎหมายและข้อบังคับ -->
                <section id="legal" class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold text-blue-600">กฎหมายและข้อบังคับ</h2>
                    <p class="mt-4">
                        บุหรี่ไฟฟ้าอาจมีข้อบังคับที่แตกต่างกันในแต่ละประเทศ ควรทราบกฎหมายก่อนใช้งาน...
                    </p>
                </section>

                <!-- Additional Multimedia Content -->
                <section class="py-8">
                    <h2 class="text-2xl font-semibold text-blue-600 text-center">สื่อเสริม</h2>
                    <div class="flex flex-col lg:flex-row items-center justify-between gap-4 mt-6">
                        <!-- Image -->
                         
                        <img src="https://source.unsplash.com/random/400x300?vape" alt="Vape Device"
                            class="rounded-lg shadow-md w-full lg:w-1/3">
                        <!-- Video -->
                        <iframe class="w-full aspect-video"
                            src="https://www.youtube.com/embed/mVJjCOdWRpQ?si=I9-TAm_4ttxWm2gi"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                        </iframe>


                        <!-- Graphic -->
                        <img src="https://source.unsplash.com/random/400x300?health" alt="Health Comparison"
                            class="rounded-lg shadow-md w-full lg:w-1/3">
                    </div>
                </section>

                <!-- FAQ Section -->
                <section id="faq" class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold text-blue-600">คำถามที่พบบ่อย</h2>
                    <ul class="mt-4 space-y-4">
                        <li>บุหรี่ไฟฟ้าอันตรายหรือไม่?</li>
                        <li>การใช้บุหรี่ไฟฟ้าช่วยเลิกบุหรี่ได้หรือไม่?</li>
                        <li>น้ำยาในบุหรี่ไฟฟ้ามีอันตรายอย่างไร?</li>
                    </ul>
                </section>

                <!-- CTA Section -->
                <section class="text-center mt-12">
                    <button class="bg-blue-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700">
                        สมัครรับข่าวสาร
                    </button>
                    <button class="bg-gray-800 text-white py-2 px-6 rounded-md shadow-md hover:bg-gray-900 mt-4">
                        เข้าร่วมชุมชน
                    </button>
                </section>
            </main>

            <!-- Warning Section -->
            <footer class="bg-red-600 text-white py-8 mt-12 text-center">
                <p>
                    บุหรี่ไฟฟ้าไม่เหมาะสำหรับผู้ที่ยังไม่บรรลุนิติภาวะหรือมีปัญหาสุขภาพ
                    ควรศึกษาและรับทราบข้อมูลอย่างถี่ถ้วน
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Information',

}
</script>

<style></style>