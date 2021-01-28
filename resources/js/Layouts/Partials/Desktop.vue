<template>
    <nav class="side-nav">
        <a href="" class="intro-x flex items-center pl-5 pt-4">
            <img alt="Midone Tailwind HTML Admin Template" class="w-6" src="/theme/images/logo.svg">
            <span class="hidden xl:block text-white text-lg ml-3"> Mid<span class="font-medium">one</span> </span>
        </a>
        <div class="side-nav__devider my-6"></div>
        <ul>
            <li>
                <inertia-link href="/dashboard" class="side-menu side-menu--active">
                    <div class="side-menu__icon"> <i data-feather="home"></i> </div>
                    <div class="side-menu__title"> Dashboard </div>
                </inertia-link>
            </li>
            <li>
                <inertia-link href="/profile" class="side-menu">
                    <div class="side-menu__icon"> <i data-feather="user"></i> </div>
                    <div class="side-menu__title"> Profile </div>
                </inertia-link>
            </li>
        </ul>
    </nav>
</template>