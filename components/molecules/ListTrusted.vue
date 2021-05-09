<template>
    <div class="grid grid-cols-3 gap-4 p-4">
        <div v-for="(icon, index) in icons" :key="index">
            <img :src="icon" class="h-24 lg:h-32 w-auto" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            icons: [
                'https://i.pinimg.com/280x280_RS/d2/ce/05/d2ce052a66c9bcaed8ec2c302a309737.jpg',
                'https://avatars.githubusercontent.com/u/10903974?s=200&v=4',
                'https://assets1.phonebooky.com/listings/logos/000/029/634/original/Toni_and_Guy_%28logo%29.jpg',
                'https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/82993718_109478154144107_8387073756335526663_n.png?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGKEJfpCFffvi65fGMwR7h1YdknPWcoONNh2Sc9Zyg402CoaAO_CUNmEmaSRm8GQmP2ARvsFljmeH6OZ5tCeXST&_nc_ohc=HndV-WbZOzUAX-Adv7s&_nc_ht=scontent.fmnl17-1.fna&oh=c6f2260fc1d48e10c381b20be7df28ae&oe=60A163C7',
                'https://media-exp1.licdn.com/dms/image/C4D0BAQHWxlis-cuobQ/company-logo_200_200/0/1519912655201?e=2159024400&v=beta&t=LtME-VaBvRMGXYp1q-qaZT-Om_F6QOinKi1VtqAQ2uM',
            ],
        };
    },
};
</script>
