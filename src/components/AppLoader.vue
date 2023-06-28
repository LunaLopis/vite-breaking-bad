
<script>
export default {

}
</script>


<template lang="">
    <div class="loader-wrapper">
        <div class="loader">

        </div>
    </div>
</template>


<style lang="scss" scoped>
.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(243, 248, 238);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>