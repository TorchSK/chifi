<template>

<div class="flex flex-col items-center justify-center">
    <h1 class="text-3xl lg:text-6xl my-4 lg:mt-16 lg:mb-6">
        <span class="font-playfair">My </span>
        <span class="font-bold">reviews</span> 
    </h1>
    
    <Wave />

    <div class="grid grid-cols-4 max-w-app">
        <ReviewBox v-for="review in reviews" :review="review" />
    </div>
</div>

</template>

<script setup>


definePageMeta({
    middleware: 'auth'
});


const user = useSupabaseUser()
const client = useSupabaseClient()

const { data:reviews } = await useAsyncData('reviews', async () => {
    const { data } = await client.from('reviews').select(`id, model, brand, slug, cover, created_at, profiles (username)`).eq('profile_id', user.value.id).order('created_at')

    return data
})


</script>