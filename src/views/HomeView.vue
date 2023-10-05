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
            Break complex queries into parts using commas or double colons "::". This it will help
            the neural network to better understand your request and give a more accurate answer.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Use the correct data format to train the neural network. For example, if you work with
            images, make sure they have the same size and resolution.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Use enough data to train a neural network. The more data you have if you use it, the
            more accurately the neural network will work.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Use the right neural network architecture for your task. Some tasks are better they are
            solved with the help of convolutional neural networks, and others with the help of
            recurrent neural networks.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Don't forget about regularization. Regularization helps to avoid retraining the neural
            network and improve its generalizing ability.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Use optimizers to train a neural network. Optimizers help neural networks faster
            converge to the optimal weight.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Check the operation of the neural network on test data. Test data helps to evaluate the
            accuracy of the neural network and identify possible problems.
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
  border: 1px solid white;
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
