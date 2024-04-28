<template>
    <footer class="py-4 bg-primary-lighter pb-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class=" ps-5  no-gutters">
                        <figure>
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
                    </div>
                </div>
                <div class="col-md-4 d-flex flex-column justify-content-between text-white " style="text-align:left">

                    <ul class="list-unstyled">
                        <li><label class=" fw-bold text-white fs-3 ">聯絡我們</label>
                        </li>
                        <li><label class="px-2">地址</label><label class="text-white-50 ">/ 404台中市西屯區台灣大道三段99號</label>
                        </li>
                        <li><label class="px-2">信箱</label><label class="text-white-50 ">/ move_up@gmail.com</label></li>
                        <li><label class="px-2">手機</label><label class="text-white-50 ">/ 04-12345678</label></li>
                    </ul>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <hr class="text-white-50">
                <div class="col-md-11 text-md-right mt-2 text-white-50 text-center">
                    <span>© Copyright 2023 | 動起來~運動有限公司</span>
                    <i class="bi bi-facebook mx-1"></i>
                    <i class="bi bi-instagram mx-1"></i>

                </div>
                <div class="col-md-1">
                    <router-link :to="`/login`"
                        class="btn btn-sm btn-outline-light ml-2 ">管理者</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>
