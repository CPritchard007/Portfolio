<script setup>
import TagChip from '../components/TagChip.vue'
import { useDisplay } from 'vuetify'
const yearsOfExperience = new Date().getFullYear() - 2021 
const { mdAndUp } = useDisplay()

</script>

<template>
  <v-container class="page">
    <v-row>
      <v-col cols="12" md="6">
        <div class="kicker">Portfolio</div>
        <h1 class="hero-title">Hello, I'm Curtis</h1>
        <p class="lead">Building applications for your business can be a daunting task; I am here to make it easier. As
          an experienced software developer of {{ yearsOfExperience }} years, I have gained experience with company
          facing software development. Wether it be Flutter for your mobile apps, or Vue for your web applications, I
          have you covered.</p>

        <div class="mt-6 d-flex ga-3 flex-wrap">
          <v-btn color="primary" size="large" prepend-icon="mdi-rocket-launch" to="/projects">View projects</v-btn>
          <v-btn variant="tonal" size="large" prepend-icon="mdi-email-outline" to="/contact">Contact</v-btn>
        </div>

        <div class="mt-6 chip-row">
          <TagChip text="Flutter" />
          <TagChip text="Vue.js" />
          <TagChip text="AngularJS" />
          <TagChip text="PHP" />
        </div>
      </v-col>
      <v-col v-if="mdAndUp" cols="12" md="6">
        <v-card class="pa-3" outlined>
          <v-card-text class="overflow-x-auto">
            <v-code type="language-typescript">
              <pre class="text-small">
<span class="hl-keyword">const</span> <span class="hl-variable">coffee</span><span class="hl-operator">:</span> <span class="hl-type">number</span> <span class="hl-operator">=</span> <span class="hl-number">Infinity</span><span class="hl-punctuation">;</span>
<span class="hl-keyword">let</span> <span class="hl-variable">bug</span><span class="hl-operator">:</span> <span class="hl-type">unknown</span> <span class="hl-operator">=</span> <span class="hl-string">"works on my machine"</span><span class="hl-punctuation">;</span>
<span class="hl-keyword">while</span> <span class="hl-punctuation">(</span><span class="hl-variable">coffee</span> <span class="hl-operator">&amp;&amp;</span> <span class="hl-variable">bug</span><span class="hl-punctuation">)</span> <span class="hl-punctuation">{</span>
  <span class="hl-variable">console</span>.<span class="hl-function">log</span><span class="hl-punctuation">(</span><span class="hl-string">"npm install"</span><span class="hl-punctuation">)</span><span class="hl-punctuation">;</span> <span class="hl-comment">// fixes everything</span>
  <span class="hl-keyword">try</span> <span class="hl-punctuation">{</span> <span class="hl-function">deploy</span><span class="hl-punctuation">(</span><span class="hl-punctuation">)</span><span class="hl-punctuation">;</span> <span class="hl-punctuation">}</span>
  <span class="hl-keyword">catch</span> <span class="hl-punctuation">{</span> <span class="hl-variable">bug</span> <span class="hl-operator">=</span> <span class="hl-string">"¯\\_(ツ)_/¯"</span><span class="hl-punctuation">;</span> <span class="hl-punctuation">}</span>
  <span class="hl-keyword">finally</span> <span class="hl-punctuation">{</span> <span class="hl-variable">console</span>.<span class="hl-function">log</span><span class="hl-punctuation">(</span><span class="hl-string">"Have you tried turning it off and on again?"</span><span class="hl-punctuation">)</span><span class="hl-punctuation">;</span> <span class="hl-punctuation">}</span>
<span class="hl-punctuation">}</span>
<span class="hl-keyword">function</span> <span class="hl-function">deploy</span><span class="hl-punctuation">(</span><span class="hl-punctuation">)</span><span class="hl-operator">:</span> <span class="hl-type">never</span> <span class="hl-punctuation">{</span> <span class="hl-keyword">throw</span> <span class="hl-keyword">new</span> <span class="hl-type">Error</span><span class="hl-punctuation">(</span><span class="hl-string">"CI failed, not reproducible locally."</span><span class="hl-punctuation">)</span><span class="hl-punctuation">;</span> <span class="hl-punctuation">}</span>
              </pre>
            </v-code>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <h2 class="text-h4 mb-4">More About Me</h2>    
      
      <v-row class="mb-4">
        <v-col cols="2" md="4" class="align-self-start">
          <v-img src="src/assets/photos/pinball.JPG" width="100%" height="100%" rounded="sm" />
        </v-col>
        <v-col cols="10" md="8">
          <h3 class="mb-2">
            Pinball is my favorite way to unplug
          </h3>
          <p class="lead">
            When I'm away from the keyboard, I'm usually hunting down a pinball machine.
            I like the mix of quick reactions, strategy, and a little bit of chaos, and I'm always up for chasing one more multiball.
            It is loud, fast, and a little ridiculous in the best way, which is probably why I enjoy it so much.
          </p>
        </v-col>
      </v-row>

      <v-row class="mb-4">
        <v-col cols="12">
          <h3 class="mb-2">
            Programming has been a constant for me, and I love helping other people get into it too
          </h3>
          <p class="lead" style="max-width: unset;">
            I have been curious about computers for as long as I can remember, long before I knew how to write code.
            I used to spend hours pulling apart video game files just to see how they worked, and that curiosity eventually led me to my first language: Lua.
            Since then, I have enjoyed sharing what I learn and helping other people feel more at home with programming.
            That is a big part of why I joined <RouterLink to="/work-experience" class="text-primary">Code Ninjas</RouterLink> after college. It gave me the chance to teach, mentor, and help students grow, and I still look for opportunities to do more of that whenever I can.
          </p>
        </v-col>
      </v-row>

      <v-row class="mb-4">
        <v-col cols="12">
          <h3 class="mb-2">
            Future collector of retro consoles
          </h3>
          <p class="lead" style="max-width: unset;">
            I hope to, in the future, collect all console generations. How these old consoles work have always been fascinating to me, and I hope to one day have a collection of my own.
          </p>
        </v-col>
      </v-row>

  </v-container>
</template>

<style lang="scss" scoped>
.hero-title {
  margin: 10px 0 12px;
  font-size: clamp(2.1rem, 4.5vw, 3.4rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.hero-card,
.info-card {
  background: rgba(var(--v-theme-surface), 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hl-keyword {
  color: #82AAFF;
}

.hl-variable {
  color: #C3E88D;
}

.hl-operator {
  color: #F78C6C;
}

.hl-type {
  color: #F78C6C;
}

.hl-number {
  color: #F78C6C;
}

.hl-string {
  color: #F78C6C;
}

.hl-punctuation {
  color: #F78C6C;
}

.hl-comment {
  color: #616161;
}

</style>
