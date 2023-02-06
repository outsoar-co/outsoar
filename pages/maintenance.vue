<template lang="html">
    <div class="flex h-screen">
        <div class="m-auto">
            <h1 class="text-2xl font-bold">Maintenance Mode</h1>
            <h2>@outsoarph | email: hello@outsoar.ph</h2>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'maintenance',
    mounted() {
        console.log(this.$route.path);
    },
};
</script>
