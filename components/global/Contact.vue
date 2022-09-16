<template>
    <div>
        <div
            class="flex flex-col items-center justify-center px-4 py-10 mx-auto shadow-lg bg-grayish-red-200 dark:bg-dark-odd"
        >
            <form action="" class="w-full">
                <div class="flex flex-row space-x-4">
                    <!-- name -->
                    <div class="flex flex-col w-full py-4">
                        <label for="">Name</label>
                        <input
                            id="name"
                            v-model="form.name"
                            class="w-full px-4 py-1 rounded-md ring-2 ring-gray-400 dark:ring-white dark:text-gray-700 focus:ring-gray-900"
                            type="text"
                            name="name"
                            placeholder="Enter name"
                        />
                    </div>
                    <!-- company -->
                    <div class="flex flex-col w-full py-1 py-4">
                        <label for="">Company</label>
                        <input
                            id="company"
                            v-model="form.company"
                            class="w-full px-4 py-1 rounded-md ring-2 ring-gray-400 dark:ring-white dark:text-gray-700 focus:ring-gray-900"
                            type="text"
                            name="company"
                            placeholder="Enter company"
                        />
                    </div>
                </div>
                <div class="flex flex-row space-x-4">
                    <!-- mobile number -->
                    <div class="flex flex-col w-full py-1 py-4">
                        <label for="" class="w-full">Mobile Number</label>
                        <input
                            id="mobileNumber"
                            v-model="form.mobileNumber"
                            class="w-full px-4 py-1 rounded-md ring-2 ring-gray-400 dark:ring-white dark:text-gray-700 focus:ring-gray-900"
                            type="number"
                            name="mobileNumber"
                            placeholder="Enter mobile number"
                        />
                    </div>
                    <!-- email -->
                    <div class="flex flex-col w-full py-1 py-4">
                        <label for="" class="w-full">Email</label>
                        <input
                            id="email"
                            v-model="form.email"
                            class="w-full px-4 py-1 rounded-md ring-2 ring-gray-400 dark:ring-white dark:text-gray-700 focus:ring-gray-900"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                        />
                    </div>
                </div>
                <div class="flex flex-col w-full">
                    <label for="">Message</label>
                    <textarea
                        id="message"
                        v-model="form.message"
                        class="w-full px-4 py-1 rounded-md ring-2 ring-gray-400 dark:ring-white dark:text-gray-700 focus:ring-gray-900"
                        type="text"
                        name="message"
                        placeholder="Enter Message"
                    >
                    </textarea>
                </div>
                <div class="flex justify-end mt-4">
                    <Btn
                        class="transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                        type="button"
                    >
                        Submit
                    </Btn>
                </div>
            </form>
            <p class="text-sm italic">
                *I offer my permission for Outsoar PH to process my personal
                data in accordance with the Outsoar PH Privacy Policy in order
                to handle and reply to my request. I am aware that I have the
                option to revoke my permission at any moment.
            </p>
        </div>
        <div class="flex flex-col">
            <h3>What will happen next?</h3>
            <div class="w-full px-4">
                <div
                    class="relative border-l-4 border-dark-odd dark:border-light-outsoar"
                >
                    <div class="mb-10 ml-4">
                        <div
                            class="absolute w-4 h-4 bg-light-outsoar rounded-full -left-2.5 border border-gray-900 dark:border-white dark:bg-dark-odd"
                        ></div>
                        <p class="mb-1 text-sm font-normal leading-none">
                            We have received and processed your request and will
                            contact you shortly to discuss your project
                            requirements and sign an NDA to protect information
                            confidentiality.
                        </p>
                    </div>
                    <div class="mb-10 ml-4">
                        <div
                            class="absolute w-4 h-4 bg-light-outsoar rounded-full -left-2.5 border border-gray-900 dark:border-white dark:bg-dark-odd"
                        ></div>
                        <p class="mb-1 text-sm font-normal leading-none">
                            Following an examination of the requirements, our
                            analysts and developers provide a project proposal
                            that includes the scope of work, team size, time,
                            and cost estimates.
                        </p>
                    </div>
                    <div class="mb-10 ml-4">
                        <div
                            class="absolute w-4 h-4 bg-light-outsoar rounded-full -left-2.5 border border-gray-900 dark:border-white dark:bg-dark-odd"
                        ></div>
                        <p class="mb-1 text-sm font-normal leading-none">
                            We set up a meeting with you to go through the offer
                            and reach an agreement.
                        </p>
                    </div>
                    <div class="mb-10 ml-4">
                        <div
                            class="absolute w-4 h-4 bg-light-outsoar rounded-full -left-2.5 border border-gray-900 dark:border-white dark:bg-dark-odd"
                        ></div>
                        <p class="mb-1 text-sm font-normal leading-none">
                            We sign a contract and get started on your job as
                            soon as feasible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Btn from '@/components/atoms/Btn.vue';
export default {
    name: 'Contact',
    components: { Btn },
    data() {
        return {
            form: {
                name: '',
                company: '',
                mobileNumber: '',
                email: '',
                message: '',
            },
        };
    },
};
</script>
