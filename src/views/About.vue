<template>
  <div class="about">
    <h1 class="scss-class">This is an about page</h1>
    <h1 class="less-class">This is an about page</h1>
  </div>
</template>
<style lang="scss">
$font-color: pink;
@mixin fontSize {
  font-size: 12px;
}
.about {
  .scss-class {
    color: $font-color;
    @include fontSize;
  }
}
</style>
<style lang="less">
@font-color: skyblue;
.about {
  .less-class {
    color: @font-color;
  }
}
</style>