<template>
<div class = "title">Trucks</div>

<div class="menu">
        <RouterLink :to="{ name: 'CarsPage' }" href="#" class="menu-vehicles">Cars</RouterLink>
        <RouterLink :to="{ name: 'TrucksPage' }" href="#" class="menu-trucks">Trucks</RouterLink>
        <RouterLink :to="{ name: 'SUVSPage' }" href="#" class="menu-vehicles">SUVS</RouterLink>
    </div>

    <div class="container">
        <div class="row">
            <div class="card">
                <img class="logo" src="/pictures/fordtruck.jpg" alt=""/>
                <div class="menu2">
                <h4 class="menu2-carname">Ford F-150</h4>
                <i class="menu2-cartype">Full-Size Pick-Up</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/fordranger.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Ford Ranger</h4>
                <i class="menu2-cartype">Midsize Pick-Up</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/ram.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Dodge Ram 1500</h4>
                <i class="menu2-cartype">Full-Size Pick-up</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/tacoma.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Toyota Tacoma</h4>
                <i class="menu2-cartype">Midsize Pick-Up</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/maverick.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Ford Ranger</h4>
                <i class="menu2-cartype">Compact Pick-Up</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/tundra.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Toyota Tundra</h4>
                <i class="menu2-cartype">Full-Size Pick-Up</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

        </div>
    </div>
</template>



<style scoped lang="postcss">
.title{
    @apply font-bold text-4xl flex mx-auto justify-center py-4;
}

.menu{
    @apply mx-auto flex text-2xl font-thin justify-center pb-4 gap-4;
    &-vehicles{
        @apply outline px-4 bg-red-900 rounded-xl  text-white outline-black
    }
    &-trucks{
        @apply outline bg-red-500 px-4 rounded-xl  text-white outline-black
    }
}

.logo{
    @apply h-auto w-96 py-5
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