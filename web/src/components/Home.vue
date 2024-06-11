<template>
    <div class="grid-container">
        <button class="upload-btn" @click="click">Upload music</button>
    </div>
</template>

<script>

</script>

<style>
.upload-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px;
    padding: 10px;
    border-radius: 10px;
    background-color: #508991;
    color: white;
    font-size: 2em;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    height: 10dvh;
    width: 25dvw;
    font-family: "K2D";
    transition: 0.5s;
}

.upload-btn:hover {
    background-color: #3d6f7f;
    color: white;
    text-decoration: none;
    transition: 0.5s;
}

.grid-container {
    display: grid;
    grid-gap: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
}
</style>
