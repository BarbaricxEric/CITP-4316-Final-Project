<template>
<div class = "title">Cars</div>

<div class="menu">
        <RouterLink :to="{ name: 'CarsPage' }" href="#" class="menu-cars">Cars</RouterLink>
        <RouterLink :to="{ name: 'TrucksPage' }" href="#" class="menu-vehicles">Trucks</RouterLink>
        <RouterLink :to="{ name: 'SUVSPage' }" href="#" class="menu-vehicles">SUVS</RouterLink>
    </div>

    <div class="container">
        <div class="row">
            <div class="card">
                <img class="logo" src="/pictures/fusion.png" alt=""/>
                <div class="menu2">
                <h4 class="menu2-carname">Ford Fusion</h4>
                <i class="menu2-cartype">Midsize Sedan</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/jetta.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Volkswagen Jetta</h4>
                <i class="menu2-cartype">Midsize Sedan</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/corolla.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Toyota Corolla</h4>
                <i class="menu2-cartype">Compact</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/challenger.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Dodge Challenger</h4>
                <i class="menu2-cartype">Sporty Coupe</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/mirage.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Mitsubishi Mirage</h4>
                <i class="menu2-cartype">Economy Hatchback</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/jaguar.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Jaguar XF </h4>
                <i class="menu2-cartype">Luxury Sedan</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/mustang.jpg" alt="logo.svg"/>
                <div class="menu2">
                <h4 class="menu2-carname">Ford Mustang</h4>
                <i class="menu2-cartype">Convertible</i>
                </div>
                <button class = "button" type="submit">Book Now</button>
            </div>

            <div class="card">
                <img class="logo" src="/pictures/prius.jpg" alt="logo.svg"/>
               <div class="menu2">
                <h4 class="menu2-carname">Toyota Prius</h4>
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
        @apply outline px-4 bg-red-900 rounded-xl  text-white outline-black
    }
    &-cars{
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