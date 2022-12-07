<template>
<div class = "title">SUVS</div>

<div class="menu">
        <RouterLink :to="{ name: 'CarsPage' }" href="#" class="menu-vehicles">Cars</RouterLink>
        <RouterLink :to="{ name: 'TrucksPage' }" href="#" class="menu-vehicles">Trucks</RouterLink>
        <RouterLink :to="{ name: 'SUVSPage' }" href="#" class="menu-suvs">SUVS</RouterLink>
    </div>

    <div class="container">
        <div class="row">
            <div class="card">
                <img class="logo" src="/pictures/bronco.jpg" alt=""/>
                <div class="menu2">
                <h4 class="menu2-carname">Ford Bronco</h4>
                <i class="menu2-cartype">Compact SUV</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/blazer.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Chevy Blazer</h4>
                <i class="menu2-cartype">Compact SUV</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/pilot.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Honda Pilot</h4>
                <i class="menu2-cartype">Full-Size SUV</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/telluride.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Kia Telluride</h4>
                <i class="menu2-cartype">Full-Size SUV</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/tahoe.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Chevy Tahoe</h4>
                <i class="menu2-cartype">Family Size SUV</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/expedition.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Ford Expedition</h4>
                <i class="menu2-cartype">Family Size SUV</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/tucson.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Hyundai Tucson</h4>
                <i class="menu2-cartype">Economy SUV</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/hummer.jpg" alt="logo.svg"/>
               <div class="menu2">
                <h4 class="menu2-carname">Hummer EV</h4>
                <i class="menu2-cartype">Hybrid</i>
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
        @apply outline px-4 bg-red-900 rounded-xl text-white outline-black
    }
    &-suvs{
        @apply outline bg-red-500 px-4 rounded-xl text-white outline-black
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