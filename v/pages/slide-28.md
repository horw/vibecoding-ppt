---
layout: center
class: text-center
background: https://source.unsplash.com/1600x900/?cyberpunk,code,neon
transition: fade-out
---

<div class="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 z-0 overflow-hidden">
  <!-- Animated grid lines -->
  <div class="grid-lines"></div>
</div>
<div class="z-10 relative">
  <!-- Cool glitch title -->
  <div class="glitch-wrapper mb-4">
    <div class="glitch" data-text="VIBE CODING">VIBE CODING</div>
  </div>
  <div class="mt-6 mb-10">
    <h2 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400 tracking-wider animate-shimmer">
      THANK YOU!
    </h2>
    <p class="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
      Start your vibe coding journey today and transform the way you build software
    </p>
  </div>
  <!-- 3D Rotating Cards -->
  <div class="grid grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
    <div v-click class="card-3d">
      <div class="card-inner">
        <div class="card-front bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex flex-col items-center justify-center p-6 shadow-lg shadow-rose-500/30">
          <span class="text-5xl mb-3">🚀</span>
          <p class="text-white font-medium text-lg">Maximum Productivity</p>
        </div>
        <div class="card-back bg-gradient-to-br from-rose-600 to-pink-700 rounded-xl p-4 flex items-center justify-center">
          <p class="text-white text-sm">10x your output with AI assistance and intuitive workflows</p>
        </div>
      </div>
    </div>
    <div v-click class="card-3d">
      <div class="card-inner">
        <div class="card-front bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex flex-col items-center justify-center p-6 shadow-lg shadow-blue-500/30">
          <span class="text-5xl mb-3">💡</span>
          <p class="text-white font-medium text-lg">Infinite Creativity</p>
        </div>
        <div class="card-back bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-4 flex items-center justify-center">
          <p class="text-white text-sm">Unleash new ideas without being limited by technical constraints</p>
        </div>
      </div>
    </div>
    <div v-click class="card-3d">
      <div class="card-inner">
        <div class="card-front bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex flex-col items-center justify-center p-6 shadow-lg shadow-emerald-500/30">
          <span class="text-5xl mb-3">🔮</span>
          <p class="text-white font-medium text-lg">Future-Ready Skills</p>
        </div>
        <div class="card-back bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl p-4 flex items-center justify-center">
          <p class="text-white text-sm">Master the AI collaboration approach that will define the next era of software</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Neon Buttons -->
  <div class="mt-12 flex justify-center space-x-6">
    <div v-click class="neon-button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="flex items-center">
        <span class="mr-2">✉️</span> wechat: horw7001
      </div>
    </div>
    <div v-click class="neon-button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="flex items-center">
        <span class="mr-2">🌐</span> Igor Udot
      </div>
    </div>
  </div>
  <!-- Floating 3D Formula -->
  <div class="formula-3d">
    <p>Vibe = f(creativity × AI)</p>
  </div>
</div>
<!-- Floating particles -->
<div id="particles-js" class="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none"></div>
<!-- Animated blob background -->
<div class="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0 pointer-events-none">
  <div class="absolute top-10 left-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
  <div class="absolute bottom-10 right-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
  <div class="absolute bottom-40 left-40 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
  <div class="absolute top-40 right-40 w-60 h-60 bg-yellow-500/10 rounded-full blur-3xl animate-blob animation-delay-6000"></div>
</div>

<style>
/* Shimmer animation for Thank You text */
@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
.animate-shimmer {
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}

