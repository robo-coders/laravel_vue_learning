<template>
    <app-layout>
        <div>
            <h1>this is a test</h1>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";

export default {
components: {
  AppLayout
},
  name: 'app',
    mounted() {
        console.log("Component mounted.");
    }

}
</script>
