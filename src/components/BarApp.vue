<template>
  <div class="aln_bar">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.aln_bar {
  position: relative;
  top: -15px;
  right: 3px;
}
ul {
  position: absolute;
  top: 0%;
  right: 50%;
  display: flex;
}
ul li {
  list-style: none;
  width: 2px;
  height: 6px;
  background: #262626;
  margin: 0 2px;
  animation: animate 0.7s infinite alternate;
}
@keyframes animate {
  0% {
    transform: scaleY(1);
  }
  25% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1);
  }
  75% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(3);
  }
}
ul li:nth-child(1) {
  animation-delay: 0.1s;
}

ul li:nth-child(2) {
  animation-delay: 0.2s;
}

ul li:nth-child(3) {
  animation-delay: 0.3s;
}

ul li:nth-child(4) {
  animation-delay: 0.4s;
}

ul li:nth-child(5) {
  animation-delay: 0.5s;
}

ul li:nth-child(6) {
  animation-delay: 0.6s;
}
</style>