/* Glitch effect */
.glitch-wrapper {
  position: relative;
  width: 100%;
}
.glitch {
  font-size: 5rem;
  font-weight: 800;
  position: relative;
  color: white;
  letter-spacing: 3px;
  animation: glitch-skew 1s infinite linear alternate-reverse;
}
.glitch::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #f41cb6, #6254ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #6254ff, #f41cb6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  animation: glitch-anim2 1s infinite linear alternate-reverse;
}
@keyframes glitch-anim {
  0% {
    clip: rect(12px, 9999px, 52px, 0);
    transform: skew(0.4deg);
  }
  5% {
    clip: rect(42px, 9999px, 72px, 0);
    transform: skew(0.8deg);
  }
  10% {
    clip: rect(52px, 9999px, 12px, 0);
    transform: skew(0.04deg);
  }
  15% {
    clip: rect(20px, 9999px, 60px, 0);
    transform: skew(0.8deg);
  }
  20% {
    clip: rect(60px, 9999px, 20px, 0);
    transform: skew(0.4deg);
  }
  25% {
    clip: rect(30px, 9999px, 70px, 0);
    transform: skew(0.4deg);
  }
  30% {
    clip: rect(70px, 9999px, 30px, 0);
    transform: skew(0.8deg);
  }
  35% {
    clip: rect(40px, 9999px, 80px, 0);
    transform: skew(0.4deg);
  }
  40% {
    clip: rect(80px, 9999px, 40px, 0);
    transform: skew(0.8deg);
  }
  45% {
    clip: rect(50px, 9999px, 90px, 0);
    transform: skew(0.04deg);
  }
  50% {
    clip: rect(90px, 9999px, 50px, 0);
    transform: skew(0.8deg);
  }
  55% {
    clip: rect(60px, 9999px, 20px, 0);
    transform: skew(0.04deg);
  }
  60% {
    clip: rect(20px, 9999px, 60px, 0);
    transform: skew(0.8deg);
  }
  65% {
    clip: rect(10px, 9999px, 50px, 0);
    transform: skew(0.4deg);
  }
  70% {
    clip: rect(50px, 9999px, 10px, 0);
    transform: skew(0.04deg);
  }
  75% {
    clip: rect(90px, 9999px, 30px, 0);
    transform: skew(0.8deg);
  }
  80% {
    clip: rect(30px, 9999px, 90px, 0);
    transform: skew(0.4deg);
  }
  85% {
    clip: rect(70px, 9999px, 10px, 0);
    transform: skew(0.04deg);
  }
  90% {
    clip: rect(10px, 9999px, 70px, 0);
    transform: skew(0.4deg);
  }
  95% {
    clip: rect(50px, 9999px, 30px, 0);
    transform: skew(0.8deg);
  }
  100% {
    clip: rect(30px, 9999px, 50px, 0);
    transform: skew(0.04deg);
  }
}
@keyframes glitch-anim2 {
  0% {
    clip: rect(12px, 9999px, 52px, 0);
  }
  5% {
    clip: rect(42px, 9999px, 72px, 0);
  }
  10% {
    clip: rect(52px, 9999px, 12px, 0);
  }
  15% {
    clip: rect(20px, 9999px, 60px, 0);
  }
  20% {
    clip: rect(60px, 9999px, 20px, 0);
  }
  25% {
    clip: rect(30px, 9999px, 70px, 0);
  }
  30% {
    clip: rect(70px, 9999px, 30px, 0);
  }
  35% {
    clip: rect(40px, 9999px, 80px, 0);
  }
  40% {
    clip: rect(80px, 9999px, 40px, 0);
  }
  45% {
    clip: rect(50px, 9999px, 90px, 0);
  }
  50% {
    clip: rect(90px, 9999px, 50px, 0);
  }
  55% {
    clip: rect(60px, 9999px, 20px, 0);
  }
  60% {
    clip: rect(20px, 9999px, 60px, 0);
  }
  65% {
    clip: rect(10px, 9999px, 50px, 0);
  }
  70% {
    clip: rect(50px, 9999px, 10px, 0);
  }
  75% {
    clip: rect(90px, 9999px, 30px, 0);
  }
  80% {
    clip: rect(30px, 9999px, 90px, 0);
  }
  85% {
    clip: rect(70px, 9999px, 10px, 0);
  }
  90% {
    clip: rect(10px, 9999px, 70px, 0);
  }
  95% {
    clip: rect(50px, 9999px, 30px, 0);
  }
  100% {
    clip: rect(30px, 9999px, 50px, 0);
  }
}
@keyframes glitch-skew {
  0% {
    transform: skew(-0.5deg);
  }
  10% {
    transform: skew(0.5deg);
  }
  20% {
    transform: skew(0.2deg);
  }
  30% {
    transform: skew(0.6deg);
  }
  40% {
    transform: skew(-0.4deg);
  }
  50% {
    transform: skew(-0.2deg);
  }
  60% {
    transform: skew(0.3deg);
  }
  70% {
    transform: skew(0.7deg);
  }
  80% {
    transform: skew(-0.1deg);
  }
  90% {
    transform: skew(-0.3deg);
  }
  100% {
    transform: skew(0.4deg);
  }
}

/* 3D Card Flip Effect */
.card-3d {
  perspective: 1000px;
  height: 200px;
  margin: 5px;
  transform-style: preserve-3d;
}
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.card-3d:hover .card-inner {
  transform: rotateY(180deg);
}
.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}

/* Grid Lines Effect */
.grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: 50px 50px;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  transform: perspective(500px) rotateX(60deg);
  transform-origin: center top;
  animation: grid-move 20s linear infinite;
}
@keyframes grid-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 1000px;
  }
}

/* Neon Button Effect */
.neon-button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  cursor: pointer;
}
.neon-button:hover {
  background: #03e9f4;
  color: #050801;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 200px #03e9f4;
}
.neon-button span {
  position: absolute;
  display: block;
}
.neon-button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: neon1 1s linear infinite;
}
@keyframes neon1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}
.neon-button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: neon2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes neon2 {
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
}
.neon-button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: neon3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes neon3 {
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
}
.neon-button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: neon4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes neon4 {
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
}

/* Floating 3D Formula */
.formula-3d {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: monospace;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 
    0 0 5px rgba(255, 255, 255, 0.3),
    0 0 10px rgba(255, 255, 255, 0.2);
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Blob Animation */
.animate-blob {
  animation: blob 15s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
.animation-delay-6000 {
  animation-delay: 6s;
}
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.2);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.8);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
</style>

<script setup>
// This will be executed when the slide is loaded
import { onMounted } from 'vue'

onMounted(() => {
  // Add particles.js if available
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: true, out_mode: 'out' }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' } }
      }
    })
  }
})
</script>