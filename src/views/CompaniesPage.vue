<script setup>
</script>

<template>
    <div class="title">Companies</div>
    <div class="wrapper">
    </div>

     <div class="container">
        <div class="row">
            <div class="card">
                <img class="logo" src="/pictures/enterprise.jpg" alt=""/>
                <div class="menu2">
                <h4 class="menu2-carname">4717 N 10th St</h4>
                <i class="menu2-cartype">Mcallen, Texas</i>
                </div>
                <button class = "button" type="submit">Get Directions</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/budget.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">1701 W Expy 83</h4>
                <i class="menu2-cartype">Mcallen, Texas</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/hertz.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">11400 N 23rd St</h4>
                <i class="menu2-cartype">Mcallen, Texas</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/avis.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">203 S Shary Rd</h4>
                <i class="menu2-cartype">Mission, TX</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/aleman.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">1316 Trenton Rd #5</h4>
                <i class="menu2-cartype">Mcallen, TX</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/thrifty.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">2500 S Bicentennial</h4>
                <i class="menu2-cartype">Mcallen, TX</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped> 
.title{
    @apply font-bold text-4xl flex mx-auto justify-center py-4;
}

.wrapper{
    @apply flex flex-col container mx-auto py-2;
}

.logo{
    @apply h-auto w-80 py-5
}
.container {
    @apply flex justify-center mx-auto max-w-7xl px-4;
}

.card{
    @apply outline rounded-md shadow-md bg-white flex-wrap px-16 py-8;
}

.row{
    @apply flex justify-items-center justify-between gap-4 flex-wrap;
}



.button{
    @apply bg-red-900 outline px-4 py-1 mx-auto flex text-3xl rounded-md shadow-md
    hover:bg-red-400 hover:text-black text-white outline-black;
}

.menu2{
    @apply text-2xl py-5 text-center;

    &-carname{
    @apply text-3xl text-center font-bold;
}

    &-cartype{
    @apply text-center text-lg;
}
}
</style>