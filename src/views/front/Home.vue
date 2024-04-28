<template>
  <Nav />
  <div class="banner" style="background-image: url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=720);
    ">
    <div class=" ps-5 ms-3 "></div>
    <div class=" ps-5  no-gutters move-right d-none d-lg-block">
      <figure class="text-end">
        <blockquote class="blockquote">
          <label class="fw-bold text-white fs-1 ">
            Move
          </label>
          <label class="fw-bold text-color-1 fs-1 ">
            Up
          </label>
        </blockquote>
        <figcaption class="blockquote-footer">
          <cite title="Source Title" class="text-white">
            動起來，享受運動 !
          </cite>
        </figcaption>
      </figure>
      <router-link :to="`/products`" class="btn btn-secondary text-end">快速體驗課程</router-link>
    </div>
  </div>
  <div class="row text-white pt-5">
    <!-- <div class="alert alert-warning text-danger fs-3 fw-bold" role="alert">
      在 12/31 前，結帳輸入 moveup80 立即享有 8 折優惠!!!
    </div> -->
    <div class="col-12 title">
      <figure class="text-end">
        <blockquote class="blockquote">
          <label class=" fw-bold text-white fs-1 ">About Us</label>
        </blockquote>
        <figcaption class="blockquote-footer">
          <cite title="Source Title" class="text-color-1">關於我們</cite>
        </figcaption>
      </figure>

    </div>
    <div class="container text-white illustrate text-center px-5 mx-3">
      <div class="row">
        <div class="col-md-3 pb-3">
          <div class="p-3 border">
            <span class="material-symbols-outlined fs-1">
              groups
            </span>
            <p>專業的健身教練群</p>
          </div>
        </div>
        <div class="col-md-3 pb-3">
          <div class="p-3 border">
            <span class="material-symbols-outlined fs-1">
              fitness_center
            </span>
            <p>多元運動器材</p>
          </div>
        </div>
        <div class="col-md-3 pb-3">
          <div class="p-3 border">
            <span class="material-symbols-outlined fs-1">
              sports_gymnastics
            </span>
            <p>良好的運動環境</p>
          </div>
        </div>
        <div class="col-md-3 pb-3">
          <div class="p-3 border">
            <span class="material-symbols-outlined fs-1">
              pool
            </span>
            <p>豐富課程種類</p>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="mt-5 banner" style="justify-content: center ;background-image: url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80);
     ">
    <div class="row text-white pt-5">
      <div class="col-12 title">
        <figure class="text-end">
          <blockquote class="blockquote">
            <label class=" fw-bold text-white fs-1 ">Feedback</label>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite title="Source Title" class="text-color-2">學員心得</cite>
          </figcaption>
        </figure>
      </div>
      <div class="container text-white illustrate text-center px-5 mx-3">
        <div class="row">
          <div class="col-md-4 pb-3">
            <div class="p-3 ">
              <p>聽從Vicky教練指導開始學習健身，慢慢地搭配飲食和訓練，讓我的體重從7字頭到現在的5字頭，不只身體感到更健康不容易生病，生活品質上有了大幅的提升。</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3">
              <p>
                自從工作後體重就瘋狂飆漲，健檢一堆紅字，在家人的鼓勵下，來到動起來~運動，在Joe教練的鼓勵下開始努力減肥，肚子小了快一圈，爬樓梯也不再一步一喘。
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3">
              <p>本來是陪朋友一起來，但隨著運動肥肉越來越少，褲子越來越鬆，超有成就感的。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Nav from '../../components/NavComponent.vue';
import Footer from '../../components/FooterComponent.vue';

</script>