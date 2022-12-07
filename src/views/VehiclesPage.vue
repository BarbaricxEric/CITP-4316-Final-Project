<script setup>
</script>

<template>
    <div class = "title">Vehicles</div>

    <div class="menu">
        <RouterLink :to="{ name: 'CarsPage' }" href="#" class="menu-vehicles">Cars</RouterLink>
        <RouterLink :to="{ name: 'TrucksPage' }" href="#" class="menu-vehicles">Trucks</RouterLink>
        <RouterLink :to="{ name: 'SUVSPage' }" href="#" class="menu-vehicles">SUVS</RouterLink>
    </div>

    <div class="container">
        <div class="row">
            <div class="card">
                <img class="logo" src="/pictures/jaguar.jpg" alt="logo.svg"/>
                <h4>car</h4>
                <p>info about car</p>
                <a href="#" class="button">Book Now</a>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/jaguar.jpg" alt="logo.svg"/>
                <h4>car2</h4>
                <p>info about car</p>
                <a href="#" class="button">Book Now</a>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/jaguar.jpg" alt="logo.svg"/>
                <h4>car3</h4>
                <p>info about car</p>
                <a href="#" class="button">Book Now</a>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/jaguar.jpg" alt="logo.svg"/>
                <h4>car3</h4>
                <p>info about car</p>
                <a href="#" class="button">Book Now</a>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped> 
.title{
    @apply font-bold text-4xl flex mx-auto justify-center py-4;
}

.logo{
    @apply h-40 w-44
}
.container {
    @apply flex justify-center mx-auto;
}

.card{
    @apply outline rounded-md shadow-md bg-white flex-wrap;
}

.row{
    @apply flex justify-items-center justify-between gap-4 flex-wrap;
}

.menu{
    @apply mx-auto flex text-2xl font-thin justify-center pb-4 gap-4;
    &-vehicles{
        @apply outline px-4
    }
}
</style>
