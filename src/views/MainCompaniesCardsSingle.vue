<template>
    <div class="card">
        <div class = "card-image">
            Place Image Here
        </div>
        <div class="card-details">
            
            <p class="card-details-carname">Company Name</p>
            <p class="card-details-carmodel">Company Location</p>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.card{
    @apply cursor-pointer overflow-hidden rounded-md bg-white p-8 shadow-md outline hover:scale-110
}
</style>