<template>
    <div class="card">
        <div class = "card-image">
            Place Image Here
        </div>
        <div class="card-details">
            <p class="card-details-caryear">Car Year</p>
            <p class="card-details-carname">Car Name</p>
            <p class="card-details-carmodel">Car Model</p>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.card{
    @apply cursor-pointer overflow-hidden rounded-md bg-white p-8 shadow-md outline hover:scale-110
}
</style>