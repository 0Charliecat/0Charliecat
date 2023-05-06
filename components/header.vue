<template>
    <header class="head">
        <span class="text-lg font-bold">
            <img src="https://www.gravatar.com/avatar/659b2058c4d9f51a8505db1e6f734a51?s=100"
                style="border-radius: 100%; height: 1.2em; margin-bottom: -5px;">
            @0Charliecat
            <slot></slot>
        </span>
    </header>
</template>

<style>
    header.head {
        top: 0;
        height: 2.5em;
        padding-top: 1px;
        padding-left: 1.5em;
        padding-bottom: 2em;
        /*border-bottom: 2px solid #E5E5E7;*/
        margin-bottom: 3px;
        position: sticky !important;
        z-index: 100;
        background-color: #282C3433;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        /*border-radius: 0 0 20px 20px;*/
    }
</style>