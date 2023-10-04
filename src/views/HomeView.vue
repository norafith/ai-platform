<script>
import store from '../store/store'
import background from '../assets/home-background.jpg'
import logo from '../assets/team-logo.jpg'
export default {
  data() {
    return {
      store,
      background,
      logo
    }
  }
}
</script>

<template>
  <main :class="store.mobileView ? 'home mobile' : 'home'">
    <v-parallax class="parallax" :src="background">
      <h1>AI Platform</h1>
      <h2><strong>BRT</strong> project</h2>
      <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
          <p>
            Разбивайте сложные запросы на части с помощью запятых или двойных двоеточий "::". Это
            поможет нейросети лучше понимать ваш запрос и дать более точный ответ.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Используйте правильный формат данных для обучения нейросети. Например, если вы работаете
            с изображениями, убедитесь, что они имеют одинаковый размер и разрешение.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Используйте достаточное количество данных для обучения нейросети. Чем больше данных вы
            используете, тем точнее будет работать нейросеть.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Используйте правильную архитектуру нейросети для вашей задачи. Некоторые задачи лучше
            решаются с помощью сверточных нейронных сетей, а другие - с помощью рекуррентных
            нейронных сетей.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Не забывайте про регуляризацию. Регуляризация помогает избежать переобучения нейросети и
            улучшить ее обобщающую способность.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Используйте оптимизаторы для обучения нейросети. Оптимизаторы помогают нейросети быстрее
            сходиться к оптимальным весам.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Проверяйте работу нейросети на тестовых данных. Тестовые данные помогают оценить
            точность работы нейросети и выявить возможные проблемы.
          </p>
        </SplideSlide>
      </Splide>
      <div class="logo-container">
        <img :src="logo" class="team-logo" alt="Team logo" />
      </div>
    </v-parallax>
  </main>
</template>

<style scoped>
.home {
  height: 120%;
  position: relative;
}
.parallax {
  padding: 25px;
  height: 100%;
}

.parallax h1,
.parallax h2,
.parallax p {
  text-align: center;
}

.splide__slide {
  font-family: 'Roboto';
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.splide__slide > p {
  max-width: 800px;
  text-align: center;
}

.home.mobile .splide__slide {
  font-size: 1.25rem;
}

.team-logo {
  width: 100%;
}

.logo-container {
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
}
</style>
